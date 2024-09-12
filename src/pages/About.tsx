import React, { useEffect } from "react";
import AboutIcon from "../assets/svg/AboutIconPage";
import { Tilt } from "@jdion/tilt-react";
import Aos from "aos";
import { useTheme } from "../hooks/useTheme";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const { theme } = useTheme();

  return (
    <section
      id="about-me"
      className="flex flex-col justify-center overflow-hidden  py-20 xl:py-0 items-center min-h-screen w-[90%] mx-auto xl:flex-row"
    >
      <div
       
        className={`w-full xl:w-[40%] rounded-xl transition-all ${
          theme === "light" ? "bg-transparent" : " bg-gradient-to-tr from-blue-100 to-blue-300"
        }`}
      >
        <span  data-aos="flip-left" className="block w-full h-full ">
        <Tilt style={{ transformStyle: "preserve-3d" }}>
          <i
         
            className={`${
              theme === "light" ? "text-[#100259]" : "text-gray-900"
            } `}
          >
            <AboutIcon />
          </i>
        </Tilt>
        </span>
      
      </div>
      <div
        className={`w-full ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        } h-auto flex flex-col justify-start  xl:w-[60%] mx-auto xl:px-20`}
      >
        <h2
          data-aos="zoom-in"
          className="text-5xl xl:text-7xl my-10 font-semibold font-poppins  text-center  flex items-center justify-start space-x-5"
        >
          <span>About</span>
          <span className={` font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-[#f0a500]'}`}>Me</span>
        </h2>
        <p data-aos="zoom-in" className=" text-xl leading-relaxed  xl:text-2xl">
          As a frontend developer, I create engaging and user-friendly web
          experiences. I focus on writing clean, maintainable code and using
          modern design systems to ensure consistency and accessibility. My
          expertise ranges from building responsive single-page applications to
          crafting custom UI components and enhancing web performance.
        </p>
        <p
          data-aos="zoom-in"
          className="mt-4 text-xl leading-relaxed  xl:text-2xl"
        >
          I am passionate about continuous learning and staying up-to-date with
          the latest industry trends. By integrating best practices and
          innovative solutions, I strive to deliver high-quality web
          applications that meet both user needs and business goals.
        </p>
        <p
          data-aos="zoom-in"
          className="mt-4 text-xl leading-relaxed  xl:text-2xl"
        >
          With a strong attention to detail and an eye for design, I ensure that
          every project I work on is optimized for performance, accessibility,
          and user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
