"use client";
import { VoicePanel } from "./VoicePanel";

export function ComponentsPanel() {
  const handleTranscriptChange = (transcript: string) => {
    console.log("Transcript:", transcript);
  };

  return (
    <>
      <VoicePanel onTranscriptChange={handleTranscriptChange} />
      <div className="m-8 text-black font-bold text-lg underline">
        AVAILABLE COMPONENTS:
      </div>
      <div className="m-8 text-black">
        <span className="m-2 font-bold">1. Button:</span>A clickable button
        component with customizable text and background color.
      </div>
      <div className="m-8 text-black">
        <span className="m-2 font-bold"> 2. Text:</span> A text display
        component with customizable content, font size, font weight, and color.
      </div>
      <div className="m-8 text-black">
        <span className="m-2 font-bold">3. Box:</span> A box input component
        with customizable background color, padding, width, and add children
        components to it.
      </div>
    </>
  );
}
