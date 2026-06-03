import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, Submission } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body: Submission = await req.json();

    console.log("[submit] Saving submission for:", body.name);

    const { data, error } = await supabaseAdmin
      .from("submissions")
      .insert(body)
      .select("id")
      .single();

    if (error) {
      console.error("[submit] Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("[submit] Saved with ID:", data.id);
    return NextResponse.json({ id: data.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[submit] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
