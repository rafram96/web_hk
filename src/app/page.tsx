import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Sectors } from "@/components/sections/Sectors";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Process />
      <Sectors />
      <Projects />
      <Gallery />
      <WhyChooseUs />
      <Certifications />
      <Contact />
    </>
  );
}
