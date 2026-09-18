import Section from "./Section";
import Starfield from "./Starfield";
import { club, event } from "@/config/event";

export default function Closing() {
  return (
    <Section id="closing" className="overflow-hidden text-center">
      <div className="relative">
        <Starfield density={40} className="hidden sm:block" />
        <p className="font-body text-sm tracking-ceremonial text-aurora/80">
          Until {event.dateDisplay}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-snug text-parchment sm:text-4xl">
          One star doesn&rsquo;t light the whole sky. It just gives everyone
          else something to walk toward.
        </h2>
        <p className="mt-6 font-body text-base text-parchment/70">
          We&rsquo;d love to have you there.
        </p>
        <p className="mt-8 font-display text-xl italic text-aurora">
          {club.name}
        </p>
      </div>
    </Section>
  );
}
