"use client";

import { useActionState } from "react";
import { submitDonation } from "@/app/donate/actions";
import { Check, Field, FormProblems, Honeypot, SubmitButton } from "@/components/FormParts";
import { donationPurposes } from "@/lib/dokram";
import { idle } from "@/lib/forms";

const longDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Thimphu" });

/** `initial` fills the form for a signed-in member paying their monthly contribution. */
export function DonateForm({ online, initial = {} }: { online: boolean; initial?: Record<string, string> }) {
  const [state, action] = useActionState(submitDonation, idle);

  if (state.status === "done") {
    return (
      <div className="form-done" role="status">
        <h3>Thank you for your donation</h3>
        <dl className="facts">
          <div><dt>Reference</dt><dd>{state.code}</dd></div>
          <div><dt>Name</dt><dd>{state.name}</dd></div>
          {state.amount ? <div><dt>Amount</dt><dd>Nu. {state.amount.toLocaleString("en-IN")}</dd></div> : null}
          <div><dt>Submitted</dt><dd>{longDate(state.date)}</dd></div>
          <div><dt>Status</dt><dd>Awaiting verification</dd></div>
        </dl>
        <p className="note">Please keep this reference. The committee will verify the payment against your screenshot.</p>
      </div>
    );
  }

  const method = state.status === "error" ? state.values.method : "";
  return (
    <form className="form" action={action} noValidate>
      <FormProblems state={state} />
      {online ? (
        <fieldset className="choice">
          <legend>How would you like to give?</legend>
          <label><input type="radio" name="method" value="bank" defaultChecked={method !== "online"} /><span>Bank transfer, with a screenshot of the payment</span></label>
          <label><input type="radio" name="method" value="online" defaultChecked={method === "online"} /><span>Pay online</span></label>
        </fieldset>
      ) : (
        <input type="hidden" name="method" value="bank" />
      )}
      <Field name="donor_name" label="Name" required state={state}>
        {(props) => <input {...props} defaultValue={props.defaultValue || initial.donor_name} type="text" autoComplete="name" maxLength={120} />}
      </Field>
      <Field name="mobile" label="Mobile number" state={state}>
        {(props) => <input {...props} type="tel" inputMode="tel" autoComplete="tel" maxLength={20} />}
      </Field>
      <Field name="email" label="Email address" optional state={state}>
        {(props) => <input {...props} type="email" inputMode="email" autoComplete="email" maxLength={200} />}
      </Field>
      <Field name="amount" label="Amount (Nu.)" required state={state}>
        {(props) => <input {...props} defaultValue={props.defaultValue || initial.amount} type="text" inputMode="numeric" autoComplete="off" maxLength={12} />}
      </Field>
      <Field name="purpose" label="Purpose" state={state}>
        {({ defaultValue, ...props }) => (
          <select {...props} defaultValue={defaultValue || initial.purpose || "general"}>
            {donationPurposes.map((purpose) => <option key={purpose.value} value={purpose.value}>{purpose.label}</option>)}
          </select>
        )}
      </Field>
      <Field name="member_ref" label="Member ID or mobile number" state={state} className="field--member" hint="For a monthly membership contribution, so the payment can be matched to the member.">
        {(props) => <input {...props} defaultValue={props.defaultValue || initial.member_ref} type="text" autoComplete="off" maxLength={40} />}
      </Field>
      <Field name="reference" label="Journal or transaction number" state={state} className="field--bank">
        {(props) => <input {...props} type="text" autoComplete="off" maxLength={120} />}
      </Field>
      <Field name="proof" label="Screenshot of the payment" required={!online} state={state} className="field--bank" hint="JPEG, PNG or WebP, up to 6 MB.">
        {({ defaultValue: _unused, ...props }) => <input {...props} type="file" accept="image/jpeg,image/png,image/webp" />}
      </Field>
      <Field name="message" label="Message" state={state}>
        {(props) => <textarea {...props} rows={3} maxLength={1000} />}
      </Field>
      <Check name="anonymous" state={state}>List my donation as anonymous</Check>
      <Honeypot />
      <div className="form__actions">
        <SubmitButton pendingLabel="Submitting…">Submit donation</SubmitButton>
        <p className="field__hint">Fields marked * are required.</p>
      </div>
    </form>
  );
}
