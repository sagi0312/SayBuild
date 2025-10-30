import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { findComponentByKey } from "@saybuild/shared/utils/findComponentByKey";

export async function PATCH(req: Request): Promise<NextResponse> {
  try {
    const { componentKey, props, pageId } = await req.json();

    if (!pageId) {
      return NextResponse.json(
        { error: "pageId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Fetch current tree
    const { data, error: fetchError } = await supabase
      .from("pages")
      .select("component_tree")
      .eq("id", pageId)
      .single();

    if (fetchError || !data) {
      return NextResponse.json(
        { error: "Failed to fetch page" },
        { status: 500 }
      );
    }

    // Find and update component
    const tree = data.component_tree;
    const component = findComponentByKey(tree, componentKey);

    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      );
    }

    // Update props
    component.props = {
      ...component.props,
      ...props,
    };

    // Save back to database
    const { error: updateError } = await supabase
      .from("pages")
      .update({ component_tree: tree })
      .eq("id", pageId);

    if (updateError) {
      return NextResponse.json(
        { error: "Failed to update page" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update component" },
      { status: 500 }
    );
  }
}
