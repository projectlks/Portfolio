import MenuItem from "./MenuItem";
import SkillsIcon from "../assets/svg/SkillsIcon";
import HomeIcon from "../assets/svg/HomeIcon";
import AboutMeIcon from "../assets/svg/AboutMeIcon";
import Projects from "../assets/svg/Projects";
import ContactMeIcon from "../assets/svg/ContactMeIcon";

import Menu from "../assets/svg/MenuIcon";
import { useTheme } from "../hooks/useTheme";
import ThemeButton from "./ThemeButton";
import ResumeButton from "./ResumeButton";

interface Menu {
  name: string;
  icon: JSX.Element;
}

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: string;
  setISActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function MobileMenu({
  setMenuOpen,
  menuOpen,
  setISActive,
  isActive,
}: Props) {
  const { theme } = useTheme();
  const menu: Menu[] = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Skills", icon: <SkillsIcon /> },
    { name: "About ME", icon: <AboutMeIcon /> },
    { name: "Projects", icon: <Projects /> },
    { name: "Contact Me", icon: <ContactMeIcon /> },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="xl:hidden flex ">
      <span className="h-[50px] aspect-square flex justify-center items-center fixed top-4 right-5 bg-[#00000030] rounded-full p-3 z-20">
        <i
          onClick={toggleMenu}
          className={`transition-al w-[30px] h-[30px] ${
            theme === "light" ? "text-[#100259]" : "text-[#e3bf71]"
          } rounded-xl`}
        >
          <Menu />
        </i>
      </span>

      <span
        className={`${
          menuOpen ? "-left-0 opacity-100" : "-left-full opacity-0"
        } flex z-10 fixed w-full h-screen  top-0  justify-end transition-all active:bg-gray-700 bg-[#00000030]`}
      >
        <ul
          className={`w-[80%] md:w-1/2 ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-gray-900 text-white"
          } 
        
        ${menuOpen ? "-left-0 opacity-100" : "-left-full opacity-0"}
        
        py-3 rounded-r-lg absolute top-0 z-20  h-full text-left shadow-lg transition-all`}
          aria-hidden={!menuOpen}
        >
          <li className="flex justify-center relative border-b items-center h-28">
            <span className="text-3xl flex font-extrabold">
              <h1
                className={`${
                  theme === "light" ? "text-gray-900" : "text-blue-100"
                } font-poppins`}
              >
                LinKar
              </h1>
              <h1 className="text-[#f0a500]">Soe</h1>
            </span>

            <span className="h-[30px] absolute top-2 right-2">
              <i
                onClick={toggleMenu}
                className={`transition-al w-[30px] h-[30px] ${
                  theme === "light" ? "text-[#100259]" : "text-[#e3bf71]"
                } rounded-xl`}
              >
                <Menu />
              </i>
            </span>
          </li>
          {menu.map((section) => (
            <MenuItem
              section={section.name}
              setMenuOpen={setMenuOpen}
              key={section.name}
              icon={section.icon}
              isActive={isActive}
              setISActive={setISActive}
            />
          ))}
          <li className="  mx-4 py-2 ">
            <span className="px-2 py-2  block">
              <ThemeButton />
            </span>
          </li>
          <li className="  mx-4 py-2 ">
            <span className="px-2 py-2 block">
              <ResumeButton />
            </span>
          </li>
        </ul>
        <span
          className="w-[20%] md:w-1/2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        ></span>
      </span>
    </div>
  );
}
