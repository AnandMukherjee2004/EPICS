import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Droplets className="h-8 w-8" />
            <span className="font-bold text-xl">AquaQuality</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/analysis" className="hover:bg-blue-700 px-3 py-2 rounded-md">Analysis</Link>
            <Link to="/dashboard" className="hover:bg-blue-700 px-3 py-2 rounded-md">Dashboard</Link>
            <Link to="/information" className="hover:bg-blue-700 px-3 py-2 rounded-md">Information</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;