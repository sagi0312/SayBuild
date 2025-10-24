import chokidar, { FSWatcher } from "chokidar";
import { dataPath } from "@/app/api/tree/route";

let watcher: FSWatcher | null = null;

export function startFileWatcher(callback: () => void) {
  if (watcher) {
    return watcher; // Already watching
  }

  watcher = chokidar.watch(dataPath, {
    persistent: true,
  });

  watcher.on("change", () => {
    console.log("File changed!");
    callback();
  });

  return watcher;
}
