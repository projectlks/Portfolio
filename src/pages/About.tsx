import React from 'react';
import aboutMe from '../assets/svg/aboutMe.svg'

const About: React.FC = () => {
  return (
    <section className="flex flex-col py-20 w-[90%] mx-auto xl:flex-row">
      <div className="w-full xl:w-[40%] ">
        <img src={aboutMe} alt="About Me" className="w-full mx-auto" />
      </div>
      <div id="about-me" className="w-full xl:w-[60%] mx-auto xl:px-20">
      <h2
      
        className="text-5xl xl:text-7xl my-10 font-semibold font-poppins  text-center  flex items-center justify-start space-x-3"
      >
        <span>About</span>
        <span className="font-extrabold">Me</span>
      </h2>
        <p className=" text-xl leading-relaxed text-gray-700 xl:text-2xl">
          As a frontend developer, I create engaging and user-friendly web experiences. I focus on writing clean, maintainable code and using modern design systems to ensure consistency and accessibility. My expertise ranges from building responsive single-page applications to crafting custom UI components and enhancing web performance.
        </p>
        <p className="mt-4 text-xl leading-relaxed text-gray-700 xl:text-2xl">
          I am passionate about continuous learning and staying up-to-date with the latest industry trends. By integrating best practices and innovative solutions, I strive to deliver high-quality web applications that meet both user needs and business goals.
        </p>
        <p className="mt-4 text-xl leading-relaxed text-gray-700 xl:text-2xl">
          With a strong attention to detail and an eye for design, I ensure that every project I work on is optimized for performance, accessibility, and user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
