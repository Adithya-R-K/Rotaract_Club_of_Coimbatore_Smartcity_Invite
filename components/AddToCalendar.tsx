"use client";

import { CalendarPlus } from "lucide-react";
import { event } from "@/config/event";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toUtcStamp(date: Date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

function getRange() {
  const start = new Date(event.dateISO);
  const end = new Date(start.getTime() + event.durationHours * 60 * 60 * 1000);
  return { start, end };
}

function buildGoogleUrl() {
  const { start, end } = getRange();
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.eventName} — ${event.subtitle}`,
    dates: `${toUtcStamp(start)}/${toUtcStamp(end)}`,
    details: `${event.occasion} · Rotary Year ${event.rotaryYear} · Theme: ${event.theme.name}`,
    location: event.venue.name
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildIcsDataUrl() {
  const { start, end } = getRange();
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DHRUVAM//Installation Ceremony//EN",
    "BEGIN:VEVENT",
    `UID:dhruvam-${start.getTime()}@rac-coimbatore-smart-city`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART:${toUtcStamp(start)}`,
    `DTEND:${toUtcStamp(end)}`,
    `SUMMARY:${event.eventName} — ${event.subtitle}`,
    `DESCRIPTION:${event.occasion} · Rotary Year ${event.rotaryYear} · Theme: ${event.theme.name}`,
    `LOCATION:${event.venue.name}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  return `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
}

export default function AddToCalendar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={buildGoogleUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-midnight transition hover:bg-gold-soft"
      >
        <CalendarPlus className="h-4 w-4" aria-hidden="true" />
        Add to Google Calendar
      </a>
      <a
        href={buildIcsDataUrl()}
        download="dhruvam-installation-ceremony.ics"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-medium text-parchment/85 transition hover:border-gold/60 hover:text-gold"
      >
        Download .ics (Apple / Outlook)
      </a>
    </div>
  );
}
