import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import linkar from "../assets/pdf/LinkarSoe.pdf";

export default function ResumeButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = linkar;
        link.setAttribute("download", "resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
  return (
    <Button
    variant="contained"
    endIcon={<DownloadIcon />}
    sx={{
      backgroundColor: "#100259",
      color: "white",
      padding: "8px 12px",
      borderRadius: "6px",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: "0.875rem",
      "&:hover": {
        backgroundColor: "#08002b",
      },
      transition: "all 0.3s ease-in-out",
    }}
    onClick={handleDownload}
  >
    Resume
  </Button>
  )
}
