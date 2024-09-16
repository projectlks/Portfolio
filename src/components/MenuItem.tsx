import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { Position } from "./Header";

interface Props {
  section: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: JSX.Element;
  isActive: string;
  setISActive: React.Dispatch<React.SetStateAction<string>>;
  setActivePosition?: React.Dispatch<React.SetStateAction<Position>>;
  setHoverPosition?: React.Dispatch<React.SetStateAction<Position>>;
}

export default function MenuItem({
  section,
  icon,
  setMenuOpen,
  isActive,
  setISActive,
  setActivePosition,
  setHoverPosition,
}: Props) {
  const { theme } = useTheme();
  const menuRef = useRef<HTMLLIElement>(null);

  // Handle active position
  useEffect(() => {
    if (section === isActive && menuRef.current && setActivePosition) {
      setActivePosition({
        left: menuRef.current.offsetLeft,
        width: menuRef.current.offsetWidth,
      });
    }
  }, [isActive, section, setActivePosition]);

  // Handle hover position
  useEffect(() => {
    const handleMouseEnter = () => {
      if (setHoverPosition && menuRef.current) {
        setHoverPosition({
          left: menuRef.current.offsetLeft,
          width: menuRef.current.offsetWidth,
        });
      }
    };

    const handleMouseLeave = () => {
      if (setHoverPosition && menuRef.current) {
        setHoverPosition({
          left: 0,
          width:0,
        });
      }
    };

    const menuElement = menuRef.current;

    if (menuElement) {
      menuElement.addEventListener("mouseenter", handleMouseEnter);
      menuElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      // Clean up event listeners to prevent memory leaks
      if (menuElement) {
        menuElement.removeEventListener("mouseenter", handleMouseEnter);
        menuElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [setHoverPosition]);

  return (
    <a href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}>
      <li
        ref={menuRef}
        className="relative py-2 xl:mr-4 xl:py-0 mx-4 xl:mx-0 rounded xl:border-b-0 bg-radial-circle xl:after:bg-transparent group transition-all text-8xl font-bold font-poppins"
      >
        <span
          className={`block cursor-pointer px-2 py-2 rounded-md transition-all text-sm xl:text-lg ${
            theme === "light"
              ? "group-active:bg-gray-300 xl:group-active:bg-[#100259c0] xl:hover:text-blue-100  hover:text-[#100259]"
              : "group-active:bg-gray-600 xl:hover:text-[#100259]  hover:text-gray-300"
          } ${
            isActive === section
              ? theme === "light"
                ? " text-blue-100 bg-[#100259]"
                : " text-[#100259] bg-blue-100"
              : ""
          }`}
          onClick={() => {
            setMenuOpen(false);
            setISActive(section);
          }}
        >
          <span className="flex items-center xl:space-x-0 space-x-5">
            <i className="h-6">{icon}</i>
            <p>{section}</p>
          </span>
        </span>
      </li>
    </a>
  );
}
