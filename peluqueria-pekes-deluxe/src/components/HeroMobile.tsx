"use client";

import { useState, useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function HeroMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { setShowGallery, setShowAbout } = useNavigation();

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGalleryClick = () => {
    setShowGallery(true);
    setShowAbout(false);
  };

  return (
    <section className="relative lg:hidden pt-40 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="container mx-auto px-4 pb-8">
        <div className="space-y-8">
          
          {/* Content Section */}
          <div className={`space-y-8 text-center transform transition-all duration-1000 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200">
              Experiencia Premium para Niños
            </div>

            {/* Image Section */}
            <div className={`relative transform transition-all duration-1000 delay-200 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative max-w-sm mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full opacity-70 animate-pulse animation-delay-2000"></div>
                
                {/* Main image container */}
                <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-3xl p-4 shadow-xl border border-white/50 backdrop-blur-sm overflow-hidden">
                  <div className="bg-gradient-to-br from-white/90 to-purple-50/90 rounded-2xl aspect-[4/3] flex items-center justify-center shadow-inner border border-purple-100 relative">
                    
                    {/* Placeholder Scene */}
                    <div className="text-center space-y-4 p-4">
                      {/* Chair illustration */}
                      <div className="relative mx-auto w-24 h-24 mb-3">
                        <div className="w-24 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl relative shadow-lg">
                          {/* Chair back */}
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-t-2xl"></div>
                          {/* Chair details */}
                          <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"></div>
                          
                          {/* Child silhouette */}
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8">
                            <div className="w-6 h-6 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full mx-auto mb-1"></div>
                            <div className="w-4 h-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded mx-auto"></div>
                          </div>
                        </div>
                        
                        {/* Scissors floating */}
                        <div className="absolute -right-1 top-1 animate-bounce animation-delay-1000">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 110 7H9.5v-2" />
                          </svg>
                        </div>
                        
                        {/* Hearts floating */}
                        <div className="absolute -left-2 top-4 animate-pulse">
                          <svg className="w-3 h-3 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        
                        {/* Stars */}
                        <div className="absolute -right-3 -bottom-1 animate-ping animation-delay-3000">
                          <svg className="w-2 h-2 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-purple-700 font-bold text-sm">Fotos del Cliente</h3>
                        <p className="text-gray-600 text-xs max-w-xs mx-auto leading-relaxed">
                          Aquí irán las fotos reales de la peluquería
                        </p>
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-700 font-medium border border-purple-200">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Placeholder
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Cortes divertidos
              </span>
              <span className="block text-gray-900 mt-2">para tus pequeños</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                en Pekes Deluxe
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed font-medium">
              Transformamos cada visita en una aventura mágica. Nuestros estilistas especializados crean un ambiente 
              <span className="text-purple-600 font-semibold"> alegre y seguro</span> donde los niños se sienten como verdaderos protagonistas.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block text-center"
              >
                <span className="relative z-10">
                  Reservar Ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button 
                onClick={handleGalleryClick}
                className="group border-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-700 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm hover:shadow-lg"
              >
                Ver Galería
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}