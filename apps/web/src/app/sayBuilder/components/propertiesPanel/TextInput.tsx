"use client";
import { useState } from "react";

type TextInputProps = {
  label: string;
  value: string;
  onBlur?: (value: string) => void;
};

export function TextInput({ label, value, onBlur }: TextInputProps) {
  const [inputValue, setInputValue] = useState(value ?? "");

  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          onBlur?.(inputValue);
        }}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-blue-700 text-xs"
      />
    </label>
  );
}
