import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base URL for absolute references
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://smash-karts-frame.vercel.app";

export const metadata: Metadata = {
  title: "Smash Karts - Farcaster Frame",
  description: "Play Smash Karts in a Farcaster Frame",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Smash Karts - Farcaster Frame",
    description: "Play Smash Karts in a Farcaster Frame",
    images: [`${baseUrl}/image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Farcaster Frame embed metadata
  const frameMetadata = {
    version: "next",
    imageUrl: `${baseUrl}/image.png`,
    button: {
      title: "Play Smash Karts",
      action: {
        type: "launch_frame",
        name: "Smash Karts",
        url: `${baseUrl}/game`,
        splashImageUrl: `${baseUrl}/splash.png`,
        splashBackgroundColor: "#4f46e5"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content={JSON.stringify(frameMetadata)} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
