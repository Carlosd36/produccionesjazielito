import React from 'react';

const RadioPlayer = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out border-4 border-purple-600">
      <h2 className="text-4xl font-extrabold mb-5 text-center tracking-wide">
        <span className="block text-purple-200">Sintoniza</span> Radio Hyperactiva
      </h2>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src="https://radios.yanapak.org/Radio_Hyperactiva"
          className="w-full h-64 rounded-2xl border-none shadow-inner"
          allow="autoplay"
          title="Radio Hyperactiva Player"
        ></iframe>
      </div>
      <p className="text-center text-purple-100 text-xl font-light italic">
        "La música que te acompaña, donde quiera que vayas."
      </p>
      <div className="mt-6 text-center">
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
          ¡Escúchanos en Vivo!
        </button>
      </div>
    </div>
  );
};

export default RadioPlayer;