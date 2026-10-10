// Project Overviews section content. Screenshots live in /public/projects/<id>/.
// To add images: drop the file in the folder and add a row to `shots` (src, caption, width, height).
export type Shot = { src: string; caption: string; w: number; h: number };
export type Overview = {
  id: string;
  name: string;
  type: string;
  blurb: string;
  tech: string[];
  repo?: string;
  shots: Shot[];
  video?: { src: string; poster: string; caption: string; muted?: boolean };
};

export const OVERVIEWS: Overview[] = [
  {
    id: "cm-laser",
    name: "CM Laser Solutions",
    type: "Business website + admin dashboard",
    blurb: "Single-page business website with smooth navigation, contact forms, feedback, gallery, file downloads and an admin dashboard for managing site media.",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    shots: [
      { src: "/projects/cm-laser/01-hero.jpg", caption: "Landing page hero", w: 800, h: 500 },
      { src: "/projects/cm-laser/02-services.jpg", caption: "Services, facility and capabilities", w: 800, h: 500 },
      { src: "/projects/cm-laser/03-why-choose-us.jpg", caption: "Why choose us", w: 800, h: 500 },
      { src: "/projects/cm-laser/04-gallery.jpg", caption: "Work gallery", w: 800, h: 500 },
      { src: "/projects/cm-laser/05-customers.jpg", caption: "Customers and testimonials", w: 800, h: 500 },
      { src: "/projects/cm-laser/06-admin-videos.jpg", caption: "Admin dashboard: upload and manage videos", w: 800, h: 506 },
    ],
  },
  {
    id: "medicore",
    name: "MediCore Health Care",
    type: "Doctor appointment booking system",
    blurb: "Users view doctors, check available time slots and book appointments. Admins manage bookings and doctors.",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    repo: "https://github.com/ashen910/Medicore_Healthcare_App",
    shots: [
      { src: "/projects/medicore/01-dashboard.jpg", caption: "Patient dashboard", w: 645, h: 800 },
      { src: "/projects/medicore/02-booking.jpg", caption: "Book an appointment", w: 646, h: 800 },
      { src: "/projects/medicore/03-specialty.jpg", caption: "Choose a doctor specialty", w: 642, h: 800 },
      { src: "/projects/medicore/04-doctors.jpg", caption: "Available doctors", w: 644, h: 800 },
      { src: "/projects/medicore/05-time-slot.jpg", caption: "Time slot selection", w: 800, h: 724 },
      { src: "/projects/medicore/06-profile.jpg", caption: "Patient details and booking history", w: 645, h: 800 },
      { src: "/projects/medicore/07-admin-bookings.jpg", caption: "Admin: booking management", w: 800, h: 681 },
      { src: "/projects/medicore/08-admin-doctors.jpg", caption: "Admin: doctors management", w: 800, h: 672 },
      { src: "/projects/medicore/09-register.jpg", caption: "Registration", w: 800, h: 381 },
    ],
  },
  {
    id: "white-light",
    name: "White Light Health Service",
    type: "Mobile application",
    blurb: "A Mobile app built with Java, Firebase, and Android Studio to provide a BMI calculator, a daily routine planner, and a water-intake reminder. It also offers doctor-written health articles and a note-taking feature for users to track their health journey.",
    tech: ["Java", "Firebase"],
    repo: "https://github.com/ashen910/White-Light-Health-Service",
    shots: [
      { src: "/projects/WhiteLight/Welcome.jpg", caption: "Welcome Home", w: 720, h: 1560 },
      { src: "/projects/WhiteLight/Home.jpg", caption: "Home", w: 720, h: 1560 },
      { src: "/projects/WhiteLight/BMI Calculator.jpg", caption: "BMI Page", w: 720, h: 1560 },
      { src: "/projects/WhiteLight/Daily Reminder.jpg", caption: "Daily Reminders", w: 720, h: 1560 },
      { src: "/projects/WhiteLight/Notes.jpg", caption: "Notes", w: 720, h: 1560 },
      { src: "/projects/WhiteLight/Article.jpg", caption: "Articles", w: 720, h: 1560 },
    ],
  },
  {
    id: "oviklo",
    name: "OVIKLO Yarn Requesting & Tracking System",
    type: "Power Apps · MAS Active",
    blurb: "Yarn ordering process and request-status tracking, built with Microsoft Power Apps and related Microsoft technologies.",
    tech: ["Power Apps", "Microsoft 365", "SQL"],
    shots: [],
    video: { src: "/projects/oviklo/yrts-demo.mp4", poster: "/projects/oviklo/yrts-poster.jpg", caption: "Demo walkthrough" },
  },
   {
    id: "LensCity",
    name: "LensCity — Interactive 3D Photography Portfolio",
    type: "NextJS/TypeScript · Freelancing project",
    blurb: "Designed and developed an immersive web experience that transforms a traditional photography portfolio into an interactive 3D city.",
    tech: ["Next.js", "TypeScript", "React Three Fiber", "Three.js", "Tailwind CSS","GSAP / Framer Motion"],
    repo: "https://lens-city-photography-webpage.vercel.app",
    shots: [],
    video: { src: "/projects/LensCity/Lens_City_Web_Project.mp4", poster: "/projects/LensCity/Lens_City_Web_Project-poster.png", caption: "Demo", muted: true },
  },
];
