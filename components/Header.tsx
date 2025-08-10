
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter">
          mrz <span className="text-gray-400">Academy</span>
        </h1>
        <a 
          href="#notify" 
          className="bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Notify Me
        </a>
      </div>
    </header>
  );
};

export default Header;
