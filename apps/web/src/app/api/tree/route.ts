import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import type { Component } from "@saybuild/shared";

export const dataPath = path.join(
  process.cwd(),
  "../../data/component-tree.json"
);

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataPath, "utf-8");
    const tree: Component = JSON.parse(fileContent);
    return NextResponse.json(tree);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read component tree" },
      { status: 500 }
    );
  }
}
