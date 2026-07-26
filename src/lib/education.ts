// lib/education.ts

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights?: string[];
  coursework?: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "eastern-university",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Eastern University",
    period: "2022 — Present",
    status: "In Progress",
    description:
      "Focusing on core software engineering principles, web application development, algorithms, data structures, and database management systems.",
    highlights: [
      "Developed a full-stack Canteen Management System for university defense project",
      "Gained hands-on expertise in modern JavaScript frameworks (React, Next.js) and backend integration"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Web Technologies"
    ]
  },
  {
    id: "hsc-college",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mohammadpur Govt College",
    period: "2018 — 2020",
    status: "Completed",
    description:
      "Completed Higher Secondary Education with a concentration in Science, building a strong foundation in Mathematics and Physics.",
    highlights: [
      "Group: Science",
      "GPA: 5.00 / 5.00"
    ]
  },
  {
    id: "ssc-school",
    degree: "Secondary School Certificate (SSC)",
    institution: "Government Laboratory High School",
    period: "2018",
    status: "Completed",
    description:
      "Completed Secondary School Certificate education in Science background.",
    highlights: [
      "Group: Science",
      "GPA: 5.00 / 5.00"
    ]
  }
];