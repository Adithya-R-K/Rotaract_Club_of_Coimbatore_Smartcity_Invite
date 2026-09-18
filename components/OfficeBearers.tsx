"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { officeBearers, officeBearersTagline } from "@/config/event";
import Image from "next/image";

export default function OfficeBearers() {
  return (
    <Section id="office-bearers" className="!px-0 sm:!px-10">
      <div className="px-6 sm:px-0 text-left">
        <h2 className="font-display text-4xl text-parchment sm:text-5xl">
          The Pinnacle Office Bearers
        </h2>
        <p className="mt-3 font-body text-sm uppercase tracking-ceremonial text-aurora/80">
          {officeBearersTagline}
        </p>
      </div>

      <div className="mt-10 flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 hide-scrollbar sm:px-0">
        {officeBearers.map((bearer, i) => (
          <motion.div
            key={bearer.number}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative flex w-64 shrink-0 snap-center flex-col items-center overflow-hidden rounded-3xl bg-midnight-deep pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
          >
            <div className="relative h-64 w-full overflow-hidden bg-teal-light/20">
              {bearer.photo ? (
                <Image
                  src={bearer.photo}
                  alt={bearer.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 256px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-teal-light/30 text-parchment/20">
                  <span className="font-display text-4xl">{bearer.number}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="inline-block rounded-full bg-gold/20 px-3 py-1 font-body text-[10px] uppercase tracking-widest text-gold backdrop-blur-md border border-gold/30">
                  {bearer.number}
                </span>
              </div>
            </div>

            <div className="mt-4 px-4 text-center">
              <div className="flex min-h-[32px] flex-col items-center justify-center gap-1">
                {(Array.isArray(bearer.designation)
                  ? bearer.designation
                  : [bearer.designation]
                ).map((role) => (
                  <p
                    key={role}
                    className="font-body text-[11px] uppercase tracking-ceremonial text-parchment/60 leading-snug"
                  >
                    {role}
                  </p>
                ))}
              </div>
              <p className="mt-2 font-display text-lg text-parchment">
                {bearer.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
