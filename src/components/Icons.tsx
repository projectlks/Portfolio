import { faCss3Alt, faGithub, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import git from "../assets/git.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import tailwind from "../assets/tailwind.png";

export default function Icons() {
  return (
    <div className="mt-8 md:w-[80%] select-none xl:w-2/3 mx-auto w-full ">
<h2 className="text-3xl xl:text-7xl font-semibold font-poppins mb-20 text-center flex items-center justify-center space-x-3">
    <span>My</span>
    <span className="font-extrabold">Skills</span>
</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 transition-all justify-items-center gap-x-6 gap-y-20">
          {/* HTML icon */}
          <div className="w-[100px] md:w-[125px] aspect-square  flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            {/* Background color span */}
            <span className="absolute inset-0 bg-[#f06529]  #e34f26 rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>

            {/* Blurring span */}
            <span className="relative flex justify-center items-center w-full h-full border-2 duration-300 border-[#9c9c9c77] group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <FontAwesomeIcon icon={faHtml5} className="text-7xl md:text-8xl text-white" />
            </span>
          </div>

          {/* test is here */}

          {/* CSS3 */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#264de4] rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-8xl text-white"
              />
            </span>
          </div>

          {/* JavaScript */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#f7e018] rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <img src={js} alt="jsIcon" />
            </span>
          </div>

          {/* React */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#ffffff] rounded-xl border border-[#9c9c9c77] transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <FontAwesomeIcon
                icon={faReact}
                className="text-7xl text-[#61dafb]"
              />
            </span>
          </div>

          {/* Git */}

          <div className="flex justify-center items-center ">
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
          </div>

          {/* GitHub */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#333] rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-7xl text-white"
              />
            </span>
          </div>

          {/* TypeScript */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#007acc] rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <img src={ts} alt="jsIcon" />
            </span>
          </div>

          {/* Tailwind CSS */}
          <div className="w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
            <span className="absolute inset-0 bg-[#f9fafb] rounded-xl border border-[#9c9c9c77] transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]"></span>
            <span className="relative flex justify-center p-3 items-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
              <img src={tailwind} alt="jsIcon" />
            </span>
          </div>

          {/* end here */}
        </div>
      </div>

  )
}
