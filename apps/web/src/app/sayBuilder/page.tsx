"use client";
import { useEffect, useRef, useState } from "react";
import {
  ComponentOverlay,
  ComponentPositions,
} from "./components/componentOverlay/ComponentOverlay";
import { PropertiesPanel } from "./components/propertiesPanel/PropertiesPanel";
import { ComponentsPanel } from "./components/componentsPanel/ComponentsPanel";
import { useDebouncer } from "@/hooks/useDebouncer";
import { callLLMToParseTranscript } from "@/lib/callLLMToParseTranscript";
import { Component, ComponentProps, MESSAGE_TYPES } from "@saybuild/shared";
import { findComponentByKey } from "@saybuild/shared/utils/findComponentByKey";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { BuilderHeader } from "../header/builderHeader/BuilderHeader";
import { Suspense } from "react";

export default function SayBuilderPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SayBuilderContent />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export type Message = {
  type: string;
  [key: string]: string | number | object | undefined;
};

function SayBuilderContent() {
  const searchParams = useSearchParams();
  const pageId = searchParams.get("pageId");
  const [componentTree, setComponentTree] = useState<Component>();

  const fetchComponentTree = async () => {
    if (!pageId) {
      console.error("No pageId provided");
      return;
    }

    try {
      const response = await fetch(`/api/tree?pageId=${pageId}`);
      const componentTree = await response.json();
      setComponentTree(componentTree);
    } catch (error) {
      console.error("Error fetching component tree:", error);
    }
  };

  useEffect(() => {
    fetchComponentTree();
  }, []);

  useEffect(() => {
    if (!pageId) return;

    const supabase = createClient();

    const channel = supabase
      .channel(`page:${pageId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "pages",
          filter: `id=eq.${pageId}`,
        },
        (payload) => {
          setComponentTree(payload.new.component_tree);
        }
      )
      .subscribe((status) => {
        console.log("📡 Subscription status:", status);
      });

    return () => {
      console.log("🔌 Unsubscribing from channel");
      supabase.removeChannel(channel);
    };
  }, [pageId]);

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
        window.location.origin
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
        pageId: pageId,
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

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTranscriptChange = async (transcript: string) => {
    if (!pageId) {
      console.error("No pageId provided");
      return;
    }
    try {
      setErrorMessage(null);
      await callLLMToParseTranscript(transcript, pageId);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
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
      <BuilderHeader debouncedComponentTree={debouncedComponentTree} />
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errorMessage}
        </div>
      )}
      <div className="flex-1 flex overflow-hidden">
        <aside
          style={{ backgroundImage: "url('/mic.jpg')" }}
          className="bg-cover bg-center bg-opacity-90 rounded-lg shadow-lg p-3"
        >
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
        {selectedComponent && (
          <aside className="w-80 bg-white border-l">
            <PropertiesPanel
              selectedComponent={selectedComponent}
              onChange={handleOnChange}
            />
          </aside>
        )}
      </div>
    </div>
  );
}
