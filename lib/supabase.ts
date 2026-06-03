import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: { persistSession: false, autoRefreshToken: false, storage: noopStorage },
});

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
  auth: { persistSession: false, autoRefreshToken: false, storage: noopStorage },
});

export interface Submission {
  id?: string;
  created_at?: string;
  name: string;
  listening_correct?: number | null;
  listening_band?: number | null;
  reading_correct?: number | null;
  reading_band?: number | null;
  writing_t1_question?: string | null;
  writing_t1_essay?: string | null;
  writing_t1_ta?: number | null;
  writing_t1_cc?: number | null;
  writing_t1_lr?: number | null;
  writing_t1_gra?: number | null;
  writing_t1_band?: number | null;
  writing_t2_question?: string | null;
  writing_t2_essay?: string | null;
  writing_t2_ta?: number | null;
  writing_t2_cc?: number | null;
  writing_t2_lr?: number | null;
  writing_t2_gra?: number | null;
  writing_t2_band?: number | null;
  writing_band?: number | null;
  speaking_recording_url?: string | null;
  speaking_band?: number | null;
  overall_band?: number | null;
}
