'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const NAV_ITEMS = [
  { label: 'ABOUT', id: 'about' },
  { label: 'SKILLS', id: 'skills' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'EDUCATION', id: 'education' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Target all section elements by ID
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    // 2. Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px', // Triggers when section reaches upper part of viewport
        threshold: 0,
      }
    );

    // 3. Observe each section
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-[#c93969]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="text-xl font-black tracking-wider text-white uppercase">
          HOSENUZZAMAN
        </a>

        {/* Desktop Floating Nav Container */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12131a] border border-slate-800/80 p-1.5 rounded-full shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-colors duration-200 select-none ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Active Hot Pink Background Badge */}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#a80038] rounded-full z-0 shadow-[0_0_15px_rgba(255,0,85,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Link Text */}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Outside header container for clean full-width layout) */}
      {isOpen && (
        <div className="md:hidden bg-[#08080a]/95 backdrop-blur-md border-b border-[#c93969] px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }} 
                className={`block px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-[#a80038] text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}