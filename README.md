# Smash Karts Farcaster Frame

A Farcaster Frame that embeds the Smash Karts game, allowing users to play directly within the Farcaster app. Includes both a React-based implementation and an HTML-based implementation for maximum compatibility with iOS devices.

## Demo

This frame is deployed at [https://smash-karts-farcaster-frame.vercel.app](https://smash-karts-farcaster-frame.vercel.app) and can be embedded in Farcaster casts.

## Features

- Embedding of the Smash Karts game from CrazyGames
- Responsive design that works well on mobile devices
- Frame metadata for seamless Farcaster integration
- Webhook API endpoint for handling Farcaster events

## Technologies Used

- Next.js 15+ with App Router
- Tailwind CSS for styling
- Farcaster Frame SDK
- TypeScript

## Development

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app

### Frame Structure

#### React Implementation
- `app/layout.tsx` - Contains the Farcaster Frame metadata
- `app/page.tsx` - Landing page with game info and Play button options
- `app/game/page.tsx` - Game page container component
- `app/game/GameFrame.tsx` - The component that loads the game iframe with Farcaster SDK
- `app/game/simple-iframe.tsx` - A simplified iframe implementation with better iOS compatibility
- `app/api/webhook/route.ts` - Webhook endpoint for Farcaster events
- `public/.well-known/farcaster.json` - Farcaster manifest file

#### HTML Implementation
- `public/index.html` - Static HTML page with proper Frame v2 metadata
- `public/direct-game.html` - Direct HTML implementation of the game iframe

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## License

MIT
