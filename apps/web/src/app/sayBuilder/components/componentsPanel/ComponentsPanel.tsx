"use client";
import { VoicePanel } from "./VoicePanel";
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

      <div>
        <h2 className="text-lg text-gray-800 mb-4 flex items-center font-semibold justify-center">
          Available Components
        </h2>

        <div>
          <div className="bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Box</h3>
            </div>
          </div>

          <div className="bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Text</h3>
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Button</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
