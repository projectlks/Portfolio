import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const Header: React.FC = () => (
  <nav className="flex justify-between items-center text-2xl font-poppins w-[90%] mx-auto px-10 py-6">
    <span>Icon</span>
    <ul className="flex space-x-10 font-bold">
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
      sx={{
        backgroundColor: "#100259",
        "&:hover": { backgroundColor: "#15036a" },
        px: 4,
        py: 2,
        fontSize: "1.25rem",
        fontWeight: "bold",
        textTransform: "none",
        borderRadius: "8px",
      }}
      endIcon={<DownloadIcon />}
    >
      Resume
    </Button>
  </nav>
);

export default Header;
