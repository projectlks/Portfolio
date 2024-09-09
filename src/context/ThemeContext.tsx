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
      document.body.style.backgroundColor = "#ebf8ff"; // Light theme color
    } else {
      document.body.style.backgroundColor = "#1a202c"; // Dark theme color
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
