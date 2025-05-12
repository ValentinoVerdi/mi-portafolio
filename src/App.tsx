import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
};

export default App;
