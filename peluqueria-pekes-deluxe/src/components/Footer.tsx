export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Cortes Infantiles", href: "#servicios" },
      { name: "Peinados Creativos", href: "#servicios" },
      { name: "Fiestas de Cumpleaños", href: "#servicios" },
      { name: "Eventos Especiales", href: "#servicios" }
    ],
    informacion: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Galería", href: "#galeria" },
      { name: "Testimonios", href: "#testimonios" },
      { name: "Preguntas Frecuentes", href: "#faq" }
    ],
    contacto: [
      { name: "Reservar Cita", href: "https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe" },
      { name: "Ubicación", href: "#contacto" },
      { name: "Teléfono", href: "tel:+56932308100" },
      { name: "WhatsApp", href: "https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20Peluquer%C3%ADa%20Pekes%20Deluxe" }
    ]
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.297C4.365 14.795 3.9 13.644 3.9 12.347c0-1.297.465-2.448 1.233-3.316.768-.867 1.919-1.297 3.316-1.297 1.297 0 2.448.43 3.316 1.297.867.868 1.297 2.019 1.297 3.316 0 1.297-.43 2.448-1.297 3.315-.868.808-2.019 1.323-3.316 1.323zm7.718-9.528h-2.316V5.11h2.316v2.35z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-8 lg:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img 
              src="/logo.png" 
              alt="Pekes Deluxe Logo" 
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain mb-4 mx-auto sm:mx-0"
            />
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              La mejor experiencia de peluquería para niños. Cortes divertidos en un ambiente seguro y alegre.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-600 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 text-sm lg:text-base transition-colors duration-200 block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Información</h3>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 text-sm lg:text-base transition-colors duration-200 block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Contacto</h3>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.href.includes('wa.me') || link.href.includes('tel:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-gray-600 hover:text-purple-600 text-sm lg:text-base transition-colors duration-200 block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 pt-6 lg:pt-8 flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
          <p className="text-gray-500 text-sm lg:text-base text-center lg:text-left">
            © {currentYear} Pekes Deluxe. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm lg:text-base">
            <a href="#privacy" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-center">
              Política de Privacidad
            </a>
            <a href="#terms" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-center">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}