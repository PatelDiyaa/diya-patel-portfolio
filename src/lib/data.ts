export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  year: string;
  role: string;
  company: string;
  tags: string[];
  status: "Shipped" | "Live" | "Concept" | "Case Study";
  cover: {
    eyebrow: string;
    gradient: string;
  };
  problem: string;
  process: string[];
  solution: string;
  outcome: { metric: string; label: string }[];
  reflection?: string;
  featured?: boolean;
};

export const profile = {
  name: "Diya Patel",
  fullName: "Diya Agamsharan Patel",
  role: "Product Designer",
  headline: "I design clear, scalable B2B products — with AI in my toolkit.",
  subhead:
    "Currently shaping task management and POS billing for thousands of restaurants at Petpooja. I work at the intersection of systems thinking, user-centered design, and modern AI-assisted workflows.",
  location: "Ahmedabad, India",
  timezone: "IST · UTC+5:30",
  email: "diyapatel8613@gmail.com",
  phone: "+91 95584 70495",
  linkedin: "https://linkedin.com/in/diya-patel-au",
  availability: "Open to product design conversations",
  bio: [
    "I'm a product designer with a Computer Science background and a Minor in Design from Ahmedabad University. My work sits at the intersection of clarity, craft, and operational reality — designing tools that real teams use every day to run their businesses.",
    "At Petpooja I lead end-to-end design for the Tasks product and ship feature work across the POS suite. That means building a multi-platform design system from scratch, owning flows from research to engineering handoff, and partnering closely with PMs, engineers, and QA.",
    "I'm also fluent in modern AI-assisted workflows. I use AI to widen the search space: to synthesize research, explore directions faster, prototype interactions, and get working artifacts in front of people sooner. But I treat AI as a thinking partner, not the designer. The judgment, taste, and final decisions stay human.",
  ],
  values: [
    {
      title: "Clarity over cleverness",
      body: "If a flow needs a tooltip to be understood, the flow is wrong. I optimize for the user's next obvious step.",
    },
    {
      title: "Systems before screens",
      body: "Every screen is part of a system. I design tokens, components, and patterns that scale across surfaces and teams.",
    },
    {
      title: "Ship, learn, repeat",
      body: "I'd rather ship a sharp v1 and learn from real users than perfect a v3 nobody has seen.",
    },
    {
      title: "AI as a collaborator",
      body: "I use AI to expand the search space — for ideation, research synthesis, copy, and prototypes — and bring human judgment to the final call.",
    },
  ],
};

export const skills = {
  craft: [
    "Product Design",
    "UI / UX Design",
    "Interaction Design",
    "Design Systems",
    "Information Architecture",
    "Wireframing & Prototyping",
    "Usability-focused Design",
    "Design Thinking",
  ],
  tools: ["Figma", "Adobe XD", "Miro", "Notion", "Linear"],
  aiWorkflow: [
    "Claude (research synthesis, copy, ideation)",
    "Cursor (design-to-code prototyping)",
    "Codex (rapid functional prototypes)",
    "AI-assisted moodboarding & exploration",
  ],
  collaboration: [
    "Cross-functional partnership with PM / Eng / QA",
    "Spec writing & engineering handoff",
    "Stakeholder reviews & async critique",
  ],
};

export const experience = [
  {
    company: "Petpooja",
    role: "Product Designer (UI/UX)",
    period: "Jan 2026 — Present",
    location: "Ahmedabad",
    blurb:
      "Leading end-to-end design for Petpooja Tasks — a task management product for SMB owners, managers, and ground staff — and shipping feature work across the POS billing suite.",
    bullets: [
      "Built a scalable web + mobile design system for Petpooja Tasks, improving consistency and shortening engineering handoff.",
      "Redesigned the task creation flow, reducing task setup time by 57.4%.",
      "Designed multi-branch task creation with an aggregated tracking view, reducing repeat task creation effort by 18%.",
      "Shipped geo-tagging and geo-fencing flows so teams can verify on-ground task completion.",
      "Redesigned POS Store On/Off into a single-step bulk action with clear visual feedback for partial states.",
      "Designed a Kanban board view to improve status tracking and workflow visibility.",
    ],
  },
  {
    company: "Petpooja",
    role: "Product Design Intern",
    period: "Oct 2025 — Jan 2026",
    location: "Ahmedabad",
    blurb:
      "Joined the design team and contributed to the Tasks product launch — moving from research and flows to high-fidelity UI in production.",
    bullets: [
      "Researched SMB task workflows across owners, managers, and ground staff.",
      "Owned screens for early Tasks releases and contributed foundational design system tokens.",
    ],
  },
  {
    company: "Apollo Infotech",
    role: "UI/UX Design Intern",
    period: "May 2024 — Jul 2024",
    location: "Ahmedabad",
    blurb:
      "Designed B2B and consumer mobile flows across two client products — a healthcare field-sales platform and a ride-hailing service.",
    bullets: [
      "Designed Healthcare FOS flows (inquiry, follow-up, renewal, demo, visit, conversion, payment), cutting manual sales tracking by ~30%.",
      "Designed rider and driver apps for Vybe Cabs with booking, real-time tracking, and intuitive navigation.",
    ],
  },
];

