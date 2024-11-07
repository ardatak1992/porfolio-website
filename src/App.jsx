import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className=" flex flex-col overflow-x-hidden">
        <HeroSection />
        <SkillsSection />
        <ProfileSection />
        <ProjectsSection />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
