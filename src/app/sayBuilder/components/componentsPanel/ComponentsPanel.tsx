"use client";
import { COMPONENT_LIBRARY } from "@/app/pageRenderer/library/componentLibrary";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useState } from "react";

export function ComponentsPanel() {
  const { isListening, startListening, stopListening, transcript } =
    useSpeechRecognition();

  const handleVoiceClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Components</h2>
        <p className="text-sm text-gray-600">Drag to add or use voice</p>
      </div>

      {/* Voice Button */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={handleVoiceClick}
          className={`w-full p-4 rounded-lg border-2 border-dashed transition-all duration-200 ${
            isListening
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="font-medium">
              {isListening ? "Listening..." : "Voice Command"}
            </span>
          </div>
          <p className="text-xs mt-1 opacity-75">
            {isListening ? "Say your command" : "Click to start voice input"}
          </p>
        </button>
      </div>

      {/* Components List */}
      <div className="flex-1 p-4 overflow-y-auto">
        {Array.from(COMPONENT_LIBRARY.entries()).map(([type, library]) => (
          <div
            key={type}
            className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mb-3 cursor-pointer"
            onClick={() => console.log(`${type} clicked`)}
          >
            <h3 className="font-semibold text-gray-800">{type}</h3>
            <p className="text-sm text-gray-600">
              {library.hasChildren
                ? "Can contain other components"
                : "Standalone component"}
            </p>
          </div>
        ))}
      </div>
      {/* Transcript Display */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-700 mb-1">Transcript:</h3>
        <div className="text-sm text-gray-600 min-h-[40px]">
          {transcript || <span className="opacity-50">No transcript yet</span>}
        </div>
      </div>
    </div>
  );
}
