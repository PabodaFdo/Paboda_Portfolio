import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import CustomCursor from "./components/CustomCursor";
import SideRails from "./components/SideRails";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function Divider() {
  return <div className="section-divider"></div>;
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <BottomNav />
      <CustomCursor />
      <SideRails />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Certificates />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}