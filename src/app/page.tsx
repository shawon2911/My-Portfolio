import Navbar from "@/Components/common/Navbar";
import Education from "@/Components/sections/Education";
import Hero from "@/Components/sections/Hero";
import Projects from "@/Components/sections/Projects";
import Skills from "@/Components/sections/Skills";



export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}