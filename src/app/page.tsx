import Link from "next/link";
import { BuiderHeader } from "./sayBuilder/components/builderHeader/BuiderHeader";

export default function Home() {
  return (
    <>
      <BuiderHeader />
      <div className="h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-b from-blue-200 to-green-200">
        <div className="text-center p-8 bg-white border-2 border-gray-300 bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="font-bold uppercase text-black text-lg">
            Build Pages with your voice
          </h1>
          <p className="text-black mt-4">
            Just speak naturally and watch your ideas transform into beautiful
            web pages. No coding, no drag-and-drop, just your voice.
          </p>
          <br />
          <Link
            href="/sayBuilder"
            className="mt-4 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Start Building Free
          </Link>
        </div>
      </div>
    </>
  );
}
