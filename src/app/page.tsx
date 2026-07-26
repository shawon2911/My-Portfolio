import Navbar from "@/Components/common/Navbar";
import Hero from "@/Components/sections/Hero";
import Skills from "@/Components/sections/Skills";



export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}