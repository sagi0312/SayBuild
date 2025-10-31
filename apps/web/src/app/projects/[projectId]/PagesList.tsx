"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreatePageModal } from "./CreatePageModal";

interface Page {
  id: string;
  name: string;
  updated_at: string;
}

interface PagesListProps {
  pages: Page[] | null;
  projectId: string;
  projectName: string;
}

export function PagesList({ pages, projectId, projectName }: PagesListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();

  const handleCreatePage = async (pageName: string) => {
    setIsCreating(true);

    try {
      const response = await fetch("/api/page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageName,
          projectId,
        }),
      });

      if (response.ok) {
        setIsModalOpen(false);
        router.refresh();
      } else {
        alert("Failed to create page. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create page. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{projectName}</h1>
            <p className="text-gray-600 text-sm mt-1">Pages</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            + New Page
          </button>
        </div>

        {pages && pages.length > 0 ? (
          <div className="grid gap-4">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`/sayBuilder?pageId=${page.id}`}
                className="block p-6 bg-green-100 border-1 border-gray-300 rounded-lg hover:border-green-400 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {page.name}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Last updated {new Date(page.updated_at).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              No pages yet. Create your first page!
            </p>
          </div>
        )}
      </div>

      <CreatePageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePage}
        projectId={projectId}
        isLoading={isCreating}
      />
    </>
  );
}
