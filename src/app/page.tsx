import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import Contact from "@/Components/sections/Contact";
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
      <Contact />
      <Footer />
    </main>
  );
}