import React from 'react';

const projects = [
  { title: 'Project 1', description: 'A cool project using React and TypeScript.' },
  { title: 'Project 2', description: 'Another cool project using Tailwind CSS.' },
];

const Projects: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold">My Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
