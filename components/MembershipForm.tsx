"use client";

import { useActionState } from "react";
import { registerMember } from "@/app/membership/actions";
import { Check, Field, FormProblems, Honeypot, SubmitButton } from "@/components/FormParts";
import { contributionMethods, dokram } from "@/lib/dokram";
import { idle } from "@/lib/forms";

const longDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Thimphu" });

export function MembershipForm() {
  const [state, action] = useActionState(registerMember, idle);

  if (state.status === "done") {
    return (
      <div className="form-done" role="status">
        <h3>{dokram.thanks}</h3>
        <dl className="facts">
          <div><dt>Member ID</dt><dd>{state.code}</dd></div>
          <div><dt>Name</dt><dd>{state.name}</dd></div>
          {state.amount ? <div><dt>Monthly contribution</dt><dd>Nu. {state.amount.toLocaleString("en-IN")}</dd></div> : null}
          <div><dt>Registered</dt><dd>{longDate(state.date)}</dd></div>
          <div><dt>Status</dt><dd>Pending verification</dd></div>
        </dl>
        <p className="note">Please keep your Member ID. The committee will verify your registration.</p>
        <p><a className="text-link text-link--small" href="/membership/account">View my membership</a></p>
      </div>
    );
  }

  return (
    <form className="form" action={action} noValidate>
      <FormProblems state={state} />
      <Field name="full_name" label="Full Name" required state={state}>
        {(props) => <input {...props} type="text" autoComplete="name" maxLength={120} />}
      </Field>
      <Field name="cid" label="CID Number" state={state}>
        {(props) => <input {...props} type="text" inputMode="numeric" autoComplete="off" maxLength={14} />}
      </Field>
      <Field name="mobile" label="Mobile Number" required state={state}>
        {(props) => <input {...props} type="tel" inputMode="tel" autoComplete="tel" maxLength={20} />}
      </Field>
      <Field name="address" label="Address" state={state}>
        {(props) => <input {...props} type="text" autoComplete="street-address" maxLength={300} />}
      </Field>
      <Field name="email" label="Email Address" optional state={state}>
        {(props) => <input {...props} type="email" inputMode="email" autoComplete="email" maxLength={200} />}
      </Field>
      <Field name="method" label="Preferred method of monthly contribution" state={state}>
        {({ defaultValue, ...props }) => (
          <select {...props} defaultValue={defaultValue || "mbob"}>
            {contributionMethods.map((method) => <option key={method.value} value={method.value}>{method.label}</option>)}
          </select>
        )}
      </Field>
      <Field name="monthly_amount" label="Monthly contribution (Nu.)" hint="Nu. 150 per month is the standard contribution. You may enter a higher amount." state={state}>
        {({ defaultValue, ...props }) => <input {...props} defaultValue={defaultValue || "150"} type="number" inputMode="numeric" min={150} step={1} autoComplete="off" />}
      </Field>
      <Field name="telegram" label="Telegram Username/Phone Number" state={state}>
        {(props) => <input {...props} type="text" autoComplete="off" maxLength={80} />}
      </Field>
      <Field name="remarks" label="Remarks" state={state}>
        {(props) => <textarea {...props} rows={3} maxLength={1000} />}
      </Field>
      <Check name="agree" state={state}>Agreement to contribute this amount per month<span className="field__mark" aria-hidden="true"> *</span></Check>
      <Check name="consent" state={state}>Consent to become a member of the Ngagdra Dokram: “{dokram.declaration}”<span className="field__mark" aria-hidden="true"> *</span></Check>
      <Honeypot />
      <div className="form__actions">
        <SubmitButton pendingLabel="Registering…">Register</SubmitButton>
        <p className="field__hint">Fields marked * are required.</p>
      </div>
    </form>
  );
}
