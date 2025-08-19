"use client";
import { useState, useEffect } from "react";
import { renderComponent } from "./library/renderComponent";

export const MESSAGE_TYPES = {
  HOST_READY: "HOST_READY",
  UPDATE_COMPONENTS: "UPDATE_COMPONENTS",
  COMPONENT_POSITIONS: "COMPONENT_POSITIONS",
};

export default function PageRenderer() {
  const [components, setComponents] = useState();

  const measureComponentPositions = () => {
    const elements = document.querySelectorAll("[data-component-key]");
    const positions = Array.from(elements).map((element) => {
      const rect = element.getBoundingClientRect();
      const componentKey = element.getAttribute("data-component-key");

      return {
        key: componentKey,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        right: rect.right,
        bottom: rect.bottom,
        x: rect.x,
        y: rect.y,
      };
    });

    // Send positions to Builder
    if (window.parent !== window) {
      window.parent.postMessage(
        {
          type: MESSAGE_TYPES.COMPONENT_POSITIONS,
          positions,
        },
        "http://localhost:3000"
      );
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return;

      if (e.data.type === "UPDATE_COMPONENTS") {
        setComponents(e.data.components);
      }
    };

    window.addEventListener("message", handleMessage);

    // Tell parent component that we're ready
    if (window.parent !== window) {
      window.parent.postMessage(
        { type: MESSAGE_TYPES.HOST_READY },
        "http://localhost:3000"
      );
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    // Small delay to ensure the DOM is ready
    setTimeout(measureComponentPositions, 0);
  }, [components]);
  console.log("here");
  return <div className="p-8">{components && renderComponent(components)}</div>;
}
