import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveMesh from "@/components/InteractiveMesh";
import Cursor from "@/components/Cursor";
import Effects from "@/components/Effects";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectOverviews from "@/components/ProjectOverviews";
import Automation from "@/components/Automation";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <InteractiveMesh />
      <Cursor />
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <ProjectOverviews />
        <Automation />
        <Skills />
        <Research />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
