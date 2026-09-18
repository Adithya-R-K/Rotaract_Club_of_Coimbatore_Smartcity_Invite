"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * The official Rotary / Rotaract / club logo lockup, shown centered in
 * the middle of the hero. This is the club's own artwork (uploaded
 * directly with its background already removed) recoloured to the
 * site's parchment tone so it reads clearly against the dark aurora
 * photo — no box or plate needed. Replace public/images/sponsor-header.png
 * to update the artwork; if the new file isn't already transparent +
 * light-coloured, it will show its own background instead of floating
 * freely.
 */
export default function SponsorHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="mx-auto mb-8 w-full max-w-md sm:max-w-lg"
    >
      <Image
        src="/images/sponsor-header.png"
        alt="Rotaract Club of Coimbatore Smart City — sponsored by Rotary Club of Coimbatore Smart City, Group 3, Rotary International District 3206"
        width={622}
        height={156}
        className="h-auto w-full"
        style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.55))" }}
        priority
      />
    </motion.div>
  );
}
