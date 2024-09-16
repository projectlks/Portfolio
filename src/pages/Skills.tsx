import react from "../assets/png/react.png";
import github from "../assets/png/github.png";
import html from "../assets/png/html.png";
import css from "../assets/png/css.png";
import git from "../assets/png/git.png";
import js from "../assets/png/js.png";
import ts from "../assets/png/ts.png";
import tailwind from "../assets/png/tailwind.png";
import Icon from "../components/Icon";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useTheme } from "../hooks/useTheme";

export default function Icons() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      once: false, // Set to false if you want animations to trigger multiple times
      mirror: true, // Re-enable animations when scrolling up
    });
  }, []);

  const { theme } = useTheme();

  return (
    <section     id="skills"
      className={` bg-gradient-to-tr w-full overflow-hidden border-y ${
        theme === "light"
          ? "from-[#100259]  to-[#1a1a7a]"
          : "from-[#000] to-[#0d0439] "
      } `}
    >
      <div
    
        className="mt-8 min-h-screen mb-20 xl:py-[100px]  2xl:w-[2/3] md:w-[80%] select-none  mx-auto w-full "
      >
        <h2
          data-aos="zoom-out"
          className="text-3xl xl:text-7xl font-semibold font-poppins mb-20 text-center text-[#fff] flex items-center justify-center space-x-3"
        >
          <span>My</span>
          <span
            className={`font-extrabold ${
              theme === "light" ? "text-gray-300" : "text-[#f0a500]"
            }`}
          >
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 transition-all justify-items-center md:gap-x-6 gap-y-10">
          {/* HTML Icon */}

          <Icon
            img={<img src={html} alt="HTML Icon" className="w-[70%]" />}
            className="bg-[#f06529]"
            name="HTML"
            skill={70} // Example skill level for HTML
          />

          {/* CSS Icon */}
          <Icon
            img={<img src={css} alt="CSS Icon" className="w-[70%]" />}
            className="bg-[#264de4]"
            name="CSS"
            skill={85} // Example skill level for CSS
          />

          {/* JavaScript Icon */}
          <Icon
            img={<img src={js} alt="JavaScript Icon" />}
            className="bg-[#f7e018]"
            name="JavaScript"
            skill={70} // Example skill level for JavaScript
          />

          {/* React Icon */}
          <Icon
            img={<img src={react} alt="React Icon" />}
            className="bg-[#ffffff]"
            name="React"
            skill={90} // Example skill level for React
          />

          {/* Git Icon */}
          <div
            data-aos="zoom-in"
            className="w-[80%] rounded-2xl shadow-md md:bg-transparent md:shadow-none bg-[#0503032e] flex justify-center aspect-square items-center"
          >
            <div className="flex aspect-square justify-center items-center">
              <div className="w-[100px] md:w-[125px] origin-bottom-right rotate-45 aspect-square flex justify-center items-center relative -left-1/2 -bottom-1/3 mx-auto rounded-md cursor-pointer transition-all group">
                <span className="absolute inset-0 bg-[#f1502f] origin-right group-hover:rotate-[45deg] rounded-xl transition-transform duration-300 ease-in-out transform"></span>
                <span className="relative flex justify-center items-center origin-center w-full h-full border-2 border-[#9c9c9c77] duration-300 group-hover:bg-[#9c9c9c77] group-hover:backdrop-blur-sm rounded-xl">
                  <img
                    src={git}
                    alt="Git Icon"
                    className="w-full -rotate-45 h-full"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Git Icon */}
          <Icon
            img={<img src={git} alt="Git Icon" className="w-[70%]" />}
            className="bg-[#000]"
            name="Git"
            skill={75} // Example skill level for Git
          />

          {/* GitHub Icon */}
          <Icon
            img={<img src={github} alt="GitHub Icon" className="w-[70%]" />}
            className="bg-[#000]"
            name="GitHub"
            skill={70} // Example skill level for GitHub
          />

          {/* TypeScript Icon */}
          <Icon
            img={<img src={ts} alt="TypeScript Icon" />}
            className="bg-[#007acc]"
            name="TypeScript"
            skill={80} // Example skill level for TypeScript
          />

          {/* Tailwind CSS Icon */}
          <Icon
            img={
              <img src={tailwind} alt="Tailwind CSS Icon" className="w-4/5" />
            }
            className="bg-[#f9fafb] border border-[#9c9c9c77]"
            name="Tailwind CSS"
            skill={90} // Example skill level for Tailwind CSS
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

{
  /* <div
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
</div> */
}
