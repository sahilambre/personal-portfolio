import Image from "next/image";
import Hero from "./components/Hero";
import LandingBg from "./components/LandingBg";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <LandingBg />
      <ProjectSection />
    </div>
  );
}
