import { useTheme } from '../hooks/useTheme'
import LightIcon from '../assets/svg/LightIcon'
import DarkIcon from '../assets/svg/DarkIcon'

export default function ThemeButton() {
  const { theme, changeTheme } = useTheme();
  return (

    <span className="flex items-center space-x-2">
    <i
      className={`${
        theme === "light" ? "text-[#100259]" : "text-gray-300"
      } h-[28px]`}
    >
      <LightIcon />
    </i>

    <button
      onClick={changeTheme}
      className={`relative w-[50px] border h-[26px] rounded-full p-1 transition-all duration-300 ease-in-out 
        ${
          theme === "light"
            ? "bg-blue-200 border-[#100259]"
            : "bg-gray-700 border-gray-600"
        }`}
    >
      <div className="h-full w-full relative">
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 h-full aspect-square rounded-full bg-[#100259] transition-transform duration-500 ease-in-out 
          ${
            theme === "light"
              ? "left-0 animate-slide-left"
              : "right-0 animate-slide-right bg-slate-300"
          }`}
        ></span>
      </div>
    </button>

    <i
      className={`${
        theme === "light" ? "text-[#100259]" : "text-gray-300"
      } h-[28px]`}
    >
      <DarkIcon />
    </i>
  </span>
  )
}
