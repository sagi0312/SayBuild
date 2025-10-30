// VoicePanel.tsx
"use client";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { VoiceRecorder } from "./VoiceRecorder";
import { TextInput } from "./TextInput";

interface VoicePanelProps {
  onTranscriptChange?: (transcript: string) => void;
  onShowAliases?: (show: boolean) => void;
}

export const VoicePanel = ({
  onTranscriptChange,
  onShowAliases,
}: VoicePanelProps) => {
  const [mode, setMode] = useState<"voice" | "text">("voice");

  return (
    <div className="space-y-4 flex justify-center flex-col items-center">
      <ModeToggle mode={mode} onModeChange={setMode} />

      {mode === "voice" ? (
        <VoiceRecorder
          onTranscriptChange={onTranscriptChange}
          onShowAliases={onShowAliases}
        />
      ) : (
        <TextInput onTranscriptChange={onTranscriptChange} />
      )}
    </div>
  );
};
