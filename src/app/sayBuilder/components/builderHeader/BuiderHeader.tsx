"use client";
import { Component } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BuiderHeaderProps {
  debouncedComponentTree?: Component;
}
export const BuiderHeader = ({ debouncedComponentTree }: BuiderHeaderProps) => {
  const pathname = usePathname();
  const openPreviewInNewTab = () => {
    const encodedData = encodeURIComponent(
      JSON.stringify(debouncedComponentTree)
    );
    window.open(`/preview?componentTree=${encodedData}`, "_blank");
  };
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap pt-4 pl-5 pb-4 pl-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          {
            <a href="/sayBuilder" className="ml-3 text-xl">
              SayBuild
            </a>
          }
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          {pathname === "/sayBuilder" && (
            <button
              onClick={openPreviewInNewTab}
              className="mr-5 hover:text-white cursor-pointer"
            >
              Preview
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
