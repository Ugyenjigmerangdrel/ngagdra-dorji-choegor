import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TextLink } from "@/components/Editorial";
import { PageHeader } from "@/components/PageHeader";
import { CHECKOUT_COOKIE, openCheckout, settleCheckout } from "@/lib/wons";

export const metadata: Metadata = { title: "Donation", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/**
 * Where WONS returns a donor after an online payment. Arriving here proves nothing:
 * the checkout is read back from WONS and the donation is confirmed only if it reports it paid.
 */
export default async function DonateThanksPage({ searchParams }: { searchParams: Promise<{ d?: string }> }) {
  const { d } = await searchParams;
  const checkout = openCheckout((await cookies()).get(CHECKOUT_COOKIE)?.value);
  const result = checkout && d === checkout.donationId ? await settleCheckout(checkout.sessionId) : { state: "unknown" as const };

  const copy =
    result.state === "paid"
      ? { title: "Thank you for your donation", lead: "Your payment has been received." }
      : result.state === "open"
        ? { title: "Payment not yet confirmed", lead: "The payment has not been confirmed yet. If you have paid, this page will show it once the payment arrives; you can reload it in a moment." }
        : result.state === "closed"
          ? { title: "Payment not completed", lead: "The online payment was not completed and nothing has been charged." }
          : { title: "Donation", lead: "If you completed an online payment, it will be confirmed to the committee as soon as it arrives." };

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title={copy.title}
        lead={copy.lead}
        crumbs={[{ name: "Support", path: "/support" }, { name: "Donate", path: "/donate" }]}
        aside={
          result.state === "paid" ? (
            <dl className="facts">
              <div><dt>Reference</dt><dd>{result.donationCode}</dd></div>
              <div><dt>Amount</dt><dd>Nu. {result.amount.toLocaleString("en-IN")}</dd></div>
              <div><dt>Status</dt><dd>Paid online</dd></div>
            </dl>
          ) : undefined
        }
      />
      <section className="section">
        <div className="container">
          {result.state === "paid" ? <TextLink href="/support">Back to Support</TextLink> : <TextLink href="/donate">Back to Donate</TextLink>}
        </div>
      </section>
    </>
  );
}
