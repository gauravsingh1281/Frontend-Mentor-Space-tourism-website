import React from "react";
import Header from "../components/Header";

const Crew = () => {
  return (
    <main className="w-full min-h-screen bg-no-repeat bg-cover bg-center  bg-[url(crew/background-crew-mobile.jpg)] md:bg-[url(crew/background-crew-tablet.jpg)] lg:bg-[url(crew/background-crew-desktop.jpg)] ">
      <Header />
      {/* <!-- Crew details--> */}
      <section className="w-full h-full px-8 py-8 lg:px-20 lg:py-10">
        <div className="flex md:justify-start lg:justify-start justify-center  items-center gap-2">
          <span className="font-Barlow uppercase tracking-wide text-base lg:text-2xl text-gray-400">
            02
          </span>
          <h1 className="text-white font-Barlow uppercase tracking-wide text-base lg:text-2xl">
            meet you crew
          </h1>
        </div>
        <div className="w-full flex justify-center lg:justify-between items-center flex-col  lg:flex-row mt-10 gap-10">
          <div className="w-1/2 h-full flex flex-col justify-start gap-3 text-white">
            <h1 className="text-3xl text-white uppercase">
              Mission Specialist
            </h1>
            <h1 className="text-4xl uppercase">Mark Shuttleworth</h1>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          {/* <!-- Crew image --> */}
          <div className="lg:w-1/2 flex justify-center items-center ">
            <img
              className="w-[50%] "
              src="crew/image-mark-shuttleworth.webp"
              alt="image-mark-shuttleworth"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crew;
