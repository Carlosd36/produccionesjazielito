import React from 'react';

const LayoutHeader = ({ onNavigate }) => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">RadioBlog Jazielito</h1>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <button
            onClick={() => onNavigate('home')}
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 px-4 rounded-full bg-gray-800 hover:bg-purple-700 shadow-md mb-2 md:mb-0"
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('blog')}
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 px-4 rounded-full bg-gray-800 hover:bg-purple-700 shadow-md mb-2 md:mb-0"
          >
            Blog
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 px-4 rounded-full bg-gray-800 hover:bg-purple-700 shadow-md mb-2 md:mb-0"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;