"use client";
import { useState, useRef, useEffect } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import clsx from "clsx";

interface WindowWithSpeechRecognition extends Window {
  webkitSpeechRecognition: new () => SpeechRecognitionInstance;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
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

interface VoiceRecorderProps {
  onTranscriptChange?: (transcript: string) => void;
  onShowAliases?: (show: boolean) => void;
}

export const VoiceRecorder = ({
  onTranscriptChange,
  onShowAliases,
}: VoiceRecorderProps) => {
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
      alert("Speech recognition not supported in this browser.");
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
    <>
      <button
        onClick={toggle}
        className={clsx(
          "w-full p-3 rounded-2xl transition-all flex items-center gap-4 shadow-sm",
          isListening
            ? "bg-red-200 hover:bg-red-300 border-1 border-red-600"
            : "bg-gradient-to-r from-green-200 to-blue-300 hover:from-green-300 hover:to-blue-400 border-1 border-green-600"
        )}
      >
        <div
          className={clsx(
            "rounded-full p-2",
            isListening ? "bg-gray-300" : "bg-gray-100"
          )}
        >
          {isListening ? (
            <FaPaperPlane className="text-black" size="1.5rem" />
          ) : (
            <FaMicrophone className="text-black" size="1.5rem" />
          )}
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-l font-semibold text-gray-700">
            {isListening ? "Click to Send" : "Start Recording"}
          </h2>
        </div>
        {isListening && (
          <div className="flex gap-1 justify-center items-center">
            <span className="w-1 h-4 bg-gray-700 rounded-full animate-pulse" />
            <span className="w-1 h-4 bg-gray-700 rounded-full animate-pulse delay-75" />
            <span className="w-1 h-4 bg-gray-700 rounded-full animate-pulse delay-150" />
          </div>
        )}
      </button>

      {/* Transcript Display */}

      <div className="bg-gray-50 border-1 border-gray-300 rounded-lg p-4 w-full min-h-[100px] max-h-40 overflow-y-auto mt-2">
        <div className="flex justify-between ">
          <p className="text-sm text-gray-600">Transcript</p>
          <button
            className="text-xs bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={() => {
              setTranscript("");
              finalRef.current = "";
              prevTranscriptRef.current = "";
            }}
          >
            Clear
          </button>
        </div>
        <div className="text-gray-800 whitespace-pre-wrap">{transcript}</div>
      </div>
    </>
  );
};
