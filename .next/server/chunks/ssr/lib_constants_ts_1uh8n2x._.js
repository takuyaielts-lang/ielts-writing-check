module.exports=[64600,a=>{"use strict";let b=`-- ① submissions テーブルを作成
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
`;a.s(["BAND_TABLE",0,{10:9,9:8.5,8:8,7:7.5,6:7,5:6,4:5.5,3:5,2:4,1:3.5,0:3},"SETUP_SQL",0,b,"roundHalf",0,a=>Math.round(2*a)/2])}];

//# sourceMappingURL=lib_constants_ts_1uh8n2x._.js.map