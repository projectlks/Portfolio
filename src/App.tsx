// import { Button } from "@mui/material";
import { Button } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";


export default function App() {

  
  return (
    <>
      <Header />

      <Home />
      <Skills />
      <section className="bg-gradient-to-tr from-[#100259]  to-[#1a1a7a] py-14">
        <About />
        <Projects />
      </section>
      <Contact />

    <div className="mb-[100px]">
    <Footer/>

    <a href="#home" className="fixed bottom-4 bg-red-900 rounded-full">
      <Button>
        up
      </Button>
    </a>
    </div>
    </>
  );
}