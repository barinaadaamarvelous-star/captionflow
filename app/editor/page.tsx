"use client";
import { useState } from "react";

export default function CaptionEditor() {
  const [caption, setCaption] = useState("Type your caption here...");

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">📝 Caption Editor</h2>

      {/* Caption Input */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        rows={5}
      />

      {/* Preview */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">📌 Preview:</h3>
        <p className="whitespace-pre-wrap">{caption}</p>
      </div>

      {/* Save / Export */}
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          💾 Save
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          ⬇️ Export
        </button>
      </div>
    </div>
  );
}
