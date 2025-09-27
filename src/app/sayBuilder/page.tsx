"use client";
import { useEffect, useRef, useState } from "react";
import { SAMPLE_DATA } from "../pageRenderer/library/sample-data";
import { BuiderHeader } from "./components/builderHeader/BuiderHeader";
import {
  ComponentOverlay,
  ComponentPositions,
} from "./components/componentOverlay/ComponentOverlay";
import { Component, ComponentProps, MESSAGE_TYPES } from "@/lib/types";
import { findComponent } from "@/lib/utils/findComponent";
import { updateComponent } from "@/lib/utils/updateComponent";
import { PropertiesPanel } from "./components/propertiesPanel/PropertiesPanel";
import { ComponentsPanel } from "./components/componentsPanel/ComponentsPanel";
import { useDebouncer } from "@/hooks/useDebouncer";

export type Message = {
  type: string;
  [key: string]: string | number | object | undefined;
};

export default function SayBuilderPage() {
  const [componentTree, setComponentTree] = useState<Component>(SAMPLE_DATA);
  const [componentPositions, setComponentPositions] = useState<
    ComponentPositions[]
  >([]);
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>(
    componentTree.key
  );

  const selectedComponent = findComponent(componentTree, selectedComponentKey);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debouncedComponentTree = useDebouncer(componentTree, 300);

  const sendMessageToHost = (message: Message) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        message,
        "http://localhost:3000"
      );
    }
  };

  const handleOnChange = (
    value: string | number,
    propName: ComponentProps,
    componentKeyToUpdate: string
  ) => {
    const updatedTree = updateComponent(
      componentTree,
      componentKeyToUpdate,
      propName,
      value
    );
    setComponentTree(updatedTree);
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return;

      switch (e.data.type) {
        case MESSAGE_TYPES.HOST_READY: {
          sendMessageToHost({
            type: MESSAGE_TYPES.UPDATE_COMPONENTS,
            components: debouncedComponentTree,
          });
          break;
        }
        case MESSAGE_TYPES.COMPONENT_POSITIONS: {
          setComponentPositions(e.data.positions);
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [debouncedComponentTree]);

  useEffect(() => {
    sendMessageToHost({
      type: MESSAGE_TYPES.UPDATE_COMPONENTS,
      components: debouncedComponentTree,
    });
  }, [debouncedComponentTree, sendMessageToHost]);

  return (
    <div className="h-screen flex flex-col">
      <BuiderHeader debouncedComponentTree={debouncedComponentTree} />
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-80 bg-white border-r">
          <ComponentsPanel />
        </aside>

        <main className="flex flex-1 border-t border-gray-300">
          <section className="flex-1 p-6 bg-gray-100 border-r border-gray-300 relative">
            <iframe
              ref={iframeRef}
              src="/pageRenderer"
              title="Preview"
              className="w-full h-full bg-white border border-gray-300 rounded-lg"
            />
          </section>
          <ComponentOverlay
            componentPositions={componentPositions}
            iframeRef={iframeRef}
            onComponentClick={(key: string) => {
              setSelectedComponentKey(key);
            }}
          />
        </main>

        <aside className="w-80 bg-white border-l">
          <PropertiesPanel
            selectedComponent={selectedComponent}
            onChange={handleOnChange}
          />
        </aside>
      </div>
    </div>
  );
}
