// components/ui/SnakeCursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const SEGMENT_COUNT = 20;

export default function SnakeCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {Array.from({ length: SEGMENT_COUNT }).map((_, index) => (
        <CursorSegment
          key={index}
          index={index}
          total={SEGMENT_COUNT}
          targetX={mousePosition.x}
          targetY={mousePosition.y}
        />
      ))}
    </div>
  );
}

function CursorSegment({
  index,
  total,
  targetX,
  targetY,
}: {
  index: number;
  total: number;
  targetX: number;
  targetY: number;
}) {
  const springConfig = {
    damping: 18 + index * 2,
    stiffness: 280 - index * 14,
    mass: 0.2 + index * 0.04,
  };

  const x = useSpring(targetX, springConfig);
  const y = useSpring(targetY, springConfig);

  useEffect(() => {
    x.set(targetX);
    y.set(targetY);
  }, [targetX, targetY, x, y]);

  // DIM & WARM FIRE COLOR PALETTE (চোখে সহনীয় সফট টোন)
  const getDimFireColor = (i: number, max: number) => {
    const ratio = i / max;
    if (ratio < 0.2) return '#e65c00'; // Warm Muted Amber
    if (ratio < 0.5) return '#cc3300'; // Soft Flame Red-Orange
    if (ratio < 0.8) return '#991b1b'; // Deep Brick Red
    return '#450a0a';                   // Dark Smoke Ember
  };

  const color = getDimFireColor(index, total);
  const size = Math.max(18 - index * 1.2, 3);
  
  // Overall opacity কমিয়ে সফট ফিল আনা হয়েছে
  const opacity = 0.85 - (index / total) * 0.65;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        x,
        y,
        width: size,
        height: size,
        translateX: '-50%',
        translateY: '-50%',
        opacity,
        backgroundColor: color,
        // সফট ও ডিম (Dim) গ্লো ইফেক্ট
        boxShadow:
          index < 3
            ? `0 0 10px ${color}, 0 0 18px rgba(230, 92, 0, 0.3)`
            : `0 0 6px ${color}`,
      }}
    />
  );
}