import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import git from "../assets/git.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import tailwind from "../assets/tailwind.png";
import Icon from "../components/Icon";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Icons() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      once: false, // Set to false if you want animations to trigger multiple times
      mirror: true, // Re-enable animations when scrolling up
    });
  }, []);

  return (
    <section className=' bg-gradient-to-tr w-full overflow-hidden from-[#100259]  to-[#1a1a7a] '>

    <div id="skills" className="mt-8 min-h-screen py-[100px]  md:w-[80%] select-none xl:w-2/3 mx-auto w-full ">
      <h2
        data-aos="zoom-out"
        className="text-3xl xl:text-7xl font-semibold font-poppins mb-20 text-center text-[#fff] flex items-center justify-center space-x-3"
      >
        <span>My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 transition-all justify-items-center md:gap-x-6 gap-y-10">
        {/* HTML Icon */}
        <Icon
          img={
            <FontAwesomeIcon
              icon={faHtml5}
              data-aos="fade-down"
              className="text-7xl md:text-8xl text-white"
            />
          }
          className="bg-[#f06529]"
        />

        {/* CSS Icon */}
        <Icon
          img={
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-7xl md:text-8xl text-white"
            />
          }
          className="bg-[#264de4]"
        />

        {/* JavaScript Icon */}
        <Icon
          img={<img src={js} alt="JavaScript Icon" />}
          className="bg-[#f7e018]"
        />

        {/* React Icon */}
        <Icon
          img={
            <FontAwesomeIcon
              icon={faReact}
              className="text-7xl md:text-8xl text-[#61dafb]"
            />
          }
          className="bg-[#ffffff] border border-[#9c9c9c77]"
        />

        {/* Git Icon */}
        {/* <Icon
          img={<img src={git} alt="Git Icon" className="w-full h-full" />}
          className="bg-[#f1502f] rotate-45 origin-bottom-right"
        /> */}
           <div
      data-aos="zoom-in"
      className="w-[80%] rounded-2xl shadow-md md:bg-transparent md:shadow-none bg-[#0503032e] flex justify-center aspect-square items-center "
    >

 <div className="flex aspect-square justify-center items-center ">
<div className="w-[100px] md:w-[125px] origin-bottom-right rotate-45 aspect-square flex justify-center items-center relative -left-1/2 -bottom-1/3 mx-auto rounded-md cursor-pointer transition-all group">
  <span className="absolute inset-0 bg-[#f1502f]  origin-right group-hover:rotate-[45deg] rounded-xl  transition-transform duration-300 ease-in-out transform "></span>
  <span className="relative flex justify-center items-center origin-center  w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
    <img
      src={git}
      alt="gitIcon"
      className="w-full -rotate-45 h-full"
    />
  </span>
</div>
</div> 
</div> 

        {/* GitHub Icon */}
        <Icon
          img={
            <FontAwesomeIcon
              icon={faGithub}
              className="text-7xl md:text-8xl text-white"
            />
          }
          className="bg-[#333]"
        />

        {/* TypeScript Icon */}
        <Icon
          img={<img src={ts} alt="TypeScript Icon" />}
          className="bg-[#007acc]"
        />

        {/* Tailwind CSS Icon */}
        <Icon
          img={<img src={tailwind} alt="Tailwind CSS Icon" className="w-4/5" />}
          className="bg-[#f9fafb] border border-[#9c9c9c77]"
        />
      </div>
    </div>
    </section>
  );
}

{
  /* <div className="flex justify-center items-center ">
<div className="w-[125px] origin-bottom-right rotate-45 aspect-square flex justify-center items-center relative -left-1/2 -bottom-1/3 mx-auto rounded-md cursor-pointer transition-all group">
  <span className="absolute inset-0 bg-[#f1502f]  origin-right group-hover:rotate-[45deg] rounded-xl  transition-transform duration-300 ease-in-out transform "></span>
  <span className="relative flex justify-center items-center origin-center  w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
    <img
      src={git}
      alt="gitIcon"
      className="w-full -rotate-45 h-full"
    />
  </span>
</div>
</div> */
}
