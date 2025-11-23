"use client";
import { useState } from "react";

interface TextInputProps {
  onTranscriptChange?: (transcript: string) => void;
}

export const TextInput = ({ onTranscriptChange }: TextInputProps) => {
  const [transcript, setTranscript] = useState("");

  const handleTextSubmit = () => {
    if (transcript.trim()) {
      onTranscriptChange?.(transcript);
      setTranscript("");
    }
  };

  return (
    <div>
      <textarea
        className="p-4 m-4 border border-gray-300 rounded shadow-sm bg-white text-black focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
        rows={4}
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Type your command here..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            handleTextSubmit();
          }
        }}
      />
      <div className="flex gap-2 justify-center">
        <button
          onClick={handleTextSubmit}
          disabled={!transcript.trim()}
          className={`flex border-1 rounded-lg text-black w-15 items-center justify-center ${
            !transcript.trim()
              ? "bg-gray-300 border-blue-300 cursor-not-allowed"
              : "bg-gradient-to-r from-green-200 to-blue-300 border-green-600 hover:from-green-300 hover:to-blue-400"
          }`}
        >
          Send
        </button>
        <button
          onClick={() => setTranscript("")}
          disabled={!transcript.trim()}
          className={`flex border-1 rounded-lg text-black w-15 items-center justify-center ${
            !transcript.trim()
              ? "bg-gray-300 border-blue-300 cursor-not-allowed"
              : "bg-gradient-to-r from-green-200 to-blue-300 border-green-600 hover:from-green-300 hover:to-blue-400"
          }`}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
