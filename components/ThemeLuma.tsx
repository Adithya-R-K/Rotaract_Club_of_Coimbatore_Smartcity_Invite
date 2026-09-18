import Section from "./Section";
import { event } from "@/config/event";

const wordMeaning: Record<string, string> = {
  Lead: "Take the first step so others have a direction to follow.",
  Unite: "Bring different strengths together toward one purpose.",
  Motivate: "Keep the energy alive between one project and the next.",
  Act: "Turn plans into work that actually reaches people."
};

export default function ThemeLuma() {
  return (
    <Section id="theme" bg="teal">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        The year&rsquo;s theme
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        {event.theme.name}
      </h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-parchment/80">
        Four words the incoming board has chosen to build the year around —
        not a slogan, but a working checklist for every project that
        follows.
      </p>

      <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {event.theme.words.map((word) => (
          <div
            key={word}
            className="rounded-lg border border-white/10 bg-midnight/40 p-6 text-center"
          >
            <dt className="font-display text-2xl italic text-aurora">
              {word}
            </dt>
            <dd className="mt-2 font-body text-base leading-relaxed text-parchment/75">
              {wordMeaning[word]}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
