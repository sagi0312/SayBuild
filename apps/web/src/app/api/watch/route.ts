// apps/web/src/app/api/watch/route.ts
import fs from "fs/promises";
import path from "path";
import chokidar from "chokidar";

const dataPath = path.join(
  process.cwd(),
  "../../../../../../data/component-tree.json"
);

export async function GET() {}
