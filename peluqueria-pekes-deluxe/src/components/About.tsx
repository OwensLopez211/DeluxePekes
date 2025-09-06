"use client";

import { useState, useEffect } from 'react';

interface AboutProps {
  onClose: () => void;
}

export default function About({ onClose }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-y-auto transition-all duration-500 ease-in-out ${
      isVisible && !isClosing 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    }`}>
      {/* Close Button */}
      <button
        onClick={handleClose}
        className={`fixed top-6 right-6 z-50 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white/30 transition-all duration-300 ${
          isVisible && !isClosing
            ? 'opacity-100 translate-y-0 rotate-0'
            : 'opacity-0 translate-y-4 rotate-90'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="pt-32 pb-16">
        {/* Page Header */}
        <div className="container mx-auto px-4 mb-16">
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-700 ${
            isMounted && isVisible && !isClosing 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-200/50">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Conoce nuestro equipo
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Sobre
              </span>
              <span className="block text-gray-900">Nosotros</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo especializado en crear experiencias únicas para los más pequeños de la casa.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Our Story Section */}
            <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Nuestra Historia
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    En Peluquería Pekes Deluxe nació con la misión de transformar la experiencia del corte de cabello 
                    en una aventura divertida y memorable para los niños. Entendemos que cada pequeño tiene su 
                    personalidad única y merece un trato especial.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nuestro equipo de estilistas especializados combina técnica profesional con creatividad, 
                    creando un ambiente seguro y acogedor donde los niños se sienten cómodos y felices.
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-3xl p-8 shadow-2xl border border-white/50">
                    <div className="bg-gradient-to-br from-white/90 to-purple-50/90 rounded-2xl aspect-[4/3] flex items-center justify-center shadow-inner border border-purple-100">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-sm font-medium">📸 Foto del equipo</p>
                        <p className="text-gray-400 text-xs mt-1">Proporcionada por el cliente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Nuestros Valores
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Los principios que guían cada uno de nuestros servicios
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cuidado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada niño recibe atención personalizada en un ambiente seguro y cariñoso.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 110 7H9.5v-2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Creatividad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transformamos ideas en peinados únicos que reflejan la personalidad de cada pequeño.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diversión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Convertimos cada visita en una experiencia alegre y memorable para toda la familia.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Nuestro Equipo
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Especialistas dedicados a hacer felices a tus pequeños
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member Placeholders */}
                {[1, 2, 3].map((member) => (
                  <div key={member} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <p className="text-gray-500 text-xs">📸 Foto del estilista</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Estilista {member}</h3>
                    <p className="text-purple-600 font-medium mb-3">Especialista en cortes infantiles</p>
                    <p className="text-gray-600 text-sm">
                      Información del estilista proporcionada por el cliente.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className={`text-center transform transition-all duration-1000 delay-900 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  ¿Listos para una nueva aventura?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Reserva una cita y descubre por qué somos la elección favorita de las familias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <span className="flex items-center gap-2">
                      Reservar Cita
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  
                  <button className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200">
                    Contáctanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}