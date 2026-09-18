"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SponsorHeader from "./SponsorHeader";
import { event } from "@/config/event";
import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-midnight"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dhruvam/hero-poster.webp"
          alt="DHRUVAM Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlay for Text Readability - Bottom Heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight/50 to-midnight-deep/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-8">
        <SponsorHeader />
      </div>

      {/* Main Content - Bottom Heavy */}
      <div className="relative z-10 mt-auto flex w-full flex-col px-6 pb-24 sm:px-12 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-body text-xs uppercase tracking-[0.2em] text-gold/80"
        >
          {event.rotaryYear}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-2 font-display text-6xl leading-[0.9] text-parchment sm:text-7xl md:text-8xl"
        >
          {event.eventName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-3 font-display text-2xl italic text-aurora sm:text-3xl"
        >
          {event.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 flex flex-col gap-1 border-l-2 border-gold/40 pl-4"
        >
          <p className="font-body text-sm leading-relaxed text-parchment/90 sm:text-base max-w-xs">
            {event.occasion}
          </p>
          <p className="font-body text-xs uppercase tracking-ceremonial text-gold sm:text-sm">
            {event.dateDisplay}
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to the story of DHRUVAM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-midnight/50 backdrop-blur-md text-parchment/50 transition hover:bg-gold/20 hover:text-gold"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </motion.a>
    </header>
  );
}
