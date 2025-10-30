"use client";
import clsx from "clsx";

interface ModeToggleProps {
  mode: "voice" | "text";
  onModeChange: (mode: "voice" | "text") => void;
}

export const ModeToggle = ({ mode, onModeChange }: ModeToggleProps) => {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-full justify-center">
      <button
        onClick={() => onModeChange("voice")}
        className={clsx(
          "flex p-1 rounded-full transition-colors",
          mode === "voice"
            ? "bg-green-200 shadow-sm text-gray-900"
            : "text-gray-600 hover:text-gray-900"
        )}
      >
        🎤 voice
      </button>
      <button
        onClick={() => onModeChange("text")}
        className={clsx(
          "flex p-1 rounded-full transition-colors",
          mode === "text"
            ? "bg-green-200 shadow-sm text-gray-900"
            : "text-gray-600 hover:text-gray-900"
        )}
      >
        ⌨️ type
      </button>
    </div>
  );
};
