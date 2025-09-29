"use client";
import { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";
import clsx from "clsx";
interface WindowWithSpeechRecognition extends Window {
  webkitSpeechRecognition: new () => SpeechRecognitionInstance;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface VoicePanelProps {
  onTranscriptChange?: (transcript: string) => void;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
}

export const VoicePanel = ({ onTranscriptChange }: VoicePanelProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const finalRef = useRef<string>("");

  const toggle = () => {
    if (!("webkitSpeechRecognition" in window)) {
      setTranscript("Speech recognition not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
      setIsListening(false);
      return;
    }

    const rec = new (
      window as WindowWithSpeechRecognition
    ).webkitSpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";

    rec.onresult = (event: SpeechRecognitionEvent) => {
      let newFinals = "";
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) newFinals += r[0].transcript;
        else interim += r[0].transcript;
      }

      if (newFinals) finalRef.current += newFinals;
      setTranscript(finalRef.current + interim);
      onTranscriptChange?.(finalRef.current + interim);
    };

    rec.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
    finalRef.current = "";
    setTranscript("");
  };

  return (
    <div className="space-y-4">
      {/* Microphone Button */}
      <div
        className={clsx(
          "border p-4 cursor-pointer rounded-full transition-colors flex flex-row items-center justify-center gap-4",
          isListening
            ? "bg-red-500 border-red-500"
            : "bg-green-200 border-gray-300 hover:bg-gray-50"
        )}
        onClick={toggle}
      >
        <FaMicrophone
          className={clsx(isListening ? "text-white" : "text-gray-900")}
          size="2.5rem"
        />
        <div>
          <h2
            className={clsx(
              "text-xl font-medium",
              isListening ? "text-white" : "text-gray-800"
            )}
          >
            {isListening ? "Listening..." : "Start Voice Command"}
          </h2>
        </div>
      </div>

      {/* Transcript Display */}
      <div className="m-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-600 mb-2">Transcript:</p>
        <div className="text-gray-800">
          {transcript || (
            <span className="text-gray-400 italic">
              Your voice command will appear here...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
