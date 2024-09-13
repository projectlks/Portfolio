import React, { useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import MobileIcon from "../assets/svg/Mobile";
import TabletIcon from "../assets/svg/Tablet";
import DesktopIcon from "../assets/svg/DesktopIcon";

import Aos from "aos";
import "aos/dist/aos.css";

import { useTheme } from "../hooks/useTheme";
import SocialMediaLinks from "../components/SocialMediaLinks";

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
      mirror: true, 
    });
  }, []);

  const { theme } = useTheme();

  const textColor = `
   ${
     theme === "light"
       ? "text-[#100259] "
       : "text-[#f0a500] "
   } transition-all duration-300 font-extrabold font-poppins`;

  return (
    <section id="home" className={`min-h-screen mt-[100px] `}>
      {/* Main Content Section */}
      <div className="flex flex-col  items-center  min-h-screen justify-center">
        {/* Hero Section */}
        <div className="flex flex-col-reverse    xl:flex-row w-full md:w-[90%] mx-auto px-4 xl:px-8  xl:items-center items-center justify-between">
          {/* Text Content */}
          <div
            data-aos="flip-left"
            data-aos-delay="500"
            className="w-full xl:w-1/2 mb-6 md:mb-0"
          >
            <header
              className={`md:space-y-6 transition-all font-space font-semibold ${
                theme === "light" ? "text-gray-900" : "text-blue-100"
              } space-y-3 text-[20px] xl:mt-0 mt-[40px] middle:text-[32px] 350:text-[30px] xs:text-2xl sm:text-4xl 500:text-5xl md:text-6xl 2xl:text-7xl font-Space mb-6`}
            >
              <h1 className="flex space-x-4">
                <span>Hello, I'm</span>
                <span className={textColor}>Linkar Soe.</span>
              </h1>
              <h1 className="flex space-x-4">
                <span className={textColor}>Frontend</span>
                <span className="font-[MateusBold]  text-[20px] 350:text-[32px] middle:text-[36px] xs:text-2xl sm:text-5xl 500:text-5xl md:text-7xl 2xl:text-8xl">Developer</span>
              </h1>
              <h1 className="flex space-x-4">
                <span>Based in</span>
                <span className={textColor}>Myanmar</span>
              </h1>
            </header>

            <div
              className={`xl:text-xl max-w-[800px] text-lg ${
                theme === "light" ? "text-gray-900" : "text-blue-100"
              }`}
            >
              <p className="leading-relaxed">
              {width}
                Welcome to my portfolio! I'm Linkar Soe, a passionate Frontend
                Developer based in Myanmar. With a keen eye for design and a
                love for creating engaging user experiences, I specialize in
                crafting beautiful, responsive websites and applications.
                Explore my work to see how I blend creativity with technology to
                bring ideas to life. If you have a project in mind or just want
                to connect, feel free to reach out!
              </p>
            </div>
            {/* </div> */}
          </div>

          {/* Image Section */}
          <div
          
            className={`w-full  ${
          theme === "light" ? "bg-transparent" : " bg-gradient-to-tr from-blue-100 to-blue-300"
        } aspect-square md:w-2/3 xl:w-1/2 p-4 md:p-8 flex justify-center transition-all rounded-xl`}
          >
           <span   data-aos="zoom-in" className=" block w-full h-full ">
           <i
              className={`transition-all ${
                theme === "light" ? "text-[#100259]" : "text-gray-900"
              } rounded-xl`}
            >

{/* text-[#e3bf71] text-[#f0ffff]*/}
              {device}
            </i>
           </span>
          </div>
        </div>
        <SocialMediaLinks />
      </div>
    </section>
  );
};

export default Home;
