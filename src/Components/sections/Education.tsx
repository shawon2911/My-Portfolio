// components/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '@/lib/education';
import { FaGraduationCap, FaCalendarAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.h2 
          className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ACADEMIC <span className="text-[#ff0055]">EDUCATION</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          My academic journey, qualifications, and core learning path.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* CENTER STRAIGHT LINE (Desktop) / LEFT LINE (Mobile) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff0055] via-slate-800 to-[#ff0055] -translate-x-1/2 z-0" />

        <div className="space-y-12 md:space-y-16">
          {EDUCATION_DATA.map((edu, idx) => {
            const isEven = idx % 2 === 0; // Even items go Left, Odd items go Right

            return (
              <div 
                key={edu.id} 
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* 1. CARD CONTAINER */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="bg-[#12131a] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-[#ff0055]/50 hover:shadow-[0_0_25px_rgba(255,0,85,0.15)] transition-all duration-300 relative group"
                  >
                    {/* Top Glow Accent */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#ff0055]/40 to-transparent group-hover:via-[#ff0055]" />

                    {/* Date & Status Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 bg-[#08080a] px-3 py-1 rounded-full border border-slate-800">
                        <FaCalendarAlt className="text-[#ff0055] text-xs" />
                        {edu.period}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        {edu.status}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-[#ff0055] font-semibold text-sm sm:text-base mt-1">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights (If available) */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-slate-800/60">
                        <ul className="space-y-1.5">
                          {edu.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-xs text-slate-300 flex items-center gap-2">
                              <FaCheckCircle className="text-[#ff0055] text-[10px] shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Coursework Badges (If available) */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-5">
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-[11px] font-medium text-slate-400 bg-[#08080a] px-2.5 py-1 rounded-md border border-slate-800"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </motion.div>
                </div>

                {/* 2. CENTER NODE / CONNECTOR ICON */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.15 }}
                    className="w-10 h-10 rounded-full bg-[#08080a] border-2 border-[#ff0055] text-[#ff0055] flex items-center justify-center shadow-[0_0_15px_rgba(255,0,85,0.4)] group-hover:bg-[#ff0055] group-hover:text-white transition-all duration-300"
                  >
                    <FaGraduationCap className="text-base" />
                  </motion.div>
                </div>

                {/* 3. EMPTY SPACE FOR BALANCE (Desktop) */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}