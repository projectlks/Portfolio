import React, { useState } from "react";

import Menu from "../assets/svg/MenuIcon";
import { useTheme } from "../hooks/useTheme";
import ThemeButton from "./themeButton";
import ResumeButton from "./ResumeButton";
import MenuItem from "./menuItem";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="w-full  relative">
      <nav
        className={`flex justify-between items-center static xl:fixed top-4 transition-all left-0 right-0 shadow-md rounded-lg z-50 text-lg font-poppins w-[95%] md:w-[90%] mx-auto px-6 py-5
        ${
          theme === "light"
            ? "bg-gradient-to-tr from-blue-100 to-blue-300 text-black border border-blue-900 border-opacity-80"
            : "bg-gradient-to-tr from-gray-900 to-black text-white border border-blue-900 border-opacity-80"
        }`}
      >
        <span className="text-3xl flex font-extrabold">
          <h1
            className={`${
              theme === "light" ? "text-gray-900" : "text-blue-100"
            } font-poppins`}
          >
            LinKar
          </h1>
          <h1 className="text-[#f0a500]">Soe</h1>
        </span>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden ">
          <span className="h-[30px]">
            <i
              onClick={toggleMenu}
              className={`transition-al w-[30px] h-[30px] ${
                theme === "light" ? "text-[#100259]" : "text-[#e3bf71]"
              } rounded-xl`}
            >
              <Menu />
            </i>
          </span>

          <span
        
            className={` ${
              menuOpen
                ? " translate-x-0 top-0 left-0 opacity-100"
                : "bg-transparent transform translate-x-full opacity-0"
            } flex   z-10 fixed w-full h-screen  transition-all  bg-[#00000030]`}
          >
            <span className="w-[30%] bg-transparent"   onClick={()=>setMenuOpen(false)} ></span>
            <ul
              className={` w-[70%]  ${
                theme === "light"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
              } p-3 rounded-lg absolute top-0  z-20 right-0 h-full space-y-4 text-left shadow-lg transition-all 
           `}
            >

              <li className="text-7xl">X</li>
              {["Home", "Skills", "About Me", "Projects", "Contact Me"].map(
                (section) => (
                  <MenuItem
                    section={section}
                    setMenuOpen={setMenuOpen}
                    key={section}
                  />
                )
              )}

              <li className=" px-4 py-2 rounded">
                <ThemeButton />
              </li>

              <li className=" px-4 py-2 rounded">
                <ResumeButton />
              </li>
            </ul>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex  ">
          {["Home", "Skills", "About Me", "Projects", "Contact Me"].map(
            (section) => (
              <MenuItem
                section={section}
                setMenuOpen={setMenuOpen}
                key={section}
              />
            )
          )}
        </ul>

        {/* Theme Toggle and Resume Button */}
        <span className="space-x-4 hidden xl:flex items-center">
          <ThemeButton />
          <ResumeButton />
        </span>
      </nav>
    </section>
  );
};

export default Header;
