import { MapPin } from "lucide-react";
import Section from "./Section";
import { event } from "@/config/event";

export default function Venue() {
  return (
    <Section id="venue" bg="teal">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        Where to be
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        {event.venue.name}
      </h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-parchment/80">
        {event.venue.addressNote}
      </p>

      <a
        href={event.venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-midnight transition hover:bg-gold-soft"
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Get Directions
      </a>
    </Section>
  );
}
