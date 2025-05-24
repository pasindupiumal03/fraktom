import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Trado - Learn Degen Trading Without the Losses",
  description: "Simulate pump.fun-style trading without real money. Get feedback, XP, and climb the leaderboard.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.avif',
    shortcut: '/logo.avif',
    apple: '/logo.avif',
  },
  openGraph: {
    images: ['/logo.avif']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
