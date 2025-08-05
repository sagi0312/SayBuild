import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl text-blue-500 font-bold">SayBuild</h1>
            <Link
              href="/builder"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Try Builder
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Build Pages with
            <span className="text-blue-600"> Your Voice</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Just speak naturally and watch your ideas transform into beautiful
            web pages. No coding, no drag-and-drop, just your voice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-lg font-medium"
            >
              Start Building Free
            </Link>
            <button className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition text-lg font-medium">
              Watch Demo
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            No credit card required • Free forever
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © 2024 SayBuild. Built with voice and AI.
      </footer>
    </div>
  );
}
