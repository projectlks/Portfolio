import { useTheme } from "../hooks/useTheme";
interface Props {
  section: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: JSX.Element;
}

export default function MenuItem({ section, icon,  }: Props) {
  const { theme } = useTheme();
  return (
    <li
    className="relative py-2 xl:py-0 mx-4 xl:mx-0 rounded xl:border-b-0 ] bg-radial-circle  xl:after:bg-transparent  group transition-all text-8xl font-bold font-poppins"
  >
  
  {/* after:bg-gradient-to-tr */}
      <a
        href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
        className={`block cursor-pointer ${theme === 'light' ? 'group-active:bg-gray-300 xl:hover:text-blue-100 xl:hover:bg-[#100259]' : 'group-active:bg-gray-600 xl:hover:text-[#100259] xl:hover:bg-blue-100'}  px-2 py-2 rounded-md transition-all text-sm xl:text-lg ${
          theme === "light"
            ? "hover:text-[#100259] text-gray-900 bg-gradient-light"
            : "hover:text-gray-300 text-white bg-gradient-dark"
        }`}
        // onClick={() => setMenuOpen(false)}
      >
        <span className="flex items-center  xl:space-x-0 space-x-5">
          <i className="h-6">{icon}</i>

          <p>{section}</p>
        </span>
      </a>
    </li>
  );
}
