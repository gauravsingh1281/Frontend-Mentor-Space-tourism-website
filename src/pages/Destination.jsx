import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Destination = () => {
  return (
    <main className=" w-full min-h-screen bg-no-repeat bg-cover bg-center  bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)] overflow-hidden">
      <Header />
      {/* <!-- Destination Details --> */}
      <section className="w-full px-8 py-8 lg:px-20 lg:py-10">
        <div className="flex md:justify-start lg:justify-start justify-center  items-center gap-2">
          <span className="font-Barlow uppercase tracking-wide text-base lg:text-2xl text-gray-400">
            01
          </span>
          <h1 className="text-white font-Barlow uppercase tracking-wide text-base lg:text-2xl">
            Pick your destination
          </h1>
        </div>

        <div className="w-full flex   justify-center lg:justify-between items-center flex-col  lg:flex-row mt-10 gap-10">
          {/* <!-- Destination image --> */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              className="w-[50%] lg:w-[60%]"
              src="/destination/image-europa.webp"
              alt="image-europa"
            />
          </div>
          {/* <!-- Destination Description --> */}
          <div className="lg:w-1/2 flex justify-center items-center lg:items-start flex-col gap-8">
            {/* <!-- Destination links --> */}
            <div className="flex justify-center items-center gap-6">
              <NavLink
                to="moon"
                className="font-Barlow uppercase font-light tracking-wide text-BLUE-300"
              >
                Moon
              </NavLink>
              <NavLink
                to="mars"
                className="font-Barlow uppercase font-light tracking-wide text-BLUE-300"
              >
                Mars
              </NavLink>
              <NavLink
                to="europa"
                className="font-Barlow uppercase font-light tracking-wide text-BLUE-300"
              >
                Europa
              </NavLink>
              <NavLink
                to="titan"
                className="font-Barlow uppercase font-light tracking-wide text-BLUE-300"
              >
                Titan
              </NavLink>
            </div>
            <h1 className="text-white font-Bellefair text-6xl uppercase font-bold ">
              Europa
            </h1>
            <p className="w-full text-center lg:text-left text-BLUE-300 text-[12px] md:text-lg lg:text-lg font-Barlow">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            {/* <!-- Line --> */}
            <div className="w-full h-[1px] bg-BLUE-300  lg:hidden"></div>
            {/* <!-- Distance and travel time --> */}
            <div className="w-full flex justify-between items-center lg:flex-row md:flex-row flex-col gap-5">
              {/* <!-- Distance --> */}
              <div className="flex justify-center lg:items-start items-center flex-col ">
                <p className="uppercase font-Barlow text-BLUE-300 text-base">
                  Avg. distance
                </p>
                <p className="uppercase font-Bellefair text-2xl text-white">
                  628 mil. km
                </p>
              </div>
              {/* <!-- Travel Time --> */}
              <div className="flex justify-center lg:items-start items-center flex-col">
                <p className=" uppercase font-Barlow text-BLUE-300">
                  Est. travel time
                </p>
                <p className="uppercase font-Bellefair text-2xl text-white">
                  3 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
