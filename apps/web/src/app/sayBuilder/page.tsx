"use client";
import { useEffect, useRef, useState } from "react";
import { BuiderHeader } from "./components/builderHeader/BuiderHeader";
import {
  ComponentOverlay,
  ComponentPositions,
} from "./components/componentOverlay/ComponentOverlay";
import { PropertiesPanel } from "./components/propertiesPanel/PropertiesPanel";
import { ComponentsPanel } from "./components/componentsPanel/ComponentsPanel";
import { useDebouncer } from "@/hooks/useDebouncer";
import { callLLMToParseTranscript } from "@/lib/utils/callLLMToParseTranscript";
import { Component, ComponentProps, MESSAGE_TYPES } from "@saybuild/shared";
import { findComponentByKey } from "@saybuild/shared/utils/findComponentByKey";

export type Message = {
  type: string;
  [key: string]: string | number | object | undefined;
};

export default function SayBuilderPage() {
  const [componentTree, setComponentTree] = useState<Component | null>(null);

  useEffect(() => {
    const fetchComponentTree = async () => {
      try {
        const response = await fetch("/api/tree");
        const data: Component = await response.json();
        setComponentTree(data);
      } catch (error) {
        console.error("Error fetching component tree:", error);
      }
    };

    fetchComponentTree();
  }, []);

  const [componentPositions, setComponentPositions] = useState<
    ComponentPositions[]
  >([]);
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>(
    componentTree ? componentTree.key : ""
  );

  const selectedComponent =
    componentTree && findComponentByKey(componentTree, selectedComponentKey);
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

  const handleOnChange = async (
    value: string | number,
    propName: ComponentProps,
    componentKeyToUpdate: string
  ) => {
    await fetch("/api/component", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        componentKey: componentKeyToUpdate,
        props: { [propName]: value },
      }),
    });
  };

  const [showAliases, setShowAliases] = useState(false);
  const aliasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleShowAliases = (show: boolean) => {
    setShowAliases(show);
    if (show) {
      if (aliasTimeoutRef.current) {
        clearTimeout(aliasTimeoutRef.current);
      }
      aliasTimeoutRef.current = setTimeout(() => {
        setShowAliases(false);
      }, 2000);
    }
  };

  const handleTranscriptChange = async (transcript: string) => {
    const result = await callLLMToParseTranscript(transcript);

    if (result.success) {
      console.log("Success!", result.message);
    } else {
      console.log("Failed:", result.message);
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return;
      if (debouncedComponentTree === null) return;

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
    if (debouncedComponentTree === null) return;
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
          <ComponentsPanel
            onTranscriptChange={handleTranscriptChange}
            onShowAliases={handleShowAliases}
          />
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
            showAliases={showAliases}
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
