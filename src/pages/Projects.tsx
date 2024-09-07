import React from "react";
import movieWeb from "../assets/imgs/movieWeb.png";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className=" bg-gradient-to-tr from-[#100259] w-full overflow-hidden to-[#1a1a7a] py-20"
    >
      <h2 className="text-5xl xl:text-7xl my-10 font-semibold font-poppins text-blue-100  text-center  flex items-center justify-center space-x-3">
        <span>My</span>
        <span className="font-extrabold">Projects</span>
      </h2>

      <div className="flex flex-col xl:flex-row xl:px-[150px] ">
        <span className="xl:w-1/2 w-[90%] mx-auto xl:pr-[150px]">
          <img
            src={movieWeb}
            alt="Movie Web"
            className="w-full mx-auto rounded-3xl"
          />
        </span>

        <div className="xl:w-1/2 w-[90%] mx-auto  p-0 text-white xl:pr-20">
          <h1 className="text-4xl xl:text-5xl font-bold my-4">. 01</h1>
          <h1 className="text-4xl xl:text-5xl font-semibold mb-4">
            Movie Webside
          </h1>
          <p className="text-lg leading-relaxed">
            Movie Web is a dynamic web application that allows users to browse
            and discover movies. With a sleek interface and intuitive
            navigation, users can explore different genres, view movie details,
            and check ratings.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            The platform is built with responsive design principles, ensuring a
            seamless experience across all devices. Whether you're a casual
            viewer or a cinephile, Movie Web has something to offer everyone.
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row-reverse py-[150px] xl:px-[150px] ">
        <span className="xl:w-1/2 w-[90%] mx-auto xl:pl-[150px]">
          <img
            src={movieWeb}
            alt="Movie Web"
            className="w-full mx-auto rounded-3xl"
          />
        </span>

        <div className="xl:w-1/2 w-[90%] mx-auto  p-0 text-white xl:pr-20">
          <h1 className="text-4xl xl:text-5xl font-bold my-4">. 01</h1>
          <h1 className="text-4xl xl:text-5xl font-semibold mb-4">
            Movie Webside
          </h1>
          <p className="text-lg leading-relaxed">
            Movie Web is a dynamic web application that allows users to browse
            and discover movies. With a sleek interface and intuitive
            navigation, users can explore different genres, view movie details,
            and check ratings.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            The platform is built with responsive design principles, ensuring a
            seamless experience across all devices. Whether you're a casual
            viewer or a cinephile, Movie Web has something to offer everyone.
          </p>
        </div>
      </div> 
        <div className="flex flex-col xl:flex-row xl:px-[150px] ">
        <span className="xl:w-1/2 w-[90%] mx-auto xl:pr-[150px]">
          <img
            src={movieWeb}
            alt="Movie Web"
            className="w-full mx-auto rounded-3xl"
          />
        </span>

        <div className="xl:w-1/2 w-[90%] mx-auto  p-0 text-white xl:pr-20">
          <h1 className="text-4xl xl:text-5xl font-bold my-4">. 01</h1>
          <h1 className="text-4xl xl:text-5xl font-semibold mb-4">
            Movie Webside
          </h1>
          <p className="text-lg leading-relaxed">
            Movie Web is a dynamic web application that allows users to browse
            and discover movies. With a sleek interface and intuitive
            navigation, users can explore different genres, view movie details,
            and check ratings.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            The platform is built with responsive design principles, ensuring a
            seamless experience across all devices. Whether you're a casual
            viewer or a cinephile, Movie Web has something to offer everyone.
          </p>
        </div>
      </div>
    
    </section>
  );
};

export default Projects;
