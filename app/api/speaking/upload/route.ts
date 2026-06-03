import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audio = formData.get("audio") as File | null;
    const name = (formData.get("name") as string) || "unknown";

    if (!audio) {
      return NextResponse.json({ error: "音声ファイルがありません。" }, { status: 400 });
    }

    const ext = audio.type.includes("webm") ? "webm" : "mp4";
    const fileName = `${Date.now()}-${name.replace(/\s+/g, "_")}.${ext}`;

    const arrayBuffer = await audio.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log("[speaking/upload] Uploading:", fileName, "size:", buffer.length);

    const { data, error } = await supabaseAdmin.storage
      .from("speaking-recordings")
      .upload(fileName, buffer, {
        contentType: audio.type || "audio/webm",
        upsert: false,
      });

    if (error) {
      console.error("[speaking/upload] Storage error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data: urlData } = supabaseAdmin.storage
      .from("speaking-recordings")
      .getPublicUrl(data.path);

    console.log("[speaking/upload] Public URL:", urlData.publicUrl);

    return NextResponse.json({ url: urlData.publicUrl });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[speaking/upload] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
