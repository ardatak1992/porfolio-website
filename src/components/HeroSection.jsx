import React from "react";
import Switch from "./Switch";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile-img.jpg";

const HeroSection = () => {
  return (
    <section
      className="from-primary-light from-0%
     via-primary-light via-70% to-70% to-secondary-light sm:bg-gradient-to-r bg-gradient-to-b  text-secondary-light
     w-full"
    >
      <header className="text-secondary-light p-5 relative">
        <h3 className="ml-10 mt-5 text-2xl font-bold text-secondary-light">arda</h3>
        <div className="absolute flex left-[70%] top-2 -translate-x-1/2 px-10 items-center">
          <div className="w-1/2 mr-10">
            <button className="w-full mr-20">TÜRKÇE'YE ÇEVİR</button>
          </div>
          <div className="w-1/2">
            <Switch />
          </div>
        </div>
      </header>
      <div className="my-10 flex sm:flex-row items-center flex-col justify-end gap-20 w-[70%] translate-x-[12.5%]">
        <div className="flex flex-col gap-5 mr-10 sm:mr-5">
          <h1 className="text-4xl">
            I'm a Frontend <br /> Developer...
          </h1>
          <p className="text-xl">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="flex gap-5">
            <a
              target="_blank"
              href="https://github.com/ardatak1992"
              className="hero-btn-light"
            >
              <FaGithub />
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arda-tak-59597a287/"
              className="hero-btn-light"
            >
              <FaLinkedin />
              Linkedin
            </a>
          </div>
        </div>
        <img
          src={profileImg}
          alt=""
          className="w-[25%] aspect-square content-evenly bg-top object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
