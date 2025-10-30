"use client";
import { useState, useEffect, Suspense } from "react";
import { renderComponent } from "../pageRenderer/library/renderComponent";
import { useSearchParams } from "next/navigation";

function PreviewContent() {
  const [components, setComponents] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const componentTree = searchParams.get("componentTree");

    if (componentTree) {
      try {
        const parsedComponentTree = JSON.parse(
          decodeURIComponent(componentTree)
        );
        setComponents(parsedComponentTree);
      } catch (error) {
        console.error("Failed to parse component data:", error);
      }
    }
  }, [searchParams]);

  if (!components) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading preview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div>{renderComponent(components)}</div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading preview...</p>
          </div>
        </div>
      }
    >
      <PreviewContent />
    </Suspense>
  );
}
