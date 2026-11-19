import { Arrow } from "@/components/Arrow";
import { SectionHead } from "@/components/Editorial";
import { MembershipForm } from "@/components/MembershipForm";
import { PageHeader } from "@/components/PageHeader";
import { dokram } from "@/lib/dokram";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Ngagdra Dokram membership", dokram.lead, "/membership");

const tel = (number: string) => `tel:${number.replace(/[^+\d]/g, "")}`;

export default function MembershipPage() {
  const { contacts, mbob } = dokram;
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title={dokram.name}
        lead={dokram.lead}
        crumbs={[{ name: "Membership", path: "/membership" }]}
        cover={{ src: "/media/community/assembly-hall-gathering.jpg", objectPosition: "50% 48%" }}
        actions={<a className="button" href="#register">Register<Arrow direction="down" /></a>}
        aside={
          <nav aria-label="On this page">
            <ul className="page-index">
              <li><a href="#benefits">{dokram.benefits.title}<Arrow direction="down" /></a></li>
              <li><a href="#register">Member registration<Arrow direction="down" /></a></li>
              <li><a href="#mbob">Automatic donations through mBoB<Arrow direction="down" /></a></li>
              <li><a href="#contacts">Contacts<Arrow direction="down" /></a></li>
            </ul>
          </nav>
        }
      />

      <section className="section" aria-labelledby="about-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="about-title" eyebrow="Background" title={dokram.name} />
          </div>
          <div className="rail__body prose prose--lead">
            {dokram.background.map((text) => <p key={text}>{text}</p>)}
            <p>{dokram.committee.intro}</p>
            <ul>
              {dokram.committee.roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--band" id="benefits" aria-labelledby="benefits-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="benefits-title" title={dokram.benefits.title} />
          </div>
          <ul className="rail__body needs">
            {dokram.benefits.items.map((item) => (
              <li className="needs__row" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="register" aria-labelledby="register-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="register-title" eyebrow="Online member registration" title="Member Registration Form" />
          </div>
          <div className="rail__body">
            <MembershipForm />
          </div>
        </div>
      </section>

      <section className="section section--band" id="mbob" aria-labelledby="mbob-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="mbob-title" title={mbob.title} intro={mbob.intro} />
          </div>
          <div className="rail__body prose">
            {mbob.steps.map((step) => (
              <div className="prose__group" key={step.title}>
                <h3>{step.title}</h3>
                {"items" in step && step.items ? <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                {"text" in step && step.text ? step.text.map((text) => <p key={text}>{text}</p>) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contacts" aria-labelledby="contacts-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="contacts-title" title="Contacts" />
          </div>
          <div className="rail__body">
            <dl className="facts">
              <div><dt>Address</dt><dd>{contacts.address}</dd></div>
              <div><dt>Phone No.</dt><dd>{contacts.phones.map((phone, index) => <span key={phone}>{index ? " / " : ""}<a className="inline-link" href={tel(phone)}>{phone}</a></span>)}</dd></div>
              <div><dt>WhatsApp No</dt><dd>{contacts.secretary.name}, <a className="inline-link" href={`https://wa.me/${contacts.secretary.whatsapp.replace(/\D/g, "")}`}>{contacts.secretary.whatsapp}</a></dd></div>
              <div><dt>Email address</dt><dd><a className="inline-link" href={`mailto:${contacts.email}`}>{contacts.email}</a></dd></div>
              <div><dt>Telegram Group</dt><dd><a className="inline-link" href={contacts.telegram} rel="noopener noreferrer">{contacts.telegram.replace("https://", "")}</a></dd></div>
            </dl>
          </div>
        </div>
        <div className="container rail">
          <div className="rail__head">
            <SectionHead as="h3" title="QR code for member registration" />
          </div>
          <div className="rail__body qr">
            {/* eslint-disable-next-line @next/next/no-img-element -- a generated SVG; the image optimiser does not apply */}
            <img src="/membership/qr.svg" alt={`QR code that opens ${new URL("/membership", site.url).toString()}`} width={176} height={176} />
            <a className="text-link text-link--small" href="/membership/qr.svg" download="ngagdra-dokram-registration-qr.svg">Download the QR code<Arrow direction="down" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
