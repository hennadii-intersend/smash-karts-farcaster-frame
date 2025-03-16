"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import sdk from "@farcaster/frame-sdk";

export default function GameFrame() {
  const router = useRouter();
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isGameLoaded, setIsGameLoaded] = useState(false);

  // Initialize Frame SDK and mark as ready when the game loads
  useEffect(() => {
    const initSDK = async () => {
      try {
        // Tell the Farcaster app that our frame is ready
        sdk.actions.ready();
        setIsSDKLoaded(true);
        console.log("Farcaster SDK ready");
      } catch (error) {
        console.error("Error initializing Farcaster SDK:", error);
      }
    };

    if (!isSDKLoaded) {
      initSDK();
    }
  }, [isSDKLoaded]);

  // Handle iframe loading
  const handleIframeLoad = () => {
    setIsGameLoaded(true);
    console.log("Game iframe loaded");
  };

  // Handle frame close
  const handleCloseFrame = () => {
    console.log("Closing frame");
    
    // Whether the SDK close works or not, we'll navigate back to home
    Promise.resolve()
      .then(() => {
        // Try to use SDK close if available (for Farcaster environment)
        if (isSDKLoaded && typeof sdk?.actions?.close === 'function') {
          sdk.actions.close();
        }
      })
      .catch(error => {
        console.error("Error with SDK close:", error);
      })
      .finally(() => {
        // Always navigate back to home page after a brief delay
        // This ensures we return to home in both Farcaster and standalone environments
        setTimeout(() => {
          router.push("/");
        }, 100);
      });
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Loading indicator */}
      {!isGameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg">Loading Smash Karts...</p>
          </div>
        </div>
      )}

      {/* Game iframe */}
<iframe
  ref={iframeRef}
  src="https://smashkarts.io/"
  className="w-full h-full border-none"
  allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; gamepad; gyroscope; microphone; picture-in-picture; web-share; xr-spatial-tracking"
  allowFullScreen
  onLoad={handleIframeLoad}
></iframe>

      {/* Controls overlay */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20">
        <button
          onClick={handleCloseFrame}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors text-sm font-medium shadow-lg flex items-center gap-2"
          aria-label="Close Frame"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Close Frame
        </button>
      </div>
    </div>
  );
}
