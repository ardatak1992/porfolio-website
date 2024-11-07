import { useContext } from "react";
import DataContext from "../context/DataContext";

const Footer = () => {
  const { texts } = useContext(DataContext);

  return (
    <footer className=" text-center dark:bg-default-dark ">
      <div className="flex flex-col mb-20 gap-10">
        <h2 className="text-5xl text-primary-light mt-12 font-bold">
          {texts?.footer?.title}
        </h2>
        <p className="text-2xl dark:text-default-light">{texts?.footer?.tag}</p>
        <a
          href="mailto:ardatak1992@gmail.com"
          className="text-2xl underline text-primary-light"
        >
          ardatak1992@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
