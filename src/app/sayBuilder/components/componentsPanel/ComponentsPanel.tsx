"use client";
import { VoicePanel } from "./VoicePanel";

export function ComponentsPanel() {
  const handleTranscriptChange = (transcript: string) => {
    console.log("Transcript:", transcript);
  };

  return (
    <div className="p-6 space-y-6">
      <VoicePanel onTranscriptChange={handleTranscriptChange} />

      <div>
        <h2 className="text-lg text-gray-800 mb-4 flex items-center font-semibold justify-center">
          Available Components
        </h2>

        <div>
          {/* Button Component */}
          <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Button</h3>
                <p className="text-gray-600 text-sm">
                  With customizable text and background color.
                </p>
              </div>
            </div>
          </div>

          {/* Text Component */}
          <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Text</h3>
                <p className="text-gray-600 text-sm">
                  With customizable content, font size, font weight, and color.
                </p>
              </div>
            </div>
          </div>

          {/* Box Component */}
          <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Box</h3>
                <p className="text-gray-600 text-sm">
                  With customizable background color, padding, width, and
                  support for child components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
