"use client";

import { useState } from "react";
import { Phone, MessageCircle, Copy, Check } from "lucide-react";
import Section from "./Section";
import { contacts } from "@/config/event";

function ContactCard({
  name,
  role,
  phone,
  displayPhone
}: {
  name: string;
  role: string;
  phone: string;
  displayPhone: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the number is still visible to copy manually.
    }
  }

  return (
    <div className="rounded-xl border border-white/10 bg-midnight/40 p-6 text-center">
      <p className="font-display text-xl text-parchment">{name}</p>
      <p className="mt-1 font-body text-sm text-aurora/70">{role}</p>
      <p className="mt-3 font-body text-base text-parchment/80">{displayPhone}</p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <a
          href={`tel:+91${phone}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm text-parchment/85 transition hover:border-gold/60 hover:text-gold"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={`https://wa.me/91${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm text-parchment/85 transition hover:border-gold/60 hover:text-gold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <button
          onClick={copyNumber}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm text-parchment/85 transition hover:border-gold/60 hover:text-gold"
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy number"}
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [first, ...rest] = contacts;
  return (
    <Section id="contact">
      <p className="font-body text-sm tracking-ceremonial text-aurora/80">
        Questions before the day
      </p>
      <h2 className="mt-3 font-display text-4xl text-parchment sm:text-5xl">
        Get in touch
      </h2>

      <div className="mx-auto mt-10 max-w-3xl">
        {first && (
          <div className="mx-auto mb-5 max-w-sm">
            <ContactCard {...first} />
          </div>
        )}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {rest.map((c) => (
            <ContactCard key={c.phone} {...c} />
          ))}
        </div>
      </div>
    </Section>
  );
}