export const education = [
  {
    school: "Ahmedabad University",
    degree: "B.S. (Hons) Computer Science, Minor in Design",
    period: "2021 — 2025",
    note: "Coursework spanning HCI, software engineering, and interaction design — the bridge between how things work and how they feel.",
  },
];

export const projects: Project[] = [
  {
    slug: "petpooja-tasks",
    title: "Petpooja Tasks",
    subtitle: "A multi-platform task system for SMB operations",
    summary:
      "End-to-end product design for a task management tool used by restaurant owners, managers, and ground staff to coordinate daily store operations across branches.",
    year: "2026",
    role: "Lead Product Designer",
    company: "Petpooja",
    tags: ["B2B SaaS", "Design System", "Web + Mobile", "Operations"],
    status: "Shipped",
    cover: {
      eyebrow: "Flagship · Petpooja",
      gradient: "from-amber-200/40 via-rose-200/30 to-orange-300/40",
    },
    problem:
      "SMB operators were juggling tasks across WhatsApp groups, paper notebooks, and verbal handoffs — losing accountability the moment a store had more than one branch or one shift. Creating, assigning, and verifying tasks took too long, and the existing flow assumed everyone was as fluent with software as the founders.",
    process: [
      "Interviewed owners, managers, and ground staff across multi-branch outlets to map how tasks actually flow today — including failure modes.",
      "Translated journeys into a service blueprint, then collapsed the heaviest steps into a faster task creation flow.",
      "Designed a multi-platform design system in parallel — tokens, components, and patterns shared across web and mobile so feature work compounds.",
      "Partnered with engineering on handoff specs, edge cases, and motion details; iterated weekly with PM and QA.",
    ],
    solution:
      "A unified Tasks experience that lets a manager set up a task in seconds, assign it across branches, verify completion with geo-fenced proof, and track everything from a single Kanban view. The design system underneath makes every new feature ship faster than the last.",
    outcome: [
      { metric: "57.4%", label: "faster task creation" },
      { metric: "18%", label: "less repeat task effort across branches" },
      { metric: "1", label: "design system spanning web + mobile" },
    ],
    reflection:
      "The biggest lesson: SMB software lives or dies on the second day. I optimized for habits, not demos.",
    featured: true,
  },
  {
    slug: "pos-store-on-off",
    title: "POS Store On/Off Redesign",
    subtitle: "Turning a two-step aggregator toggle into a single confident action",
    summary:
      "Redesigned how restaurant owners pause and resume their stores across aggregators inside Petpooja POS — replacing a manual two-step flow with a bulk-aware single action.",
    year: "2026",
    role: "Product Designer",
    company: "Petpooja",
    tags: ["POS", "B2B SaaS", "Feature Redesign", "Edge Cases"],
    status: "Shipped",
    cover: {
      eyebrow: "POS Suite",
      gradient: "from-sky-200/40 via-indigo-200/30 to-purple-300/40",
    },
    problem:
      "Owners had to take two manual steps every time they wanted to pause their store on Swiggy, Zomato, and other aggregators — and the UI never made it clear when only some platforms were offline. Mistakes here cost real money.",
    process: [
      "Mapped the existing flow with operators and audited support tickets to surface confusion points.",
      "Identified three states owners actually care about — fully online, partially offline, fully offline — and designed visual feedback for each.",
      "Prototyped a single-step bulk control with explicit confirmation when the action would affect revenue.",
    ],
    solution:
      "A single primary control with state-aware copy, bulk selection across aggregators, and visual signals for partial-state stores. Owners can now act confidently without thinking about it.",
    outcome: [
      { metric: "1-step", label: "instead of 2 to toggle a store" },
      { metric: "100%", label: "of partial-state cases now visible" },
      { metric: "↓", label: "support tickets on store status confusion" },
    ],
    featured: true,
  },
  {
    slug: "vybe-cabs",
    title: "Vybe Cabs · Rider + Driver Apps",
    subtitle: "Mobile experiences for a safety-focused ride-hailing service",
    summary:
      "Designed the rider and driver apps for Vybe Cabs — covering booking, real-time tracking, and navigation flows — during my internship at Apollo Infotech.",
    year: "2024",
    role: "UI/UX Design Intern",
    company: "Apollo Infotech",
    tags: ["Mobility", "Mobile", "Two-sided Marketplace", "Prototyping"],
    status: "Case Study",
    cover: {
      eyebrow: "Mobility · Apollo Infotech",
      gradient: "from-emerald-200/40 via-teal-200/30 to-cyan-300/40",
    },
    problem:
      "Vybe Cabs needed both apps to feel cohesive but speak to very different mental models — riders care about safety and ETA, drivers care about visibility, earnings, and routing without distraction.",
    process: [
      "Studied existing mobility apps, mapped rider and driver journeys, and identified shared components.",
      "Wireframed booking, tracking, and navigation flows; pressure-tested edge cases like cancellations and offline periods.",
      "Built interactive prototypes for stakeholder validation before high-fidelity UI.",
    ],
    solution:
      "Two distinct but visually-aligned apps: a rider experience that prioritizes safety cues and ETA clarity, and a driver app that surfaces the next action without overwhelming the screen.",
    outcome: [
      { metric: "2", label: "apps designed end-to-end" },
      { metric: "Prototyped", label: "booking, tracking, navigation flows" },
      { metric: "Shared", label: "design language across rider + driver" },
    ],
    featured: true,
  },
  {
    slug: "healthcare-fos",
    title: "Healthcare FOS",
    subtitle: "Field-sales workflow for a healthcare distribution team",
    summary:
      "Designed a centralized Field Officer System that consolidated inquiry, follow-up, renewal, demo, visit, conversion, and payment into a single coherent workflow.",
    year: "2024",
    role: "UI/UX Design Intern",
    company: "Apollo Infotech",
    tags: ["B2B", "Healthcare", "Workflow Design", "Internal Tools"],
    status: "Case Study",
    cover: {
      eyebrow: "Healthcare · Apollo Infotech",
      gradient: "from-rose-200/40 via-pink-200/30 to-red-300/40",
    },
    problem:
      "Sales reps were juggling six different actions across spreadsheets and disconnected tools — losing context, missing follow-ups, and spending more time tracking than selling.",
    process: [
      "Shadowed the team to understand the real sequence of a field visit, not the official one.",
      "Identified shared data and actions across the six modules and consolidated them into one screen system.",
      "Designed status-driven views so a rep always knows what to do next.",
    ],
    solution:
      "A single FOS dashboard that surfaces the next action across all six modules, with quick-entry forms and a timeline of every customer interaction.",
    outcome: [
      { metric: "~30%", label: "reduction in manual tracking effort" },
      { metric: "6", label: "modules unified into one workflow" },
      { metric: "1", label: "screen system to rule them all" },
    ],
  },
  {
    slug: "rojgar-sangam",
    title: "रोजगार Sangam",
    subtitle: "Employment access for economically challenged communities",
    summary:
      "A concept product that connects daily-wage and informal workers with nearby short-term employment — designed with low-literacy, multilingual, and low-bandwidth users in mind.",
    year: "2024",
    role: "Student Project · Design Thinking",
    company: "Ahmedabad University",
    tags: ["Civic Tech", "Accessibility", "Research", "Mobile"],
    status: "Concept",
    cover: {
      eyebrow: "Civic Tech · Design Thinking",
      gradient: "from-yellow-200/40 via-amber-200/30 to-orange-300/40",
    },
    problem:
      "Informal workers in India lose hours every day searching for the next gig, while small employers struggle to find reliable short-term help. Existing apps assume English literacy, smartphone fluency, and constant data.",
    process: [
      "Field interviews with auto drivers, construction workers, and roadside vendors in Ahmedabad.",
      "Reframed the brief around trust, language, and low-bandwidth use — not job listings.",
      "Designed voice-first, icon-first flows with bilingual (Hindi + English) labels and offline-friendly states.",
    ],
    solution:
      "A mobile concept built around icons, voice prompts, and trust signals — letting workers find verified gigs nearby without typing, and letting employers post a need in under a minute.",
    outcome: [
      { metric: "2", label: "languages supported by default" },
      { metric: "Voice-first", label: "navigation for low-literacy users" },
      { metric: "Concept", label: "validated with field interviews" },
    ],
    reflection:
      "This project taught me to design for the user in front of me, not the one I imagine.",
  },
  {
    slug: "sprout-right",
    title: "Sprout Right",
    subtitle: "A children's app for learning about their rights",
    summary:
      "An exploratory edtech concept that teaches children about their fundamental rights through illustrated stories, gentle interactions, and age-appropriate language.",
    year: "2024",
    role: "Student Project · UX & Visual",
    company: "Ahmedabad University",
    tags: ["EdTech", "Children", "Visual Design", "Storytelling"],
    status: "Concept",
    cover: {
      eyebrow: "EdTech · Concept",
      gradient: "from-lime-200/40 via-green-200/30 to-emerald-300/40",
    },
    problem:
      "Children rarely learn about their own rights in language they can act on. Most resources are either too dry or aimed at adults — there was room for an interface that meets kids where they are.",
    process: [
      "Researched children's literacy patterns and existing edtech UI conventions.",
      "Worked with story-led navigation — each right becomes a chapter, not a checklist.",
      "Used AI to explore illustration directions and copy variations before committing to a visual system.",
    ],
    solution:
      "A warm, story-led mobile experience where each right is anchored to a character, a scenario, and one clear action — designed to be browsed alongside a parent or teacher.",
    outcome: [
      { metric: "Story-first", label: "navigation model" },
      { metric: "Concept", label: "explored across 5+ screens" },
      { metric: "AI-assisted", label: "moodboarding and copy iteration" },
    ],
  },
];
