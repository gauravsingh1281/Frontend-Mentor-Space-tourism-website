import Header from "../components/Header";

const Home = () => {
  return (
    <main className=" w-full min-h-screen  bg-no-repeat bg-cover bg-center  bg-[url(home/background-home-mobile.jpg)] md:bg-[url(home/background-home-tablet.jpg)] lg:bg-[url(home/background-home-desktop.jpg)] overflow-hidden  ">
      <section className="w-full  min-h-screen flex justify-between flex-col pb-8 ">
        {/* Navbar */}
        <Header />
        {/* heading and explore btn */}
        <div className="flex flex-col lg:flex-row w-full md:h-full lg:h-full items-center justify-between px-10 md:mt-3">
          {/* heading text and description */}
          <div className="w-full  flex justify-start items-center lg:items-start gap-6 flex-col px-8 py-4  lg:w-[55%]">
            <p className="text-[12px] md:text-lg lg:text-xl text-BLUE-300 uppercase font-Barlow-Condensed tracking-[2px]">
              So, you want to travel to
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white uppercase font-Bellefair ">
              Space
            </h1>
            <p className="text-[12px] md:text-base lg:text-base text-BLUE-300 font-Barlow text-center lg:text-left ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          {/* Explore Btn */}
          <div className="relative flex justify-center items-center flex-col z-10 w-full md:w-[20%] lg:w-[20%] md:bottom-[112px] lg:bottom-0">
            <div
              id="explore-btn-outer"
              className="flex justify-center items-center w-[175px] h-[175px] lg:w-[210px] lg:h-[210px] md:w-[210px] md:h-[210px]  rounded-full mx-auto mt-6 bg-white opacity-0  transition-all ease-in-out duration-200"
            ></div>
            <button
              id="explore-btn"
              className="bg-white h-8 w-8 md:w-[125px] md:h-[125px]  lg:w-[125px] lg:h-[125px] rounded-full p-12 flex justify-center items-center uppercase font-Bellefair absolute top-[62px] md:top-[67px] md:left-[43px] lg:top-[67px] lg:left-[58px] cursor-pointer"
            >
              Explore
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
