export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Cortes Infantiles", href: "#servicios" },
      { name: "Peinados Creativos", href: "#servicios" }
    ],
    informacion: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Galería", href: "#galeria" },
      { name: "Testimonios", href: "#testimonios" }
    ],
    contacto: [
      { name: "Reservar Cita", href: "https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Peluquer%C3%ADa%20Pekes%20Deluxe" },
      { name: "Teléfono", href: "tel:+56932308100" },
      { name: "WhatsApp", href: "https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20Peluquer%C3%ADa%20Pekes%20Deluxe" },
      { name: "Av. Pablo Neruda 01865 local 4", href: "https://maps.google.com/?q=Av.+Pablo+Neruda+01865+local+4" }
    ]
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/peluqueriapekesdeluxe/", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/56932308100?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20Peluquer%C3%ADa%20Pekes%20Deluxe", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.405 3.488"/>
        </svg>
      )
    },
    { 
      name: "Google Maps", 
      href: "https://maps.google.com/?q=Av.+Pablo+Neruda+01865+local+4", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
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
                  target="_blank"
                  rel="noopener noreferrer"
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