import Link from "next/link";
import { BuiderHeader } from "./sayBuilder/components/builderHeader/BuiderHeader";

export default function Home() {
  return (
    <>
      <BuiderHeader />
      <div className="h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-b from-blue-200 to-green-200">
        <div className="text-center p-8 bg-white border-2 border-gray-300 bg-opacity-80 rounded-lg shadow-lg max-w-2xl">
          <h1 className="font-bold uppercase text-black text-lg">
            Build Pages with your voice
          </h1>
          <p className="text-black mt-4">
            Just speak naturally and watch your ideas transform into beautiful
            web pages. No coding, just your voice.
          </p>

          <div className="mt-6 text-left text-sm text-gray-700 bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-2">🎤 Just speak naturally:</p>
            <ul className="space-y-1 ml-4 flex gap-2 flex-col">
              <li className="text-xs text-gray-600">
                "Add button with text Click Me"
              </li>
              <li className="text-xs text-gray-600">
                "Make it blue and bigger"
              </li>
              <li className="text-xs text-gray-600">"Delete the button"</li>
            </ul>
          </div>

          <Link
            href="/sayBuilder"
            className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Start Building
          </Link>
        </div>
      </div>
    </>
  );
}
