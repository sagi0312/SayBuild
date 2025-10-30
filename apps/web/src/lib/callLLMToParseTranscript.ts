export async function callLLMToParseTranscript(
  transcript: string,
  pageId: string
) {
  try {
    const response = await fetch("/api/tree", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcript, pageId }),
    });

    const data = await response.json();

    return {
      success: data.success,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to call API",
    };
  }
}
