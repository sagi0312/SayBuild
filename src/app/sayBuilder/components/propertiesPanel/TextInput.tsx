"use client";

import { useDebouncer } from "@/hooks/useDebouncer";
import { useEffect, useState, useRef } from "react";

type TextInputProps = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
};

export function TextInput({ label, value, onChange }: TextInputProps) {
  const [inputValue, setInputValue] = useState(value ?? "");
  const debouncedValue = useDebouncer(inputValue, 500);
  const isUserInput = useRef(false);

  // Update inputValue when props change (but don't trigger onChange)
  useEffect(() => {
    if (!isUserInput.current) {
      setInputValue(value ?? "");
    }
  }, [value]);

  // Only call onChange when user actually changed the input
  useEffect(() => {
    if (isUserInput.current) {
      onChange?.(debouncedValue);
      isUserInput.current = false; // Reset flag after handling user input
    }
  }, [debouncedValue, onChange]);

  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          isUserInput.current = true; // Mark as user input
          setInputValue(e.target.value);
        }}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-blue-700 text-xs"
      />
    </label>
  );
}
