// All portfolio content. Edit here - components just render this data.
// EXP row:  [role, company, dates, bullets[], tech[]]
// PROJ row: [name, type, filters(w=web m=mobile f=full-stack a=automation), tech, description, status("building"|""), repoUrl]
// LANGS row:[name, percent, inline SVG logo]   STATS row: [number, suffix, label]
export const NAV: string[] = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Research",
  "Contact",
];

export const STATS: [number, string, string][] = [
  [10, "+", "Web Applications"],
  [15, "+", "Projects"],
  [3, "", "Professional Experience Areas"],
  [15, "+", "Technologies"],
];

export const FOCUS: string[] = [
  "Full-stack web",
  "Software engineering",
  "Digital automation",
  "Microsoft Power Platform",
  "Business applications",
  "API integration",
  "Database systems",
  "Cloud technologies",
];

export const EDU: [string, string, string][] = [
  [
    "March 2025",
    "B.Sc. (Hons) in Information Technology",
    "Specializing in Software Engineering · SLIIT",
  ],
  [
    "2023 – 2026",
    "Professional development",
    "Internships, freelance delivery and certifications across web, mobile and automation",
  ],
];

export const EXP: [string, string, string, string[], string[]][] = [
  [
    "Digital Automation Engineer Intern",
    "Linea Intimo, MAS Active – Biyagama",
    "July 2025 – April 2026",
    [
      "Designed, developed and maintained business applications using Microsoft Power Apps",
      "Worked with Canvas and Model-driven applications",
      "Gathered requirements with stakeholders",
      "Delivered two business applications for production tracking",
      "Supported data integration across Microsoft 365 and external APIs",
      "Worked with SQL database management and production data",
      "Studied Azure App Services and Azure Machine Learning",
      "Developed a Yarn Requesting & Tracking System and a Sub Assembly Area Digitalization app",
    ],
    ["Power Apps", "Power Automate", "Power BI", "Microsoft 365", "SQL", "Azure"],
  ],
  [
    "Freelance Web Developer",
    "Self Employed",
    "December 2023 – Present",
    [
      "Developed and contributed to multiple university-level projects",
      "Developed and deployed 10+ responsive web applications",
      "Worked with MERN and Next.js",
      "Built full-stack applications with authentication and data management",
      "Developed admin dashboards, gallery management systems and contact forms",
      "Integrated third-party APIs, GraphQL and Firebase",
    ],
    ["MERN", "Next.js", "GraphQL", "Firebase", "Tailwind CSS"],
  ],
  [
    "Software Engineer Intern",
    "MAS Active Trading Nirmaana – Katunayake",
    "April 2023 – October 2023",
    [
      "Developed mobile application prototypes for Android and iOS",
      "Worked on automated sewing-machine controls",
      "Implemented start/stop, speed adjustment and stitch pattern selection",
      "Worked with real-time machine monitoring and productivity/error reporting",
      "Collaborated with stakeholders to gather feedback",
    ],
    ["Android", "iOS", "Mobile", "Real-time monitoring"],
  ],
];

