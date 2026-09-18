"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Starfield from "./Starfield";
import { event } from "@/config/event";

export default function OpeningExperience({
  onEnter = () => {}
}: {
  onEnter?: () => void;
}) {
  const [open, setOpen] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [skipAvailable, setSkipAvailable] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setSkipAvailable(true), 900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  function enter() {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
      onEnter();
    }, prefersReducedMotion ? 0 : 650);
  }

  const themeWords = event.theme.words.join(" · ");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label={`${event.eventName} — opening experience`}
          onClick={enter}
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-black/35 px-6 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: leaving ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.6, ease: "easeInOut" }}
        >
          <Starfield density={110} />

          {/* Skip / continue — never a barrier to the content */}
          <button
            onClick={enter}
            className={`absolute right-5 top-5 rounded-full border border-white/15 px-4 py-2 text-xs font-body tracking-wide text-parchment/70 transition hover:border-gold/60 hover:text-gold sm:right-8 sm:top-8 ${
              skipAvailable ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ transitionProperty: "opacity, border-color, color" }}
          >
            Skip intro
          </button>

          {/* The guiding star */}
          <motion.div
            className="relative mb-8 h-16 w-16 sm:h-20 sm:w-20"
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            <span className="absolute inset-0 animate-drift rounded-full bg-gold/20 blur-2xl" />
            <span className="absolute inset-[30%] rounded-full bg-gold-soft shadow-[0_0_35px_12px_rgba(217,178,106,0.55)]" />
          </motion.div>

          <motion.p
            className="mb-3 font-body text-xs uppercase tracking-ceremonial text-aurora/80"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 1.1 }}
          >
            A new Rotary year begins
          </motion.p>

          <motion.h1
            className="font-display text-5xl text-parchment sm:text-6xl md:text-7xl"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 1.35 }}
          >
            {event.eventName}
          </motion.h1>

          <motion.p
            className="mt-2 font-display text-xl italic text-aurora sm:text-2xl"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 1.7 }}
          >
            {event.subtitle}
          </motion.p>

          <motion.p
            className="mt-6 font-body text-sm tracking-ceremonial text-parchment/70 sm:text-base"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 2.05 }}
          >
            {event.theme.name} — {themeWords}
          </motion.p>

          <motion.button
            onClick={enter}
            className="mt-10 rounded-full bg-gold px-8 py-3 font-body text-sm font-medium tracking-wide text-midnight transition hover:bg-gold-soft active:scale-[0.98] sm:mt-12"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0.1 : 2.4 }}
          >
            Enter the Experience
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
