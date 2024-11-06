import React from "react";
import Project from "./Project"



const ProjectsSection = () => {
  return (
    <section className="w-full bg-secondary-light dark:bg-secondary-dark">
      <div className="flex flex-col py-20  w-[70%] justify-center m-auto  max-w-[1200px]">
        <h2 className="text-5xl text-primary-light dark:text-secondary-light font-bold mb-8">Projects</h2>
        <Project />
      </div>
    </section>
  );
};

export default ProjectsSection;
