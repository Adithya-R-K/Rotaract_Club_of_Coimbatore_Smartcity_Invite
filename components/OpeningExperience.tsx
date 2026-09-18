"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { event } from "@/config/event";
import Image from "next/image";

export default function OpeningExperience({
  onEnter = () => {}
}: {
  onEnter?: () => void;
}) {
  const [open, setOpen] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleTap() {
    if (leaving) return;
    setIsTapped(true);
    setLeaving(true);
    
    // Add subtle vibration if supported by device
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate([30, 50, 30]);
    }

    window.setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
      onEnter();
    }, prefersReducedMotion ? 0 : 1200); // Wait for the ripple & scale out animation
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label={`${event.eventName} — opening experience`}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-midnight-deep px-6 py-12 text-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: leaving ? 0 : 1, filter: leaving ? "blur(20px)" : "blur(0px)", scale: leaving ? 1.1 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Cinematic Background */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <Image 
              src="/dhruvam/hero-poster.webp" 
              alt="Background" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep via-midnight/80 to-midnight-deep" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center mt-12">
            <motion.p
              className="mb-4 font-body text-xs uppercase tracking-ceremonial text-gold/80"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: prefersReducedMotion ? 0 : 0.5 }}
            >
              A new Rotary year begins
            </motion.p>

            <motion.h1
              className="font-display text-5xl text-parchment sm:text-6xl"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 0.8 }}
            >
              {event.eventName}
            </motion.h1>

            <motion.p
              className="mt-4 font-display text-xl italic text-aurora"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 1.1 }}
            >
              {event.subtitle}
            </motion.p>
          </div>

          <div className="relative z-10 mb-12 flex flex-col items-center">
            {/* The Tap Interaction */}
            <motion.button
              onClick={handleTap}
              className="relative flex h-24 w-24 items-center justify-center rounded-full outline-none"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 200 }}
              aria-label="Tap to open invitation"
            >
              {/* Outer pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gold/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-gold/10"
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Ripple effect on tap */}
              <AnimatePresence>
                {isTapped && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 10, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>

              {/* Core Button */}
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 backdrop-blur-md shadow-[0_0_30px_rgba(217,178,106,0.3)] border border-gold/40 transition-colors">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
                  Tap
                </span>
              </div>
            </motion.button>
            
            <motion.p
              className="mt-8 font-body text-xs uppercase tracking-ceremonial text-parchment/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              To Open
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
