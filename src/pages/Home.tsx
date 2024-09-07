import React, { useContext, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import desktop from "../assets/svg/desktop.svg";
import mobile from "../assets/svg/mobile.svg";
import tablet from "../assets/svg/tablet.svg";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import DesktopIcon from '../components/DesktopIcon'
import { ThemeContext } from '../context/useTheme'

const Home: React.FC = () => {
  const width = useScreenWidth();
  const [device, setDevice] = useState<string>(""); // Default to mobile

  useEffect(() => {
    // Update device type based on width
    if (width >= 1024) {
      setDevice(desktop);
    } else if (width >= 768) {
      setDevice(tablet);
    } else {
      setDevice(mobile);
    }
  }, [width]);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      once: false, // Set to false if you want animations to trigger multiple times
      mirror: true, // Re-enable animations when scrolling up
    });

  }, []);

  const context = useContext(ThemeContext);

  // Ensure the context is not undefined
  if (context === undefined) {
    throw new Error('ThemeContext must be used within a ThemeContextProvider');
  }

  const { theme: contextTheme } = context;
  const [localTheme, setLocalTheme] = useState<string>(contextTheme);

  useEffect(() => {
    setLocalTheme(contextTheme);
  }, [contextTheme]);




  return (
    <section id="home" className={`${localTheme === 'light' ? '' : 'bg-black'}`}>
      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center ">
        {/* Hero Section */}
        <div className="flex flex-col-reverse xl:flex-row w-full md:w-[90%] mx-auto px-4 xl:px-8 py-6 md:py-12 xl:items-center items-center justify-between">
          {/* Text Content */}
          <div
            data-aos="flip-left"
            data-aos-delay="500"
            className="w-full xl:w-1/2 mb-6 md:mb-0"
          >
            <header className="md:space-y-6 space-y-3 text-[20px] middle:text-[32px] xs:text-2xl sm:text-4xl 500:text-5xl md:text-6xl 2xl:text-7xl font-Space mb-6">
              <h1 className="flex space-x-4 md:space-x-6 text-gray-800">
                <span className="font-semibold">Hello, I'm</span>
                <span className="text-[#100259] font-extrabold">
                  Linkar Soe. 
                </span>
              </h1>

              <h2 className="flex space-x-4 md:space-x-6 text-gray-800">
                <span className="font-bold text-[#100259]">Frontend</span>
                <span className="font-Tourney">Developer</span>
              </h2>

              <p className="flex space-x-4 md:space-x-6 text-gray-800">
                <span>Based in</span>
                <span className="text-[#100259] font-bold">Myanmar</span>
              </p>
            </header>

            <div className="bg-[#100259] shadow-md text-base sm:text-lg text-gray-100 p-6 lg:p-8 rounded-lg">
              <p
                className="leading-relaxed"
                data-aos="zoom-out"
                data-aos-delay="1500"
              >
                Welcome to my portfolio! I'm Linkar Soe, a passionate Frontend
                Developer based in Myanmar. With a keen eye for design and a love
                for creating engaging user experiences, I specialize in crafting
                beautiful, responsive websites and applications. Explore my work
                to see how I blend creativity with technology to bring ideas to
                life. If you have a project in mind or just want to connect, feel
                free to reach out!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="w-full aspect-square md:w-2/3 xl:w-1/2 p-4 md:p-8 flex justify-center"
          >
            <img
              src={device}
              alt="Frontend Developer Icon "
              className="w-full hidden object-cover"
            />
            <i className="text-gray-300 rounded-xl">
              <DesktopIcon/>
            </i>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="items-center flex justify-between space-x-4 w-[80%] mt-8">
          <span className="w-[70px] flex justify-center items-center aspect-square bg-blue-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>Facebook</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-yellow-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>GitHub</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-green-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>Instagram</h1>
          </span>
          <div className="w-[70%] h-1 bg-[#100259]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;