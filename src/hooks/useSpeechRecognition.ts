import { useEffect, useRef, useState } from "react";

// Add global SpeechRecognition type for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = typeof window.SpeechRecognition;

export const useSpeechRecognition = () => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();

      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event: any) => {
        let finalText = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const res = event.results[i];
          if (res.isFinal) finalText += res[0].transcript + " ";
        }
        if (finalText) {
          setTranscript((prev) => (prev + finalText).trim());
          console.log("Voice command:", finalText);
        }
      };

      // Handle when recognition starts
      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      // Handle when recognition ends
      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      // Handle errors
      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognitionInstance;
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return { isListening, startListening, stopListening, transcript };
};
