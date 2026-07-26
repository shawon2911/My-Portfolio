// components/Projects.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Section Header + Slider Arrow Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase text-center sm:text-left">
            FEATURED <span className="text-[#ff0055]">PROJECTS</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base text-center sm:text-left">
            Explore my latest full-stack web applications.
          </p>
        </div>

        {/* Arrow Navigation Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="w-12 h-12 rounded-full bg-[#12131a] border border-slate-800 text-slate-300 hover:text-white hover:border-[#ff0055] hover:bg-[#ff0055]/10 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <span className="text-xs font-mono font-bold text-slate-500 px-2">
            0{currentIndex + 1} / 0{PROJECTS.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="w-12 h-12 rounded-full bg-[#12131a] border border-slate-800 text-slate-300 hover:text-white hover:border-[#ff0055] hover:bg-[#ff0055]/10 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Animated Project Slide */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-[#12131a] border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* LEFT COLUMN: Project Details */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Category Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff0055] bg-[#ff0055]/10 px-3 py-1 rounded-full border border-[#ff0055]/20">
                  {currentProject.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-[#08080a] px-3 py-1 rounded-full border border-slate-800">
                  {currentProject.type}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {currentProject.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-4xl font-black text-white  tracking-tight">
                {currentProject.title}
              </h3>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentProject.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="mt-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-semibold text-slate-300 bg-[#08080a] px-3 py-1.5 rounded-md border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold tracking-wider text-white bg-[#a80038] hover:bg-[#e0004c] transition-all uppercase shadow-lg shadow-[#ff0055]/25"
                  >
                    Live Demo <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}

                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold tracking-wider text-slate-300 bg-[#08080a] hover:bg-slate-900 border border-slate-800 transition-colors uppercase"
                  >
                    Code <FaGithub className="text-sm" />
                  </a>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN: Browser Mockup Frame */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#08080a] shadow-2xl">
                {/* Simulated Browser Bar */}
                <div className="h-8 bg-[#1a1c26] border-b border-slate-800 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                    {currentProject.liveUrl || 'localhost:3000'}
                  </span>
                </div>

                {/* Screenshot Container */}
                <div className="relative aspect-video w-full bg-[#12131a] flex items-center justify-center overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-slate-600 text-xs font-bold uppercase">
                    Project Preview
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}