import { createContext, FC, ReactNode, useState } from "react";

// Define the shape of the context value
interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  // Toggle between 'light' and 'dark' themes
  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext}

