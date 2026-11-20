"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { mobileLooksValid, textValues, type FormState } from "@/lib/forms";
import { lookupMember, MEMBER_COOKIE, MEMBER_COOKIE_SECONDS, sealMember } from "@/lib/member";
import { site } from "@/lib/site";

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
