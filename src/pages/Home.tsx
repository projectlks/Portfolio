import React, { useContext, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import MobileIcon from "../assets/svg/Mobile";
import TabletIcon from "../assets/svg/Tablet";
import DesktopIcon from "../assets/svg/DesktopIcon";

import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeContext } from "../context/useTheme";

const Home: React.FC = () => {
  const width = useScreenWidth();
  const [device, setDevice] = useState<JSX.Element>();

  useEffect(() => {
    if (width >= 1024) {
      setDevice(<DesktopIcon />);
    } else if (width >= 768) {
      setDevice(<TabletIcon />);
    } else {
      setDevice(<MobileIcon />);
    }
  }, [width]);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      mirror: true, // Re-enable animations when scrolling up
    });
  }, []);

  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }

  const { theme: contextTheme } = context;
  const [localTheme, setLocalTheme] = useState<string>(contextTheme);

  useEffect(() => {
    setLocalTheme(contextTheme);
  }, [contextTheme]);

  const textColor =
    localTheme === "light"
      ? "text-[#100259] font-extrabold"
      : "text-[#f0a500] font-extrabold";

  return (
    <section
      id="home"
      className={`min-h-screen ${
        localTheme === "light"
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-gray-900"
          : "bg-gradient-to-tr from-black to-[#100259] text-blue-100"
      }`}
    >
      {/* Main Content Section */}
      <div className="flex flex-col items-center min-h-screen justify-center">
        {/* Hero Section */}
        <div className="flex flex-col-reverse h-full  xl:flex-row w-full md:w-[90%] mx-auto px-4 xl:px-8 py-6 xl:items-center items-center justify-between">
          {/* Text Content */}
          <div
            data-aos="flip-left"
            data-aos-delay="500"
            className="w-full xl:w-1/2 mb-6 md:mb-0"
          >
            <header
              className={`md:space-y-6 transition-all ${
                localTheme === "light" ? "text-gray-900" : "text-blue-100"
              } space-y-3 text-[20px] middle:text-[32px] xs:text-2xl sm:text-4xl 500:text-5xl md:text-6xl 2xl:text-7xl font-Space mb-6`}
            >
              <h1 className="flex space-x-4">
                <span>Hello, I'm</span>
                <span className={textColor}>Linkar Soe.</span>
              </h1>
              <h1 className="flex space-x-4">
                <span className={textColor}>Frontend</span>
                <span>Developer</span>
              </h1>
              <h1 className="flex space-x-4">
                <span>Based in</span>
                <span className={textColor}>Myanmar</span>
              </h1>
            </header>

            <div
              className="bg-[#100259] shadow-md text-base sm:text-lg text-gray-100 p-6 lg:p-8 rounded-lg"
              data-aos="zoom-out"
              data-aos-delay="1500"
            >
              <p className="leading-relaxed">
                Welcome to my portfolio! I'm Linkar Soe, a passionate Frontend
                Developer based in Myanmar. With a keen eye for design and a
                love for creating engaging user experiences, I specialize in
                crafting beautiful, responsive websites and applications.
                Explore my work to see how I blend creativity with technology to
                bring ideas to life. If you have a project in mind or just want
                to connect, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="w-full aspect-square md:w-2/3 xl:w-1/2 p-4 md:p-8 flex justify-center"
          >
            <i
              className={`transition-all ${
                localTheme === "light" ? "text-[#100259]" : "text-[#e3bf71]"
              } rounded-xl`}
            >
              {device}
            </i>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="items-center flex justify-between absolute bottom-0 space-x-4 w-[80%] mt-8">
          {["Facebook", "GitHub", "Instagram"].map((name, index) => (
            <span
              key={index}
              className={`w-[70px] flex justify-center items-center aspect-square rounded-md ${
                index === 0
                  ? "bg-blue-400"
                  : index === 1
                  ? "bg-yellow-400"
                  : "bg-green-400"
              }`}
            >
              <h1 className="text-center">{name}</h1>
            </span>
          ))}
          <div className="w-[70%] h-1 bg-[#100259]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
