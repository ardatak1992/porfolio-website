import React from "react";

const Skill = ({ skillName, logoUri, bgColor }) => {
  console.log(bgColor);
  return (
    <div className="flex gap-4 items-center">
      <div
        className="w-32 min-w-32 h-32 flex justify-center items-center rounded-lg overflow-hidden shadow-lg"
        style={{ backgroundColor: bgColor.length ? bgColor : null }}
      >
        <img src={logoUri} alt="" className="" />
      </div>
      <p className="text-xl uppercase text-nowrap opacity-60 dark:text-default-light">{skillName}</p>
    </div>
  );
};

export default Skill;
