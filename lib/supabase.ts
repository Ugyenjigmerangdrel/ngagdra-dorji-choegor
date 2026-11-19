import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The public website talks to the shared database with the publishable (anonymous) key only.
// It can read published content and site settings, and call the two public functions
// (register_member, submit_donation). It never holds a privileged key.

export function supabaseConfig(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/\/+$/, "");
  const key = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();
  return url && key ? { url, key } : null;
}

/** Give up on a slow database rather than hold a page (or the build) open. */
const withTimeout: typeof fetch = (input, init) =>
  fetch(input, { ...init, signal: init?.signal ?? AbortSignal.timeout(8000) });

let client: SupabaseClient | null | undefined;

/** null when the site is not connected to a database. Callers treat that as "no data". */
export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;
  const config = supabaseConfig();
  client = config
    ? createClient(config.url, config.key, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
        global: { fetch: withTimeout },
      })
    : null;
  return client;
}

/** Public URL of an object in a public storage bucket. */
export function publicObjectUrl(bucket: string, path: string): string | null {
  const config = supabaseConfig();
  return config ? `${config.url}/storage/v1/object/public/${bucket}/${path}` : null;
}
