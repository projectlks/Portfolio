import home from "../assets/svg/h.svg";
import Icons from "../components/Icons";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <section>
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row w-[90%] items-center mx-auto justify-between">
          {/* Text Content */}
          <div className="w-full md:w-[50%] pl-10 mb-10 md:mb-0">
            <header className="space-y-6 text-5xl sm:text-6xl font-Space mb-6">
              <h1 className="flex flex-wrap space-x-5 text-gray-800">
                <span className="font-semibold">Hello, I'm</span>
                <span className="text-[#100259] font-extrabold">Linkar Soe.</span>
              </h1>

              <h2 className="flex space-x-5 text-gray-800">
                <span className="font-bold text-[#100259]">Frontend</span>
                <span className="font-Tourney">Developer</span>
              </h2>

              <p className="flex space-x-5 text-gray-800">
                <span>Based in</span>
                <span className="text-[#100259] font-bold">Myanmar</span>
              </p>
            </header>

            <div className="w-full text-[18px] sm:text-[20px] text-balance rounded-md">
              <p>
                Welcome to my portfolio! I’m Linkar Soe, a passionate Frontend Developer based in Myanmar. With a keen eye for design and a love for creating engaging user experiences, I specialize in crafting beautiful, responsive websites and applications. Explore my work to see how I blend creativity with technology to bring ideas to life. If you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center">
            <img src={home} alt="Frontend Developer Icon" className="w-full" />
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="items-center flex justify-between space-x-4 w-[80%] mt-8">
          <span className="w-[70px] flex justify-center items-center aspect-square bg-blue-400 rounded-md">
            <h1>facebook</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-yellow-400 rounded-md">
            <h1>github</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-green-400 rounded-md">
            <h1>Instergen</h1>
          </span>
          <div className="w-[70%] h-1 bg-[#100259]"></div>
        </div>

        {/* Icons Component */}
        <Icons />

        {/* About Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center">What I Do</h2>
          <p className="mt-4 text-lg text-center max-w-3xl">
            I specialize in building dynamic and responsive websites. My work
            involves writing clean, maintainable code and implementing design
            systems to ensure consistency across all projects. Whether it's
            building a single-page application, developing a custom UI
            component, or optimizing web performance, I'm always up for the
            challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
