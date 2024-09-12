import { useTheme } from "../hooks/useTheme";
interface Props {
  section: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: JSX.Element;
}

export default function MenuItem({ section, icon, setMenuOpen }: Props) {
  const { theme } = useTheme();
  return (
    <li
      className={`xl:py-0 py-3 rounded relative xl:mx-0  mx-6 xl:border-b-0  after:context-[''] after:absolute after:bottom-0  after:h-[1px] after:left-0 after:right-0 after:mx-auto  after:bg-gray-300 xl:after:bg-transparent after:w-[90%]  group transition-all text-8xl font-bold font-poppins `}
    >
      <a
        href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
        className={`block cursor-pointer ${theme === 'light' ? 'group-active:bg-gray-300 xl:hover:text-blue-100 hover:bg-[#100259]' : 'group-active:bg-gray-600 xl:hover:text-[#100259] hover:bg-blue-100'}  px-4 py-2 rounded-md transition-all text-lg ${
          theme === "light"
            ? "hover:text-[#100259] text-gray-900"
            : "hover:text-gray-300 text-white"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <span className="flex items-center  xl:space-x-0 space-x-5">
          <i className="h-7">{icon}</i>

          <p>{section}</p>
        </span>
      </a>
    </li>
  );
}
