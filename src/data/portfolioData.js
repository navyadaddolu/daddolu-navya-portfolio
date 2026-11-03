// ============================================================
// portfolioData.js — All website content lives here.
// Import this file in your components — never hard-code text
// directly in JSX. Edit this file to update the whole site.
// ============================================================

// ─── Personal identity ───────────────────────────────────────
export const personalInfo = {
  name: "DADDOLU NAVYA",
  firstName: "DADDOLU NAVYA",
  brandName: "DADDOLU NAVYA",        // shown in preloader, navbar and footer
  title: "Data Analyst",
  location: "",                       // city/country not provided
  phone: "",                          // phone not provided
  emails: {
    primary: "navyadaddolu9@gmail.com",
    secondary: "",
  },
  summary:
    "B.Tech CSE graduate aspiring to become a Data Analyst, with skills in Python, SQL, Excel and data visualization.",
  resumeUrl: "/Navya_Daddolu_resume.pdf", // place the PDF inside /public
};

// ─── TAP Academy credit (used in the footer) ─────────────────
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ─── Social / external links ─────────────────────────────────
export const socialLinks = {
  github: "https://github.com/navyadaddolu",
  linkedin: "https://www.linkedin.com/in/navya-daddolu-085199317",
  instagram: "", // not provided
};

// ─── Hero section ────────────────────────────────────────────
export const heroContent = {
  greeting: "Hi, I'm DADDOLU NAVYA",
  titleHighlight: "Data Analyst",
  subtitle:
    "Turning raw data into clear insights with Python, SQL, and data visualisation.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:navyadaddolu9@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Navya_Daddolu_resume.pdf" },
};

// ─── About section ───────────────────────────────────────────
export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (rendered with dangerouslySetInnerHTML).
  bio: `I'm a <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">B.Tech CSE graduate</span> passionate about data analysis and machine learning. I enjoy uncovering patterns in complex datasets using Python, SQL, and data visualisation tools, sharpening my skills through the placement training program at TAP Academy.`,
  // Tech stack badges shown under the bio
  techStack: ["Python", "SQL", "Excel", "Pandas", "Data Visualisation"],
};

// ─── Skills / Process section ────────────────────────────────
// (The "How I Work" 4-step process cards)
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn data into decisions",
  description:
    "A structured, insight-driven approach — from raw data to actionable results.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem domain, collecting relevant datasets, and identifying the key questions that data needs to answer.",
    },
    {
      number: "02",
      title: "Analyse",
      text: "I explore and clean the data using Python and Pandas, surfacing patterns, outliers, and trends through statistical analysis.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build models or pipelines — from SQL queries and Excel dashboards to machine-learning models with XGBoost or LSTM — tailored to the use case.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I present findings through clear visualisations and reports, and where needed deploy models via lightweight APIs built with Flask.",
    },
  ],
  endText: "Ready to deliver insights!",
};

// ─── Technical skills ────────────────────────────────────────
export const technicalSkills = {
  badge: "Technical Stack",
  heading: "My Skillset",
  description:
    "Tools and technologies I use to explore, analyze, and present data.",
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "SQL" }],
    },
    {
  title: "DATA ANALYTICS",
  skills: [
    {name: "Microsoft Excel"},
    {name: "Power BI"},
    {name: "Tableau"},
    {name: "Data Cleaning"},
    {name: "Data Visualization"},
    {name: "Data Analysis"}
  ]
},
    {
      title: "Web",
      skills: [{ name: "HTML" }, { name: "CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "VS Code" }, { name: "Jupyter Notebook" }],
    },
  ],
};

// ─── Leadership / activities (skipped — not provided) ────────
export const leadershipList = [];

// ─── Internships / experience (skipped — not provided) ───────
export const internshipsList = [];

// ─── Soft skills ─────────────────────────────────────────────
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "I break down complex data problems into smaller, manageable steps to reach clear and reliable solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "I evaluate data from multiple angles before drawing conclusions, ensuring insights are accurate and meaningful.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "I quickly pick up new tools, datasets, and problem domains — staying effective even when requirements change.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "I prioritise tasks effectively to meet project deadlines without compromising the quality of my analysis.",
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: "maintainx-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "MaintainX AI – Predictive Maintenance System",
    description:
      "Predicts potential machine failures using industrial sensor data and provides maintenance insights to reduce unexpected downtime. Built end-to-end from data ingestion to a Flask API, combining LSTM time-series modelling with XGBoost classification.",
    techTags: ["Python", "Pandas", "XGBoost", "LSTM", "Flask", "MySQL"],
    links: {
      github:
        "https://github.com/navyadaddolu/MaintainX-AI-Predictive-Maintenance",
      demo: "", // no live demo — "Demo Coming Soon" shown in UI
    },
    isFlagship: true,
    // No video link provided — field omitted intentionally
  },
];

export const projectsContent = {
  badge: "Featured Projects",
  heading: "Work that speaks for itself",
  description:
    "A selection of projects where data and thoughtful engineering come together.",
  githubLabel: "GitHub",
  liveDemoLabel: "Live Demo",
  demoComingSoonLabel: "Demo Coming Soon",
  repositoriesLabel: "Explore All My Repositories",
};

// ─── Certificates (optional bonus component) ─────────────────
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/navya-daddolu-085199317",
};

// ─── Education ───────────────────────────────────────────────
export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Sri Padmavati Mahila Visvavidyalayam",
  cgpa: "2022 – 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

// ─── Footer ──────────────────────────────────────────────────
export const footerContent = {
  taglines: [
    "Data Analyst",
    "Python · SQL · Excel",
    "Turning data into decisions",
  ],
  credential: "B.Tech CSE",
  copyright: `© ${new Date().getFullYear()} DADDOLU NAVYA | Built with React`,
};

// ─── EmailJS (read from .env.local) ──────────────────────────
// Create .env.local and add:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
