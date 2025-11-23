"use client";
import { COMPONENT_LIBRARY } from "@/app/pageRenderer/library/componentLibrary";
import { VoicePanel } from "./VoicePanel";
import { v4 as uuid } from "uuid";

interface ComponentsPanelProps {
  onTranscriptChange: (transcript: string) => void;
  onShowAliases: (show: boolean) => void;
}
export function ComponentsPanel({
  onTranscriptChange,
  onShowAliases,
}: ComponentsPanelProps) {
  return (
    <div className="p-6 space-y-6">
      <VoicePanel
        onTranscriptChange={onTranscriptChange}
        onShowAliases={onShowAliases}
      />

      <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
        <h2 className="text-lg text-blue-600 mb-4 flex items-center font-semibold">
          Available Components
        </h2>
        {Array.from(COMPONENT_LIBRARY.entries()).map(([key, entry]) => {
          const component_key = `preview-${key}`;
          const alias = key.substring(0, 4).toLowerCase();
          return (
            <div className="mb-4" key={key}>
              <h3 className="text-black font-semibold mb-2">
                {key.toUpperCase()} :
              </h3>
              <entry.component
                componentKey={component_key}
                alias={alias}
                {...entry.previewProps}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
