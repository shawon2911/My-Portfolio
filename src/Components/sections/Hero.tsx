
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 pb-12 overflow-hidden">
      
      {/* Background Ambient Light Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Frontend & Web Developer
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-6 text-white max-w-4xl leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Crafting fast, sleek, and responsive modern web apps.
      </motion.h1>

      {/* Paragraph */}
      <motion.p 
        className="text-lg sm:text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I focus on building dynamic frontend interfaces with React, Next.js, and Tailwind CSS, turning complex ideas into clean digital solutions.
      </motion.p>

      {/* Actions */}
      <motion.div 
        className="mt-10 flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium bg-sky-500 hover:bg-sky-600 text-white transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
        >
          Explore Work <FaArrowRight className="text-xs" />
        </a>

        <a 
          href="#contact" 
          className="px-6 py-3.5 rounded-lg font-medium border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 transition-colors duration-200"
        >
          Contact Me
        </a>

        <div className="flex items-center gap-4 ml-4 text-xl text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

    </section>
  );
}