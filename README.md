# Fraktom

A modern, educational trading simulation platform inspired by pump.fun, built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. Fraktom lets users practice trading without risking real money, climb leaderboards, and learn trading concepts interactively.

## Features

- 🎯 Simulated trading interface (no real money required)
- ⚡ Built with Next.js App Router (v15+)
- 🎨 Styled with Tailwind CSS and glassmorphism effects
- 🏆 Real-time leaderboard and XP system
- 📱 Fully responsive, mobile-first design
- ❓ Interactive FAQ section
- 🛠️ Modular, reusable UI components (shadcn/ui, Radix, Lucide icons)
- 📊 Animated charts and trading stats
- 🔒 TypeScript for type safety
- 📚 Documentation link and social integration

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Installation

```bash
git clone https://github.com/pasindupiumal03/fraktom.git
cd fraktom
pnpm install
# or
npm install
# or
yarn install
```

### Running Locally

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fraktom/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
\`\`\`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS

## Components

### Main Sections
- **Hero Section** - Landing area with trading interface mockup
- **Features Section** - Three main feature cards
- **Tools Section** - Six trading tools with descriptions
- **FAQ Section** - Interactive accordion-style FAQ

### Key Features
- Responsive design that works on all devices
- Interactive trading interface mockups
- Animated candlestick charts
- Hover effects and transitions
- Modern glassmorphism design elements

## Customization

### Colors
The main brand color is defined in the Tailwind config and can be customized:
- Primary green: `#10b981`
- Background: `#0f0f0f`
- Cards: `#1a1a1a`

### Fonts
The project uses Inter font from Google Fonts, configured in the layout component.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is for educational purposes only.
