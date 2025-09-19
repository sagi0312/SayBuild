import Link from "next/link";
import { BuiderHeader } from "./sayBuilder/components/builderHeader/BuiderHeader";

export default function Home() {
  return (
    <>
      <BuiderHeader />
      <div className="flex flex-col items-center bg-gray-200 min-h-screen pt-32 px-8">
        <div className="text-center">
          <h1 className="font-bold uppercase text-black text-lg">
            Build Pages with your voice
          </h1>
          <p className="text-black">
            Just speak naturally and watch your ideas transform into beautiful
            web pages. No coding, no drag-and-drop, just your voice.
          </p>
          <br />
          <Link
            href="/sayBuilder"
            className="bg-blue-500 px-6 py-3 rounded shadow hover:bg-green-500 text-black"
          >
            Start Building Free
          </Link>
        </div>
      </div>
    </>
  );
}
