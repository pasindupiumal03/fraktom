"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Ban, Plus, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion";
import leaderboardImage from "@/public/leaderboard.png"
import allTimeImage from "@/public/allTime.png"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      question: "What Is Trado?",
      answer: "Trado is a pump.fun-style trading platform without real money.",
    },
    {
      question: "How Does The Training Work?",
      answer:
        "You can practice trading with virtual money. You can also create your own training sessions and invite your friends to join.",
    },
    {
      question: "Is This Real Trading?",
      answer: "No, this is a simulation. You can practice trading without any risk.",
    },
    {
      question: "Who Is Trado For?",
      answer:
        "Trado is for anyone who wants to learn how to trade. It is especially useful for beginners who want to practice trading without any risk.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleVisibilty = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibilty);

    return () => {
      window.removeEventListener("scroll", toggleVisibilty);
    }
  }, [toggleVisibilty]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [toolsRef, toolsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [tools2Ref, tools2InView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [faqRef, faqInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-inter">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="currentColor" />
              <circle cx="9" cy="9" r="1.5" fill="white" />
              <circle cx="15" cy="9" r="1.5" fill="white" />
              <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl font-semibold tracking-tight">Trado</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">
            X/Twitter
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">
            Documentation
          </Link>
        </nav>

        <Button className="bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group">
          <span className="group-hover:hidden flex items-center">
            Start your trading now
            <span className="ml-2">▶</span>
          </span>
          <span className="hidden group-hover:flex items-center">
            <Ban className="w-4 h-4 mr-1.5" />
            Coming Soon
          </span>
        </Button>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative m-8 mb-0 border border-gray-800 rounded-2xl shadow-xl bg-cover bg-center bg-no-repeat h-[600px]"
        style={{ backgroundImage: `url('/imageUpdated3.png')` }}
        ref={heroRef}
        initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
        animate={
          heroInView
            ? { y: 0, opacity: 1, filter: "blur(0px)" }
            : { y: -30, opacity: 0, filter: "blur(8px)" }
        }
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex flex-col items-left justify-center ml-20 mt-12 py-20 text-white rounded-2xl">
          <h1 className="text-[3.5rem] lg:text-[4rem] leading-tight tracking-tight font-medium">
            Learn Degen trading
          </h1>
          <h1 className="text-emerald-500 text-[3.5rem] lg:text-[4rem] leading-tight tracking-tight font-style: italic font-medium">
            without the losses.
          </h1>

          <Button className="bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group w-max mt-12 ml-6">
            <span className="group-hover:hidden flex items-center">
              Start your trading now
              <span className="ml-2">▶</span>
            </span>
            <span className="hidden group-hover:flex items-center">
              <Ban className="w-4 h-4 mr-1.5" />
              Coming Soon
            </span>
          </Button>
        </div>

        {/* Floating All Time Image - Top Center */}
        <motion.div
          animate={
            heroInView
              ? { y: [0, -5, 0], opacity: 1 }
              : { y: 0, opacity: 0 }
          }
          transition={
            heroInView
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
              : { duration: 0.3 }
          }
          className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[400px] flex items-center justify-center rounded-2xl"
        >
          <Image src={allTimeImage} alt="hero image" className="rounded-2xl shadow-lg" />
        </motion.div>

        {/* Floating Leaderboard Image - Right */}
        <motion.div
          animate={
            heroInView
              ? { y: [0, 5, 0], opacity: 1 }
              : { y: 0, opacity: 0 }
          }
          transition={
            heroInView
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
              : { duration: 0.3 }
          }
          className="absolute top-80 right-6 w-[400px] flex items-center justify-center rounded-2xl"
        >
          <Image src={leaderboardImage} alt="hero image" className="rounded-2xl shadow-lg" />
        </motion.div>
      </motion.section>
      
      {/* Combined Features and Tools Section */}
      <motion.section 
        className="relative border-b border-gray-800"
        ref={toolsRef}
        initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
        animate={
          toolsInView
            ? { y: 0, opacity: 1, filter: "blur(0px)" }
            : { y: -30, opacity: 0, filter: "blur(8px)" }
        }
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="px-8 py-20">
          <div className="max-w-[1400px] mx-auto">
            {/* Features Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight tracking-tight mb-6">
                The perfect training <br />
                for <span className="bg-[#10b981] text-black px-6 py-3 rounded-2xl inline-block font-bold">Degens</span>
              </h2>
              <div className="space-y-2 text-gray-400 text-lg font-medium">
                <p>Simulate pump.fun-style trading without real money.</p>
                <p>Get feedback, XP, and climb the leaderboard.</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid lg:grid-cols-3 gap-12 mb-32">
              {/* Card 1: Understand the chaos */}
              <div className="space-y-6">
                {/* Trading Interface Mockup 1 */}
                <div className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800/30 h-64">
                  {/* Decision Interface */}
                  <div className="h-full flex flex-col">
                    {/* Chart area */}
                    <div className="flex-1 bg-[#0f0f0f] rounded-lg p-3 mb-4 relative">
                      {/* Mini candlestick chart */}
                      <div className="flex items-end justify-center gap-[2px] h-24">
                        {Array.from({ length: 15 }).map((_, i) => {
                          const isGreen = Math.random() > 0.5
                          const height = Math.random() * 60 + 20
                          return (
                            <div
                              key={i}
                              className={`w-2 ${isGreen ? "bg-[#10b981]" : "bg-[#ef4444]"} opacity-80`}
                              style={{ height: `${height}%` }}
                            />
                          )
                        })}
                      </div>
                    </div>

                    {/* Decision prompt */}
                    <div className="text-center">
                      <p className="text-white text-sm mb-3 font-medium">Should you buy now ?</p>
                      <div className="flex gap-3 justify-center">
                        <button className="bg-[#10b981] text-black px-4 py-2 rounded-lg text-sm font-semibold">
                          Yes
                        </button>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Understand the chaos</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Train your instincts. Spot patterns. Read like a sniper.
                  </p>
                </div>
              </div>

              {/* Card 2: Avoid the traps */}
              <div className="space-y-6">
                {/* Trading Interface Mockup 2 */}
                <div className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800/30 h-64">
                  <div className="h-full flex">
                    {/* Left side - indicators */}
                    <div className="w-1/2 space-y-2 pr-2">
                      <div className="space-y-1">
                        {[
                          { label: "RSI", value: "67.2", color: "bg-yellow-500" },
                          { label: "MACD", value: "0.45", color: "bg-[#10b981]" },
                          { label: "Volume", value: "2.1M", color: "bg-blue-500" },
                          { label: "Support", value: "$0.24", color: "bg-[#10b981]" },
                          { label: "Resistance", value: "$0.31", color: "bg-red-500" },
                        ].map((indicator, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">{indicator.label}</span>
                            <span className={`${indicator.color} text-black px-2 py-1 rounded text-xs font-medium`}>
                              {indicator.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right side - chart */}
                    <div className="w-1/2 bg-[#0f0f0f] rounded-lg p-2">
                      <div className="flex items-end justify-center gap-[1px] h-full">
                        {Array.from({ length: 20 }).map((_, i) => {
                          const isGreen = Math.random() > 0.4
                          const height = Math.random() * 80 + 20
                          return (
                            <div
                              key={i}
                              className={`w-1 ${isGreen ? "bg-[#10b981]" : "bg-[#ef4444]"} opacity-70`}
                              style={{ height: `${height}%` }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Avoid the traps</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Get rugged once. Learn forever.</p>
                </div>
              </div>

              {/* Card 3: Act like a true degen */}
              <div className="space-y-6">
                {/* Trading Interface Mockup 3 */}
                <div className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800/30 h-64">
                  <div className="h-full">
                    {/* Leaderboard interface */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Weekly Leaderboard</span>
                        <button className="bg-[#10b981] text-black px-2 py-1 rounded text-xs font-semibold">
                          Climb
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">1</span>
                            <span className="text-white text-sm">rektninja.sol</span>
                          </div>
                          <span className="text-[#10b981] text-sm font-medium">2,153 XP</span>
                        </div>

                        <div className="flex items-center justify-between py-2 bg-[#10b981] rounded-lg px-3">
                          <div className="flex items-center gap-2">
                            <span className="text-black text-sm font-bold">2</span>
                            <span className="text-black text-sm font-bold">you</span>
                          </div>
                          <div className="text-right">
                            <div className="text-black text-sm font-bold">1,894 XP</div>
                            <div className="text-black text-xs">(+$32,324.82)</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">3</span>
                            <span className="text-white text-sm">ChadSol</span>
                          </div>
                          <span className="text-[#10b981] text-sm font-medium">1,873 XP</span>
                        </div>
                      </div>

                      <div className="text-center pt-2">
                        <button className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-semibold">
                          Make the leaderboard
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Act like a true degen</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Snipe. Get feedback. Climb the ranks.</p>
                </div>
              </div>
            </div>

            {/* Tools Header */}
            <motion.div
              ref={tools2Ref}
              initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              animate={
                tools2InView
                  ? { y: 0, opacity: 1, filter: "blur(0px)" }
                  : { y: -30, opacity: 0, filter: "blur(8px)" }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
            >

            <div className="text-center mb-16">
              <h2 className="text-[#10b981] text-xl font-semibold tracking-wide">AND MANY TOOLS...</h2>
            </div>

            {/* Tools Grid */}
            <div className="grid lg:grid-cols-2 gap-x-32 gap-y-12 mb-20">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Instinct Builder */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <path
                          d="M3 3v18h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 12l3-3 4 4 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Instinct Builder</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Make fast calls on real charts. Train your reflexes before it costs you.
                    </p>
                  </div>
                </div>

                {/* Quiz Engine */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Quiz Engine</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Scenario-based quizzes to test your trading instincts
                    </p>
                  </div>
                </div>

                {/* Wallet Watcher */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Wallet Watcher</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Study mock wallets and trace sus moves like a pro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Rug Radar */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Rug Radar</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Spot sketchy dev wallets, fake pumps, and bad LP setups
                    </p>
                  </div>
                </div>

                {/* Snipe Sim */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M2 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Snipe Sim</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Practice live-style snipes with fake tokens and real-risk
                    </p>
                  </div>
                </div>

                {/* Leaderboard Mode */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#10b981]">
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Leaderboard Mode</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Compete with others. Survive the sim. Earn fake clout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-8 py-4 text-[16px] rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 group">
                <span className="group-hover:hidden flex items-center">
                  Start your trading now
                  <span className="ml-2">▶</span>
                </span>
                <span className="hidden group-hover:flex items-center">
                  <Ban className="w-5 h-5 mr-2" />
                  Coming Soon
                </span>
              </Button>
            </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="relative border-b border-gray-800"
        ref={faqRef}
              initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              animate={
                faqInView
                  ? { y: 0, opacity: 1, filter: "blur(0px)" }
                  : { y: -30, opacity: 0, filter: "blur(8px)" }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="px-8 py-20">
          <div className="max-w-[1000px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-[3.5rem] lg:text-[4rem] font-bold leading-tight tracking-tight">
                Frequently asked{" "}
                <span className="bg-[#10b981] text-black px-6 py-3 rounded-2xl inline-block font-bold">Questions</span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/20 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <div className="flex-shrink-0 ml-4">
                      {openFAQ === index ? (
                        <X className="w-6 h-6 text-gray-400" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-800 pt-4">
                        <p className="text-gray-400 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.section
        className="relative m-8 mb-0 border border-gray-800 rounded-2xl shadow-xl bg-cover bg-center bg-no-repeat h-[600px]"
        style={{ backgroundImage: `url('/imageUpdated3.png')` }}
        ref={footerRef}
              initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              animate={
                footerInView
                  ? { y: 0, opacity: 1, filter: "blur(0px)" }
                  : { y: -30, opacity: 0, filter: "blur(8px)" }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex flex-col items-left justify-center ml-20 mt-12 py-20 text-white rounded-2xl">
          <h1 className="text-[3.5rem] lg:text-[4rem] leading-tight tracking-tight font-medium">Learn Degen trading</h1>
          <h1 className="text-emerald-500 text-[3.5rem] lg:text-[4rem] leading-tight tracking-tight font-style: italic font-medium">without the losses.</h1>

          <Button className="bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group w-max mt-12 ml-6">
            <span className="group-hover:hidden flex items-center">
              Start your trading now
              <span className="ml-2">▶</span>
            </span>
            <span className="hidden group-hover:flex items-center">
              <Ban className="w-4 h-4 mr-1.5" />
              Coming Soon
            </span>
          </Button>
        </div>
      </motion.section>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-[#10b981]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#10b981]/3 rounded-full blur-3xl -z-10" />
    </div>
  )
}