import Section from "./Section";
import { event } from "@/config/event";

export default function AboutDhruvam() {
  return (
    <Section id="about">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        About the ceremony
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        Every club needs a star to steer by.
      </h2>
      <div className="mx-auto mt-6 max-w-2xl space-y-5 font-body text-lg leading-relaxed text-parchment/80">
        <p>
          Dhruva, the pole star, has held its place in the sky long enough
          that generations of travellers learned to trust it. It doesn&rsquo;t
          move with the seasons or bend to the weather. It simply stays
          fixed, so that anyone looking up has something steady to follow.
        </p>
        <p>
          {event.eventName} borrows that idea for a night of transition. As
          one team of office bearers hands the club to the next, we&rsquo;re
          not just marking a change of hands — we&rsquo;re pointing at what
          stays constant through it: purpose, service, and the direction the
          club has chosen for itself.
        </p>
        <p>
          This is the {event.occasion.toLowerCase()}, opening the {" "}
          {event.rotaryYear} Rotary year. Consider this page your invitation
          to the room where that direction gets set.
        </p>
      </div>
    </Section>
  );
}
