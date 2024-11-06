import React from "react";
import p1 from "../assets/p1.png";

const Project = () => {
  return (
    <article className="flex w-full h-96 dark:bg-default-dark bg-default-light rounded-lg shadow-lg overflow-hidden gap-12 min-w-[960px]">
      <img src={p1} alt="" className="h-full aspect-square" />
      <div className=" mt-12 mx-6">
        <h3 className="text-3xl text-primary-light dark:te font-semibold mb-2 dark:opacity-70">
          Journey
        </h3>
        <p className="sm:text-xl dark:text-default-light">
          A simple, customizable, minimal setup cookie plugin that allows your
          users to select which cookies to accept or decline. This was created
          with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
          package and the git repository makes any type of customization to code
          and themes possible.
        </p>
        <div className="flex gap-2 mt-6">
          <div className="bg-primary-light text-default-light py-2 px-8 rounded-3xl">
            react
          </div>
          <div className="bg-primary-light text-default-light py-2 px-8 rounded-3xl">
            redux
          </div>
          <div className="bg-primary-light text-default-light py-2 px-8 rounded-3xl">
            vercel
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-xl underline underline-offset-2 dark:text-secondary-light">View Site</a>
          <a href="#" className="text-xl underline underline-offset-2 dark:text-secondary-light">Github</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
