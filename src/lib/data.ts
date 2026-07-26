

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "pulse-bond",  
    title: "PulseBond",
    description: "A full-stack blood donation platform that connects donors with people in need.",
    tags: ["Next.js", "Tailwind CSS","Better auth", "Express.js", "Mongodb"],
    githubUrl: "https://github.com/shawon2911/pulsebond-client",
    liveUrl: "https://pulse-bond-client.vercel.app",
    featured: true,
  },
  {
    id: "sportnest",
    title: "SportNest",
    description: "A modern sports facility booking platform where users can explore, book, and manage sports venues like football turfs, badminton courts, swimming lanes, and tennis courts.",
    tags: ["Next.js", "Tailwind CSS","Better auth", "Express.js", "Mongodb"],
    githubUrl: "https://sportnest-virid.vercel.app",
    featured: true,
  },
  {
    id: "verified-hands",
    title: "VerifiedHands",
    description: "A verified local skilled-worker marketplace for Bangladesh",
    tags: ["Typescript", "React", "Express", "Mongodb"],
    githubUrl: "https://verifiedhand.vercel.app",
    featured: false,
  }
];

export const SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js (App Router)",
  "Tailwind CSS",
  "Node js",
  "Express js",
  "Mongodb",
  "Better auth",
  "Vercel",
  "Git & GitHub",
  "HTML5 & CSS3",
  "Bootstrap",
];