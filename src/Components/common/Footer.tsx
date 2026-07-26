
export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-[#08080a] text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Hosenuzzaman. All rights reserved.</p>
        <p className="font-mono text-[11px]">Built with Next.js, React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}