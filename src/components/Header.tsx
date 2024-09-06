import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const Header: React.FC = () => (
  <nav className="flex justify-between items-center text-2xl font-poppins w-full md:w-[90%] mx-auto px-6 md:px-10 py-6">
    <span className="text-[4rem]">Icon</span>
    <ul className="xl:flex hidden space-x-10 font-bold">
      {[ "About Me", "Skills", "Projects", "Contact Me"].map(section => (
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
    <MenuIcon
      sx={{
        display: { xs: 'block', xl: 'none' },
        color: "#100259",
        fontSize: "3rem",
        cursor: "pointer",
        transition: "color 0.3s",
        "&:hover": { color: "#15036a" },
      }}
      aria-label="Menu"
    />
  </nav>
);

export default Header;
