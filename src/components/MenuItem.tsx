import { useTheme } from '../hooks/useTheme'
interface Props {
    section : string
    setMenuOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuItem({section, setMenuOpen } : Props) {
    const {theme} = useTheme()
  return (
    <li className={` px-4 py-2 rounded text-8xl font-bold font-poppins active:bg-green-600`}>
                <a
                  href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`block cursor-pointer hover:underline transition-all text-lg ${
                    theme === "light"
                      ? "hover:text-[#100259] text-gray-900"
                      : "hover:text-gray-300 text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section}
                </a>
              </li>
  )
}
