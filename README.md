# Smash Karts Farcaster Frame

A Farcaster Frame that embeds the Smash Karts game, allowing users to play directly within the Farcaster app.

## Demo

This frame is deployed at [https://smash-karts-frame.vercel.app](https://smash-karts-frame.vercel.app) and can be embedded in Farcaster casts.

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

- `app/layout.tsx` - Contains the Farcaster Frame metadata
- `app/page.tsx` - Landing page with game info and Play button
- `app/game/page.tsx` - Game page container component
- `app/game/GameFrame.tsx` - The component that loads the game iframe
- `app/api/webhook/route.ts` - Webhook endpoint for Farcaster events
- `public/.well-known/farcaster.json` - Farcaster manifest file

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## License

MIT
