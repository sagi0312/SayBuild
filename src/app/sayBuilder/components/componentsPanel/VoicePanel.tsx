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
    <>
      <div
        className={clsx(
          "border border-gray-300 p-4 m-4 cursor-pointer rounded-full",
          isListening ? "bg-gray-500" : "bg-gray-100 hover:bg-gray-200"
        )}
        onClick={toggle}
      >
        <div className="flex justify-center items-center">
          <FaMicrophone
            className={clsx(
              "mr-2",
              isListening ? "text-white" : "text-gray-800"
            )}
            size={"3rem"}
          />
          <h2 className="text-black text-2xl">
            {isListening ? "Listening..." : "Click me"}
          </h2>
        </div>
      </div>
      <div
        className={clsx(
          "m-4 text-black p-4 flex items-center bg-gray-200",

          isListening && "animate-marquee whitespace-nowrap"
        )}
      >
        {transcript || "Transcript will appear here..."}
      </div>
    </>
  );
};
