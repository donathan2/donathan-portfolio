export default function Window() {
  return (
    <>
      <div className="fixed z-50 inset-0 bg-gray-800/25"></div>
      <div
        className="absolute z-52 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] max-h-[75vh] h-auto bg-gradient-to-br bg-local from-lime-200 to-green-500 overflow-y-auto p-4 rounded shadow-lg scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          .scrollbar-none::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="mb-2 font-bold text-lg">Projects</div>
        <div className="space-y-4">
          {/* Example scrollable content */}
          <div className="h-20 bg-yellow-300 rounded p-2">Project 1</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 2</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 3</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 4</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 5</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 6</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 7</div>
          <div className="h-20 bg-yellow-300 rounded p-2">Project 8</div>
        </div>
      </div>
    </>
  );
}
