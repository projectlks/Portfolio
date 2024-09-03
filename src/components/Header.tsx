import React from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Import the MenuIcon
// import menu from '../assets/svg/menu.svg';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const Header: React.FC = () => (
  <nav className="flex justify-between items-center text-2xl font-poppins w-full md:w-[90%] mx-auto px-6 md:px-10 py-6">
    <span>Icon</span>
    <ul className="xl:flex hidden space-x-10 font-bold">
      {["About Me", "Skills", "Projects", "Contact Me"].map((item) => (
        <li
          key={item}
          className="cursor-pointer hover:underline hover:text-[#100259] transition-all"
        >
          {item}
        </li>
      ))}
    </ul>


    <Button
      variant="contained"
      endIcon={<DownloadIcon />}
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', xl: 'flex' }, // Show only on desktop
        backgroundColor: '#100259', // Custom color
        color: 'white', // Text color
        padding: '8px 16px', // Adjust padding for better size
        borderRadius: '8px', // Rounded corners
        fontWeight: 'bold', // Bold text
        textTransform: 'uppercase', // Uppercase text
        '&:hover': {
          backgroundColor: '#0a0c1b', // Darker shade on hover
        },
        '&:active': {
          backgroundColor: '#090a14', // Even darker shade on click
        },
        transition: 'all'
      }}
    >
      Resume
    </Button>
    <MenuIcon
      sx={{
        display: { xs: 'block', xl: 'none' },
        color: "#100259",
        fontSize: "2rem",
        cursor: "pointer",
        transition: "color 0.3s",
        "&:hover": { color: "#15036a" },
      }}
    />
  </nav>
);

export default Header;
