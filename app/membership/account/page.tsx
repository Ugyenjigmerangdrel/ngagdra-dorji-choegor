import type { Metadata } from "next";
import Link from "next/link";
import { closeMembership } from "@/app/membership/account/actions";
import { Arrow } from "@/components/Arrow";
import { SectionHead, TextLink } from "@/components/Editorial";
import { MemberSignIn } from "@/components/MemberSignIn";
import { PageHeader } from "@/components/PageHeader";
import { dokram } from "@/lib/dokram";
import { currentMember, type Member } from "@/lib/member";

export const metadata: Metadata = { title: "My membership", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const crumbs = [{ name: "Membership", path: "/membership" }, { name: "My membership", path: "/membership/account" }];

const statusLabel: Record<Member["status"], string> = {
  pending: "Pending verification",
  active: "Active",
  inactive: "Inactive",
  suspended: "Suspended",
  resigned: "Resigned",
};

const monthDate = (month: string) => new Date(Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5, 7)) - 1, 1));
const monthName = (month: string, form: "long" | "short" = "long") =>
  monthDate(month).toLocaleDateString("en-GB", form === "long" ? { month: "long", year: "numeric", timeZone: "UTC" } : { month: "short", timeZone: "UTC" });
const longDate = (day: string) => new Date(`${day}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const sentDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Thimphu" });
const money = (amount: number) => `Nu. ${amount.toLocaleString("en-IN")}`;

/** The twelve months ending with the current one, oldest first, each marked received, not received or not due. */
function lastTwelve(member: Member) {
  const end = monthDate(member.currentMonth);
  return Array.from({ length: 12 }, (_, index) => {
    const date = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - (11 - index), 1));
    const month = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
    const due = member.startMonth !== null && month >= member.startMonth && (member.endMonth === null || month <= member.endMonth);
    const state = member.paidMonths.includes(month) ? "paid" : due ? "due" : "none";
    return { month, state } as const;
  });
}

/** "November 2026", or "July – October 2026" for a receipt that covers several months. */
function monthSpan(from: string, to: string) {
  if (from === to) return monthName(to);
  return `${monthDate(from).toLocaleDateString("en-GB", from.slice(0, 4) === to.slice(0, 4) ? { month: "long", timeZone: "UTC" } : { month: "long", year: "numeric", timeZone: "UTC" })} – ${monthName(to)}`;
}

const sentLabel = { pending: "Being checked", verified: "Checked", rejected: "Not accepted" } as const;

const stateText = { paid: "received", due: "not yet received", none: "not due" } as const;

export default async function MemberAccountPage({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const result = await currentMember();

  if (result.state !== "found") {
    return (
      <>
        <PageHeader
          eyebrow="Membership"
          title="My membership"
          lead="See your Member ID and the months your contribution has been received."
          crumbs={crumbs}
        />
        <section className="section" aria-labelledby="open-title">
          <div className="container rail">
            <div className="rail__head">
              <SectionHead id="open-title" title="Open my membership" />
              <TextLink href="/membership#register" className="text-link--small">Not a member yet? Register</TextLink>
            </div>
            <div className="rail__body">
              {result.state === "rate_limited" ? <p className="form-notice" role="status">Too many attempts. Please try again in an hour, or contact the committee.</p> : null}
              {result.state === "unavailable" ? <p className="form-notice" role="status">Your membership could not be opened just now. Please try again in a little while.</p> : null}
              <MemberSignIn />
            </div>
          </div>
        </section>
      </>
    );
  }

  const { member } = result;
  const { sent } = await searchParams;
  const months = lastTwelve(member);
  const paidNow = member.paidMonths.includes(member.currentMonth);
  const ahead = member.paidThrough !== null && member.paidThrough > member.currentMonth;
  const current = member.status === "active" || member.status === "pending";
  const canPay = member.status !== "suspended" && member.status !== "resigned";
  const showMonths = member.startMonth !== null || member.paidMonths.length > 0;
  // A payment the member has sent and the committee has not yet recorded.
  const waiting = member.submissions.find((submission) => submission.status !== "rejected") ?? null;

  return (
    <>
      <PageHeader
        eyebrow="My membership"
        title={member.name}
        lead={`${member.code} · ${money(member.monthlyAmount)} a month · ${statusLabel[member.status]}`}
        crumbs={crumbs}
      />

      <section className="section section--tight" aria-labelledby="month-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="month-title" eyebrow="This month" title={monthName(member.currentMonth)} />
          </div>
          <div className="rail__body">
            {sent ? <p className="form-notice" role="status">Payment sent. Your reference is {sent}. The committee will check it against your screenshot.</p> : null}
            {member.status === "pending" ? (
              <p className="member-now">Your registration is waiting for the committee to verify it.</p>
            ) : !current ? (
              <p className="member-now">Your membership is not active at present. Please contact the committee.</p>
            ) : paidNow ? (
              <p className="member-now member-now--paid">Contribution received. Thank you.</p>
            ) : waiting ? (
              <p className="member-now">{waiting.status === "verified" ? "Payment checked. Your receipt will follow." : "Payment sent. Waiting for the committee to check it."}</p>
            ) : (
              <p className="member-now">Contribution not yet received.</p>
            )}
            {ahead ? <p className="note">Paid up to {monthName(member.paidThrough!)}.</p> : null}
            {canPay ? (
              <div className="actions member-actions">
                {paidNow || waiting
                  ? <Link className="button button--ghost" href="/membership/account/pay">Send another payment<Arrow /></Link>
                  : <Link className="button" href="/membership/account/pay">Send payment<Arrow /></Link>}
              </div>
            ) : null}

            {member.submissions.length ? (
              <ul className="ledger ledger--sent" aria-label="Payments you have sent">
                {member.submissions.map((submission) => (
                  <li key={submission.code} data-status={submission.status}>
                    <span className="ledger__main">
                      <strong>{money(submission.amount)}</strong>
                      <span>Sent {sentDate(submission.sentAt)} · {submission.code}</span>
                      {submission.status === "rejected" && submission.note ? <span className="ledger__note">{submission.note}</span> : null}
                    </span>
                    <span className="ledger__status">{sentLabel[submission.status]}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {showMonths ? (
              <>
                <ol className="months" aria-label="Last 12 months">
                  {months.map(({ month, state }, index) => (
                    <li key={month} data-state={state}>
                      <span className="months__mark" aria-hidden="true">
                        {state === "paid" ? <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 5" /></svg> : null}
                      </span>
                      <span className="months__name">{monthName(month, "short")}</span>
                      <span className="months__year">{index === 0 || month.endsWith("-01") ? month.slice(0, 4) : ""}</span>
                      <span className="months__state">, {stateText[state]}</span>
                    </li>
                  ))}
                </ol>
                <p className="months__key" aria-hidden="true"><span data-state="paid">Received</span><span data-state="due">Not yet received</span></p>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {member.receipts.length ? (
        <section className="section section--band section--tight" aria-labelledby="receipts-title">
          <div className="container rail">
            <div className="rail__head">
              <SectionHead id="receipts-title" title="Receipts" />
            </div>
            <div className="rail__body">
              <ul className="ledger">
                {member.receipts.map((receipt) => (
                  <li key={receipt.receiptNo}>
                    <span className="ledger__main">
                      <strong>{receipt.receiptNo}</strong>
                      <span>{longDate(receipt.paidOn)} · {monthSpan(receipt.fromMonth, receipt.toMonth)}</span>
                    </span>
                    <span className="ledger__amount">{money(receipt.amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--tight" aria-labelledby="help-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="help-title" as="h3" title="Something not right?" />
          </div>
          <div className="rail__body">
            <p className="note">Phone No. {dokram.contacts.phones.map((phone, index) => <span key={phone}>{index ? " / " : ""}<a className="inline-link" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></span>)}</p>
            <form action={closeMembership}>
              <button className="text-link text-link--small link-button" type="submit">Sign out on this device</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
