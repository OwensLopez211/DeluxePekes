export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200 mb-8">
            Reserva
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Asegura un corte divertido y{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              sin esperas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Peluquería Pekes Deluxe, entendemos que cada corte de cabello es una aventura.{" "}
            <span className="text-purple-600 font-semibold">Reserva tu hora</span> y disfruta de un ambiente alegre y seguro para tus pequeños.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Service 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-purple-200">
              <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 4.5 15.5 8zM12 13.5l3.5 2.5-7 0L12 13.5z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tu cita, a un clic de distancia
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Evita las largas esperas y asegúrate un lugar. Sistema de reservas online disponible 24/7.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-pink-200">
              <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Disfruta de un servicio personalizado y divertido
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Nuestros estilistas están listos para hacer sonreír a tus hijos con técnicas adaptadas para ellos.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-blue-200">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7l3-8 3 8h-2v8h-2v-8z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cortes y peinados que encantan a los niños
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Cada visita es una experiencia memorable. Creamos looks únicos que reflejan la personalidad de cada pequeño.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Reserva</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group flex items-center text-gray-600 hover:text-purple-600 font-semibold px-6 py-4 transition-all duration-300">
            Contáctanos
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}