// // components/Navbar.tsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const NAV_ITEMS = [
//   { label: 'ABOUT', href: '#about' },
//   { label: 'SKILLS', href: '#skills' },
//   { label: 'PROJECTS', href: '#projects' },
//   { label: 'EDUCATION', href: '#education' },
//   { label: 'CONTACT', href: '#contact' },
// ];

// export default function Navbar() {
//   const [activeTab, setActiveTab] = useState('ABOUT');

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
//         {/* 1. Brand / Name */}
//         <a href="#" className="text-xl font-black tracking-wider text-white uppercase">
//           HOSENUZZAMAN
//         </a>

//         {/* 2. Floating Capsule Nav */}
//         <nav className="flex items-center gap-1 bg-slate-900/90 border border-slate-800/80 p-1.5 rounded-full shadow-lg">
//           {NAV_ITEMS.map((item) => {
//             const isActive = activeTab === item.label;
//             return (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => setActiveTab(item.label)}
//                 className={`relative px-5 py-2 text-xs font-bold tracking-widest transition-colors duration-200 uppercase rounded-full ${
//                   isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
//                 }`}
//               >
//                 {/* Smooth Animated Pink Pill Highlight */}
//                 {isActive && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 bg-pink-600 rounded-full -z-10 shadow-md shadow-pink-600/30"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//                 <span className="relative z-10">{item.label}</span>
//               </a>
//             );
//           })}
//         </nav>

//       </div>
//     </header>
//   );
// }




// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('ABOUT');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="text-xl font-black tracking-wider text-white uppercase">
          HOSENUZZAMAN
        </a>

        {/* Floating Capsule Nav Container */}
        <nav className="flex items-center gap-1 bg-[#12131a] border border-slate-800/80 p-1.5 rounded-full shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-colors duration-200 select-none ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Vibrant Hot Pink Pill Background */}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#ff0055] rounded-full z-0 shadow-[0_0_15px_rgba(255,0,85,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Link Text - Lifted above the background pill */}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

      </div>
    </header>
  );
}