import { useContext } from "react";
import DataContext from "../context/DataContext";

import codePicture from "/assets/codePicture.jpg";

const ProfileSection = () => {
  const { lang, setLang, texts } = useContext(DataContext) || {};

  return (
    <section className="w-full bg-primary-light dark:bg-primary-dark">
      <div className="flex flex-col py-20  w-[70%] justify-center m-auto  max-w-[1200px]">
        <h2 className="text-5xl text-secondary-light  font-bold mb-8">
          {texts?.profile?.title}
        </h2>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl text-default-light">
              {texts?.profile?.basicTitle}:
            </h3>
            <p className="text-secondary-light text-xl">
              {texts?.profile?.birth}:{" "}
              <span className="text-default-light">13.04.1992</span>
            </p>
            <p className="text-secondary-light text-xl">
              {texts?.profile?.city}:{" "}
              <span className="text-default-light">Bursa</span>
            </p>
            <p className="text-secondary-light text-xl">
              {texts?.profile?.education}:{" "}
              <span className="text-default-light">
                {texts?.profile?.school}
              </span>
            </p>
            <p className="text-secondary-light text-xl">
              {texts?.profile?.role}:{" "}
              <span className="text-default-light">Frontend, UI</span>
            </p>
          </div>
          <div className="flex w-2/3 gap-8">
            <img
              src={codePicture}
              alt=""
              className="w-1/2  aspect-square rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-4xl text-default-light mb-8">
                {texts?.profile?.aboutTitle}
              </h3>
              <p className="text-default-light opacity-80 leading-8">
                {texts?.profile?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
