import React, { useContext, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import dark from '../assets/svg/dark.svg';
import light from '../assets/svg/light.svg';
import { ThemeContext } from '../context/useTheme'; // Adjust the import path as needed

const Header: React.FC = () => {
  const context = useContext(ThemeContext);

 
  if (context === undefined) {
    throw new Error('ThemeContext must be used within a ThemeContextProvider');
  }

  const { changeTheme } = context;

  const { theme: contextTheme } = context;
  const [localTheme, setLocalTheme] = useState<string>(contextTheme);

  useEffect(() => {
    setLocalTheme(contextTheme);
  }, [contextTheme]);


  return (
    <section className="w-full relative">
      <nav className="flex justify-between items-center static xl:fixed top-3 left-0 right-0 bg-gradient-to-tr from-blue-100 to-blue-300 shadow border-b rounded-lg z-50 text-2xl font-poppins w-[95%] md:w-[90%] mx-auto px-6 md:px-10 py-6">
        <span className="text-[4rem]">Icon</span>
        <ul className="xl:flex hidden space-x-10 font-bold">
          {['About Me', 'Skills', 'Projects', 'Contact Me'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="cursor-pointer hover:underline hover:text-[#100259] transition-all"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <span className="space-x-6 hidden xl:flex items-center">
          <img
          onClick={changeTheme}
            src={`${localTheme === 'light' ? dark : light}`}
            alt="theme-icon"
            className="w-14 hidden xl:block cursor-pointer"
          />
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', xl: 'flex' },
              backgroundColor: '#100259',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#08002b' },
              '&:active': { backgroundColor: '#090a14' },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Resume
          </Button>
        </span>
        <MenuIcon
          sx={{
            display: { xs: 'block', xl: 'none' },
            color: '#100259',
            fontSize: '3rem',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': { color: '#15036a' },
          }}
          aria-label="Menu"
        />
      </nav>
    </section>
  );
};

export default Header;
