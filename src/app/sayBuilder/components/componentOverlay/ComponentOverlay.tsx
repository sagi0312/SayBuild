"use client";
import { useState } from "react";

export type ComponentPositions = {
  key: string;
  top: number;
  left: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
  x: number;
  y: number;
};

interface ComponentOverlayProps {
  componentPositions: ComponentPositions[];
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  onComponentClick?: (key: string) => void;
}

export const ComponentOverlay = ({
  componentPositions,
  iframeRef,
  onComponentClick,
}: ComponentOverlayProps) => {
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>("");
  const iframeRect = iframeRef?.current?.getBoundingClientRect() || {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {componentPositions.map((pos) => (
        <div
          key={pos.key}
          className={`absolute pointer-events-auto cursor-pointer border-2 ${
            selectedComponentKey === pos.key
              ? "border-green-500"
              : "border-transparent hover:border-red-500"
          }`}
          style={{
            left: pos.x + iframeRect.left,
            top: pos.y + iframeRect.top + 1,
            width: pos.width + 1,
            height: pos.height + 1,
            zIndex: 1000,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedComponentKey(pos.key);
            if (onComponentClick) {
              onComponentClick(pos.key);
            }
          }}
        />
      ))}
    </div>
  );
};
