import { NextRequest } from "next/server";
import { startFileWatcher } from "@/lib/dbWatcher";

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode("data: connected\n\n"));

      // Start watching and notify on changes
      const watcher = startFileWatcher(() => {
        try {
          controller.enqueue(encoder.encode("data: update\n\n"));
        } catch (error) {
          // Controller is closed, ignore
        }
      });

      // Clean up when client disconnects
      req.signal.addEventListener("abort", () => {
        watcher.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
