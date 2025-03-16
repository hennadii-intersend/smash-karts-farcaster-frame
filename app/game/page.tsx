"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically import the GameFrame component with SSR disabled.
 * This is necessary because the Farcaster Frame SDK uses browser-only APIs
 * that wouldn't work in a server-rendering context.
 */
const GameFrame = dynamic(() => import("./GameFrame"), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
        <p className="text-lg">Loading game...</p>
      </div>
    </div>
  )
});

/**
 * Game page container that hosts the Smash Karts game frame.
 * Uses a full-screen black background to match the game's aesthetic.
 */
export default function GamePage() {
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <GameFrame />
    </div>
  );
}
