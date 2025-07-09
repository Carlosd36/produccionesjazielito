import React from 'react';

const YouTubeSection = () => {
  const youtubeLinks = [
    { id: "dQw4w9WgXcQ", title: "Video Musical Épico" }, // Ejemplo de video 1
    { id: "3JZ_D3ELwOQ", title: "Entrevista Exclusiva" }, // Ejemplo de video 2
    { id: "xvFZjo5PgG0", title: "Detrás de Cámaras" }  // Ejemplo de video 3
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl mb-8 border border-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          {/* Logo "Producciones Jazielito" */}
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-4 flex-shrink-0">
            <span className="text-center leading-none">Prod.<br/>Jazielito</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Videos de Producciones Jazielito</h2>
        </div>
        <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-md">
          Ver más en YouTube
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {youtubeLinks.map((video, index) => (
          <div key={index} className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-600">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                className="w-full h-full rounded-t-xl border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
              <p className="text-gray-300 text-sm">
                Descubre el contenido más reciente de Producciones Jazielito. ¡No te lo pierdas!
              </p>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Ver Video
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;