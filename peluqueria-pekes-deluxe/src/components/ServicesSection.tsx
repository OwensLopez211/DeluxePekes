"use client";

import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      bgColor: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      title: "Tu cita, a un clic de distancia",
      description: "Evita las largas esperas y asegúrate un lugar. Sistema de reservas online disponible 24/7."
    },
    {
      id: 2,
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      bgColor: "from-pink-100 to-orange-100",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
      title: "Servicio personalizado y divertido",
      description: "Nuestros estilistas están listos para hacer sonreír a tus hijos con técnicas adaptadas para ellos."
    },
    {
      id: 3,
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 110 7H9.5v-2",
      bgColor: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      title: "Cortes que encantan a los niños",
      description: "Cada visita es una experiencia memorable. Creamos looks únicos que reflejan la personalidad de cada pequeño."
    }
  ];

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative py-8 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200 mb-4">
            Reserva
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-3 leading-tight">
            Asegura un corte divertido y{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              sin esperas
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Peluquería Pekes Deluxe, entendemos que cada corte de cabello es una aventura.{" "}
            <span className="text-purple-600 font-semibold">Reserva tu hora</span> y disfruta de un ambiente alegre y seguro para tus pequeños.
          </p>
        </div>

        {/* Mobile Carousel (< sm) */}
        <div className="sm:hidden mb-8">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {services.map((service) => (
              <div 
                key={service.id}
                className="flex-shrink-0 w-full snap-center text-center px-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border ${service.borderColor}`}>
                  <svg className={`w-10 h-10 ${service.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-purple-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Grid (>= sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8">
          {services.map((service, index) => (
            <div key={service.id} className={`text-center ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border ${service.borderColor}`}>
                <svg className={`w-8 h-8 lg:w-10 lg:h-10 ${service.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  {service.id === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7h.01M16 17h.01M12 16h.01" />
                  )}
                </svg>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
          <a 
            href="https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block text-center"
          >
            <span className="relative z-10 text-sm lg:text-base">Reserva Ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          {/* <button className="group flex items-center justify-center w-full sm:w-auto text-gray-600 hover:text-purple-600 font-semibold px-4 lg:px-6 py-3 lg:py-4 transition-all duration-300 text-sm lg:text-base">
            Contáctanos
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}