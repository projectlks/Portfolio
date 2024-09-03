import React, { useEffect, useState } from 'react';
import Icons from '../components/Icons';
import Header from '../components/Header';
import { useScreenWidth } from '../hooks/useScreenWidth';

import desktop from '../assets/svg/desktop.svg';
import mobile from '../assets/svg/mobile.svg';
import tablet from '../assets/svg/tablet.svg';

const Home: React.FC = () => {
  const width = useScreenWidth();
  const [device, setDevice] = useState<string>(''); // Default to mobile

  useEffect(() => {
    // Update device type based on width
    if (width >= 1024) {
      setDevice(desktop);
    } else if (width >= 768) {
      setDevice(tablet);
    } else {
      setDevice(mobile);
    }
  }, [width]);

  return (
    <section>
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <div className=" flex flex-col items-center  justify-center bg-blue-50 p-4 md:p-8">
        {/* Hero Section */}
        <div className="flex flex-col-reverse xl:flex-row   w-full md:w-[90%] mx-auto px-4 md:px-8 py-6 md:py-12 items-center justify-between">
          {/* Text Content */}
          <div className="w-full xl:w-1/2 mb-6 md:mb-0">
            <header className="md:space-y-6 space-y-3 text-4xl md:text-5xl xl:text-6xl font-Space mb-6">
              <h1 className="flex space-x-4 md:space-x-6 text-gray-800">
                <span className="font-semibold">Hello, I'm</span>
                <span className="text-[#100259] font-extrabold">Linkar Soe.</span>
              </h1>

              <h2 className="flex space-x-4 md:space-x-6 text-gray-800 text-2xl sm:text-3xl">
                <span className="font-bold text-[#100259]">Frontend</span>
                <span className="font-Tourney">Developer</span>
              </h2>

              <p className="flex space-x-4 md:space-x-6 text-gray-800 text-lg sm:text-xl">
                <span>Based in</span>
                <span className="text-[#100259] font-bold">Myanmar</span>
              </p>
            </header>

            <div className="text-base sm:text-lg text-gray-700 rounded-md">
              <p>
                Welcome to my portfolio! I’m Linkar Soe, a passionate Frontend Developer based in Myanmar. With a keen eye for design and a love for creating engaging user experiences, I specialize in crafting beautiful, responsive websites and applications. Explore my work to see how I blend creativity with technology to bring ideas to life. If you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full aspect-square md:w-2/3 xl:w-1/2 flex justify-center">
            <img src={device} alt="Frontend Developer Icon" className="w-full max-w-md md:max-w-full object-cover" />
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="items-center flex justify-between space-x-4 w-[80%] mt-8">
          <span className="w-[70px] flex justify-center items-center aspect-square bg-blue-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>Facebook</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-yellow-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>GitHub</h1>
          </span>
          <span className="w-[80px] flex justify-center items-center aspect-square bg-green-400 rounded-md">
            {/* Replace with actual icons */}
            <h1>Instagram</h1>
          </span>
          <div className="w-[70%] h-1 bg-[#100259]"></div>
        </div>

     
      </div>
    </section>
  );
};

export default Home;



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