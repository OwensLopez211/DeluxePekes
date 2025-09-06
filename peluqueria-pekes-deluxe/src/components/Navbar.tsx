"use client";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
  ];

  // Close dropdown when mouse leaves the entire navbar area
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.relatedTarget as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('mouseleave', handleMouseLeave);
      return () => navElement.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  return (
    <nav ref={navRef} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-xl rounded-full px-6 py-3 border border-white/30 shadow-2xl">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="ml-2 text-sm font-bold text-gray-800">Pekes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/20"
              >
                {item.name}
              </a>
            ))}
            
            {/* Más Opciones */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-1.5 text-sm font-medium flex items-center transition-all duration-200 rounded-lg hover:bg-white/20"
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Más
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
              Reservar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white p-1"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}