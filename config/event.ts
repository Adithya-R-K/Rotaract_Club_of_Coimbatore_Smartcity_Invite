/**
 * ============================================================
 * DHRUVAM — CENTRAL EVENT CONFIGURATION
 * ============================================================
 * This is the ONLY file you should need to edit for day-to-day
 * updates: date, time, venue, theme, members, contacts, and the
 * live website URL used by the invitation PDF.
 *
 * Every component reads from this file. Nothing is hardcoded
 * elsewhere, so a change here updates the whole site at once.
 * ============================================================
 */

export type Member = {
  name: string | null;
  designation: string;
  subtitle?: string | null; // secondary descriptor, e.g. an official title or honorific
  photo: string | null; // path under /public/images, or null for placeholder
  bio: string | null;
  icon?: "crown" | "star" | "sparkles" | "badge"; // used by the "In the Presence Of" cards
};

export type OfficeBearer = {
  number: string; // "01", "02", ...
  designation: string;
  name: string;
};

export const siteUrl = {
  // Replace with your real Vercel domain once deployed.
  // Update this ONE value and the PDF's "TAP TO OPEN" link,
  // the Open Graph tags, and the calendar link all follow.
  production: "https://YOUR-VERCEL-DOMAIN.vercel.app"
};

export const club = {
  name: "Rotaract Club of Coimbatore Smart City",
  shortName: "RAC Coimbatore Smart City"
};

/**
 * Site-wide background photograph (the aurora / northern lights image).
 * Currently points at the source you shared. Hotlinking a third-party
 * CDN URL works once deployed (the visitor's browser fetches it directly),
 * but that URL can change or expire since it isn't yours. For a permanent,
 * reliable background: save the image to `public/images/aurora-bg.jpg` and
 * switch this to "/images/aurora-bg.jpg".
 */
export const backgroundImage =
  "https://content.skyscnr.com/m/179b3a18b66b76eb/original/Feb-25-B2-IN-6-Northern-Lights_1B_1.jpg?resize=1224:auto";

export const event = {
  eventName: "DHRUVAM",
  subtitle: "The Star That Guides",
  occasion: "6th Installation Ceremony",
  rotaryYear: "2026–2027",

  // ISO date + time used to derive all calendar / countdown logic.
  // Update this single value if the date changes.
  dateISO: "2026-09-19T09:30:00+05:30",
  dateDisplay: "September 19, 2026",
  timeDisplay: "9:30 AM",
  durationHours: 2.5, // used for calendar end-time; adjust if the run-of-show changes

  venue: {
    name: "Siruthuli Noyyal Life Centre",
    mapsUrl:
      "https://www.google.com/maps/dir//Siruthuli+Noyyal+Life+Centre,+Ukkadam+Sungam+Bypass+Rd,+Shanmuga+Nagar,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641023/@11.0231552,76.9785856,11z",
    addressNote:
      "Ukkadam Sungam Bypass Rd, Shanmuga Nagar, Ramanathapuram, Coimbatore, Tamil Nadu 641023"
  },

  theme: {
    name: "LUMA",
    words: ["Lead", "Unite", "Motivate", "Act"]
  }
};

export const logo = {
  // Set to a path like "/images/logo.png" once your official logo is ready.
  path: null as string | null,
  alt: `${club.name} logo`
};

/**
 * Dignitaries — "In the Presence Of". Each `icon` key maps to a lucide
 * icon in Dignitaries.tsx. Leave `name: null` for anyone unconfirmed —
 * the UI falls back to an elegant "To be revealed" placeholder.
 */
export const dignitaries: Member[] = [
  {
    name: "Surya Moorthy",
    designation: "Chief Guest",
    subtitle: "Additional Deputy Commissioner of Police, Crime Against Women and Children, Coimbatore City",
    photo: null,
    bio: null,
    icon: "crown"
  },
  {
    name: "PHF. Rtn. Murtuza Raja",
    designation: "Guest of Honour",
    subtitle: "Paul Harris Fellow · President, Rotary Club of Coimbatore Smart City",
    photo: null,
    bio: null,
    icon: "star"
  },
  {
    name: "Rtr. MPHF. Vijay Vignesh",
    designation: "District Rotaract Representative",
    subtitle: null,
    photo: null,
    bio: null,
    icon: "sparkles"
  },
  {
    name: "Rtr. PHF. Sanjay",
    designation: "DRR Elect",
    subtitle: null,
    photo: null,
    bio: null,
    icon: "badge"
  }
];

/**
 * The Pinnacle Office Bearers — the incoming board for 2026–2027.
 * Rendered as a centered, numbered roll call.
 */
