import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { About, Experience, Blog, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}
