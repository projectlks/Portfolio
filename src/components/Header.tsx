import React, { useState } from "react";

import Menu from "../assets/svg/MenuIcon";
import { useTheme } from "../hooks/useTheme";
import ThemeButton from "../components/ThemeButton";
import ResumeButton from "./ResumeButton";
import MenuItem from "../components/MenuItem";
import SkillsIcon from "../assets/svg/SkillsIcon";
import HomeIcon from "../assets/svg/HomeIcon";
import AboutMeIcon from "../assets/svg/AboutMeIcon";
import Projects from "../assets/svg/Projects";

interface Menu {
  name: string;
  icon: JSX.Element;
}
const Header: React.FC = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menu: Menu[] = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Skills", icon: <SkillsIcon /> },
    { name: "About ME", icon: <AboutMeIcon /> },
    { name: "Projects", icon: <Projects /> },
    { name: "Contact Me", icon: <Projects /> },
  ];

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
        <div className="xl:hidden flex ">
          <span className="h-[50px] aspect-square flex justify-center items-center fixed top-4 right-5 bg-[#00000030] rounded-full p-3 z-20">
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
            className={`${
              menuOpen ? " opacity-100 " : " opacity-0 "
            } flex z-10 fixed w-full h-screen  top-0 left-0 justify-end transition-all active:bg-gray-700 bg-[#00000030]`}
          >
            <ul
              className={`w-[80%] md:w-1/2 ${
                theme === "light"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
              } ${
                menuOpen ? "-left-0 opacity-100" : "-left-full opacity-0"
              } py-3 rounded-r-lg absolute top-0 z-20  h-full text-left shadow-lg transition-all`}
              aria-hidden={!menuOpen}
            >
              <li className="flex justify-center relative border-b items-center h-28">
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

                <span className="h-[30px] absolute top-2 right-2">
                  <i
                    onClick={toggleMenu}
                    className={`transition-al w-[30px] h-[30px] ${
                      theme === "light" ? "text-[#100259]" : "text-[#e3bf71]"
                    } rounded-xl`}
                  >
                    <Menu />
                  </i>
                </span>
              </li>
              {menu.map((section) => (
                <MenuItem
                  section={section.name}
                  setMenuOpen={setMenuOpen}
                  key={section.name}
                  icon={section.icon}
                />
              ))}
              <li className="  mx-4 py-2 ">
               <span className="px-2 py-2  block">
               <ThemeButton />
               </span>
              </li>
              <li className="  mx-4 py-2 ">
              <span className="px-2 py-2 block">
              <ResumeButton />
              </span>
              </li>
            </ul>
            <span
              className="w-[20%] md:w-1/2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            ></span>
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
