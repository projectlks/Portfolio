import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import up from "./assets/svg/up.svg";


export default function App() {
  return (
    <>
      <Header />

      <Home />
      <Skills />

      {/* bg-gradient-to-tr from-[#100259]  to-[#1a1a7a] */}
     
        <About />
        <Projects />

      <Contact />
      <Footer />

      <span className="flex flex-col mb-10 items-center bottom-10 mx-auto left-0 right-0">
        <a href="#home" className="w-auto flex flex-col items-center">
          <img
            src={up}
            alt="up-icon"
            className="w-16 aspect-square animate-bounce"
          />
          <p className="bg-[#100259] text-white mt-2 px-4 py-1 rounded-lg shadow-md text-sm font-semibold hover:bg-red-700 hover:text-white transition duration-300">
            Back to Top
          </p>
        </a>
      </span>
    </>
  );
}
