export const SETUP_SQL = `-- Run this in your Supabase SQL Editor to create the submissions table:

CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  task_type TEXT NOT NULL,
  question_id INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  user_essay TEXT NOT NULL,
  word_count INTEGER NOT NULL,
  score_ta NUMERIC(3,1),
  score_cc NUMERIC(3,1),
  score_lr NUMERIC(3,1),
  score_gra NUMERIC(3,1),
  band_score NUMERIC(3,1),
  strengths JSONB,
  improvements JSONB,
  detailed_feedback TEXT
);`;
