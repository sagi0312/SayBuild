import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch pages for this project
  const { data: pages } = await supabase
    .from("pages")
    .select("*")
    .eq("project_id", projectId);

  return (
    <div>
      <h1>Pages in this project</h1>

      {pages && pages.length > 0 ? (
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={`/sayBuilder?pageId=${page.id}`}>{page.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pages yet</p>
      )}
    </div>
  );
}
