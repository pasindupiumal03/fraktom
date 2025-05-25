"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {  Ban, Plus, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion";
import firstFeatureImage from "@/public/3.webp"
import secondFeatureImage from "@/public/3new.png";
import thirdFeatureImage from "@/public/5.webp"
import { AlertTriangle } from "lucide-react"
import logo from "@/public/logo.avif"

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      question: "What Is Fraktom?",
      answer: "Fraktom is a pump.fun-style trading platform without real money.",
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
      question: "Who Is Fraktom For?",
      answer:
        "Fraktom is for anyone who wants to learn how to trade. It is especially useful for beginners who want to practice trading without any risk.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

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
    <div className="sm:w[100%]">
    <div className="min-h-screen bg-[#0f0f0f] text-white font-inter py-4">  
      {/* Header */}
      <header className="relative z-50 flex flex-col md:flex-row items-center justify-between px-8 py-6 border-b border-gray-800 gap-y-6 md:gap-y-0">

      <div className="flex items-center gap-3">
        <Image src={logo} alt="header-logo" height={50} width={50} />
        <span className="text-2xl font-semibold tracking-tight">Fraktom</span>
      </div>

      <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 md:gap-10">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">
          X/Twitter
        </Link>
        <Link href="https://trado-3.gitbook.io/fraktom/" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">
          Documentation
        </Link>
      </nav>

      <Button
        className="mt-14 bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group w-[250px] flex justify-center items-center my-auto"
      >
        <span className="group-hover:hidden flex items-center">
          Start your trading now
          <span className="ml-2">&#9654;</span>
        </span>
        <span className="hidden group-hover:flex items-center">
          <Ban className="w-4 h-4 mr-1.5" />
          Coming Soon
        </span>
      </Button>
    </header>

      {/* Hero Section */}
      <motion.section
        className="relative mb-0 border border-gray-800 rounded-2xl shadow-xl bg-cover bg-center bg-no-repeat h-[600px]  w-[80%] mx-auto"
        style={{ backgroundImage: `url('/7new.png')` }}
        ref={heroRef}
        initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
        animate={
          heroInView
            ? { y: 0, opacity: 1, filter: "blur(0px)" }
            : { y: -30, opacity: 0, filter: "blur(8px)" }
        }
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center sm:items-start justify-center text-white h-full py-16 sm:py-20">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-center sm:text-left leading-tight tracking-tight font-medium">
            Learn Degen trading
          </h1>
          <h1 className="text-emerald-500 text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-center sm:text-left leading-tight tracking-tight italic font-medium">
            without the losses.
          </h1>

          <Button
            className="mt-14 bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group w-[250px] flex justify-center items-center"
          >
            <span className="group-hover:hidden flex items-center">
              Start your trading now
              <span className="ml-2">&#9654;</span>
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
              : { y: 0, opacity: 0.4 }
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
          className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-2xl"
        >
          <div
            className="p-6 rounded-2xl opacity-60 shadow-lg"
            role="region"
            aria-label="All Time Profits"
          >
            <p className="text-[#eae2e2]">All time profits</p>
            <p className="text-[#10b981]"><span className="text-[#10b981]">▲{" "}</span>400.52% (+$32,324.82)</p>
          </div>
        </motion.div>

        {/* Floating Leaderboard Image - Right */}
        <motion.div
          initial={{ y: 0, opacity: 0.8 }}
          animate={
            heroInView
              ? { y: [0, 5, 0], opacity: 1 }
              : { y: 0, opacity: 0.4 }
          }
          transition={
            heroInView
              ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
          className="absolute hidden sm:flex top-[65%] sm:top-80 right-4 sm:right-8 w-[60%] sm:w-[350px] lg:w-[400px] justify-center rounded-2xl"
        >
          <div
            className="p-6 rounded-2xl opacity-90 bg-[#1a1a1a]  w-full max-w-[350px] italic shadow-lg text-[#a1a1a1] font-semibold md:max-w-[350px] lg:max-w-[400px]"
            role="region"
            aria-label="Weekly Leaderboard"
          >
            <h4 className="text-center mb-4">Weekly Leaderboard</h4>
            <div className="flex flex-col space-y-2">
              <div className="px-2 py-1 flex justify-between items-center">
                <span>1</span>
                <span className="flex-1 mx-4 text-left">rektninja.sol</span>
                <span className="font-bold">2,153XP</span>
              </div>
              <div className="bg-[#10b981] px-2 py-1 rounded-md flex justify-between items-center text-[#1a1a1a]">
                <span>2</span>
                <span className="flex-1 mx-4 text-left">you</span>
                <span className="font-bold">1,894XP</span>
              </div>
              <div className="px-2 py-1 flex justify-between items-center">
                <span>3</span>
                <span className="flex-1 mx-4 text-left">ChadSol</span>
                <span className="font-bold">1,873XP</span>
              </div>
            </div>
          </div>
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

          <div className="grid lg:grid-cols-3 gap-12 mb-32">
            <div className="bg-[#131111] p-4 rounded-2xl">
              <Image src={firstFeatureImage} alt="feature-image-1"/>
              <div className="p-4">
                <h2 className="text-white font-semibold text-2xl">Understand the chaos</h2>
                <h4 className="text-[#8f8a8a]">Train your instincts. Spot patterns. Read like</h4>
                <h4 className="text-[#8f8a8a]">a sniper</h4>
              </div>
            </div>
 
            <div className="bg-[#131111] p-4 rounded-2xl relative">
            <div className="bg-white bg-opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-transparent w-72 px-2 py-3 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="italic font-medium text-white text-center align-middle">
                Suspicious pattern detected
              </span>
            </div>

            <Image src={secondFeatureImage} alt="feature-image-1" />
            <div className="p-4">
              <h2 className="text-white font-semibold text-2xl">Avoid the traps</h2>
              <h4 className="text-[#8f8a8a]">Get rugged once. Learn forever</h4>
            </div>
          </div>

            <div className="bg-[#131111] p-4 rounded-2xl">
              <Image src={thirdFeatureImage} alt="feature-image-1"/>
              <div className="p-4">
                <h2 className="text-white font-semibold text-2xl">Act like a true degen</h2>
                <h4 className="text-[#8f8a8a]">Snipe. Get feedback. Climb the ranks.</h4>
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
            <Button
              className="bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-[15px] transition-all duration-200 group w-[250px] flex justify-center items-center"
            >
              <span className="group-hover:hidden flex items-center">
                Start your trading now
                <span className="ml-2">&#9654;</span>
              </span>
              <span className="hidden group-hover:flex items-center">
                <Ban className="w-4 h-4 mr-1.5" />
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

        {/*Footer Banner*/}
        <motion.section
        className="relative m-8 border-t border-l border-r border-gray-800 border-b-[4px] border-b-[#10b981] rounded-t-2xl shadow-xl bg-cover bg-center bg-no-repeat h-[600px] w-[80%] mx-auto"
          style={{ backgroundImage: `url('/7new.png')` }}
          ref={footerRef}
                initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                animate={
                  footerInView
                    ? { y: 0, opacity: 1, filter: "blur(0px)" }
                    : { y: -30, opacity: 0, filter: "blur(8px)" }
                }
                transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col items-start justify-center px-6 sm:px-10 lg:ml-20 mt-14 py-10 sm:py-16 text-white rounded-2xl text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[4rem] leading-tight tracking-tight font-medium">
              Learn Degen trading
            </h1>
            <h1 className="text-emerald-500 mt-8 text-3xl sm:text-4xl lg:text-[4rem] leading-tight tracking-tight italic font-medium">
              without the losses.
            </h1>

            <Button
              className="mt-20 bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-6 py-2.5 rounded-lg text-sm sm:text-[15px] transition-all duration-200 group w-full sm:w-[250px] flex justify-center items-center"
            >
              <span className="group-hover:hidden flex items-center">
                Start your trading now
                <span className="ml-2">&#9654;</span>
              </span>
              <span className="hidden group-hover:flex items-center">
                <Ban className="w-4 h-4 mr-1.5" />
                Coming Soon
              </span>
            </Button>
          </div>
        </motion.section>
      </motion.section>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 py-4 gap-4 text-center sm:text-left w-[87%] mx-auto">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="footer-logo" width={60} height={60} />
          <h4 className="text-2xl font-extrabold">Fraktom</h4>
        </div>
        <p className="text-[#7e7a7a]">Start your trading</p>
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[800px] bg-[#10b981]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[100%] h-[600px] bg-[#10b981]/3 rounded-full blur-3xl -z-10" />
    </div>
    </div>
  )
}
