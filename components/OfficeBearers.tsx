import Section from "./Section";
import { officeBearers, officeBearersTagline } from "@/config/event";

export default function OfficeBearers() {
  return (
    <Section id="office-bearers">
      <h2 className="font-display text-4xl text-parchment sm:text-5xl">
        The Pinnacle Office Bearers
      </h2>
      <p className="mt-3 font-body text-sm uppercase tracking-ceremonial text-aurora/80">
        {officeBearersTagline}
      </p>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {officeBearers.map((bearer) => (
          <div key={bearer.number} className="text-center">
            <p className="font-display text-sm italic text-gold/80">
              {bearer.number}
            </p>
            <p className="mt-1 font-body text-xs uppercase tracking-ceremonial text-parchment/50">
              {bearer.designation}
            </p>
            <p className="mt-1 font-display text-lg text-parchment">
              {bearer.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
