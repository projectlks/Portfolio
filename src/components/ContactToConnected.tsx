import Aos from "aos";
import React, { useEffect } from "react";

interface ContactToConnectedProps {
  title: string;
  num1: string;
  num2?: string; // Made optional
  icon: string;
  link1: string;
  link2?: string; // Made optional
}

const ContactToConnected: React.FC<ContactToConnectedProps> = ({
  title,
  num1,
  num2,
  icon,
  link1,
  link2,
}) => {


  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  },[])
  return (
    <div  className="flex  flex-col md:flex-row h-full items-center px-0 md:space-x-3 xl:px-4">
      <i className={`xl:text-5xl text-center text-3xl mb-3 ${icon}`}></i>
      <span className="flex flex-col items-center">
        {title && (
          <h1 className="text-base md:text-xl w-full text-start hidden md:block font-bold">
            {title}
          </h1>
        )}
        <a data-aos='flip-left' className="block" href={link1}>
          <p className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline whitespace-nowrap hover:text-midBlue">
            {num1}
          </p>
        </a>
        {num2 && link2 && (
          <a data-aos='flip-left' className="block" href={link2}>
            <p className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline hover:text-midBlue">
              {num2}
            </p>
          </a>
        )}
      </span>
    </div>
  );
};

export default ContactToConnected;
