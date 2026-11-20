import "server-only";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";

// "My membership": a member looks up their own record with their mobile number and either
// their Member ID or their CID number. There are no accounts or passwords. The database checks
// the pair on every view (member_portal) and limits wrong attempts.

export type Member = {
  code: string;
  name: string;
  status: "pending" | "active" | "inactive" | "suspended" | "resigned";
  monthlyAmount: number;
  /** "YYYY-MM". The first and last months a contribution is due, when set. */
  startMonth: string | null;
  endMonth: string | null;
  currentMonth: string;
  /** The latest month a contribution has been received for. */
  paidThrough: string | null;
  /** Months received within the last twelve, as "YYYY-MM". */
  paidMonths: string[];
  lastPayment: { paidOn: string; receiptNo: string; amount: number } | null;
};

export type MemberLookup = { state: "found"; member: Member } | { state: "not_found" | "rate_limited" | "unavailable" };

export async function lookupMember(mobile: string, ref: string): Promise<MemberLookup> {
  const supabase = getSupabase();
  if (!supabase) return { state: "unavailable" };
  try {
    const { data, error } = await supabase.rpc("member_portal", { p_mobile: mobile, p_ref: ref });
    if (error || !data) return { state: "unavailable" };
    const row = data as {
      ok: boolean; reason?: string; member_code: string; full_name: string; status: Member["status"]; monthly_amount: number;
      start_month: string | null; end_month: string | null; current_month: string; paid_through: string | null;
      payments: { month: string }[]; last_payment: { paid_on: string; receipt_no: string; amount: number } | null;
    };
    if (!row.ok) return { state: row.reason === "rate_limited" ? "rate_limited" : "not_found" };
    return {
      state: "found",
      member: {
        code: row.member_code,
        name: row.full_name,
        status: row.status,
        monthlyAmount: Number(row.monthly_amount),
        startMonth: row.start_month,
        endMonth: row.end_month,
        currentMonth: row.current_month,
        paidThrough: row.paid_through,
        paidMonths: row.payments.map((payment) => payment.month),
        lastPayment: row.last_payment ? { paidOn: row.last_payment.paid_on, receiptNo: row.last_payment.receipt_no, amount: Number(row.last_payment.amount) } : null,
      },
    };
  } catch {
    return { state: "unavailable" };
  }
}

// The two values a member typed are remembered on their own device, in a cookie scripts cannot
// read, so the page opens straight to their record next time. The cookie is not a session: it
// grants nothing by itself, and the database checks the pair again on every view.

export const MEMBER_COOKIE = "ndc_member";
export const MEMBER_COOKIE_SECONDS = 60 * 60 * 24 * 180;

export const sealMember = (mobile: string, ref: string) => Buffer.from(JSON.stringify([mobile, ref])).toString("base64url");

function openMember(value: string | undefined): { mobile: string; ref: string } | null {
  if (!value || value.length > 400) return null;
  try {
    const parsed: unknown = JSON.parse(Buffer.from(value, "base64url").toString());
    if (!Array.isArray(parsed) || parsed.length !== 2 || typeof parsed[0] !== "string" || typeof parsed[1] !== "string") return null;
    return { mobile: parsed[0], ref: parsed[1] };
  } catch {
    return null;
  }
}

/** The member remembered on this device, if any. "none" when nobody is remembered. */
export async function currentMember(): Promise<MemberLookup | { state: "none" }> {
  const remembered = openMember((await cookies()).get(MEMBER_COOKIE)?.value);
  return remembered ? lookupMember(remembered.mobile, remembered.ref) : { state: "none" };
}
