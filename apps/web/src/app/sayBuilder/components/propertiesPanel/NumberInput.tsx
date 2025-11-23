"use client";
import { useState } from "react";

type Props = {
  label: string;
  value: number;
  onBlur?: (value: number) => void;
};

export function NumberInput({ label, value, onBlur }: Props) {
  const [inputValue, setInputValue] = useState(value ?? 0);

  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      <input
        type="number"
        value={inputValue}
        onBlur={() => {
          onBlur?.(inputValue);
        }}
        onChange={(e) => {
          setInputValue(Number(e.target.value));
        }}
        autoComplete="off"
        data-1p-ignore
        className="w-full rounded bg-[#f6f7fb] px-3 py-2 text-xs text-blue-700"
      />
    </label>
  );
}
