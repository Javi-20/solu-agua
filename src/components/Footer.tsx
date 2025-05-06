import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">SoluAgua</span>
            </div>
            <p className="mb-4 text-blue-200">
              Expertos en soluciones de plomería para hogares y empresas. Servicio confiable y profesional desde 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-200 hover:text-white transition-colors">Galería</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Av. Siempreviva 123, Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(55) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@soluagua.com" className="hover:underline">info@soluagua.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Lunes - Viernes</p>
                  <p className="text-blue-200">8:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábados</p>
                  <p className="text-blue-200">9:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Emergencias</p>
                  <p className="text-blue-200">24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {currentYear} SoluAgua. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;