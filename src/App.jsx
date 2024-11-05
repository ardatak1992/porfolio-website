import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
