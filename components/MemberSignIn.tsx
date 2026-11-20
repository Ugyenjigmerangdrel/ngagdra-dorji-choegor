"use client";

import { useActionState } from "react";
import { openMembership } from "@/app/membership/account/actions";
import { Field, FormProblems, SubmitButton } from "@/components/FormParts";
import { idle } from "@/lib/forms";

export function MemberSignIn() {
  const [state, action] = useActionState(openMembership, idle);
  return (
    <form className="form" action={action} noValidate>
      <FormProblems state={state} />
      <Field name="mobile" label="Mobile Number" state={state} hint="The number you registered with.">
        {(props) => <input {...props} type="tel" inputMode="tel" autoComplete="tel" maxLength={20} />}
      </Field>
      <Field name="ref" label="Member ID or CID Number" state={state} hint="For example ND-00531.">
        {(props) => <input {...props} type="text" autoComplete="off" autoCapitalize="characters" maxLength={40} />}
      </Field>
      <div className="form__actions">
        <SubmitButton pendingLabel="Opening…">View my membership</SubmitButton>
      </div>
    </form>
  );
}
