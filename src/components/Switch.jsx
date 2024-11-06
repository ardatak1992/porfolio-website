import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Switch = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <label
      htmlFor="darkMode"
      className={`text-primary-light flex items-center gap-3 relative`}
    >
      <div
        className={`w-[50px] h-[20px] bg-switchBg-light 
          rounded-xl inline-block relative cursor-pointer dark:bg-switchBg-dark`}
      >
        <div
          className={`bg-switchButton-light dark:bg-switchButton-dark w-4 h-4  dark:-translate-x-[26px] 
            absolute transition-all right-1 duration-200 rounded-full top-0.5  
            `}
        >
          <div
            className="translate-x-1 transition-all duration-200 w-3 h-3 dark:bg-switchBg-dark 
          rounded-full translate-y-0.5 dark:translate-x-1.5"
          ></div>
        </div>
      </div>
      <p className="absolute left-3/4 p-1 text-nowrap hidden sm:block">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </p>
      <input
        type="checkbox"
        name="darkMode"
        id="darkMode"
        className="hidden"
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </label>
  );
};

export default Switch;
