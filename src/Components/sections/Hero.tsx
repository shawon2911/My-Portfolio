"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaFolderOpen,
  FaPaperPlane,
  FaFileDownload,
} from "react-icons/fa";
import {  FaFacebook } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-28 pb-16 max-w-7xl mx-auto px-6 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#ff0055]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT COLUMN: Text & Actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Headline with Pink Accent */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            ABOUT <span className="text-[#ff0055]">ME</span>
          </h1>

          {/* Short Bio */}
          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-8 max-w-2xl">
            I am <span className="text-white font-semibold">Hosenuzzaman</span>,
            a Full-Stack Developer specializing in modern frontend experiences.
            I focus on building responsive, highly functional web applications
            with clean code and solid logic.
          </p>

          <p className="mt-4 text-slate-400 text-base sm:text-base leading-8 max-w-2xl">
            I thrive on solving real-world problems, writing clean reusable
            code, and continuously learning new technologies to deliver
            impactful digital products.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold tracking-wider text-white bg-[#a80038] hover:bg-[#e0004c] transition-all duration-200 uppercase shadow-lg shadow-[#ff0055]/30"
            >
              <FaFolderOpen className="text-sm" />
              VIEW PROJECTS
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold tracking-wider text-slate-300 bg-[#12131a] hover:bg-[#1a1c26] border border-slate-800 transition-colors duration-200 uppercase"
            >
              <FaPaperPlane className="text-sm" />
              CONTACT ME
            </a>

            <a
              // href="https://drive.google.com/file/d/1Kp_cFoQJGZEc5XwD9fcqyv7S5AKH_Uyh/view?usp=drive_link"
              href="/Resume_of_Hosenuzzaman.pdf"
              download="Resume_of_Hosenuzzaman.pdf"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#a80038] hover:bg-[#e0004c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-[0_0_20px_rgba(255,0,85,0.3)] transition-all duration-300"
            >
              <FaFileDownload className="text-xs" />
              Download Resume
            </a>
          </div>

          {/* Circle Social Links */}
          <div className="mt-10 flex items-center gap-3">
            {[
              { icon: <FaGithub />, href: "https://github.com/shawon2911" },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/hosenuzzaman",
              },
              {
                icon: <FaFacebook />,
                href: "https://www.facebook.com/shawon.hossain.1272",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#12131a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#ff0055] hover:bg-[#ff0055]/10 transition-all duration-200 text-base"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Larger Animated Profile Photo Frame & Quote */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Continuous Bouncing/Floating Avatar Container */}
          <motion.div
            className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full p-1 bg-gradient-to-b from-[#ff0055]/50 via-slate-800/80 to-transparent shadow-[0_0_60px_rgba(255,0,85,0.2)]"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#12131a] overflow-hidden border-2 border-slate-800 flex items-center justify-center relative shadow-inner">
              <Image
                src="/portfolio-image.png"
                alt="Profile Photo"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Subtitle Quote */}
          <div className="mt-8 text-center max-w-sm">
            <p className="text-xs sm:text-sm text-[#fc2e72] italic">
              &quot;Building responsive full-stack applications and turning
              complex logical problems into clean, high-performance web
              experiences.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
