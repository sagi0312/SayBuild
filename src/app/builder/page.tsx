export default function BuilderPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-14 border-b">
        <h1 className="font-semibold text-white">SayBuild Editor</h1>
      </header>

      {/* 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <aside className="w-80 bg-white border-r">
          {/* Voice button will go here at the top */}
          {/* Components list below */}
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 bg-gray-50">{/* Page preview */}</main>

        {/* Right Panel */}
        <aside className="w-80 bg-white border-l">
          {/* Properties panel */}
        </aside>
      </div>
    </div>
  );
}
