import React from 'react';

const TikTokSection = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Nuestros Anuncios en TikTok</h2>
      <div className="text-center">
        <p className="text-gray-300 text-lg mb-4">¡Síguenos en TikTok para no perderte nada!</p>
        <a href="https://www.tiktok.com/@producciones_jazielito?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-md">
          Ir a TikTok
        </a>
      </div>
      {/* Aquí podrías integrar embeds de TikTok si la API lo permitiera sin librerías externas */}
      <p className="text-center text-gray-500 text-sm mt-6">
        (Nota: La integración directa de videos de TikTok sin librerías externas es limitada. Puedes enlazar a tu perfil.)
      </p>
    </div>
  );
};

export default TikTokSection;