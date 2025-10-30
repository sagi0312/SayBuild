"use client";
import { useState, useEffect } from "react";
import { renderComponent } from "./library/renderComponent";
import { MESSAGE_TYPES } from "@saybuild/shared";

export default function PageRenderer() {
  const [components, setComponents] = useState();

  const measureComponentPositions = () => {
    const elements = document.querySelectorAll("[data-component-key]");
    const positions = Array.from(elements).map((element) => {
      const rect = element.getBoundingClientRect();
      const componentKey = element.getAttribute("data-component-key");
      const alias = element.getAttribute("data-component-alias");

      return {
        key: componentKey,
        alias: alias,
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
        window.location.origin
      );
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;

      if (e.data.type === "UPDATE_COMPONENTS") {
        setComponents(e.data.components);
      }
    };

    window.addEventListener("message", handleMessage);

    // Tell parent component that we're ready
    if (window.parent !== window) {
      window.parent.postMessage(
        { type: MESSAGE_TYPES.HOST_READY },
        window.location.origin
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

  useEffect(() => {
    const handleResize = () => {
      measureComponentPositions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [components]);

  return <div>{components && renderComponent(components)}</div>;
}
