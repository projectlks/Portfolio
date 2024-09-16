import React, { useState } from "react";

import { useTheme } from "../hooks/useTheme";
import ThemeButton from "../components/ThemeButton";
import ResumeButton from "./ResumeButton";
import MenuItem from "../components/MenuItem";
import MobileMenu from "./MobileMenu";
export interface Position {
  left: number;
  width: number;
}

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isActive, setISActive] = useState<string>("Home");

  const defaultPosition = { left: 0, width: 0 };
  const [activePosition, setActivePosition] =
    useState<Position>(defaultPosition);

    const [hoverPosition, setHoverPosition] = useState<Position>(defaultPosition)

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
        <a href="#home">
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
        </a>

        {/* Mobile Menu Icon */}

        <MobileMenu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          isActive={isActive}
          setISActive={setISActive}
        />

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex relative ">
          {["Home", "Skills", "About Me", "Projects", "Contact Me"].map(
            (section) => (
              <MenuItem
                section={section}
                setMenuOpen={setMenuOpen}
                key={section}
                isActive={isActive}
                setISActive={setISActive}
                setActivePosition={setActivePosition}
                setHoverPosition = {setHoverPosition}
              />
            )
          )}
          {/* active backGround */}
          <li
            className={`absolute h-full -z-10   rounded-md transition-all duration-300 ${
              theme === "light" ? "bg-[#100259] " : "bg-blue-100 "
            } `}
            style={{
              left: `${activePosition.left}px`,
              width: `${activePosition.width}px`,
            }}
          >
            <span className="h-full "></span>
          </li>

          {/* hover backGround */}
          <li
            className={`absolute h-full -z-10 w-[100px]  m-0 rounded-md transition-all duration-300 ${
              theme === "light" ? "bg-[#100259] " : "bg-blue-100 "
            } `}
            style={{
              left: `${hoverPosition.left}px`,
              width: `${hoverPosition.width}px`,
            }}
          >
            <span className="h-full "></span>
          </li>
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
