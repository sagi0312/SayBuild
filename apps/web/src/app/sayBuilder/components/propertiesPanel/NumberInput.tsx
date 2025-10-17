"use client";

import { useDebouncer } from "@/hooks/useDebouncer";
import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  value: number;
  onChange?: (value: number) => void;
};

export function NumberInput({ label, value, onChange }: Props) {
  const [inputValue, setInputValue] = useState(value ?? 0);
  const debouncedValue = useDebouncer(inputValue, 500);
  const isUserInput = useRef(false);

  // Update inputValue when props change (but don't trigger onChange)
  useEffect(() => {
    if (!isUserInput.current) {
      setInputValue(value ?? 0);
    }
  }, [value]);

  // Only call onChange when user actually changed the input
  useEffect(() => {
    if (isUserInput.current) {
      onChange?.(debouncedValue);
      // Reset flag after handling user input
      isUserInput.current = false;
    }
  }, [debouncedValue, onChange]);

  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          isUserInput.current = true; // Mark as user input
          setInputValue(Number(e.target.value));
        }}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-xs text-blue-700"
      />
    </label>
  );
}
