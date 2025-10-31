import { NextResponse } from "next/server";
import type { Component } from "@saybuild/shared";
import { createClient } from "@/lib/supabase/server";
import { checkAndIncrementUsage } from "./usage";
import { setupMCPClient } from "./mcpClient";
import { executeCommand } from "./claude";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get("pageId");

    if (!pageId) {
      return NextResponse.json(
        { error: "pageId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("pages")
      .select("component_tree")
      .eq("id", pageId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch page" },
        { status: 500 }
      );
    }

    return NextResponse.json(data.component_tree);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read component tree" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { transcript, pageId } = await req.json();

    if (!pageId) {
      return NextResponse.json(
        { error: "pageId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Check/update usage
    const usageCheck = await checkAndIncrementUsage(supabase, user.id);
    if (!usageCheck.allowed) {
      return NextResponse.json(usageCheck.error, { status: 429 });
    }

    const { data, error } = await supabase
      .from("pages")
      .select("component_tree")
      .eq("id", pageId)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Failed to fetch page" },
        { status: 500 }
      );
    }

    const tree: Component = data.component_tree;
    const rootKey = tree.key;

    const { client, tools } = await setupMCPClient(pageId);

    await executeCommand(transcript, tree.key, client, tools);

    await client.close();

    return NextResponse.json({
      success: true,
      message: "Command executed successfully",
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
