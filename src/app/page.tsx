"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { loadInitialServer, useSessionStorage } from "@/lib/utils";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    useSessionStorage("initialLoad") === null && loadInitialServer();
  }, []);

  return (
    <div className="sm:mb-11 md:mb-0">
      <SnackbarProvider />
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
