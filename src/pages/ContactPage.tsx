import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contáctenos</h1>
            <p className="text-xl text-blue-100">
              Estamos aquí para ayudarle con todos sus problemas de plomería. 
              Contáctenos hoy mismo para programar un servicio o solicitar una cotización.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactForm />
              
              <div>
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Información de Contacto</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800">Dirección</p>
                        <p className="text-gray-600">Av. Siempreviva 123, Ciudad de México, CDMX</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800">Teléfono</p>
                        <p className="text-gray-600">(55) 1234-5678</p>
                        <p className="text-gray-600">(55) 8765-4321 (Emergencias)</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800">Email</p>
                        <a href="mailto:info@soluagua.com" className="text-blue-600 hover:underline">
                          info@soluagua.com
                        </a>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800">Horario de Atención</p>
                        <p className="text-gray-600">Lunes - Viernes: 8:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Servicio de Emergencia: 24/7</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-700 text-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Preguntas Frecuentes</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">¿Cuál es el tiempo de respuesta para emergencias?</p>
                      <p className="text-blue-100">Para emergencias, nuestro tiempo de respuesta es de 30-60 minutos en la mayoría de las áreas.</p>
                    </li>
                    <li>
                      <p className="font-medium">¿Ofrecen presupuestos gratuitos?</p>
                      <p className="text-blue-100">Sí, proporcionamos presupuestos gratuitos para todos nuestros servicios.</p>
                    </li>
                    <li>
                      <p className="font-medium">¿Qué áreas cubren sus servicios?</p>
                      <p className="text-blue-100">Cubrimos toda la Ciudad de México y áreas metropolitanas.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Nuestra Ubicación</h3>
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120545.72417091939!2d-99.20260364179685!3d19.25982298696481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02b1b3529e97%3A0xce06aa04d41f9634!2sAlcald%C3%ADa%20Coyoac%C3%A1n%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1662500623563!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de SoluAgua"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;