import Link from "next/link";
import { BuiderHeader } from "./sayBuilder/components/builderHeader/BuiderHeader";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

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
      <BuiderHeader />
      <p>Logged in as: {user.user_metadata?.full_name || user.email}</p>
      <div>
        <h1>Your Projects</h1>

        {projects && projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${project.id}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects yet</p>
        )}
      </div>
    </>
  );
}
