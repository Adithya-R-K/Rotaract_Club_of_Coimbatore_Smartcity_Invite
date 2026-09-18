"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Starfield from "./Starfield";
import SponsorHeader from "./SponsorHeader";
import { event } from "@/config/event";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <Starfield density={70} />
      <div className="relative">
        <SponsorHeader />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-6xl leading-tight text-parchment sm:text-7xl md:text-8xl"
        >
          {event.eventName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-3 font-display text-2xl italic text-aurora sm:text-3xl"
        >
          {event.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mx-auto mt-8 max-w-md font-body text-base leading-relaxed text-parchment/80 sm:text-lg"
        >
          {event.occasion}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-1 font-body text-base text-parchment/60 sm:text-lg"
        >
          {event.dateDisplay} · {event.timeDisplay}
        </motion.p>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to the story of DHRUVAM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-parchment/50 transition hover:text-gold"
      >
        <span className="font-body text-xs tracking-ceremonial">Continue</span>
        <ChevronDown className="h-4 w-4 animate-drift" aria-hidden="true" />
      </motion.a>
    </header>
  );
}
