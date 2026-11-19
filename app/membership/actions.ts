"use server";

import { contributionMethods } from "@/lib/dokram";
import { digits, emailLooksValid, mobileLooksValid, textValues, type FormState } from "@/lib/forms";
import { getSupabase } from "@/lib/supabase";

const FIELDS = ["full_name", "cid", "mobile", "address", "email", "method", "monthly_amount", "telegram", "remarks", "agree", "consent"] as const;

const MIN_MONTHLY = 150;

const UNAVAILABLE = "Registration could not be submitted just now. Please try again in a little while.";

export async function registerMember(_previous: FormState, formData: FormData): Promise<FormState> {
  const values = textValues(formData, FIELDS);
  const fail = (errors: Record<string, string>, message?: string): FormState => ({ status: "error", errors, message, values });

  // Honeypot: a field people never see. Anything in it means a script filled the form.
  if (typeof formData.get("website") === "string" && formData.get("website") !== "") return fail({}, UNAVAILABLE);

  const errors: Record<string, string> = {};
  if (values.full_name.length < 2) errors.full_name = "Enter your full name.";
  if (values.full_name.length > 120) errors.full_name = "Use 120 characters or fewer.";
  if (!values.mobile) errors.mobile = "Enter your mobile number.";
  else if (!mobileLooksValid(values.mobile)) errors.mobile = "Enter a valid mobile number, for example 17123456.";
  if (values.cid && digits(values.cid).length !== 11) errors.cid = "A CID number has 11 digits.";
  if (values.email && !emailLooksValid(values.email)) errors.email = "Enter a valid email address, or leave it empty.";
  if (!contributionMethods.some((method) => method.value === values.method)) errors.method = "Choose a method.";
  // Nu. 150 is the standard monthly contribution and the least a member gives; more is welcome.
  const amount = values.monthly_amount === "" ? MIN_MONTHLY : Number(values.monthly_amount.replace(/[,\s]/g, ""));
  if (!Number.isInteger(amount) || amount < MIN_MONTHLY) errors.monthly_amount = `Enter a whole amount of Nu. ${MIN_MONTHLY} or more.`;
  else if (amount > 1_000_000) errors.monthly_amount = "That amount is too large for a monthly contribution.";
  if (values.agree !== "on") errors.agree = "Please confirm the monthly contribution.";
  if (values.consent !== "on") errors.consent = "Please confirm that you agree to become a member.";
  if (Object.keys(errors).length) return fail(errors);

  const supabase = getSupabase();
  if (!supabase) return fail({}, UNAVAILABLE);

  try {
    const { data, error } = await supabase.rpc("register_member", {
      p_full_name: values.full_name,
      p_mobile: values.mobile,
      p_cid: values.cid || null,
      p_address: values.address || null,
      p_email: values.email || null,
      p_telegram: values.telegram || null,
      p_method: values.method,
      p_remarks: values.remarks || null,
      p_agree: true,
      p_consent: true,
      p_monthly_amount: amount,
    });
    if (error) {
      const token = error.message ?? "";
      if (token.includes("duplicate_mobile")) return fail({ mobile: "This mobile number is already registered with Ngagdra Dokram." });
      if (token.includes("duplicate_cid")) return fail({ cid: "This CID number is already registered with Ngagdra Dokram." });
      if (token.includes("invalid_mobile")) return fail({ mobile: "Enter a valid mobile number, for example 17123456." });
      if (token.includes("invalid_cid")) return fail({ cid: "A CID number has 11 digits." });
      if (token.includes("invalid_name")) return fail({ full_name: "Enter your full name." });
      if (token.includes("invalid_amount")) return fail({ monthly_amount: `Enter a whole amount of Nu. ${MIN_MONTHLY} or more.` });
      if (token.includes("consent_required")) return fail({ consent: "Please confirm that you agree to become a member." });
      if (token.includes("rate_limited")) return fail({}, "Many people are registering at the moment. Please try again in an hour.");
      return fail({}, UNAVAILABLE);
    }
    const result = data as { member_code: string; full_name: string; monthly_amount: number; registered_at: string };
    return { status: "done", code: result.member_code, name: result.full_name, date: result.registered_at, amount: result.monthly_amount };
  } catch {
    return fail({}, UNAVAILABLE);
  }
}
