"use client";
import { COMPONENT_LIBRARY } from "@/app/pageRenderer/library/componentLibrary";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { VoicePanel } from "./VoicePanel";

export function ComponentsPanel() {
  return (
    <>
      <VoicePanel />
    </>
  );
}
