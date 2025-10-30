export async function callLLMToParseTranscript(
  transcript: string,
  pageId: string
) {
  const response = await fetch("/api/tree", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transcript, pageId }),
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(`Daily limit reached. Resets at midnight.`);
    }
    throw new Error(data.error || "Failed to process command");
  }

  return data;
}
