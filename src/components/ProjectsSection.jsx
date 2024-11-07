import React from "react";
import Project from "./Project";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ProjectsSection = () => {
  const { texts, lang } = useContext(DataContext);

  return (
    <section className="w-full bg-secondary-light dark:bg-secondary-dark">
      <div className="flex flex-col py-20 gap-10 w-[70%] justify-center m-auto  max-w-[1200px]">
        <h2 className="text-5xl text-primary-light dark:text-secondary-light font-bold mb-8">
          {texts?.projects?.title}
        </h2>
        {texts?.projects?.projects.map((project, index) => (
          <Project key={index} project={project} lang={lang} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
