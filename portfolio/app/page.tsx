import { Background, ScrollProgress, Spotlight } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Impact } from "@/components/Impact";
import { Contact, Footer } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Background />
      <Spotlight />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
