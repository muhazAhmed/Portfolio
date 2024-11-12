"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { loadInitialServer } from "@/lib/utils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    loadInitialServer();
  }, []);

  return (
    <div className="sm:mb-11 md:mb-0">
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
