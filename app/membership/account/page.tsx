import type { Metadata } from "next";
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

const stateText = { paid: "received", due: "not yet received", none: "not due" } as const;

export default async function MemberAccountPage() {
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
  const months = lastTwelve(member);
  const paidNow = member.paidMonths.includes(member.currentMonth);
  const ahead = member.paidThrough !== null && member.paidThrough > member.currentMonth;
  const current = member.status === "active" || member.status === "pending";
  const showMonths = member.startMonth !== null || member.paidMonths.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="My membership"
        title={member.name}
        crumbs={crumbs}
        aside={
          <dl className="facts">
            <div><dt>Member ID</dt><dd>{member.code}</dd></div>
            <div><dt>Monthly contribution</dt><dd>{money(member.monthlyAmount)}</dd></div>
            <div><dt>Status</dt><dd>{statusLabel[member.status]}</dd></div>
          </dl>
        }
      />

      <section className="section" aria-labelledby="month-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="month-title" eyebrow="This month" title={monthName(member.currentMonth)} />
          </div>
          <div className="rail__body">
            {member.status === "pending" ? (
              <p className="member-now">Your registration is waiting for the committee to verify it.</p>
            ) : !current ? (
              <p className="member-now">Your membership is not active at present. Please contact the committee.</p>
            ) : paidNow ? (
              <p className="member-now member-now--paid">Contribution received. Thank you.</p>
            ) : (
              <p className="member-now">Contribution not yet received.</p>
            )}
            {ahead ? <p className="note">Paid up to {monthName(member.paidThrough!)}.</p> : null}
            {current && !paidNow ? (
              <>
                <div className="actions member-actions">
                  <a className="button" href="/donate?purpose=membership#donate">Pay this month<Arrow /></a>
                </div>
                <p className="field__hint member-hint">A payment you have just sent shows here once the committee has verified it.</p>
              </>
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

            {member.lastPayment ? (
              <dl className="facts facts--compact form-note member-last">
                <div><dt>Last payment</dt><dd>{money(member.lastPayment.amount)} on {longDate(member.lastPayment.paidOn)}</dd></div>
                <div><dt>Receipt</dt><dd>{member.lastPayment.receiptNo}</dd></div>
              </dl>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="help-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="help-title" as="h3" title="Something not right?" />
          </div>
          <div className="rail__body">
            <p className="note">Phone No. {dokram.contacts.phones.join(" / ")}</p>
            <form action={closeMembership}>
              <button className="text-link text-link--small link-button" type="submit">Sign out on this device</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
