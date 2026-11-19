// Shared by the membership and donation forms (server actions and their client components).

export type FormState =
  | { status: "idle" }
  | { status: "error"; message?: string; errors: Record<string, string>; values: Record<string, string> }
  | { status: "done"; code: string; name: string; date: string; amount?: number };

export const idle: FormState = { status: "idle" };

/** Text fields of a submitted form, trimmed. Files and React's own fields are left out. */
export function textValues(formData: FormData, names: readonly string[]): Record<string, string> {
  const values: Record<string, string> = {};
  for (const name of names) {
    const value = formData.get(name);
    values[name] = typeof value === "string" ? value.trim() : "";
  }
  return values;
}

export const digits = (value: string) => value.replace(/\D/g, "");

/** A Bhutan mobile is 8 digits; with a country code a number runs to 9–15 digits. */
export function mobileLooksValid(value: string): boolean {
  const n = digits(value).replace(/^00/, "");
  return n.length === 8 || (n.length >= 9 && n.length <= 15);
}

export const emailLooksValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 200;
