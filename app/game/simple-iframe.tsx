"use client";

import { useState } from "react";

export default function SimpleIframe() {
  const [showIframe, setShowIframe] = useState(false);

  // Only create iframe after user interaction
  const handleLoadGame = () => {
    setShowIframe(true);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {!showIframe ? (
        <div className="text-center">
          <h1 className="text-white text-2xl mb-6">Smash Karts</h1>
          <button
            onClick={handleLoadGame}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-indigo-700 transition-colors"
          >
            Tap to Play
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Press and hold may work better on iOS devices
          </p>
        </div>
      ) : (
        <iframe
          src="https://smashkarts.io/"
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; gamepad; gyroscope; microphone; picture-in-picture; web-share; xr-spatial-tracking"
          allowFullScreen
        />
      )}
    </div>
  );
}
