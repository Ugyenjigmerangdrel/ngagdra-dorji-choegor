"use client";

import { useActionState, useState } from "react";
import { sendPayment } from "@/app/membership/account/actions";
import { FormProblems, SubmitButton } from "@/components/FormParts";
import { idle, MAX_PROOF_BYTES } from "@/lib/forms";

/**
 * Sending a payment from a phone: how many months, the amount (worked out, still editable),
 * the screenshot, and one button. Everything is checked here first so that a chosen
 * screenshot is not lost to a round trip.
 */
export function MemberPayForm({ monthlyAmount }: { monthlyAmount: number }) {
  const [state, action] = useActionState(sendPayment, idle);
  const back = state.status === "error" ? state.values : null;
  const [months, setMonths] = useState(() => Math.min(36, Math.max(1, Number(back?.months) || 1)));
  const [amount, setAmount] = useState(() => back?.amount || String(monthlyAmount));
  // The chosen screenshot belongs to one attempt: after a round trip the browser has cleared
  // the file input, so a choice made before it no longer counts.
  const [picked, setPicked] = useState<{ file: File; preview: string; attempt: typeof state } | null>(null);
  const [local, setLocal] = useState<Record<string, string>>({});
  const chosen = picked && picked.attempt === state ? picked : null;
  const file = chosen?.file ?? null;
  const preview = chosen?.preview ?? null;

  const errors = { ...(state.status === "error" ? state.errors : {}), ...local };
  const changeMonths = (next: number) => {
    const value = Math.min(36, Math.max(1, next));
    setMonths(value);
    setAmount(String(value * monthlyAmount));
  };

  return (
    <form
      className="form pay"
      action={action}
      noValidate
      onSubmit={(event) => {
        const problems: Record<string, string> = {};
        if (!/^\d{1,7}$/.test(amount.replace(/[,\s]/g, "")) || Number(amount.replace(/[,\s]/g, "")) <= 0) problems.amount = "Enter a whole amount in ngultrum, for example 150.";
        if (!file) problems.proof = "Add the screenshot of your payment.";
        else if (file.size > MAX_PROOF_BYTES) problems.proof = "The screenshot is larger than 6 MB. Please add a smaller image.";
        setLocal(problems);
        if (Object.keys(problems).length) event.preventDefault();
      }}
    >
      <FormProblems state={state} />

      <div className="field">
        <span className="field__label" id="months-label">Number of months</span>
        <div className="stepper" role="group" aria-labelledby="months-label">
          <button type="button" onClick={() => changeMonths(months - 1)} disabled={months <= 1} aria-label="One month fewer">−</button>
          <output aria-live="polite">{months} {months === 1 ? "month" : "months"}</output>
          <button type="button" onClick={() => changeMonths(months + 1)} disabled={months >= 36} aria-label="One month more">+</button>
        </div>
        <input type="hidden" name="months" value={months} />
      </div>

      <div className={`field${errors.amount ? " field--error" : ""}`}>
        <label htmlFor="amount">Amount paid (Nu.)</label>
        <input id="amount" name="amount" type="text" inputMode="numeric" autoComplete="off" maxLength={9} value={amount} onChange={(event) => setAmount(event.target.value)} aria-invalid={errors.amount ? true : undefined} aria-describedby={errors.amount ? "amount-error" : undefined} />
        {errors.amount ? <p className="field__error" id="amount-error">{errors.amount}</p> : null}
      </div>

      <div className={`field${errors.proof ? " field--error" : ""}`}>
        <span className="field__label" id="proof-label">Screenshot of the payment</span>
        <label className={`picker${file ? " picker--chosen" : ""}`}>
          <input
            name="proof"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            aria-labelledby="proof-label"
            aria-describedby={errors.proof ? "proof-error" : "proof-hint"}
            onChange={(event) => {
              const next = event.target.files?.[0] ?? null;
              if (picked) URL.revokeObjectURL(picked.preview);
              setPicked(next ? { file: next, preview: URL.createObjectURL(next), attempt: state } : null);
              setLocal((current) => ({ ...current, proof: "" }));
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- a local preview of the member's own file */}
          {file && preview ? <img src={preview} alt="" /> : null}
          <span className="picker__text">
            <strong>{file ? file.name : "Add screenshot"}</strong>
            <span>{file ? "Tap to choose a different one" : "From your photos or files"}</span>
          </span>
        </label>
        {errors.proof ? <p className="field__error" id="proof-error">{errors.proof}</p> : <p className="field__hint" id="proof-hint">JPEG, PNG or WebP, up to 6 MB.</p>}
      </div>

      <div className="field">
        <label htmlFor="reference">Journal or transaction number<span className="field__optional"> (optional)</span></label>
        <input id="reference" name="reference" type="text" inputMode="text" autoComplete="off" maxLength={120} defaultValue={back?.reference ?? ""} />
      </div>

      <div className="form__actions pay__actions">
        <SubmitButton pendingLabel="Sending…">Send payment</SubmitButton>
      </div>
    </form>
  );
}
