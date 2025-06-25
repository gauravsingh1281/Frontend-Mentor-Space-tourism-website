import React from "react";
import Header from "../components/Header";

const Technology = () => {
  return (
    <main className="w-full min-h-screen bg-no-repeat bg-cover bg-center  bg-[url(technology/background-technology-mobile.jpg)] md:bg-[url(technology/background-technology-tablet.jpg)] lg:bg-[url(technology/background-technology-desktop.jpg)] ">
      <Header />
      <section className="w-full px-8 py-8 lg:px-20 lg:py-10">
        <div className="flex md:justify-start lg:justify-start justify-center  items-center gap-2">
          <span className="font-Barlow uppercase tracking-wide text-base lg:text-2xl text-gray-400">
            03
          </span>
          <h1 className="text-white font-Barlow uppercase tracking-wide text-base lg:text-2xl">
            Space launch 101
          </h1>
        </div>
        <div className="flex justify-between items-center text-white">
          <div className="flex justify-between items-start gap-5 w-2/4">
            <div className="flex justify-start items-center flex-col gap-4">
              <div className="bg-white  rounded-full h-10 w-10 text-black flex justify-center items-center">
                1
              </div>
              <div className="bg-white rounded-full h-10 w-10 text-black flex justify-center items-center">
                2
              </div>
              <div className="bg-white rounded-full h-10 w-10 text-black flex justify-center items-center">
                3
              </div>
            </div>
            <div className="flex justify-start items-start flex-col gap-4">
              <h2 className="text-gray-400 uppercase text-2xl font-light">
                The terminology...
              </h2>
              <h1 className="uppercase text-white text-4xl font-Barlow-Condensed tracking-wide">
                Launch Vehilce
              </h1>
              <p className="text-lg text-BLUE-300">
                Space capsule A space capsule is an often-crewed spacecraft that
                uses a blunt-body reentry capsule to reenter the Earth's
                atmosphere without wings. Our capsule is where you'll spend your
                time during the flight. It includes a space gym, cinema, and
                plenty of other activities to keep you entertained.
              </p>
            </div>
          </div>
          <div className="2/4">
            <img
              src="/technology/image-launch-vehicle-portrait.jpg"
              alt="image-vehilce-portrait"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
