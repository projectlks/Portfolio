interface Props {
  img: JSX.Element;
  className: string;
}

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Icon({ img, className }: Props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="w-[80%] rounded-2xl shadow-md md:bg-transparent md:shadow-none bg-blue-200 flex justify-center aspect-square items-center "
    >
      <div className="w-[100px] md:w-[125px] aspect-square flex justify-center items-center bg-transparent relative rounded-md cursor-pointer transition-all group">
        {/* Background color span */}
        <span
          className={`absolute inset-0 ${className} rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]`}
        ></span>

        {/* Blurring span */}
        <span className="relative flex justify-center items-center w-full h-full border-2 duration-300 border-[#9c9c9c77] group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
          {img}
        </span>
      </div>
    </div>
  );
}
