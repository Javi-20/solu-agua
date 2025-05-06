import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.pexels.com/photos/6447223/pexels-photo-6447223.jpeg" 
          alt="Profesional de plomería trabajando" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="md:max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fadeIn">
            Soluciones de plomería profesionales y confiables
          </h1>
          <p className="text-xl text-blue-100 mb-8 drop-shadow-md animate-fadeInUp">
            Resolvemos todos sus problemas de plomería con rapidez y calidad. 
            Servicio garantizado por técnicos certificados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-200">
            <Link 
              to="/contact" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg inline-flex items-center justify-center"
            >
              Solicitar Servicio
            </Link>
            
            <a 
              href="tel:5512345678" 
              className="bg-blue-500 bg-opacity-80 hover:bg-opacity-100 text-white px-6 py-3 rounded-lg font-medium text-lg transition-all shadow-lg inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              (55) 1234-5678
            </a>
          </div>
          
          <div className="mt-12 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg animate-fadeInUp animation-delay-400">
            <p className="text-red-600 font-bold">¡SERVICIO DE EMERGENCIA 24/7!</p>
            <p className="text-blue-800">
              Atendemos emergencias a cualquier hora del día. ¡Llámenos ahora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;