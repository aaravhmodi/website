export type Experience = {
  title: string;
  company: string;
  accent: string;
  bullets: string[];
};

export type Project = {
  name: string;
  summary: string;
  details: string[];
  stack: string[];
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    title: "Machine Learning Engineer",
    company: "Upside Robotics",
    accent: "from-cyan-400 to-blue-500",
    bullets: [
      "Trained PPO reinforcement learning models using DSSAT and PettingZoo to optimize nitrogen strategies.",
      "Built Python data pipelines processing 10GB+ of weather, soil, and yield data.",
      "Built an automated ETL pipeline on AWS EC2 with cron jobs, moving millions of PostgreSQL rows into Redshift with 200K+ new rows daily for Power BI dashboards.",
    ],
  },
  {
    title: "Software Engineer",
    company: "CIBC",
    accent: "from-violet-400 to-fuchsia-500",
    bullets: [
      "Built React/Django dashboards for 25+ projects.",
      "Built Dagster ETL pipelines for 100GB+ of data.",
      "Built GitHub analytics tooling for 40+ offshore engineers.",
      "Used FastAPI and ML models for anomaly detection.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "LockerLink",
    summary: "Social platform for OVA volleyball athletes and coaches.",
    details: ["100+ users across 15+ Ontario clubs.", "Built with product, community, and athlete discovery in mind."],
    stack: ["Next.js", "TypeScript", "Firebase", "PostgreSQL", "Tailwind", "Computer Vision"],
  },
  {
    name: "CRai",
    summary: "AI cry analyzer classifying neurological risk indicators from infant cry patterns.",
    details: ["Built with Python, Librosa, TensorFlow, FastAPI, and Modal.", "Presented at HackMIT 2025."],
    stack: ["Python", "Librosa", "TensorFlow", "FastAPI", "Modal"],
  },
  {
    name: "NASA Design Challenge",
    summary: "Grand Prize Winner out of 4,000+ global teams.",
    details: [
      "Designed a high-fidelity 3D orbital colony model and ecosystem simulations.",
      "Used Blender, Python, NumPy, and Pandas.",
    ],
    stack: ["Blender", "Python", "NumPy", "Pandas"],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Django", "FastAPI", "Flask", "Node.js", "Express", "Spring Boot"] },
  { group: "Data/ML", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Librosa", "Dagster"] },
  { group: "Cloud/Tools", items: ["AWS", "GCP", "Docker", "Git", "PostgreSQL", "Redshift", "Azure DevOps"] },
];
