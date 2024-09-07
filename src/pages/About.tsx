import React, { useEffect } from "react";
import aboutMe from "../assets/svg/aboutMe.svg";
import { Tilt } from "@jdion/tilt-react";
import Aos from "aos";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="about-me"
      className="flex flex-col justify-center overflow-hidden  py-20 xl:py-0 items-center min-h-screen w-[90%] mx-auto xl:flex-row"
    >
      <div data-aos="flip-left" className="w-full xl:w-[40%]  ">
        <Tilt style={{ transformStyle: "preserve-3d" }}>
          <img
            style={{ transform: "translateZ(-10px)" }}
            src={aboutMe}
            alt="About Me"
            className="w-full mx-auto"
          />
        </Tilt>
        {/* <img src={aboutMe} alt="About Me" className="w-full mx-auto" /> */}
      </div>
      <div className="w-full h-auto flex flex-col justify-start  xl:w-[60%] mx-auto xl:px-20">
        <h2
          data-aos="zoom-in"
          className="text-5xl xl:text-7xl my-10 font-semibold font-poppins  text-center  flex items-center justify-start space-x-5"
        >
          <span>About</span>
          <span className="font-extrabold">Me</span>
        </h2>
        <p
          data-aos="zoom-in"
          className=" text-xl leading-relaxed text-gray-700 xl:text-2xl"
        >
          As a frontend developer, I create engaging and user-friendly web
          experiences. I focus on writing clean, maintainable code and using
          modern design systems to ensure consistency and accessibility. My
          expertise ranges from building responsive single-page applications to
          crafting custom UI components and enhancing web performance.
        </p>
        <p
          data-aos="zoom-in"
          className="mt-4 text-xl leading-relaxed text-gray-700 xl:text-2xl"
        >
          I am passionate about continuous learning and staying up-to-date with
          the latest industry trends. By integrating best practices and
          innovative solutions, I strive to deliver high-quality web
          applications that meet both user needs and business goals.
        </p>
        <p
          data-aos="zoom-in"
          className="mt-4 text-xl leading-relaxed text-gray-700 xl:text-2xl"
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
