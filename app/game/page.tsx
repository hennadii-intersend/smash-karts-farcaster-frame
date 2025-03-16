"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically import the Simple Iframe component with SSR disabled.
 * This is a lighter approach that might work better on iOS.
 */
const SimpleIframe = dynamic(() => import("./simple-iframe"), { 
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
 * Game page container that hosts the Smash Karts game iframe.
 * Uses a simpler approach for better iOS compatibility.
 */
export default function GamePage() {
  return <SimpleIframe />;
}
