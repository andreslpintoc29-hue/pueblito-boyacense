import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase no está configurado. Revisa apps/admin/.env.local");
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