export const officeBearersTagline = "One by one. One summit. One team.";
export const officeBearers: OfficeBearer[] = [
  { number: "01", designation: "Immediate Past President", name: "Rtr. Akilesh D" },
  { number: "02", designation: "President", name: "Rtr. Nirmal Kumar K" },
  { number: "03", designation: "Secretary – Administration", name: "Rtr. Akshara K" },
  { number: "04", designation: "Secretary – Communication", name: "Rtr. Umang Jaiswal" },
  { number: "05", designation: "Vice President", name: "Rtr. Adithya R K" },
  { number: "06", designation: "Treasurer", name: "Rtr. Kavin Kumar S" },
  { number: "07", designation: "Chair – All Avenues", name: "Rtr. Yoga R" },
  { number: "08", designation: "Director – Club Service", name: "Rtr. Harshita J" },
  { number: "09", designation: "Rotaract Learning Facilitator", name: "Rtr. Rishi Ragavan" },
  { number: "10", designation: "Director – Community Service", name: "Rtr. Athish Pranav A S" },
  { number: "11", designation: "Young Leader Contact", name: "Rtr. Athish Pranav A S" },
  { number: "12", designation: "Director – Professional Service", name: "Rtr. Arthi K" },
  { number: "13", designation: "Director – International Service", name: "Rtr. Akassh G" },
  { number: "14", designation: "Chair – District Priority Projects", name: "Rtr. Sreevanth" },
  { number: "15", designation: "Chair – Club Membership", name: "Rtr. Harish Siddharth N" },
  { number: "16", designation: "Chair – The Rotary Foundation", name: "Rtr. Akassh G" },
  { number: "17", designation: "Chair – Public Image", name: "Rtr. Vikashine C" },
  { number: "18", designation: "Editor in Chief", name: "Rtr. Ridhu Varsini B" },
  { number: "19", designation: "Chair – Blood Donor Cell", name: "Rtr. Nishanth K" },
  { number: "20", designation: "Club Advisor", name: "Rtr. Vishruti Premanand" }
];

/**
 * Event schedule / run-of-show.
 * Leave empty or mark items as tentative until confirmed.
 */
export type ScheduleItem = { time: string; title: string; note?: string };
export const schedule: ScheduleItem[] = [
  { time: "01", title: "Calling the Dignitaries to the Dias" },
  { time: "02", title: "Adorning the Collar to the President" },
  { time: "03", title: "Installation Call to Order by the President" },
  { time: "04", title: "Rotaract Prayer and Four-Way Test" },
  { time: "05", title: "Welcome Address by the Outgoing President" },
  { time: "06", title: "Annual Club Secretary\u2019s Report" },
  {
    time: "07",
    title:
      "New Member Induction by the District Rotaract Representative (DRR)"
  },
  {
    time: "08",
    title:
      "Farewell Address and Introduction of the New President by the Outgoing President"
  },
  {
    time: "09",
    title: "Installation of the New President & Transfer of Club Authority",
    note: "Transfer of the Collar and Gavel by the Outgoing President"
  },
  { time: "10", title: "Acceptance Speech by the Newly Installed President" },
  {
    time: "11",
    title:
      "Introduction of the New Team of Office Bearers by the Newly Installed President"
  },
  { time: "12", title: "Oath-Taking Ceremony by the Office Bearers" },
  {
    time: "13",
    title:
      "Exchange of Club Charter from the Outgoing Secretary to the Incoming Secretary"
  },
  { time: "14", title: "Release of the Club Logo, Theme, Standee & Letterhead" },
  {
    time: "15",
    title: "Release of the Club Bulletin & Project Releases",
    note: "Launch of the Club Website"
  },
  { time: "16", title: "Address by the Guest of Honour" },
  { time: "17", title: "Address by the Chief Guest" },
  { time: "18", title: "Felicitation of Dignitaries & Special Guests" },
  { time: "19", title: "Announcements" },
  { time: "20", title: "Pleasantries & Fellowship" },
  { time: "21", title: "Vote of Thanks by the Newly Installed Secretary" },
  { time: "22", title: "National Anthem" },
  { time: "23", title: "Adjournment by the Club President" }
];

export const contacts = [
  {
    name: "Rtr. Nirmal Kumar",
    role: "President",
    phone: "9500575064",
    displayPhone: "95005 75064"
  },
  {
    name: "Rtr. Akshara",
    role: "Secretary – Administration",
    phone: "6383194464",
    displayPhone: "63831 94464"
  },
  {
    name: "Rtr. Umang Jaiswal",
    role: "Secretary – Communication",
    phone: "8098468572",
    displayPhone: "80984 68572"
  }
];

/**
 * RSVP configuration.
 * Set `enabled: true` and provide a `formUrl` (e.g. a Google Form)
 * once RSVP requirements are finalised. Until then the section
 * shows a "details coming soon" placeholder and collects nothing.
 */
export const rsvp = {
  enabled: false,
  formUrl: "" as string
};

export const seo = {
  title: "DHRUVAM — The Star That Guides | Rotaract Club of Coimbatore Smart City",
  description:
    "Join the 6th Installation Ceremony of the Rotaract Club of Coimbatore Smart City as we begin the 2026–2027 Rotary year under the theme LUMA — Lead, Unite, Motivate, Act.",
  // Replace with a real 1200×630 image at /public/images/og-preview.jpg
  ogImage: "/images/og-preview.jpg"
};
