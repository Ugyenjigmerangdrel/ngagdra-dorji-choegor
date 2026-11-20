import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CopyButton } from "@/components/CopyButton";
import { SectionHead, TextLink } from "@/components/Editorial";
import { MemberPayForm } from "@/components/MemberPayForm";
import { PageHeader } from "@/components/PageHeader";
import { getSiteSettings } from "@/lib/cms";
import { currentMember } from "@/lib/member";
import { wonsEnabled } from "@/lib/wons";

export const metadata: Metadata = { title: "Send a payment", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/** One task on one screen: make the transfer, then send its screenshot. */
export default async function MemberPayPage() {
  const [result, settings] = await Promise.all([currentMember(), getSiteSettings()]);
  if (result.state !== "found" || result.member.status === "suspended" || result.member.status === "resigned") redirect("/membership/account");
  const { member } = result;
  const bank = settings && settings.accountNumber ? settings : null;

  return (
    <>
      <PageHeader
        eyebrow="My membership"
        title="Send a payment"
        lead={`${member.name} · ${member.code}`}
        crumbs={[{ name: "Membership", path: "/membership" }, { name: "My membership", path: "/membership/account" }, { name: "Send a payment", path: "/membership/account/pay" }]}
      />

      <section className="section section--band section--tight" aria-labelledby="transfer-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="transfer-title" eyebrow="Step 1" title="Make the transfer" />
          </div>
          <div className="rail__body">
            {bank ? (
              <>
                <dl className="facts">
                  {bank.bankName ? <div><dt>Bank</dt><dd>{bank.bankName}</dd></div> : null}
                  {bank.accountName ? <div><dt>Account name</dt><dd>{bank.accountName}</dd></div> : null}
                  <div>
                    <dt>Account number</dt>
                    <dd className="facts__copy"><span className="facts__number">{bank.accountNumber}</span><CopyButton value={bank.accountNumber} /></dd>
                  </div>
                </dl>
                {bank.donationNote ? <p className="note form-note">{bank.donationNote}</p> : null}
              </>
            ) : (
              <p className="pending-note">Bank details will be provided by the committee.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="send-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="send-title" eyebrow="Step 2" title="Send the screenshot" />
            {wonsEnabled() ? <TextLink href="/donate?purpose=membership#donate" className="text-link--small">Pay online instead</TextLink> : null}
          </div>
          <div className="rail__body">
            <MemberPayForm monthlyAmount={member.monthlyAmount} />
          </div>
        </div>
      </section>
    </>
  );
}
