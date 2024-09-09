import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import { ThemeContext } from "../context/ThemeContext"; 
import LightIcon from "../assets/svg/LightIcon";
import DarkIcon from "../assets/svg/DarkIcon";
import linkar from '../assets/pdf/LinkarSoe.pdf'

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = linkar; // Path to your resume file
  link.setAttribute("download", "resume.pdf"); // Set the file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header: React.FC = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }

  const { changeTheme } = context;
  const { theme: contextTheme } = context;
  const [localTheme, setLocalTheme] = useState<string>(contextTheme);

  useEffect(() => {
    setLocalTheme(contextTheme);
  }, [contextTheme]);

  return (
    <section className="w-full relative">
      <nav
        className={`flex justify-between items-center static xl:fixed top-3 transition-all left-0 right-0 shadow  rounded-lg z-50 text-2xl font-poppins w-[95%] md:w-[90%] mx-auto px-6 md:px-10 py-6 
        ${
          localTheme === "light"
            ? "bg-gradient-to-tr from-blue-100 to-blue-300 text-black"
            : "bg-gradient-to-tr from-gray-900 shadow-sm shadow-white to-black text-white"
        }`}
      >
        {/* "bg-gradient-to-tr from-gray-800 to-gray-900 text-white" */}
        <span className="text-[4rem]">Icon</span>
        <ul className="xl:flex hidden space-x-8 text-xl font-bold">
          {["About Me", "Skills", "Projects", "Contact Me"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className={`cursor-pointer hover:underline transition-all 
                  ${
                    localTheme === "light"
                      ? "hover:text-[#100259]"
                      : "hover:text-gray-300"
                  }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <span className="space-x-6 hidden xl:flex items-center">
          {/* Theme Icon and button */}
          <span className="flex  items-center space-x-3">
            <i
              className={`${
                localTheme === "light" ? "text-[#100259]" : "text-gray-300"
              }  h-[30px] `}
            >
              <LightIcon />
            </i>

            <button
              onClick={changeTheme}
              className={`relative w-[60px] border h-[30px]  rounded-full p-1 transition-all duration-300 ease-in-out 
                ${
                  localTheme === "light"
                    ? "bg-blue-200 border-[#100259]"
                    : "bg-gray-700 border-gray-600"
                }`}
            >
              <div className=" h-full w-full relative">
                <span
                  className={`absolute top-1/2 transform -translate-y-1/2 h-full aspect-square rounded-full bg-[#100259] transition-transform duration-500 ease-in-out 
                  ${
                    localTheme === "light"
                      ? "left-0 animate-slide-left "
                      : "right-0 animate-slide-right bg-slate-300"
                  }`}
                ></span>
              </div>
            </button>

            <i
              className={`${
                localTheme === "light" ? "text-[#100259]" : "text-gray-300"
              }  h-[30px] `}
            >
              <DarkIcon />
            </i>
          </span>

          {/* resume button */}
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{
              display: { xs: "none", sm: "none", md: "none", xl: "flex" },

              backgroundColor: "#100259",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "uppercase",
              "&:hover": "#08002b",
              "&:active": "#090a14",

              transition: "all 0.3s ease-in-out",
            }}

            onClick={handleDownload}
          >
            Resume
          </Button>
        </span>
        <MenuIcon
          sx={{
            display: { xs: "block", xl: "none" },
            color: localTheme === "light" ? "#100259" : "#fafafa",
            fontSize: "3rem",
            cursor: "pointer",
            transition: "color 0.3s",
            "&:hover": {
              color: localTheme === "light" ? "#15036a" : "#cccccc",
            },
          }}
          aria-label="Menu"
        />
      </nav>
    </section>
  );
};

export default Header;
