"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { imageType, MAX_PROOF_BYTES, mobileLooksValid, textValues, type FormState } from "@/lib/forms";
import { lookupMember, MEMBER_COOKIE, MEMBER_COOKIE_SECONDS, rememberedMember, sealMember } from "@/lib/member";
import { site } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";

const FIELDS = ["mobile", "ref"] as const;

export async function openMembership(_previous: FormState, formData: FormData): Promise<FormState> {
  const values = textValues(formData, FIELDS);
  const fail = (errors: Record<string, string>, message?: string): FormState => ({ status: "error", errors, message, values });

  const errors: Record<string, string> = {};
  if (!values.mobile) errors.mobile = "Enter your mobile number.";
  else if (!mobileLooksValid(values.mobile)) errors.mobile = "Enter a valid mobile number, for example 17123456.";
  if (values.ref.length < 3 || values.ref.length > 40) errors.ref = "Enter your Member ID or your CID number.";
  if (Object.keys(errors).length) return fail(errors);

  const result = await lookupMember(values.mobile, values.ref);
  if (result.state === "not_found") return fail({}, "No member matches that mobile number and Member ID or CID number. Please check both and try again.");
  if (result.state === "rate_limited") return fail({}, "Too many attempts. Please try again in an hour, or contact the committee.");
  if (result.state !== "found") return fail({}, "Your membership could not be opened just now. Please try again in a little while.");

  (await cookies()).set(MEMBER_COOKIE, sealMember(values.mobile, values.ref), {
    httpOnly: true,
    sameSite: "lax",
    secure: site.url.startsWith("https://"),
    path: "/",
    maxAge: MEMBER_COOKIE_SECONDS,
  });
  redirect("/membership/account");
}

export async function closeMembership() {
  (await cookies()).delete(MEMBER_COOKIE);
  redirect("/membership/account");
}

const PAY_FIELDS = ["months", "amount", "reference"] as const;
const PAY_UNAVAILABLE = "Your payment could not be sent just now. Please try again in a little while.";

/** A member sends the screenshot of a transfer they have made. The committee checks it in the studio. */
export async function sendPayment(_previous: FormState, formData: FormData): Promise<FormState> {
  const values = textValues(formData, PAY_FIELDS);
  const fail = (errors: Record<string, string>, message?: string): FormState => ({ status: "error", errors, message, values });

  const remembered = await rememberedMember();
  if (!remembered) redirect("/membership/account");

  const errors: Record<string, string> = {};
  const months = Number(values.months || "1");
  if (!Number.isInteger(months) || months < 1 || months > 36) errors.months = "Choose between 1 and 36 months.";
  const plain = values.amount.replace(/[,\s]/g, "");
  const amount = /^\d{1,7}(\.0{1,2})?$/.test(plain) ? Number.parseInt(plain, 10) : NaN;
  if (!values.amount) errors.amount = "Enter the amount you paid.";
  else if (!Number.isInteger(amount) || amount <= 0 || amount > 1_000_000) errors.amount = "Enter a whole amount in ngultrum, for example 150.";

  const proof = formData.get("proof");
  const file = proof instanceof File && proof.size > 0 ? proof : null;
  let image: ReturnType<typeof imageType> = null;
  let bytes: Uint8Array | null = null;
  if (!file) errors.proof = "Add the screenshot of your payment.";
  else if (file.size > MAX_PROOF_BYTES) errors.proof = "The screenshot is larger than 6 MB. Please add a smaller image.";
  else {
    bytes = new Uint8Array(await file.arrayBuffer());
    image = imageType(bytes);
    if (!image) errors.proof = "Add the screenshot as a JPEG, PNG or WebP image.";
  }
  if (Object.keys(errors).length || !image || !bytes) return fail(errors);

  const supabase = getSupabase();
  if (!supabase) return fail({}, PAY_UNAVAILABLE);

  const id = randomUUID().toLowerCase();
  let code: string | null = null;
  try {
    const upload = await supabase.storage.from("donation-proofs").upload(`${id}.${image.ext}`, bytes, { contentType: image.mime, upsert: false });
    if (upload.error) return fail({ proof: "The screenshot could not be uploaded. Please add it again." });

    const { data, error } = await supabase.rpc("submit_member_payment", {
      p_mobile: remembered.mobile,
      p_ref: remembered.ref,
      p_id: id,
      p_amount: amount,
      p_proof_ext: image.ext,
      p_months: months,
      p_reference: values.reference || null,
    });
    if (error || !data) return fail({}, PAY_UNAVAILABLE);
    const result = data as { ok: boolean; reason?: string; code?: string };
    if (!result.ok || !result.code) {
      if (result.reason === "invalid_amount") return fail({ amount: "Enter a whole amount in ngultrum, for example 150." });
      if (result.reason === "proof_required") return fail({ proof: "Add the screenshot of your payment." });
      if (result.reason === "rate_limited") return fail({}, "You have sent several payments today. Please contact the committee if something is wrong.");
      if (result.reason === "not_allowed") return fail({}, "Your membership is not active at present. Please contact the committee.");
      if (result.reason === "not_found") return fail({}, "Please open your membership again, then send the payment.");
      return fail({}, PAY_UNAVAILABLE);
    }
    code = result.code;
  } catch {
    return fail({}, PAY_UNAVAILABLE);
  }

  // redirect() works by throwing, so it stays outside the try block.
  redirect(`/membership/account?sent=${encodeURIComponent(code)}`);
}
