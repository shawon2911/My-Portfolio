
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6 py-12">
      
      {/* 1. Subtle Badge Entry */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-sky-500 bg-sky-500/10 rounded-full border border-sky-500/20">
          FRONTEND DEVELOPER
        </span>
      </motion.div>

      {/* 2. Main Heading */}
      <motion.h1 
        className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-slate-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Building functional, user-focused web experiences.
      </motion.h1>

      {/* 3. Intro Paragraph */}
      <motion.p 
        className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I specialize in crafting responsive web applications using React, Next.js, and modern styling utilities.
      </motion.p>

      {/* 4. Action Buttons & Social Links */}
      <motion.div 
        className="mt-8 flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="#projects" 
          className="px-6 py-3 rounded-lg font-medium bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-200 shadow-md shadow-sky-500/20"
        >
          View Work
        </a>

        <a 
          href="#contact" 
          className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          Get in Touch
        </a>

        <div className="flex items-center gap-3 ml-2 text-xl text-slate-600 dark:text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#contact" className="hover:text-sky-500 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

    </section>
  );
}