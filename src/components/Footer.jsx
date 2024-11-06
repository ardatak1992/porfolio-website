import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center dark:bg-default-dark ">
      <div className="flex flex-col mb-20 gap-10">
        <h2 className="text-5xl text-primary-light mt-12 font-bold">
          Send me a message!
        </h2>
        <p className="text-2xl dark:text-default-light">
          Got a question or a proposal, or just want <br /> to say hello? Go ahead.
        </p>
        <a href="mailto:ardatak1992@gmail.com" className="text-2xl underline text-primary-light">ardatak1992@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
