interface Props {
  img: JSX.Element;
  className: string;
  name: string;
  skill: number;
}

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 

export default function Icon({ img, className, name, skill,  }: Props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  

  return (
    <div className="w-full ">
<div
  data-aos="zoom-out"
  className={`w-[80%] mx-auto space-y-6 rounded-2xl shadow-md md:shadow-none bg-gradient-to-tr from-[#9c9c9c12] to-[#9c9c9c2e] flex flex-col justify-center aspect-square items-center`}
>
  <div className="w-[70%] lg:w-[50%] aspect-square flex justify-center items-center bg-transparent relative rounded-sm xl:rounded-md cursor-pointer transition-all group">
    <span
      className={`absolute inset-0 ${className} rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg] `}
    ></span>

    <span
      data-aos="fade-down"
      className="relative flex justify-center items-center w-full h-full  group-hover:border-2 group-hover:border-[#9c9c9c77] transition-all group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl"
    >
      {img}
    </span>
  </div>
</div>


      <h1
        data-aos="fade-up"
        className="text-3xl font-bold font-Space text-white text-center my-4 tracking-wide uppercase"
      >
        {name}
      </h1>

      {/* Skill Progress Bar */}
      <div data-aos="zoom-in" className="flex mt-9 text-white text-xl justify-center items-center w-full">
        <div className="w-[90%] relative h-4 bg-blue-100 border rounded-full ">
          <span
            className="block relative h-full bg-teal-500 rounded-full "
            style={{ width: `${skill}%` }}
          >
            <span className="absolute right-0 top-[-1.5rem] text-xs font-semibold">
              {skill}%
            </span>
          </span>
          <span className="absolute left-0 top-[-1.5rem] text-xs font-semibold">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

