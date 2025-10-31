"use client";

import { useState } from "react";

interface CreatePageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pageName: string) => void;
  isLoading?: boolean;
}

export function CreatePageModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}: CreatePageModalProps) {
  const [pageName, setPageName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pageName.trim() && !isLoading) {
      onSubmit(pageName.trim());
      setPageName("");
    }
  };

  const isDisabled = !pageName.trim() || isLoading;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Create New Page
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            placeholder="Enter page name..."
            className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            autoFocus
            disabled={isLoading}
          />

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className={`flex border-1 rounded-lg text-black w-15 items-center justify-center ${
                isLoading
                  ? "bg-gray-300 border-blue-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-200 to-blue-300 border-green-600 hover:from-green-300 hover:to-blue-400"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isDisabled}
              className={`flex border-1 rounded-lg text-black w-15 items-center justify-center ${
                isDisabled
                  ? "bg-gray-300 border-blue-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-200 to-blue-300 border-green-600 hover:from-green-300 hover:to-blue-400"
              }`}
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
