import { faCss3Alt, faGithub, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import git from "../assets/git.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import tailwind from "../assets/tailwind.png";
import Icon from "./Icon";

export default function Icons() {
  return (
    <div className="mt-8 md:w-[80%] select-none xl:w-2/3 mx-auto w-full ">
      <h2 className="text-3xl xl:text-7xl font-semibold font-poppins mb-20 text-center text-[#100259] flex items-center justify-center space-x-3">
        <span>My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 transition-all justify-items-center md:gap-x-6 gap-y-10">
        
        {/* HTML Icon */}
        <Icon 
          img={<FontAwesomeIcon icon={faHtml5} className="text-7xl md:text-8xl text-white" />} 
          className="bg-[#f06529]" 
        />

        {/* CSS Icon */}
        <Icon 
          img={<FontAwesomeIcon icon={faCss3Alt} className="text-7xl md:text-8xl text-white" />} 
          className="bg-[#264de4]" 
        />

        {/* JavaScript Icon */}
        <Icon 
          img={<img src={js} alt="JavaScript Icon" />} 
          className="bg-[#f7e018]" 
        />

        {/* React Icon */}
        <Icon 
          img={<FontAwesomeIcon icon={faReact} className="text-7xl md:text-8xl text-[#61dafb]" />} 
          className="bg-[#ffffff] border border-[#9c9c9c77]" 
        />

        {/* Git Icon */}
        <Icon 
          img={<img src={git} alt="Git Icon" className="w-full h-full" />} 
          className="bg-[#f1502f] rotate-45 origin-bottom-right" 
        />

        {/* GitHub Icon */}
        <Icon 
          img={<FontAwesomeIcon icon={faGithub} className="text-7xl md:text-8xl text-white" />} 
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
  );
}






{/* <div className="flex justify-center items-center ">
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
</div> */}