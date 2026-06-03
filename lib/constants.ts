/** Listening / Reading 正答数 → バンドスコア換算表 */
export const BAND_TABLE: Record<number, number> = {
  10: 9.0,
  9: 8.5,
  8: 8.0,
  7: 7.5,
  6: 7.0,
  5: 6.0,
  4: 5.5,
  3: 5.0,
  2: 4.0,
  1: 3.5,
  0: 3.0,
};

/** 0.5刻みに丸める */
export const roundHalf = (n: number) => Math.round(n * 2) / 2;

export const SETUP_SQL = `-- ① submissions テーブルを作成
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  listening_correct INTEGER,
  listening_band NUMERIC(3,1),
  reading_correct INTEGER,
  reading_band NUMERIC(3,1),
  writing_t1_question TEXT,
  writing_t1_essay TEXT,
  writing_t1_ta NUMERIC(3,1),
  writing_t1_cc NUMERIC(3,1),
  writing_t1_lr NUMERIC(3,1),
  writing_t1_gra NUMERIC(3,1),
  writing_t1_band NUMERIC(3,1),
  writing_t2_question TEXT,
  writing_t2_essay TEXT,
  writing_t2_ta NUMERIC(3,1),
  writing_t2_cc NUMERIC(3,1),
  writing_t2_lr NUMERIC(3,1),
  writing_t2_gra NUMERIC(3,1),
  writing_t2_band NUMERIC(3,1),
  writing_band NUMERIC(3,1),
  speaking_recording_url TEXT,
  speaking_band NUMERIC(3,1),
  overall_band NUMERIC(3,1)
);

-- ② speaking-recordings バケットを作成（Storage → New bucket）
--    名前: speaking-recordings
--    Public: ON（再生URLを公開するため）
`;
