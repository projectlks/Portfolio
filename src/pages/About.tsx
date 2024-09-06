import React from 'react';

const About: React.FC = () => {
  return (

      <div id='about-me' className="w-full md:w-[80%] xl:w-[70%] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-300 mb-6">What I Do</h2>
        <p className="mt-4 text-center text-2xl w-full leading-relaxed text-gray-200">
          As a frontend developer, I create engaging and user-friendly web experiences. I focus on writing clean, maintainable code and using modern design systems to ensure consistency and accessibility. My expertise ranges from building responsive single-page applications to crafting custom UI components and enhancing web performance.
        </p>
        <p className="mt-4 text-center text-2xl w-full leading-relaxed text-gray-200">
          I am passionate about continuous learning and staying up-to-date with the latest industry trends. By integrating best practices and innovative solutions, I strive to deliver high-quality web applications that meet both user needs and business goals.
        </p>
      </div>

  );
};

export default About;