/* p: [name,type,cats(w,m,f,a),tech,desc,status,link] */
export const PROJ: [string, string, string, string, string, string, string][] = [
  [
    "TaskFlow – Project & Team Management Platform",
    "Web Application",
    "wf",
    "Next.js · NestJS · PostgreSQL · Prisma",
    "A full-stack project management platform featuring authentication, project and team management, task tracking and Kanban board functionality.",
    "building",
    "",
  ],
  [
    "LensCity — Interactive 3D Photography Portfolio",
    "Web Application",
    "wf",
    "Next.js · TypeScript · React Three Fiber · Three.js · Tailwind CSS · GSAP / Framer Motion",
    "Immersive photography portfolio featuring an interactive 3D city, cursor-responsive camera movement, cinematic transitions, and glassmorphism content panels for exploring galleries and website sections.",
    "",
    "https://github.com/ashen910/LensCity_Photography_webpage.git",
  ],
  [
    "Online Bus Ticketing System",
    "Web & Mobile Application",
    "wmf",
    "MERN Stack · React.js · Node.js · Express.js · MongoDB",
    "Online bus ticketing platform focused on database performance and user experience.",
    "",
    "",
  ],
  [
    "CM Laser Solution",
    "Web Application",
    "w",
    "HTML · CSS · PHP · JavaScript · MySQL",
    "Single-page business website featuring smooth navigation, contact forms, feedback, gallery, file downloads and an admin dashboard.",
    "",
    "",
  ],
  [
    "MediCore Health Care",
    "Web Application",
    "w",
    "HTML · CSS · PHP · JavaScript · MySQL",
    "Doctor appointment booking system where users can view doctors, check available time slots and book appointments.",
    "",
    "https://github.com/ashen910/Medicore_Healthcare_App",
  ],
  [
    "Currency Converter",
    "Web Application",
    "wf",
    "React.js · Node.js · Express.js · Tailwind CSS",
    "Full-stack currency converter using real-time exchange-rate APIs with responsive UI.",
    "",
    "https://github.com/ashen910/Currency_Converter",
  ],
  [
    "Research Project Management Tool",
    "Web Application",
    "wf",
    "MERN Stack",
    "Project management tool designed to improve collaboration and task tracking.",
    "",
    "https://github.com/ashen910/Research_Project_Management_Tool",
  ],
  [
    "Pomodoro Trainer",
    "iOS Mobile Application",
    "m",
    "SwiftUI · Core Data",
    "Productivity application focused on time-management functionality.",
    "",
    "",
  ],
  [
    "White Light Health Services Mobile Application",
    "Mobile Application",
    "m",
    "Java · Firebase",
    "Mobile application using Firebase for real-time data storage.",
    "",
    "https://github.com/ashen910/White-Light-Health-Service",
  ],
  [
    "White Light Company Management System",
    "Web Application",
    "wf",
    "MERN Stack",
    "Web-based management system focused on business operations and data management.",
    "",
    "https://github.com/ashen910/Company_Management_System",
  ],
  [
    "RAVANA Engineering Consulting",
    "Web Application",
    "wf",
    "MERN Stack",
    "Consulting service application focused on user-friendly design and efficient database interaction.",
    "",
    "https://github.com/ashen910/Consulting_company_System",
  ],
  [
    "Frosting Palace",
    "Mobile Application",
    "m",
    "Java · Firebase",
    "Mobile application with a streamlined user interface.",
    "",
    "https://github.com/ashen910/White-Walkers",
  ],
  [
    "Outback Adventure Wildlife Safari Mgmt System",
    "Web Application",
    "w",
    "HTML · CSS · JavaScript · PHP · XAMPP",
    "Management system designed for operational management and user experience.",
    "",
    "",
  ],
  [
    "Yarn Requesting & Tracking System",
    "Automation · Power Apps",
    "a",
    "Power Apps · Microsoft 365",
    "Yarn ordering process and request-status tracking built at MAS Active.",
    "",
    "",
  ],
  [
    "Sub Assembly Area Digitalization",
    "Automation · Power Apps",
    "a",
    "Power Apps · Power BI · SQL",
    "Production-floor digitalization: scanning, tracking and production progress review.",
    "",
    "",
  ],
];

export const FEAT = 3;

export const FILTERS: [string, string][] = [
  ["all", "All"],
  ["w", "Web"],
  ["m", "Mobile"],
  ["f", "Full Stack"],
  ["a", "Automation"],
];

