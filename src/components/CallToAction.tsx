import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesita un plomero profesional?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            No deje que un pequeño problema de plomería se convierta en un gran desastre. 
            Nuestros expertos están listos para ayudarle. ¡Contáctenos hoy mismo!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:5512345678" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora
            </a>
            <Link 
              to="/contact" 
              className="bg-blue-500 bg-opacity-30 hover:bg-opacity-50 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors border border-white border-opacity-30 flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Programar Servicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;