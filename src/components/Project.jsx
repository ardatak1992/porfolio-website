import React from "react";

const Project = ({ project, lang }) => {
  const { title, info, tags, imgUrl, githubUrl, url } = project;

  return (
    <article className="flex w-full h-96  dark:bg-default-dark bg-default-light rounded-lg shadow-lg overflow-hidden gap-12 min-w-[960px]">
      <img src={imgUrl} alt="" className="h-full aspect-square" />
      <div className="flex flex-col justify-center p-2">
        <h3 className="text-3xl text-primary-light dark:te font-semibold mb-2 dark:opacity-70">
          {title}
        </h3>
        <p className="sm:text-xl dark:text-default-light">{info}</p>
        <div className="flex gap-2 mt-6">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-primary-light text-default-light py-2 px-8 rounded-3xl"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a
            target="_blank"
            href={url}
            className="text-xl underline underline-offset-2 dark:text-secondary-light"
          >
            {lang === "en" ? "View Site" : "Siteye Git"}
          </a>
          <a
            target="_blank"
            href={githubUrl}
            className="text-xl underline underline-offset-2 dark:text-secondary-light"
          >
            Github
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
