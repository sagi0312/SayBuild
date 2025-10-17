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
    return <div className="p-8">Loading preview...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div>{renderComponent(components)}</div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <PreviewContent />
    </Suspense>
  );
}
