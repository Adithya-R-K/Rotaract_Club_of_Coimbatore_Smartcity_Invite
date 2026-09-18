import { CalendarDays, Clock, MapPin, Award, Navigation } from "lucide-react";
import Section from "./Section";
import AddToCalendar from "./AddToCalendar";
import { event } from "@/config/event";

const details = [
  { icon: CalendarDays, label: "Date", value: event.dateDisplay },
  { icon: Clock, label: "Time", value: event.timeDisplay },
  { icon: Award, label: "Installation year", value: event.rotaryYear }
];

export default function CeremonyDetails() {
  return (
    <Section id="details">
      <div className="px-6 text-left sm:px-0 sm:text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-aurora/80">
          The essentials
        </p>
        <h2 className="mt-2 font-display text-4xl text-parchment sm:text-5xl">
          {event.occasion}
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-xl px-6 sm:px-0">
        <div className="relative rounded-3xl bg-teal/20 border border-white/10 p-6 backdrop-blur-md shadow-lg">
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 divide-y divide-white/5 sm:divide-y-0 sm:divide-x">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2 pt-4 sm:pt-0">
                <Icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-body text-[10px] uppercase tracking-widest text-parchment/50">
                    {label}
                  </p>
                  <p className="mt-1 font-body text-sm font-semibold text-parchment">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Venue Section */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-6 w-6 text-aurora" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl text-parchment">{event.venue.name}</h3>
            <p className="mt-2 text-sm font-body text-parchment/70 max-w-[280px] leading-relaxed">
              {event.venue.addressNote}
            </p>
            
            <a
              href={event.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full max-w-[250px] items-center justify-center gap-2 rounded-full bg-gold py-3 font-body text-sm font-bold uppercase tracking-widest text-midnight transition hover:bg-gold-soft shadow-[0_0_20px_rgba(217,178,106,0.3)]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <AddToCalendar className="mt-8 justify-center" />
    </Section>
  );
}
