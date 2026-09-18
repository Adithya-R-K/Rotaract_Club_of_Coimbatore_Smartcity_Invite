import { club, event } from "@/config/event";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight-deep px-6 py-10 text-center sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3">
        <p className="font-display text-lg text-parchment/85">
          {club.name}
        </p>
        <p className="font-body text-sm text-parchment/50">
          {event.eventName} · {event.occasion} · {event.rotaryYear}
        </p>
        <a
          href="#top"
          className="mt-4 font-body text-xs uppercase tracking-ceremonial text-parchment/40 transition hover:text-gold"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
