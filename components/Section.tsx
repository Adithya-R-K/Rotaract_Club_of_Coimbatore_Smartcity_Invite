"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
  bg = "transparent"
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bg?: "transparent" | "teal";
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-6 py-20 text-center sm:px-10 sm:py-28 ${
        bg === "teal" ? "bg-teal/40" : ""
      } ${className}`}
    >
      <motion.div
        className="mx-auto w-full max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
