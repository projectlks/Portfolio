import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("themeForProfolito");

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("themeForProfolito", newTheme);
  };

  useEffect(() => {
    // Change the body background color based on the theme
    if (theme === "light") {
      document.body.classList.add("from-blue-200", "to-blue-100");
      document.body.classList.remove("from-black", "to-gray-900");
    } else {
      document.body.classList.add("from-black", "to-gray-900");
      document.body.classList.remove("from-blue-200", "to-blue-100");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
