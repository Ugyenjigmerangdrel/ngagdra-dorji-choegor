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

/** The largest payment screenshot the forms accept. */
export const MAX_PROOF_BYTES = 6 * 1024 * 1024;

/** The image type, read from the file's first bytes rather than from its name or declared type. */
export function imageType(bytes: Uint8Array): { ext: "jpg" | "png" | "webp"; mime: string } | null {
  const at = (index: number) => bytes[index];
  if (at(0) === 0xff && at(1) === 0xd8 && at(2) === 0xff) return { ext: "jpg", mime: "image/jpeg" };
  if ([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((byte, index) => at(index) === byte)) return { ext: "png", mime: "image/png" };
  const ascii = (from: number) => String.fromCharCode(...bytes.slice(from, from + 4));
  if (bytes.length > 12 && ascii(0) === "RIFF" && ascii(8) === "WEBP") return { ext: "webp", mime: "image/webp" };
  return null;
}
