"use client";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

export const VoicePanel = () => {
  const [isListenting, setIsListening] = useState(false);
  return (
    <div className="border border-gray-300 p-4 m-4 cursor-pointer hover:bg-gray-100">
      <div className="flex mb-4 items-center justify-center">
        <FaMicrophone className="text-gray-500 mr-2" size={"3rem"} />
        <h2 className="text-black text-2xl">click me</h2>
      </div>
    </div>
  );
};
