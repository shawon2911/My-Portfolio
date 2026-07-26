
'use client';

import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/skills';
import { FaCode } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY <span className="text-[#ff0055]">SKILLS</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Technologies, frameworks, and tools I use to build scalable web applications.
        </p>
      </div>

      {/* Skills Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            className="bg-[#12131a] border border-slate-800/80 rounded-xl p-6 shadow-lg hover:border-[#ff0055]/50 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-[#ff0055]/10 text-[#ff0055]">
                  <FaCode className="text-base" />
                </div>
                <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skill Items List */}
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 bg-[#08080a]/60 px-3 py-2 rounded-lg border border-slate-800/60 hover:text-white hover:border-[#ff0055]/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}