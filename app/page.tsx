import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import LandingBg from "./components/LandingBg";
import ProjectSection from "./components/ProjectSection";
import React from "react";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <LandingBg />
      <AboutPage />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
