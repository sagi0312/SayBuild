"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateProjectModal } from "./CreateProjectModal";

interface Project {
  id: string;
  name: string;
  created_at: string;
}

interface ProjectsListProps {
  projects: Project[] | null;
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();

  const handleCreateProject = async (projectName: string) => {
    setIsCreating(true);
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectName }),
      });

      if (response.ok) {
        setIsModalOpen(false);
        router.refresh();
      } else {
        console.error("Failed to create project");
        alert("Failed to create project. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create project. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: "url('/mic.jpg')" }}
        className="bg-cover bg-center bg-opacity-90 rounded-lg shadow-lg p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Your Projects</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            + New Project
          </button>
        </div>

        {projects && projects.length > 0 ? (
          <div className="grid gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}?projectName=${encodeURIComponent(project.name)}`}
                className="block p-6 bg-green-100 border-1 border-gray-300 rounded-lg hover:border-green-400 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Created {new Date(project.created_at).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              No projects yet. Create your first one!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Create Project
            </button>
          </div>
        )}
      </div>

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
        isLoading={isCreating}
      />
    </>
  );
}
