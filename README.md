# Fraktom Clone

A Next.js application that clones the fraktom.fun website design with modern React components and Tailwind CSS.

## Features

- 🎯 Pixel-perfect recreation of fraktom.fun design
- ⚡ Built with Next.js 14 and App Router
- 🎨 Styled with Tailwind CSS
- 🔧 TypeScript for type safety
- 📱 Fully responsive design
- 🎭 Interactive components and animations
- 📊 Trading interface mockups
- 🏆 Leaderboard components
- ❓ Interactive FAQ section

## Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd fraktom-clone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
fraktom-clone/
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
