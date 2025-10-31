import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { BuilderHeader } from "@/app/header/builderHeader/BuilderHeader";
import { PagesList } from "./PagesList";

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

          <PagesList
            pages={pages}
            projectId={projectId}
            projectName={projectName || "Untitled Project"}
          />
        </div>
      </div>
    </>
  );
}
