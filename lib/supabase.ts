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
  task_type: string;
  question_id: number;
  question_text: string;
  user_essay: string;
  word_count: number;
  score_ta: number;
  score_cc: number;
  score_lr: number;
  score_gra: number;
  band_score: number;
  strengths: string[];
  improvements: string[];
  detailed_feedback: string;
}

