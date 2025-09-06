"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[20vh]">
      <div className="container mx-auto px-4 py-20 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200">
              Experiencia Premium para Niños
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Cortes divertidos
              </span>
              <span className="block text-gray-900">para tus pequeños</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                en Pekes Deluxe
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
              Transformamos cada visita en una aventura mágica. Nuestros estilistas especializados crean un ambiente 
              <span className="text-purple-600 font-semibold"> alegre y seguro</span> donde los niños se sienten como verdaderos protagonistas.
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">
                  Reservar Ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-700 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm hover:shadow-lg">
                Contáctanos
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main image container */}
              <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl aspect-[4/3] flex items-center justify-center shadow-inner border border-purple-100">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-purple-700 font-bold text-lg">¡Próximamente!</p>
                      <p className="text-gray-600 text-sm">Galería de nuestros pequeños clientes</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}