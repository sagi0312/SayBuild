"use client";
import { useState, useRef, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
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
  onShowAliases?: (show: boolean) => void;
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

export const VoicePanel = ({
  onTranscriptChange,
  onShowAliases,
}: VoicePanelProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const finalRef = useRef<string>("");
  const prevTranscriptRef = useRef("");

  useEffect(() => {
    if (!isListening && finalRef.current.trim()) {
      onTranscriptChange?.(finalRef.current);
    }
  }, [isListening, onTranscriptChange]);

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

      if (newFinals) {
        finalRef.current += newFinals;
      }

      const fullTranscript = finalRef.current + interim;
      setTranscript(fullTranscript);

      const prepositions = [
        "below",
        "above",
        "under",
        "inside",
        "next to",
        "beside",
      ];
      const current = fullTranscript.toLowerCase();
      const prev = prevTranscriptRef.current.toLowerCase();

      const hasNewPreposition = prepositions.some(
        (prep) => current.includes(prep) && !prev.includes(prep)
      );

      if (hasNewPreposition) {
        onShowAliases?.(true);
      }

      prevTranscriptRef.current = fullTranscript;
    };

    rec.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
    finalRef.current = "";
    prevTranscriptRef.current = "";
    setTranscript("");
  };

  return (
    <div className="space-y-4">
      {/* Microphone Button */}
      <div
        className={clsx(
          "border pl-10 pt-5 pb-5 cursor-pointer rounded-full transition-colors flex flex-row items-center gap-10",
          isListening
            ? "bg-red-500 border-red-500"
            : "bg-green-200 border-gray-300 hover:bg-gray-50"
        )}
        onClick={toggle}
      >
        {isListening ? (
          <FaPaperPlane className="text-gray-900" size="2rem" />
        ) : (
          <FaMicrophone className="text-gray-900" size="2rem" />
        )}
        <div>
          <h2
            className={clsx(
              "text-xl font-medium",
              isListening ? "text-white" : "text-gray-800"
            )}
          >
            {isListening ? "Send Now" : "Start Voice Command"}
          </h2>
        </div>
      </div>

      {/* Transcript Display */}
      <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Transcript:</p>
          <button
            className="text-xs bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={() => {
              setTranscript("");
              finalRef.current = "";
              prevTranscriptRef.current = "";
              onTranscriptChange?.("");
            }}
          >
            Clear
          </button>
        </div>
        <div className="text-gray-800">
          <textarea
            className="w-full resize-none bg-transparent outline-none"
            rows={3}
            value={transcript || "Your text will appear here..."}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Your text will appear here..."
          />
        </div>
      </div>
    </div>
  );
};
