import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import LightIcon from "../assets/svg/LightIcon";
import DarkIcon from "../assets/svg/DarkIcon";
import linkar from "../assets/pdf/LinkarSoe.pdf";
import { useTheme } from "../hooks/useTheme";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = linkar;
  link.setAttribute("download", "resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="w-full relative">
      <nav
        className={`flex justify-between items-center static xl:fixed top-4 transition-all left-0 right-0 shadow-md rounded-lg z-50 text-lg font-poppins w-[95%] md:w-[90%] mx-auto px-6 py-5
        ${
          theme === "light"
            ? "bg-gradient-to-tr from-blue-100 to-blue-300 text-black border border-blue-900 border-opacity-80 "
            : "bg-gradient-to-tr from-gray-900 shadow-md to-black text-white border border-blue-900 border-opacity-80"
        }`}
      >
        <span className="text-3xl flex font-extrabold">
          <h1 className={`${theme === 'light' ? 'text-gray-900' : 'text-blue-100'} font-poppins `}>LinKar</h1>
          <h1 className="text-[#f0a500] ">Soe</h1>
        </span>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
  <MenuIcon
    sx={{
      color: theme === "light" ? "#100259" : "#fafafa",
      fontSize: "2.5rem",
      cursor: "pointer",
      transition: "color 0.3s",
      "&:hover": {
        color: theme === "light" ? "#15036a" : "#cccccc",
      },
    }}
    onClick={toggleMenu}
    aria-label="Menu"
  />
  {menuOpen && (
    <ul
      className={`absolute z-50 w-[90%] mx-auto top-16 left-0 right-0 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-white"
      } p-6 rounded-lg space-y-4 text-center shadow-lg animate-slide-down`}
    >
      {["About Me", "Skills", "Projects", "Contact Me"].map((section) => (
        <li key={section}>
          <a
            href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
            className={`block cursor-pointer hover:underline transition-all text-lg 
              ${
                theme === "light"
                  ? "hover:text-[#100259] text-gray-900"
                  : "hover:text-gray-300 text-white"
              }`}
            onClick={() => setMenuOpen(false)}
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex space-x-6 text-lg font-medium">
          {["About Me", "Skills", "Projects", "Contact Me"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className={`cursor-pointer hover:underline transition-all 
                  ${
                    theme === "light"
                      ? "hover:text-[#100259]"
                      : "hover:text-gray-300"
                  }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Resume Button */}
        <span className="space-x-4 hidden xl:flex items-center">
          {/* Theme Toggle */}
          <span className="flex items-center space-x-2">
            <i
              className={`${
                theme === "light" ? "text-[#100259]" : "text-gray-300"
              } h-[28px]`}
            >
              <LightIcon />
            </i>

            <button
              onClick={changeTheme}
              className={`relative w-[50px] border h-[26px] rounded-full p-1 transition-all duration-300 ease-in-out 
                ${
                  theme === "light"
                    ? "bg-blue-200 border-[#100259]"
                    : "bg-gray-700 border-gray-600"
                }`}
            >
              <div className="h-full w-full relative">
                <span
                  className={`absolute top-1/2 transform -translate-y-1/2 h-full aspect-square rounded-full bg-[#100259] transition-transform duration-500 ease-in-out 
                  ${
                    theme === "light"
                      ? "left-0 animate-slide-left"
                      : "right-0 animate-slide-right bg-slate-300"
                  }`}
                ></span>
              </div>
            </button>

            <i
              className={`${
                theme === "light" ? "text-[#100259]" : "text-gray-300"
              } h-[28px]`}
            >
              <DarkIcon />
            </i>
          </span>

          {/* Resume Download Button */}
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "#100259",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              "&:hover": {
                backgroundColor: "#08002b",
              },
              transition: "all 0.3s ease-in-out",
            }}
            onClick={handleDownload}
          >
            Resume
          </Button>
        </span>
      </nav>
    </section>
  );
};

export default Header;
