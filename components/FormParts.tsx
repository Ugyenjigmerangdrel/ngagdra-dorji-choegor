"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import type { FormState } from "@/lib/forms";

/** A labelled control with its hint and error wired up for assistive technology. */
export function Field({
  name, label, state, required = false, optional = false, hint, className = "", children,
}: {
  name: string;
  label: string;
  state: FormState;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  className?: string;
  /** Receives the props every control in the field needs. */
  children: (props: { id: string; name: string; defaultValue: string; required: boolean; "aria-invalid": boolean | undefined; "aria-describedby": string | undefined }) => ReactNode;
}) {
  const error = state.status === "error" ? state.errors[name] : undefined;
  const value = state.status === "error" ? state.values[name] ?? "" : "";
  const describedBy = [hint ? `${name}-hint` : "", error ? `${name}-error` : ""].filter(Boolean).join(" ") || undefined;
  return (
    <div className={`field${error ? " field--error" : ""} ${className}`.trim()}>
      <label htmlFor={name}>
        {label}
        {required ? <span className="field__mark" aria-hidden="true"> *</span> : null}
        {optional ? <span className="field__optional"> (optional)</span> : null}
      </label>
      {children({ id: name, name, defaultValue: value, required, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy })}
      {hint ? <p className="field__hint" id={`${name}-hint`}>{hint}</p> : null}
      {error ? <p className="field__error" id={`${name}-error`}>{error}</p> : null}
    </div>
  );
}

export function Check({ name, state, children }: { name: string; state: FormState; children: ReactNode }) {
  const error = state.status === "error" ? state.errors[name] : undefined;
  const checked = state.status === "error" && state.values[name] === "on";
  return (
    <div className={`check${error ? " field--error" : ""}`}>
      <label>
        <input type="checkbox" name={name} defaultChecked={checked} aria-invalid={error ? true : undefined} aria-describedby={error ? `${name}-error` : undefined} />
        <span>{children}</span>
      </label>
      {error ? <p className="field__error" id={`${name}-error`}>{error}</p> : null}
    </div>
  );
}

export function SubmitButton({ children, pendingLabel }: { children: ReactNode; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="button" type="submit" aria-disabled={pending || undefined}>
      {pending ? pendingLabel : children}
    </button>
  );
}

/** Summary shown above the form when it comes back with problems. */
export function FormProblems({ state }: { state: FormState }) {
  if (state.status !== "error") return null;
  const count = Object.keys(state.errors).length;
  return (
    <p className="form-notice form-notice--error" role="alert">
      {state.message ?? (count === 1 ? "Please check the field marked below." : "Please check the fields marked below.")}
    </p>
  );
}

/** Hidden from people; a script that fills every field gives itself away. */
export function Honeypot() {
  return (
    <div className="field--trap" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}
