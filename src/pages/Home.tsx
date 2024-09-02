import home from "../assets/svg/h.svg";
import Icons from "../components/Icons";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-8">
      {/* head line */}
      <div className="relative flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold leading-tight animate-type overflow-hidden whitespace-nowrap font-poppins">
          Welcome to My Portfolio
        </h1>
        <div className="border-r-2 animate-blink w-1 h-[50px] ml-4"></div>
      </div>

      {/* text and icon */}

      <div className="flex flex-col md:flex-row  w-[80%] font-poppins  items-center mx-auto justify-between">
        <div className="space-y-6 w-[60%] ">
          <span className="text-7xl space-x-5 flex text-gray-800">
            <p> Hello I'm </p> <h2 className=" font-bold">Linkar Soe.</h2>
          </span>
          <div className="text-7xl space-x-5 flex text-gray-800">
            <h1 className="font-bold">Frontend</h1>
            <h1 className="font-bold font-Tourney">Developer</h1>
          </div>

          <span className="text-7xl space-x-5 flex text-gray-800">
            <h1 className="">Based in </h1>{" "}
            <h1 className=" font-bold">Myanmar</h1>
          </span>
        </div>

        <img src={home} alt="Frontend Developer Icon" className=" w-[40%] " />
      </div>
      <div className="items-center flex justify-between space-x-4 w-[80%] ">
        <span className="w-[70px] flex justify-center items-center aspect-square bg-blue-400 rounded-md"><h1>facebook</h1></span>
        <span className="w-[80px] flex justify-center items-center aspect-square bg-yellow-400 rounded-md"><h1>github</h1></span>

        <span className="w-[80px] flex justify-center items-center aspect-square bg-green-400 rounded-md"><h1>Instergen</h1></span>

     
        <div className="w-[70%] h-2 bg-green-700"></div>
      </div>
      <Icons />

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center">What I Do</h2>
        <p className="mt-4 text-lg text-center max-w-3xl">
          I specialize in building dynamic and responsive websites. My work
          involves writing clean, maintainable code and implementing design
          systems to ensure consistency across all projects. Whether it's
          building a single-page application, developing a custom UI component,
          or optimizing web performance, I'm always up for the challenge.
        </p>
      </div>
    </div>
  );
};

export default Home;
