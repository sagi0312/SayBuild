import fs from "fs/promises";
import path from "path";
import type { Component } from "@saybuild/shared";

export class TreeReader {
  private dataPath: string;

  constructor() {
    // Path to data/component-tree.json from the compiled dist folder
    this.dataPath = path.join(__dirname, "../data/component-tree.json");
  }
  /**
   * READ: Get the entire component tree from disk
   * Reads fresh data every time (picks up changes from Writer)
   */
  async getTree(): Promise<Component> {
    const fileContent = await fs.readFile(this.dataPath, "utf-8");
    return JSON.parse(fileContent);
  }
}

export const treeReader = new TreeReader();
