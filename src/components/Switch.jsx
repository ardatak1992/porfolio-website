import React, { useState } from "react";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <label htmlFor="darkMode" className="text-primary-light flex items-center gap-3 relative">
      <div
        className={
          "w-[50px] h-[20px] bg-switchBg-light rounded-xl inline-block relative cursor-pointer"
        }
      >
        <div
          className={`bg-switchButton-light w-4 h-4 absolute rounded-full top-0.5 ${
            darkMode ? "left-1" : "right-1"
          }`}
        ></div>
      </div>
      <p className="absolute left-3/4 p-1 text-nowrap hidden sm:block">{darkMode ? "LIGHT MODE": "DARK MODE"}</p>
      <input
        type="checkbox"
        name="darkMode"
        id="darkMode"
        className="hidden"
        value={darkMode}
        onChange={() => setDarkMode((prev) => !prev)}
      />
    </label>
  );
};

export default Switch;
