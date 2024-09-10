interface Props {
  img: JSX.Element;
  className: string;
  name: string
}

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Icon({ img, className, name }: Props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-full aspect-square ">
 <div
     data-aos="zoom-in"
      className="w-[80%] mx-auto  space-y-6 rounded-2xl shadow-md   md:shadow-none bg-[#0503032e] flex flex-col justify-center aspect-square items-center "
    >
      <div className="w-[70%] xl:w-[50%]  aspect-square flex justify-center items-center bg-transparent relative rounded-sm xl:rounded-md cursor-pointer transition-all group">
        {/* Background color span */}
        <span

          className={`absolute inset-0 ${className} rounded-xl transition-transform duration-300 ease-in-out transform origin-bottom group-hover:rotate-[35deg]`}
        ></span>

        {/* Blurring span */}
        <span  data-aos="fade-down" className="relative flex justify-center items-center w-full h-full group-hover:border-2 duration-300 group-hover:border-[#9c9c9c77] group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
          {img}
        </span>
      </div>
    
    </div>
    <h1
    data-aos = 'fade-up' className="text-4xl font-bold font-Space text-white text-center mt-2 tracking-wide uppercase">
  {name}
</h1>

<progress
  className="w-full max-w-xs mx-auto appearance-none h-2 bg-gray-200 rounded-full overflow-hidden"
  value={50} // Replace with your progress value
  max={100}  // Replace with your maximum value
/>

    </div>
   
  );
}
