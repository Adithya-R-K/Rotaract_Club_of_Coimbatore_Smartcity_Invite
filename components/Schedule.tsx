import Section from "./Section";
import { schedule } from "@/config/event";

export default function Schedule() {
  return (
    <Section id="schedule">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        Order of proceedings
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        Event schedule
      </h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-parchment/80">
        The full run-of-show for the ceremony.
      </p>

      <ol className="mx-auto mt-10 max-w-md space-y-8">
        {schedule.map((item, i) => (
          <li key={i} className="text-center">
            <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-gold" />
            <p className="font-body text-sm tracking-ceremonial text-aurora/70">
              {item.time}
            </p>
            <p className="mt-1 font-display text-xl text-parchment">
              {item.title}
            </p>
            {item.note && (
              <p className="mt-1 font-body text-sm text-parchment/50">
                {item.note}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
