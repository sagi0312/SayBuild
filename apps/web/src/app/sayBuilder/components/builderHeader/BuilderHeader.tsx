"use client";
import { Component } from "@saybuild/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface BuilderHeaderProps {
  debouncedComponentTree?: Component;
}
export const BuilderHeader = ({
  debouncedComponentTree,
}: BuilderHeaderProps) => {
  const pathname = usePathname();
  const getUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  const [user, setUser] = useState<string>("");

  useEffect(() => {
    getUser().then((user) =>
      setUser(user?.user_metadata?.full_name ?? user?.email ?? "")
    );
  }, []);

  const openPreviewInNewTab = () => {
    const encodedData = encodeURIComponent(
      JSON.stringify(debouncedComponentTree)
    );
    window.open(`/preview?componentTree=${encodedData}`, "_blank");
  };
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex pt-4 pl-5 pb-4 pr-5 items-center justify-between">
        <div className="flex items-center">
          <div className="title-font font-medium text-white mr-8">SayBuild</div>
          <nav className="flex items-center text-base space-x-5 text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {pathname === "/sayBuilder" && (
              <button
                onClick={openPreviewInNewTab}
                className="hover:text-white cursor-pointer"
              >
                Preview
              </button>
            )}
          </nav>
        </div>

        <p className="text-gray-300">
          Welcome back, <span className="font-semibold text-white">{user}</span>
        </p>
      </div>
    </header>
  );
};
