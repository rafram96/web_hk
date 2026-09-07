import { HeroNuevo } from "@/components/sections/HeroNuevo";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ScrollDirector } from "@/components/ui/ScrollDirector";

/**
 * Home: siete secciones. Antes eran once y superaba los 15.000 px, con casi
 * todas repitiendo la misma formula (kicker, H2 enorme, parrafo, panel navy).
 * Proposito, metodologia, sectores, razones y galeria se mudaron a /nosotros.
 */
export default function Home() {
  return (
    <>
      <ScrollDirector />
      <HeroNuevo />
      <TrustedBy />
      <Services />
      <Projects />
      <Stats />
      <Certifications />
      <Contact />
    </>
  );
}
