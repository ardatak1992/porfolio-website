import React from "react";
import codePicture from "../assets/codePicture.jpg";

const ProfileSection = () => {
  return (
    <section className="w-full bg-primary-light dark:bg-primary-dark">
      <div className="flex flex-col py-20  w-[70%] justify-center m-auto  max-w-[1200px]">
        <h2 className="text-5xl text-secondary-light  font-bold mb-8">
          Profile
        </h2>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl text-default-light">Basic Information</h3>
            <p className="text-secondary-light text-xl">
              Doğum tarihi{" "}
              <span className="text-default-light">13.04.1992</span>
            </p>
            <p className="text-secondary-light text-xl">
              İkamet Şehri <span className="text-default-light">Bursa</span>
            </p>
            <p className="text-secondary-light text-xl">
              Eğitim Durumu{" "}
              <span className="text-default-light">
                Uludağ Ünv. Eleketrik-Elektronik
              </span>
            </p>
            <p className="text-secondary-light text-xl">
              Tercih Ettiği Rol{" "}
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
              <h3 className="text-4xl text-default-light mb-8">About Me</h3>
              <p className="text-default-light opacity-80 leading-8">
                After I graduated from electrical engineering, I turned to
                software, and since then I'm trying to be a full-stack
                developer. I acquire new skills and grow as a programmer every
                day by tackling new challenges and solving them. I aspire to be
                a full-stack developer who can design, create, and run any
                project that I put my mind into.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
