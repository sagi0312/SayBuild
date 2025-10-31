import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { pageName, projectId } = await req.json();

    const supabase = await createClient();

    const rootKey = randomUUID();
    const rootAlias = rootKey.substring(0, 4);

    const { error } = await supabase.from("pages").insert([
      {
        id: randomUUID(),
        name: pageName,
        project_id: projectId,
        component_tree: {
          key: rootKey,
          alias: rootAlias,
          type: "Box",
          props: {
            backgroundColor: "#a3ececff",
            padding: 50,
            height: "100vh",
          },
          children: [],
        },
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to create page" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create page" },
      { status: 500 }
    );
  }
}
