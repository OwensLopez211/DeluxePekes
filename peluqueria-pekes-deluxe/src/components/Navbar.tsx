"use client";

import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@/context/NavigationContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { setShowGallery, setShowAbout } = useNavigation();

  const handleNavigation = (href: string) => {
    if (href === "/galeria") {
      setShowGallery(true);
      setShowAbout(false);
    } else if (href === "/about") {
      setShowAbout(true);
      setShowGallery(false);
    } else if (href === "/") {
      setShowGallery(false);
      setShowAbout(false);
    } else {
      // For anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile sidebar after navigation
    handleCloseSidebar();
  };

  const handleOpenSidebar = () => {
    setIsMenuOpen(true);
    setIsSidebarClosing(false);
    setTimeout(() => setIsSidebarVisible(true), 50);
  };

  const handleCloseSidebar = () => {
    setIsSidebarClosing(true);
    setIsSidebarVisible(false);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsSidebarClosing(false);
    }, 300);
  };

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "/galeria" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when mouse leaves the entire navbar area
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as Element | null;
      if (navRef.current && (!relatedTarget || !navRef.current.contains(relatedTarget))) {
        setIsDropdownOpen(false);
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('mouseleave', handleMouseLeave);
      return () => navElement.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        {/* Expanded Navigation Island */}
        <div className={`transition-all duration-700 ease-in-out rounded-full ${
          isScrolled 
            ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl px-6 py-4' 
            : 'px-0 py-0'
        }`}>
          <div className={`flex items-center transition-all duration-700 ease-in-out ${
            isScrolled ? 'justify-between' : 'justify-between'
          }`}>
            {/* Logo - Left Side */}
            <img 
              src="/logo.png" 
              alt="Pekes Deluxe Logo" 
              className={`object-contain transition-all duration-700 ease-in-out rounded-2xl ${
                isScrolled ? 'w-12 h-12' : 'w-32 h-32'
              }`}
            />

            {/* Center Navigation */}
            <div className={`transition-all duration-700 ease-in-out rounded-full ${
              isScrolled 
                ? '' 
                : 'bg-white/20 backdrop-blur-xl px-6 py-3 border border-white/30 shadow-2xl'
            }`}>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-gray-700 hover:text-gray-900 px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/20"
                  >
                    {item.name}
                  </button>
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
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-white/30 py-2 min-w-[160px]">
                      <button onClick={() => handleNavigation("/about")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors">
                        Sobre Nosotros
                      </button>
                      <button onClick={() => handleNavigation("#testimonios")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors">
                        Testimonios
                      </button>
                      <button onClick={() => handleNavigation("#contacto")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors">
                        Contacto
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={isMenuOpen ? handleCloseSidebar : handleOpenSidebar}
                  className="text-gray-700 hover:text-gray-900 p-1"
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

            {/* Reserve Button - Right Side */}
            <div className={`hidden lg:block transition-all duration-700 ease-in-out ${
              isScrolled ? 'opacity-100' : 'opacity-100'
            }`}>
              <a 
                href="https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 inline-block ${
                  isScrolled 
                    ? 'px-4 py-2 text-sm rounded-lg' 
                    : 'px-8 py-3 text-base rounded-xl shadow-xl'
                }`}
              >
                <span className={`transition-all duration-700 ease-in-out ${
                  isScrolled ? 'text-sm' : 'text-base font-semibold'
                }`}>
                  Reservar
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden ${
              isSidebarVisible && !isSidebarClosing ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleCloseSidebar}
          />
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[80vw] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/30 transition-all duration-300 ease-in-out lg:hidden ${
            isSidebarVisible && !isSidebarClosing 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/30">
                <img 
                  src="/logo.png" 
                  alt="Pekes Deluxe Logo" 
                  className="w-12 h-12 object-contain rounded-2xl"
                />
                <button
                  onClick={handleCloseSidebar}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full text-left px-4 py-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                        isSidebarVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isSidebarVisible ? `${(index + 1) * 50}ms` : '0ms'
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  {/* Additional Menu Items */}
                  <button
                    onClick={() => handleNavigation("/about")}
                    className={`w-full text-left px-4 py-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                      isSidebarVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isSidebarVisible ? `${(navItems.length + 1) * 50}ms` : '0ms'
                    }}
                  >
                    Sobre Nosotros
                  </button>
                  
                  <button
                    onClick={() => handleNavigation("#testimonios")}
                    className={`w-full text-left px-4 py-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                      isSidebarVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isSidebarVisible ? `${(navItems.length + 2) * 50}ms` : '0ms'
                    }}
                  >
                    Testimonios
                  </button>
                  
                  <button
                    onClick={() => handleNavigation("#contacto")}
                    className={`w-full text-left px-4 py-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                      isSidebarVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isSidebarVisible ? `${(navItems.length + 3) * 50}ms` : '0ms'
                    }}
                  >
                    Contacto
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200/30">
                <a 
                  href="https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center ${
                    isSidebarVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isSidebarVisible ? `${(navItems.length + 4) * 50}ms` : '0ms'
                  }}
                >
                  Reservar Cita
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}