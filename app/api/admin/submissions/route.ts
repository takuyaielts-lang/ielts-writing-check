import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(300);

    if (error) throw error;
    return NextResponse.json({ submissions: data || [] });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[admin/submissions] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Speaking バンドスコアの後付け更新
export async function PATCH(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, speaking_band } = await req.json();
    const overall_band_raw = speaking_band; // overall は再計算が必要なため別途フロントで処理

    const { error } = await supabaseAdmin
      .from("submissions")
      .update({ speaking_band, overall_band: overall_band_raw })
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