export const SKILLS: Record<string, string[]> = {
  Frontend: ["Next.js", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["NestJS", "Node.js", "Express.js", "PHP"],
  Languages: ["Java", "JavaScript", "C", "C++", "Python"],
  Mobile: ["React Native", "Swift", "SwiftUI"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  "Microsoft / Automation": [
    "Microsoft Power Apps",
    "Power Automate",
    "Power BI",
    "Microsoft 365",
  ],
  "Cloud / DevOps": [
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ],
  "Tools & Design": ["Git", "GitHub", "Figma", "Photoshop", "UI/UX"],
};
export const LANGS: [string, number, string][] = [
  [
    "Java",
    70,
    '<path d="M14 24h20v6c0 6-4 9-10 9s-10-3-10-9z" fill="#f89820"/><path d="M34 26h3c3 0 3 6-1 6h-2" fill="none" stroke="#f89820" stroke-width="2.4"/><path d="M13 43h22" stroke="#5382a1" stroke-width="3" stroke-linecap="round"/><path d="M22 7c4 4-4 6 0 10M28 9c3 3-2 5 0 8" fill="none" stroke="#e76f00" stroke-width="2.2" stroke-linecap="round"/>',
  ],
  [
    "React",
    75,
    '<g fill="none" stroke="#61dafb" stroke-width="2.4"><ellipse cx="24" cy="24" rx="20" ry="7.5"/><ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)"/></g><circle cx="24" cy="24" r="3.4" fill="#61dafb"/>',
  ],
  [
    "Next.js",
    70,
    '<circle cx="24" cy="24" r="21" fill="#fff"/><path d="M17.5 33V15h3l10 14.500V15h2.500v18h-3l-10-14.500V33z" fill="#000"/>',
  ],
  [
    "Python",
    60,
    '<path id="py" d="M23.500 4C15 4 15.500 7.700 15.500 7.700V12H24v1.500H11.500S6 12.900 6 21.500s4.800 8.300 4.800 8.300H14v-4s-.2-4.800 4.700-4.800h8s4.600.1 4.600-4.500V9S32 4 23.500 4z" fill="#3776ab"/><use href="#py" transform="rotate(180 24 24)" fill="#ffd43b"/><circle cx="19" cy="9" r="1.600" fill="#fff"/><circle cx="29" cy="39" r="1.600" fill="#fff"/>',
  ],
  [
    "C",
    60,
    '<path d="M24 3l18 10.500v21L24 45 6 34.500v-21z" fill="#5c6bc0"/><text x="24" y="31" font-size="21" font-family="Arial" font-weight="700" text-anchor="middle" fill="#fff">C</text>',
  ],
  [
    "PHP",
    70,
    '<ellipse cx="24" cy="24" rx="22" ry="13" fill="#777bb3"/><text x="24" y="29" font-size="14" font-style="italic" font-family="Arial" font-weight="700" text-anchor="middle" fill="#fff">php</text>',
  ],
  [
    "Node.js",
    70,
    '<path d="M24 3l18 10.500v21L24 45 6 34.500v-21z" fill="#5fa04e"/><text x="24" y="29.500" font-size="15" font-family="Arial" font-weight="700" text-anchor="middle" fill="#fff">JS</text>',
  ],
  [
    "NestJS",
    70,
    '<path d="M24 3l17 8v17c0 8-9 14-17 17C16 42 7 36 7 28V11z" fill="#e0234e"/><text x="24" y="32" font-size="20" font-family="Arial" font-weight="700" text-anchor="middle" fill="#fff">N</text>',
  ],
];

export const CERTS: [string, string][] = [
  ["Introduction to Information Security", "Offered by Great Learning"],
  ["Machine Learning with Python", "Offered by Great Learning"],
  ["Software Engineer Role Certification", "Offered by HackerRank"],
  ["React (Basic)", "Offered by HackerRank"],
  ["CSS (Basic)", "Offered by HackerRank"],
  ["OOPs in Java", "Offered by Great Learning"],
  ["Web Development in HTML, CSS, JavaScript", "Offered by SoloLearn"],
  ["Introduction to Java", "Offered by SoloLearn"],
];
export const SOCIAL: [string, string, string][] = [
  [
    "GitHub",
    "https://github.com/ashen910",
    "M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.200 1.8 1.2 1 1.800 2.700 1.300 3.400 1 .1-.8.4-1.300.8-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 12 .5z",
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/ashenewijenayake910",
    "M20.4 20.5h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zM7.100 20.500H3.600V9h3.500v11.500z",
  ],
  [
    "Email",
    "mailto:ashenwi910@gmail.com",
    "M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 3-8 5-8-5v7h16v-7z",
  ],
];
