// lib/skills.ts

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript (ES6+)", "TypeScript", "C"],
  },
  {
    title: "FRONTEND",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit"],
  },
  {
    title: "BACKEND & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "DEV TOOLS",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "NPM"],
  },
];