import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="bg-blue-50 shadow-md p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-blue-600">Home</Link></li>
        <li><Link to="/about" className="text-blue-600">About</Link></li>
        <li><Link to="/projects" className="text-blue-600">Projects</Link></li>
        <li><Link to="/contact" className="text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
