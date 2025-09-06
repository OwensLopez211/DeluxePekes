"use client";

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "La experiencia en Peluquería Pekes Deluxe fue increíble. Mi hijo salió feliz y con un corte espectacular!",
      author: "María González",
      role: "Madre, Temuco",
      avatar: "MG",
      rating: 5
    },
    {
      id: 2,
      text: "Los mejores en cortes para niños. Mi pequeña se sintió como una princesa con su nuevo peinado.",
      author: "Ana Martínez",
      role: "Madre, Santiago",
      avatar: "AM",
      rating: 5
    },
    {
      id: 3,
      text: "Ambiente súper divertido y seguro. Mi hijo ya quiere volver para su próximo corte.",
      author: "Carlos Rodríguez",
      role: "Padre, Valparaíso",
      avatar: "CR",
      rating: 5
    },
    {
      id: 4,
      text: "El personal es increíble con los niños. Lograron que mi hijo tímido se sintiera cómodo desde el primer momento.",
      author: "Patricia Silva",
      role: "Madre, Concepción",
      avatar: "PS",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (!isMounted) return null;

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Testimonial Card */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 p-8 lg:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                
                {/* Author Details */}
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>

                {/* Webflow Logo Placeholder */}
                <div className="ml-4">
                  <div className="text-xs font-semibold text-gray-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Verificado
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}