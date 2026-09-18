"use client";

import { useState } from "react";
import OpeningExperience from "@/components/OpeningExperience";
import Hero from "@/components/Hero";
import AboutDhruvam from "@/components/AboutDhruvam";
import ThemeLuma from "@/components/ThemeLuma";
import CeremonyDetails from "@/components/CeremonyDetails";
import Dignitaries from "@/components/Dignitaries";
import OfficeBearers from "@/components/OfficeBearers";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-midnight"
      >
        Skip to content
      </a>

      <OpeningExperience onEnter={() => setEntered(true)} />

      {/*
        The main site is only ever painted once the opening experience has
        been dismissed by an explicit click. Until then it stays fully
        hidden (not just faded) so it can never bleed through or visually
        "merge" with the opening screen underneath.
      */}
      <div
        aria-hidden={!entered}
        className={entered ? "" : "hidden"}
      >
        <main id="main" className="relative">
          <Hero />
          <AboutDhruvam />
          <ThemeLuma />
          <CeremonyDetails />
          <Dignitaries />
          <OfficeBearers />
          <Schedule />
          <Venue />
          <Contact />
          <Closing />
        </main>
        <Footer />
      </div>
    </>
  );
}
