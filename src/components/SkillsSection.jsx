import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import Skill from "./Skill";
import jsIcon from "/assets/icons/jsIcon.jpg";
import nodejsIcon from "/assets/icons/nodejsIcon.jpg";
import reactIcon from "/assets/icons/reactIcon.png";
import reduxIcon from "/assets/icons/reduxIcon.png";
import vsCodeIcon from "/assets/icons/vsCodeIcon.png";
import figmaIcon from "/assets/icons/figmaIcon.jpg";


const skills = [
  { skillName: "javascript", logoUri: jsIcon, bgColor: "" },
  { skillName: "node", logoUri: nodejsIcon, bgColor: "#000000" },
  { skillName: "react", logoUri: reactIcon, bgColor: "" },
  { skillName: "redux", logoUri: reduxIcon, bgColor: "" },
  { skillName: "figma", logoUri: figmaIcon, bgColor: "" },
  { skillName: "vs code", logoUri: vsCodeIcon, bgColor: "#038FD6" },
];

const SkillsSection = () => {

  const { texts } = useContext(DataContext);

  return (
    <section className="w-full px-[1%]  flex justify-center items-start min-w-96 dark:bg-default-dark">
      <div className="my-10 flex  sm:flex-row font-bold flex-col justify-between items-start gap-20 w-[70%] max-w-[1200px] ">
        <h2 className="text-5xl font-bold text-primary-light dark:text-secondary-light">{texts?.skills?.title}</h2>
        <div className="grid gap-y-5 gap-x-[30%] grid-cols-2  w-3/4">
          {skills.map((skill) => (
            <Skill
              key={skill.skillName}
              skillName={skill.skillName}
              logoUri={skill.logoUri}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
