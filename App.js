import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import RadioPlayer from './components/RadioPlayer';
import YouTubeSection from './components/YouTubeSection';
import MessengerChat from './components/MessengerChat';
import TikTokSection from './components/TikTokSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen font-sans antialiased bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      <div className="relative w-full py-12 flex flex-col md:flex-row items-center justify-between px-8">
        {/* Contenido principal a la izquierda */}
        <div className="relative z-10 text-center md:text-left md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">RadioBlog Jazielito</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Tu espacio para la música, mensajes inspiradores y contenido exclusivo.
          </p>
        </div>
        {/* Logo a la derecha */}
        <div className="relative z-10 flex-shrink-0 md:w-1/3 flex justify-center md:justify-end">
          <div className="w-36 h-36 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 text-sm font-bold border-4 border-purple-600 shadow-lg">
            Tu Logo Aquí
          </div>
        </div>
      </div>

      <LayoutHeader onNavigate={navigateTo} />

      <main className="container mx-auto p-4 md:p-8">
        {currentPage === 'home' && (
          <section className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RadioPlayer />
              </div>
              <div className="lg:col-span-1">
                {/* Aquí iría el carrusel de imágenes */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 h-64 flex items-center justify-center text-gray-400">
                  Carrusel de Imágenes (Próximamente)
                </div>
              </div>
            </div>
            <YouTubeSection />
            <MessengerChat />
            <TikTokSection />
          </section>
        )}

        {currentPage === 'blog' && (
          <section className="py-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Nuestro Blog</h2>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <p className="text-gray-300 text-lg">
                Aquí podrás encontrar artículos, reflexiones y noticias. ¡Próximamente más contenido!
              </p>
              <div className="mt-6 p-4 bg-gray-700 rounded-lg text-gray-200">
                <h3 className="text-2xl font-semibold mb-2">Artículo de Ejemplo</h3>
                <p>Este es un espacio para compartir ideas y conectar con nuestra comunidad. Mantente al tanto de las novedades.</p>
                <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors">Leer más</button>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="py-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Contáctanos</h2>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-xl mx-auto">
              <p className="text-gray-300 text-lg mb-6 text-center">
                Envíanos tus dudas, sugerencias o saludos.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu.correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-purple-700 transition-colors shadow-md"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('¡Mensaje enviado! (Funcionalidad de envío real no implementada en este demo)');
                  }}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 p-6 text-center mt-12">
        <p className="text-lg">&copy; {new Date().getFullYear()} RadioBlog Jazielito. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com/Pr.jazielito.2025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          <a href="https://www.tiktok.com/@producciones_jazielito?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          {/* Agrega más enlaces a redes sociales si tienes */}
        </div>
      </footer>
    </div>
  );
};

export default App;