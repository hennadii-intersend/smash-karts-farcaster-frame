import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-indigo-800 to-purple-900 text-white">
      <main className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
        {/* Game Header */}
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Smash Karts
        </h1>

        {/* Game Preview */}
        <div className="relative w-full max-w-2xl aspect-[3/2] rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="https://imgs.crazygames.com/smash-karts_16x9/20250304104934/smash-karts_16x9-cover?metadata=none&quality=70&width=501.5" 
            alt="Smash Karts game" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Game Description */}
        <div className="space-y-4 max-w-xl">
          <p className="text-xl">
            Drive and shoot your way to victory in this multiplayer kart battle game!
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <li className="bg-indigo-700/50 px-3 py-1 rounded-full">Multiplayer</li>
            <li className="bg-indigo-700/50 px-3 py-1 rounded-full">Battle Racing</li>
            <li className="bg-indigo-700/50 px-3 py-1 rounded-full">Action</li>
            <li className="bg-indigo-700/50 px-3 py-1 rounded-full">3D Graphics</li>
          </ul>
        </div>
        
        {/* Play Button */}
        <Link 
          href="/game" 
          className="mt-4 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 transition-all rounded-full font-bold text-xl shadow-xl hover:shadow-indigo-500/25 hover:scale-105 flex items-center gap-2 group"
        >
          Play Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </main>
      
      <footer className="mt-16 mb-4 text-sm opacity-75 text-center">
        <p>Powered by Farcaster Frames v2</p>
        <p className="mt-1 text-xs opacity-50">Embed games directly in your Farcaster feed</p>
      </footer>
    </div>
  );
}
