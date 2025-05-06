import React from 'react';
import { Shield, Award, Users, Clock, CheckSquare } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-blue-100">
              Conozca la historia de SoluAgua y nuestro compromiso con la excelencia en servicios de plomería.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-4">
                SoluAgua fue fundada en 2005 por un grupo de plomeros experimentados con la visión de proporcionar servicios de plomería de primera calidad con un enfoque en la satisfacción del cliente y la excelencia técnica.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de los años, hemos crecido de un pequeño equipo a una empresa de plomería completa, sirviendo a miles de clientes residenciales y comerciales en toda la región. Nuestro crecimiento se ha basado en nuestra reputación de confiabilidad, profesionalismo y servicio excepcional.
              </p>
              <p className="text-gray-600">
                Hoy, SoluAgua es reconocida como líder en la industria de la plomería, constantemente actualizando nuestras técnicas y herramientas para ofrecer las soluciones más eficientes y actualizadas a nuestros clientes.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8544788/pexels-photo-8544788.jpeg" 
                  alt="Equipo de SoluAgua" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">+15 años</p>
                  <p>de experiencia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Nuestra Misión y Visión
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Misión</h3>
                <p className="text-gray-600">
                  Proporcionar servicios de plomería de alta calidad que excedan las expectativas de nuestros clientes, utilizando las mejores prácticas, tecnologías innovadoras y un equipo altamente capacitado y comprometido con la excelencia.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Visión</h3>
                <p className="text-gray-600">
                  Ser la empresa de plomería más reconocida y respetada por nuestra integridad, calidad y servicio excepcional, estableciendo el estándar de excelencia en la industria y expandiendo continuamente nuestros servicios para satisfacer las necesidades cambiantes de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
              Por Qué Elegirnos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Servicio Garantizado</h3>
                <p className="text-gray-600">
                  Todos nuestros trabajos están garantizados. Si no está satisfecho, volveremos a solucionarlo sin costo adicional.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Técnicos Certificados</h3>
                <p className="text-gray-600">
                  Nuestros plomeros están certificados y reciben capacitación continua para mantenerse actualizados con las últimas técnicas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Respuesta Rápida</h3>
                <p className="text-gray-600">
                  Entendemos que los problemas de plomería no pueden esperar. Respondemos rápidamente a todas las llamadas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Equipo Profesional</h3>
                <p className="text-gray-600">
                  Nuestro personal es profesional, uniformado y siempre respetuoso con usted y su propiedad.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <CheckSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Precios Transparentes</h3>
                <p className="text-gray-600">
                  Sin sorpresas ni cargos ocultos. Siempre proporcionamos presupuestos claros antes de comenzar cualquier trabajo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Calidad Garantizada</h3>
                <p className="text-gray-600">
                  Utilizamos materiales y productos de la más alta calidad para asegurar soluciones duraderas y eficientes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              En SoluAgua, nuestro equipo de plomeros certificados y personal de apoyo están dedicados a proporcionar un servicio excepcional. Con años de experiencia en la industria, nuestros técnicos pueden abordar cualquier problema de plomería con confianza y profesionalismo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <img 
                  src="https://images.pexels.com/photos/8473972/pexels-photo-8473972.jpeg" 
                  alt="Miembro del equipo" 
                  className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
                />
                <h3 className="font-bold text-blue-800 text-lg">Carlos Martínez</h3>
                <p className="text-gray-600">Director General</p>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/8473964/pexels-photo-8473964.jpeg" 
                  alt="Miembro del equipo" 
                  className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
                />
                <h3 className="font-bold text-blue-800 text-lg">Ana López</h3>
                <p className="text-gray-600">Supervisora de Operaciones</p>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg" 
                  alt="Miembro del equipo" 
                  className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
                />
                <h3 className="font-bold text-blue-800 text-lg">Roberto Sánchez</h3>
                <p className="text-gray-600">Técnico Senior</p>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/8942564/pexels-photo-8942564.jpeg" 
                  alt="Miembro del equipo" 
                  className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
                />
                <h3 className="font-bold text-blue-800 text-lg">Laura Torres</h3>
                <p className="text-gray-600">Atención al Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default AboutPage;