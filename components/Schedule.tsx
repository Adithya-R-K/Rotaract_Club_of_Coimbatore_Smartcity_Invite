"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { schedule } from "@/config/event";

export default function Schedule() {
  return (
    <Section id="schedule" className="!px-0 sm:!px-10">
      <div className="px-6 sm:px-0 text-left">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-aurora/80">
          Order of proceedings
        </p>
        <h2 className="mt-2 font-display text-4xl text-parchment sm:text-5xl">
          Event schedule
        </h2>
      </div>

      <div className="relative mx-auto mt-12 max-w-md px-6 sm:px-0">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[38px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent sm:left-[38px]" />
        
        <ol className="relative space-y-10">
          {schedule.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative flex items-start gap-6"
            >
              {/* Pulsing Node */}
              <div className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </div>
              
              <div className="flex-1 text-left">
                <p className="font-display text-[10px] font-bold text-gold/60">
                  {item.time}
                </p>
                <p className="mt-1 font-body text-base font-semibold leading-snug text-parchment">
                  {item.title}
                </p>
                {item.note && (
                  <p className="mt-2 font-body text-xs leading-relaxed text-parchment/50 border-l-2 border-white/10 pl-3">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
