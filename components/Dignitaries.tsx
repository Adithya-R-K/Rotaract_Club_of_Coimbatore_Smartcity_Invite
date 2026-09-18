import { Crown, Star, Sparkles, BadgeCheck, UserRound, LucideIcon } from "lucide-react";
import Section from "./Section";
import { dignitaries } from "@/config/event";

const iconMap: Record<string, LucideIcon> = {
  crown: Crown,
  star: Star,
  sparkles: Sparkles,
  badge: BadgeCheck
};

export default function Dignitaries() {
  return (
    <Section id="dignitaries" bg="teal">
      <h2 className="font-display text-4xl text-parchment sm:text-5xl">
        In the Presence Of
      </h2>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
        {dignitaries.map((guest, i) => {
          const Icon = (guest.icon && iconMap[guest.icon]) || UserRound;
          const revealed = Boolean(guest.name);
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-violet/10 px-6 py-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50">
                <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              </span>
              <div className="text-center">
                <p className="font-body text-xs uppercase tracking-ceremonial text-gold/80">
                  {guest.designation}
                </p>
                <p className="mt-1 font-display text-xl text-parchment">
                  {revealed ? guest.name : "To be revealed"}
                </p>
                {revealed && guest.subtitle && (
                  <p className="mx-auto mt-1 max-w-sm font-body text-xs leading-relaxed text-parchment/60">
                    {guest.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
