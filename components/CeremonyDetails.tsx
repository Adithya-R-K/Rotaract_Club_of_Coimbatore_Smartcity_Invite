import { CalendarDays, Clock, MapPin, Award } from "lucide-react";
import Section from "./Section";
import AddToCalendar from "./AddToCalendar";
import { event } from "@/config/event";

const details = [
  { icon: CalendarDays, label: "Date", value: event.dateDisplay },
  { icon: Clock, label: "Time", value: event.timeDisplay },
  { icon: MapPin, label: "Venue", value: event.venue.name },
  { icon: Award, label: "Installation year", value: event.rotaryYear }
];

export default function CeremonyDetails() {
  return (
    <Section id="details">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        The essentials
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        {event.occasion}
      </h2>

      <div className="mx-auto mt-10 max-w-xl divide-y divide-white/10 rounded-xl border border-white/10">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-5 sm:p-6">
            <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div className="text-center">
              <p className="font-body text-xs uppercase tracking-ceremonial text-parchment/50">
                {label}
              </p>
              <p className="mt-1 font-body text-lg text-parchment">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <AddToCalendar className="mt-8 justify-center" />
    </Section>
  );
}
