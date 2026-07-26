

export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  status: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "pulse-bond",
    title: "PulseBond",
    category: "Featured Project",
    type: "Blood Donation Platform",
    status: "Completed",
    description:
      "A full-stack blood donation platform that connects donors with people in need, streamlining request matching and donor registration.",
    techStack: ["Next.js", "Tailwind CSS", "Better Auth", "Express.js", "MongoDB"],
    liveUrl: "https://pulse-bond-client.vercel.app",
    githubUrl: "https://github.com/shawon2911/pulsebond-client",
    image: "/projects/pulsebond.png",
  },
  {
    id: "sportnest",
    title: "SportNest",
    category: "Featured Project",
    type: "Sports Facility Booking",
    status: "Completed",
    description:
      "A modern sports facility booking platform where users can explore, book, and manage sports venues like football turfs, badminton courts, swimming lanes, and tennis courts.",
    techStack: ["Next.js", "Tailwind CSS", "Better Auth", "Express.js", "MongoDB"],
    liveUrl: "https://sportnest-virid.vercel.app",
    githubUrl: "https://github.com/shawon2911/SportNest-client",
    image: "/projects/sportnest.png",
  },
  {
    id: "verified-hands",
    title: "VerifiedHands",
    category: "Featured Project",
    type: "Marketplace Platform",
    status: "Completed",
    description:
      "A verified local skilled-worker marketplace designed to connect households and businesses with trusted service professionals in Bangladesh.",
    techStack: ["TypeScript", "React", "Express.js", "MongoDB"],
    liveUrl: "https://verifiedhand.vercel.app",
    githubUrl: "https://github.com/shawon2911/verified-hands-client",
    image: "/projects/verified-hands.png",
  },
];