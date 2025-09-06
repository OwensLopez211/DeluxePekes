"use client";

import { useState, useEffect, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Cortes profesionales diseñados especialmente para los más pequeños.",
      description: "En Peluquería Pekes Deluxe, cada corte es una experiencia divertida y segura.",
    },
    {
      id: 2,
      title: "Ambiente acogedor donde tu hijo se sentirá como en casa.",
      description: "Creamos un espacio colorido y alegre donde los niños disfrutan de su visita al máximo.",
    },
    {
      id: 3,
      title: "Peinados creativos que harán brillar a tu pequeño en cualquier ocasión.",
      description: "Nuestros estilistas están listos para dar vida a las ideas más divertidas.",
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
    <section 
      ref={sectionRef}
      id="servicios" 
      className={`py-12 lg:py-32 relative transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1200 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Descubre nuestros servicios especiales
            <span className="block">para hacer feliz a tu pequeño.</span>
          </h2>
        </div>

        {/* Mobile Carousel (< sm) */}
        <div className={`sm:hidden mb-8 transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-15'
        }`}>
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                {/* Image Placeholder */}
                <div className="relative mb-6">
                  <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center shadow-lg border border-gray-100">
                    <div className="bg-gray-300 rounded-xl p-4">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Grid (>= sm) */}
        <div className="hidden sm:grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group transform transition-all duration-1000 ${
                index === 0 ? 'delay-600' : index === 1 ? 'delay-800' : 'delay-1000'
              } ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
            >
              {/* Image Placeholder */}
              <div className="relative mb-8 group-hover:transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center shadow-lg border border-gray-100">
                  <div className="bg-gray-300 rounded-xl p-4">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
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
      </div>
    </section>
  );
}