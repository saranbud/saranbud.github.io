import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Writeups } from "@/components/sections/writeups";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Writeups />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}