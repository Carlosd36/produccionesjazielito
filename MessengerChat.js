import React from 'react';

const MessengerChat = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Envíanos un Mensaje</h2>
      <div className="text-center">
        <p className="text-gray-300 text-lg mb-4">¿Tienes alguna pregunta o comentario? ¡Chatea con nosotros en Messenger!</p>
        <a href="https://www.facebook.com/Pr.jazielito.2025" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
          Abrir Chat en Messenger
        </a>
      </div>
    </div>
  );
};

export default MessengerChat;