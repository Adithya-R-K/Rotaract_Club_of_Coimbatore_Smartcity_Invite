import type { Metadata } from "next";
// Self-hosted fonts (no external network calls at build or runtime —
// robust for any hosting environment, including offline CI builds).
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { seo, siteUrl, event, club, backgroundImage } from "@/config/event";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.production),
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: siteUrl.production,
    siteName: `${event.eventName} — ${club.name}`,
    images: [{ url: seo.ogImage, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-body antialiased"
        style={{ ["--aurora-photo" as string]: `url(${backgroundImage})` }}
      >
        {children}
      </body>
    </html>
  );
}
