"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Users, Calendar, MapPin } from "lucide-react";

const navItems = [
  { label: "Story", href: "#top", icon: Home },
  { label: "Team", href: "#office-bearers", icon: Users },
  { label: "Schedule", href: "#schedule", icon: Calendar },
  { label: "Venue", href: "#details", icon: MapPin }
];

export default function MobileNav({ show }: { show: boolean }) {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "top";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="fixed inset-x-0 bottom-6 z-[60] mx-auto flex items-center justify-between gap-1 rounded-full border border-white/10 bg-midnight/60 px-2 py-2.5 backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] w-[94%] max-w-sm"
        >
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = activeId === href.substring(1);
            return (
              <a
                key={label}
                href={href}
                className={`relative flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-1 transition-colors sm:px-3 ${
                  isActive ? "text-gold" : "text-parchment/50 hover:text-parchment"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap font-body text-[9px] uppercase tracking-wide sm:text-[10px] sm:tracking-widest">
                  {label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 h-1 w-1 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
