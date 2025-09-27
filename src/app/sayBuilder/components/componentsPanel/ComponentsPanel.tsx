"use client";
import { VoicePanel } from "./VoicePanel";

export function ComponentsPanel() {
  const handleTranscriptChange = (transcript: string) => {
    console.log("Transcript:", transcript);
  };

  return (
    <>
      <VoicePanel onTranscriptChange={handleTranscriptChange} />
    </>
  );
}
