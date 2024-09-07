import React from 'react';
import movieWeb from '../assets/imgs/movieWeb.png'

const Projects: React.FC = () => {
  return (

  <section className='bg-[#100259] py-20'>
      <h2
      
      className="text-5xl xl:text-7xl my-10 font-semibold font-poppins  text-center  flex items-center justify-center space-x-3"
    >
      <span>My</span>
      <span className="font-extrabold">Projects</span>
    </h2>


    <div className='flex px-[150px] '>
  <span className='w-1/2 pr-[150px]'>
    <img src={movieWeb} alt="Movie Web" className='w-full mx-auto rounded-3xl' />
  </span>

  <div className='w-1/2 p-0 text-white pr-20'>
    <h1 className='text-4xl xl:text-5xl font-bold my-4'>01</h1>
    <h1 className='text-4xl xl:text-5xl font-semibold mb-4'>Movie Webside</h1>
    <p className='text-lg leading-relaxed'>
      Movie Web is a dynamic web application that allows users to browse and discover movies. With a sleek interface and intuitive navigation, users can explore different genres, view movie details, and check ratings. 
    </p>
    <p className='text-lg leading-relaxed mt-4'>
      The platform is built with responsive design principles, ensuring a seamless experience across all devices. Whether you're a casual viewer or a cinephile, Movie Web has something to offer everyone.
    </p>
  </div>
</div>

<div className='flex flex-row-reverse my-[150px] px-[150px] '>
  <span className='w-1/2 pl-[150px]'>
    <img src={movieWeb} alt="Movie Web" className='w-full mx-auto rounded-3xl' />
  </span>

  <div className='w-1/2 p-0 text-white pr-20'>
    <h1 className='text-4xl xl:text-5xl font-bold my-4'>01</h1>
    <h1 className='text-4xl xl:text-5xl font-semibold mb-4'>Movie Webside</h1>
    <p className='text-lg leading-relaxed'>
      Movie Web is a dynamic web application that allows users to browse and discover movies. With a sleek interface and intuitive navigation, users can explore different genres, view movie details, and check ratings. 
    </p>
    <p className='text-lg leading-relaxed mt-4'>
      The platform is built with responsive design principles, ensuring a seamless experience across all devices. Whether you're a casual viewer or a cinephile, Movie Web has something to offer everyone.
    </p>
  </div>
</div>
<div className='flex px-[150px] '>
  <span className='w-1/2 pr-[150px]'>
    <img src={movieWeb} alt="Movie Web" className='w-full mx-auto rounded-3xl' />
  </span>

  <div className='w-1/2 p-0 text-white pr-20'>
    <h1 className='text-4xl xl:text-5xl font-bold my-4'>01</h1>
    <h1 className='text-4xl xl:text-5xl font-semibold mb-4'>Movie Webside</h1>
    <p className='text-lg leading-relaxed'>
      Movie Web is a dynamic web application that allows users to browse and discover movies. With a sleek interface and intuitive navigation, users can explore different genres, view movie details, and check ratings. 
    </p>
    <p className='text-lg leading-relaxed mt-4'>
      The platform is built with responsive design principles, ensuring a seamless experience across all devices. Whether you're a casual viewer or a cinephile, Movie Web has something to offer everyone.
    </p>
  </div>
</div>



  </section>

  );
};

export default Projects;


