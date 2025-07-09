import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula el envío de correo. En un entorno real, usarías un servicio de backend.
    const subject = encodeURIComponent('Nueva Suscripción a RadioBlog Jazielito');
    const body = encodeURIComponent(`El usuario con correo ${email} se ha suscrito a tu blog.`);
    window.location.href = `mailto:carlosdavidhuamanrojas@gmail.com?subject=${subject}&body=${body}`;
    setEmail('');
    alert('¡Gracias por suscribirte! Revisa tu correo para confirmar.');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">¡Suscríbete a nuestro boletín!</h3>
      <p className="text-gray-300 text-center mb-6">Recibe las últimas noticias y actualizaciones directamente en tu correo.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;