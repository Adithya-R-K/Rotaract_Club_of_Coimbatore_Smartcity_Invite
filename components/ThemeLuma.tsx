"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import { event } from "@/config/event";

const wordMeaning: Record<string, string> = {
  Lead: "Take the first step so others have a direction to follow.",
  Unite: "Bring different strengths together toward one purpose.",
  Motivate: "Keep the energy alive between one project and the next.",
  Act: "Turn plans into work that actually reaches people."
};

export default function ThemeLuma() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <Section id="theme" bg="transparent" className="!px-0 sm:!px-10">
      <div className="px-6 sm:px-0 text-left">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-aurora/80">
          The year's theme
        </p>
        <h2 className="mt-2 font-display text-4xl text-parchment sm:text-5xl">
          {event.theme.name}
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-parchment/70">
          Four words the incoming board has chosen to build the year around —
          not a slogan, but a working checklist for every project that
          follows.
        </p>
      </div>

      <div className="mt-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 hide-scrollbar sm:px-0">
        {event.theme.words.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex min-w-[260px] max-w-[300px] shrink-0 snap-center flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-b from-teal-light/20 to-midnight-deep p-6 text-left shadow-lg backdrop-blur-sm"
          >
            <div>
              <span className="font-body text-[10px] font-bold text-gold/50">
                0{i + 1}
              </span>
              <dt className="mt-4 font-display text-3xl italic text-aurora">
                {word}
              </dt>
            </div>
            <dd className="mt-6 font-body text-sm leading-relaxed text-parchment/80">
              {wordMeaning[word]}
            </dd>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
