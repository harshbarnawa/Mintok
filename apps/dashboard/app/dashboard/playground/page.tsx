"use client";

export default function PlaygroundPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Playground
      </h1>

      <textarea
        className="w-full h-64 border rounded-lg p-4"
        placeholder="Write your prompt here..."
      />

      <button
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Optimize Prompt
      </button>
    </main>
  );
}