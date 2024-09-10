import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../hooks/useTheme";


export default function SocialMediaLinks() {
    const { theme } = useTheme();
  return (
    <div className="items-center flex justify-between mb-10 xl:mb-20 space-x-4 w-[80%]">
    <span
      className={`xl:text-[60px] text-[40px] transition-all duration-300 flex justify-evenly ${
        theme === "light" ? "text-[#100259]" : "text-blue-100"
      } w-full xl:w-[30%]`}
    >
      <a
        href="https://www.facebook.com/profile.php?id=100041414334073&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className={`hover:text-[#1877F2]`}
        />
      </a>
      <a
        href="https://t.me/Mglinkar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTelegramPlane}
          className={`hover:text-[#0088cc] `}
        />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className={`hover:text-[#C13584]`}
        />
      </a>
      <a href="https://github.com/projectlks"  target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} className={`hover:text-[#000]`}/>
      </a>
    </span>
    <div
      className={`xl:w-[70%] hidden xl:flex h-1 ${
        theme === "light" ? "bg-[#100259]" : "bg-blue-100"
      }`}
    ></div>
  </div>
  )
}
