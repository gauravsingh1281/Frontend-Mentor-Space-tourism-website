import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-h-20 flex justify-between items-center px-4 py-4 relative">
      {/*  logo*/}
      <img
        className="logo w-[35px] h-[35px]"
        src="/shared/logo.svg"
        alt="logo"
      />
      {/*  Desktop Navlink*/}
      <nav className=" hidden desktop-links   h-full py-4 px-2 md:flex lg:flex justify-center items-center gap-8 md:w-3/4 lg:w-1/2 bg-gradient-to-r from-BLUE-300/[.1] to-black/[.1] backdrop-blur-xl ">
        <NavLink
          to="/"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">00</span> Home{" "}
        </NavLink>
        <NavLink
          to="/destination"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">01</span>{" "}
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">02</span> Crew
        </NavLink>
        <NavLink
          to="/technology"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">03</span>{" "}
          Technology
        </NavLink>
      </nav>

      {/*  Moblie Nav hamburger */}
      <img
        id="mobile-nav-show-btn"
        src="/shared/icon-hamburger.svg"
        alt="icon-hamburger"
        className="md:hidden lg:hidden cursor-pointer"
      />
      {/*  Mobile Navlink*/}
      <nav
        className="mobile-nav-link flex md:hidden lg:hidden   justify-start items-start flex-col absolute w-[175px]
      bg-gradient-to-r from-BLUE-900/[.1] to-black/[.1] backdrop-blur-xl h-screen top-0 -right-[100%] px-6 py-10 gap-5  transition-all ease-in duration-400 z-50"
      >
        {/*close btn  */}
        <img
          id="mobile-nav-close-btn"
          className="absolute top-3 right-3 cursor-pointer"
          src="/shared/icon-close.svg"
          alt="icon-close"
        />
        <NavLink
          to="/"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">01</span>{" "}
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">02</span> Crew
        </NavLink>
        <NavLink
          to="/technology"
          className="font-Barlow uppercase font-light tracking-wide text-white"
        >
          <span className="font-bold text-white font-Barlow">03</span>{" "}
          Technology
        </NavLink>
      </nav>
    </header>
  );
}
