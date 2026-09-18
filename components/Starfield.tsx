"use client";

import { useMemo } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function makeStars(count: number, seed: number): Star[] {
  // Simple deterministic pseudo-random generator so the field looks
  // organic but never causes a server/client hydration mismatch.
  let value = seed;
  const next = () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: next() * 100,
    left: next() * 100,
    size: next() * 1.6 + 0.6,
    delay: next() * 4,
    duration: 3 + next() * 3
  }));
}

export default function Starfield({
  density = 90,
  className = ""
}: {
  density?: number;
  className?: string;
}) {
  const stars = useMemo(() => makeStars(density, 42), [density]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield-dot animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
}
