import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import dark from "../assets/svg/dark.svg";
import light from "../assets/svg/light.svg";
import { ThemeContext } from "../context/useTheme"; // Adjust the import path as needed

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
            : "bg-gradient-to-tr from-gray-800 to-gray-900 text-white"
        }`}
      >
        <span className="text-[4rem]">Icon</span>
        <ul className="xl:flex hidden space-x-10 font-bold">
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
          <span className="flex items-center space-x-4">
            <i
              className={`${
                localTheme === "light" ? "text-[#100259]" : "text-gray-300"
              } h-full`}
            >
              <img src={light} alt="Light Mode" className="h-full w-6" />
            </i>

            <button
              onClick={changeTheme}
              className={`relative w-[60px] border h-[30px] rounded-full p-3 transition-all duration-300 ease-in-out 
                ${
                  localTheme === "light"
                    ? "bg-blue-200 border-blue-300"
                    : "bg-gray-700 border-gray-600"
                }`}
            >
              <span
                className={`absolute top-1/2 transform -translate-y-1/2 h-[80%] aspect-square rounded-full bg-[#100259] transition-transform duration-500 ease-in-out 
                  ${
                    localTheme === "light"
                      ? "left-2 animate-slide-left"
                      : "right-2 animate-slide-right"
                  }`}
              ></span>
            </button>

            <i className="h-full">
              <img src={dark} alt="Dark Mode" className="h-full w-6" />
            </i>
          </span>

          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{
              display: { xs: "none", sm: "none", md: "none", xl: "flex" },
              backgroundColor: localTheme === "light" ? "#100259" : "#fafafa",
              color: localTheme === "light" ? "white" : "#333",
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: localTheme === "light" ? "#08002b" : "#e0e0e0",
              },
              "&:active": {
                backgroundColor: localTheme === "light" ? "#090a14" : "#cccccc",
              },
              transition: "all 0.3s ease-in-out",
            }}
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
