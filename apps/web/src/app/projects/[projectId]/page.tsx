import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BuilderHeader } from "@/app/header/builderHeader/BuilderHeader";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ projectName?: string }>;
}

export default async function ProjectPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const { projectId } = await params;
  const { projectName } = await searchParams;
  const supabase = await createClient();

  const { data: pages } = await supabase
    .from("pages")
    .select("*")
    .eq("project_id", projectId);

  return (
    <>
      <BuilderHeader />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-200 to-green-200 p-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-block mb-4 text-gray-700 hover:text-gray-900 font-medium"
          >
            ← Back to Projects
          </Link>

          <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {projectName || ""}
                </h1>
                <p className="text-gray-600 text-sm mt-1">Pages</p>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
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
                      Last updated{" "}
                      {new Date(page.updated_at).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  No pages yet. Create your first page!
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                  Create Page
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
