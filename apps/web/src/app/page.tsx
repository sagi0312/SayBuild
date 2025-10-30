import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BuilderHeader } from "./sayBuilder/components/builderHeader/BuilderHeader";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user's projects
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id);

  return (
    <>
      <BuilderHeader />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-200 to-green-200 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Projects section */}
          <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Your Projects
              </h1>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
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
                      Created{" "}
                      {new Date(project.created_at).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  No projects yet. Create your first one!
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                  Create Project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
