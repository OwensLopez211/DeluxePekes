"use client";

import { useState, useEffect } from 'react';

interface GalleryProps {
  onClose: () => void;
}

export default function Gallery({ onClose }: GalleryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Corte Creativo Niña",
      category: "Cortes",
      description: "Estilo moderno con toques divertidos"
    },
    {
      id: 2,
      title: "Peinado para Evento",
      category: "Peinados",
      description: "Perfecto para ocasiones especiales"
    },
    {
      id: 3,
      title: "Corte Clásico Niño",
      category: "Cortes",
      description: "Elegante y cómodo para el día a día"
    },
    {
      id: 4,
      title: "Trenzas Coloridas",
      category: "Peinados",
      description: "Diversión y color en cada detalle"
    },
    {
      id: 5,
      title: "Estilo Moderno",
      category: "Cortes",
      description: "Tendencia actual adaptada para niños"
    },
    {
      id: 6,
      title: "Peinado Festivo",
      category: "Peinados",
      description: "Ideal para celebraciones especiales"
    },
    {
      id: 7,
      title: "Corte Divertido",
      category: "Cortes",
      description: "Personalidad única en cada corte"
    },
    {
      id: 8,
      title: "Estilo Natural",
      category: "Peinados",
      description: "Belleza natural realzada"
    },
    {
      id: 9,
      title: "Corte Juvenil",
      category: "Cortes",
      description: "Para los más grandes de la casa"
    }
  ];

  const categories = ["Todos", "Cortes", "Peinados"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
        <div className="container mx-auto px-4 mb-12">
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-700 ${
            isMounted && isVisible && !isClosing 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-200/50">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Nuestro trabajo
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Galería
              </span>
              <span className="block text-gray-900">de Transformaciones</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre los increíbles resultados de nuestro trabajo. Cada corte cuenta una historia única.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-12">
          <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex bg-white/20 backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transform transition-all duration-700 ${
                  isMounted && isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMounted && isVisible ? `${(index + 2) * 100}ms` : '0ms'
                }}
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    {/* Photo placeholder icon */}
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 text-sm font-medium">📸 Foto del Cliente</p>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        item.category === 'Cortes' 
                          ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                          : 'bg-pink-100 text-pink-700 border border-pink-200'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mx-auto">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Photo Notice */}
        <div className="container mx-auto px-4 mt-16">
          <div className={`max-w-2xl mx-auto text-center transform transition-all duration-1000 delay-500 ${isMounted && isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Galería en Construcción</h3>
              <p className="text-gray-600 leading-relaxed">
                Esta sección se llenará con las fotos reales de los trabajos realizados en la peluquería, 
                proporcionadas por el cliente para mostrar la calidad de sus servicios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}