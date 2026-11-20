"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { donationPurposes } from "@/lib/dokram";
import { emailLooksValid, imageType, MAX_PROOF_BYTES, mobileLooksValid, textValues, type FormState } from "@/lib/forms";
import { site } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";
import { CHECKOUT_COOKIE, CHECKOUT_COOKIE_SECONDS, createCheckoutSession, sealCheckout, wonsConfig } from "@/lib/wons";

const FIELDS = ["donor_name", "mobile", "email", "amount", "purpose", "member_ref", "reference", "message", "anonymous", "method"] as const;

const UNAVAILABLE = "Your donation could not be submitted just now. Please try again in a little while.";

export async function submitDonation(_previous: FormState, formData: FormData): Promise<FormState> {
  const values = textValues(formData, FIELDS);
  const fail = (errors: Record<string, string>, message?: string): FormState => ({ status: "error", errors, message, values });

  if (typeof formData.get("website") === "string" && formData.get("website") !== "") return fail({}, UNAVAILABLE);

  const wons = wonsConfig();
  const online = values.method === "online" && wons !== null;
  const proof = formData.get("proof");
  const file = proof instanceof File && proof.size > 0 ? proof : null;

  const errors: Record<string, string> = {};
  if (values.donor_name.length < 2) errors.donor_name = "Enter your name.";
  if (values.donor_name.length > 120) errors.donor_name = "Use 120 characters or fewer.";
  if (values.mobile && !mobileLooksValid(values.mobile)) errors.mobile = "Enter a valid mobile number, or leave it empty.";
  if (values.email && !emailLooksValid(values.email)) errors.email = "Enter a valid email address, or leave it empty.";
  const plain = values.amount.replace(/[,\s]/g, "");
  const amount = /^\d{1,9}(\.0{1,2})?$/.test(plain) ? Number.parseInt(plain, 10) : NaN;
  if (!values.amount) errors.amount = "Enter the amount in ngultrum.";
  else if (!Number.isInteger(amount) || amount <= 0) errors.amount = "Enter a whole amount in ngultrum, for example 1500.";
  else if (amount > 100000000) errors.amount = "That amount is too large for this form. Please contact the committee.";
  if (!donationPurposes.some((purpose) => purpose.value === values.purpose)) errors.purpose = "Choose what the donation is for.";

  let image: { ext: "jpg" | "png" | "webp"; mime: string } | null = null;
  let bytes: Uint8Array | null = null;
  if (!online) {
    if (!file) errors.proof = "Attach a screenshot of the payment.";
    else if (file.size > MAX_PROOF_BYTES) errors.proof = "The screenshot is larger than 6 MB. Please attach a smaller image.";
    else {
      bytes = new Uint8Array(await file.arrayBuffer());
      image = imageType(bytes);
      if (!image) errors.proof = "Attach the screenshot as a JPEG, PNG or WebP image.";
    }
  }
  if (Object.keys(errors).length) return fail(errors);

  const supabase = getSupabase();
  if (!supabase) return fail({}, UNAVAILABLE);

  const id = randomUUID().toLowerCase();
  let checkoutUrl: string | null = null;
  let done: FormState | null = null;

  try {
    if (!online && image && bytes) {
      // The screenshot goes into a private bucket: the public may add a file, only the committee can read one.
      const upload = await supabase.storage.from("donation-proofs").upload(`${id}.${image.ext}`, bytes, { contentType: image.mime, upsert: false });
      if (upload.error) return fail({ proof: "The screenshot could not be uploaded. Please try again." });
    }

    const { data, error } = await supabase.rpc("submit_donation", {
      p_id: id,
      p_donor_name: values.donor_name,
      p_amount: amount,
      p_method: online ? "wons" : "mbob",
      p_proof_ext: online ? null : image?.ext ?? null,
      p_mobile: values.mobile || null,
      p_email: values.email || null,
      p_purpose: values.purpose,
      p_member_ref: values.purpose === "membership" ? values.member_ref || null : null,
      p_message: values.message || null,
      p_anonymous: values.anonymous === "on",
      p_reference: online ? null : values.reference || null,
    });
    if (error || !data) {
      const token = error?.message ?? "";
      if (token.includes("invalid_mobile")) return fail({ mobile: "Enter a valid mobile number, or leave it empty." });
      if (token.includes("invalid_name")) return fail({ donor_name: "Enter your name." });
      if (token.includes("invalid_amount")) return fail({ amount: "Enter a whole amount in ngultrum, for example 1500." });
      if (token.includes("proof_required")) return fail({ proof: "Attach a screenshot of the payment." });
      if (token.includes("rate_limited")) return fail({}, "Many donations are being submitted at the moment. Please try again in an hour.");
      return fail({}, UNAVAILABLE);
    }
    const result = data as { id: string; donation_code: string; created_at: string };

    if (!online || !wons) {
      done = { status: "done", code: result.donation_code, name: values.donor_name, date: result.created_at, amount };
    } else {
      const purpose = donationPurposes.find((item) => item.value === values.purpose)?.label ?? "Donation";
      const session = await createCheckoutSession({
        amount,
        reference: result.donation_code,
        description: `${purpose} to Ngagdra Dorji Choegar (${result.donation_code})`,
        customerName: values.donor_name,
        customerEmail: values.email || undefined,
        successUrl: `${site.url.replace(/\/+$/, "")}/donate/thanks?d=${id}`,
        cancelUrl: `${site.url.replace(/\/+$/, "")}/donate?cancelled=1`,
        metadata: { donationId: id },
        idempotencyKey: id,
      });
      const attached = await supabase.rpc("wons_attach_session", { p_token: wons.serverToken, p_donation_id: id, p_session_id: session.id });
      if (attached.error) return fail({}, UNAVAILABLE);
      const sealed = sealCheckout(id, session.id);
      if (sealed) {
        (await cookies()).set(CHECKOUT_COOKIE, sealed, {
          httpOnly: true,
          sameSite: "lax",
          secure: site.url.startsWith("https://"),
          path: "/donate",
          maxAge: CHECKOUT_COOKIE_SECONDS,
        });
      }
      checkoutUrl = session.url;
    }
  } catch {
    return fail({}, online ? "Online payment could not be started just now. Please try again, or use a bank transfer." : UNAVAILABLE);
  }

  // redirect() works by throwing, so it stays outside the try block.
  if (checkoutUrl) redirect(checkoutUrl);
  return done ?? fail({}, UNAVAILABLE);
}
