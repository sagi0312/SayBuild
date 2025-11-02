import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BuilderHeader } from "./header/builderHeader/BuilderHeader";
import { ProjectsList } from "./projects/ProjectsList";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id);

  return (
    <>
      <BuilderHeader />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-200 to-green-200 p-8">
        <div className="max-w-4xl mx-auto">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </>
  );
}
