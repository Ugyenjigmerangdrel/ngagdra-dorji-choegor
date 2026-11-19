import { Arrow } from "@/components/Arrow";
import { DonateForm } from "@/components/DonateForm";
import { SectionHead, TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { getSiteSettings } from "@/lib/cms";
import { support } from "@/lib/content";
import { dokram } from "@/lib/dokram";
import { pageMetadata } from "@/lib/seo";
import { wonsEnabled } from "@/lib/wons";

export const metadata = pageMetadata("Donate", `${support.lead} ${support.requires.closing}`, "/donate");

export default async function DonatePage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const [settings, query] = await Promise.all([getSiteSettings(), searchParams]);
  const online = wonsEnabled();
  const bank = settings && settings.accountNumber ? settings : null;
  const phone = settings?.contactPhone || dokram.contacts.phones.join(" / ");
  const email = settings?.contactEmail || dokram.contacts.email;

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title={support.title}
        lead={support.lead}
        crumbs={[{ name: "Support", path: "/support" }, { name: "Donate", path: "/donate" }]}
        cover={{ src: "/media/events/ceremonial-offering-procession.jpg", objectPosition: "45% 50%" }}
        actions={<a className="button" href="#donate">Make a donation<Arrow direction="down" /></a>}
      />

      <section className="section section--band" id="bank" aria-labelledby="bank-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="bank-title" eyebrow="Step 1" title="Make the transfer" />
          </div>
          <div className="rail__body">
            {bank ? (
              <>
                <dl className="facts">
                  {bank.bankName ? <div><dt>Bank</dt><dd>{bank.bankName}</dd></div> : null}
                  {bank.accountName ? <div><dt>Account name</dt><dd>{bank.accountName}</dd></div> : null}
                  <div><dt>Account number</dt><dd className="facts__number">{bank.accountNumber}</dd></div>
                </dl>
                {bank.donationNote ? <p className="note form-note">{bank.donationNote}</p> : null}
              </>
            ) : (
              <p className="pending-note">Bank details will be provided by the committee.</p>
            )}
            <dl className="facts facts--compact form-note">
              <div><dt>Phone No.</dt><dd>{phone}</dd></div>
              <div><dt>Email address</dt><dd><a className="inline-link" href={`mailto:${email}`}>{email}</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="donate" aria-labelledby="donate-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="donate-title" eyebrow="Step 2" title="Tell us about your donation" />
            <TextLink href="/membership" className="text-link--small">Become a member of Ngagdra Dokram</TextLink>
          </div>
          <div className="rail__body">
            {query.cancelled ? <p className="form-notice" role="status">The online payment was cancelled. Nothing has been charged.</p> : null}
            <DonateForm online={online} />
          </div>
        </div>
      </section>
    </>
  );
}
