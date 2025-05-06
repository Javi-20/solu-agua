import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="bg-blue-100 rounded-full p-3 mr-4 text-blue-600 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5591458/pexels-photo-5591458.jpeg" 
                alt="Equipo de plomeros de SoluAgua" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">+15 años</p>
                <p>de experiencia</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Sobre SoluAgua
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Somos una empresa líder en servicios de plomería con más de 15 años de experiencia brindando soluciones de calidad en toda la región.
            </p>
            <p className="text-gray-600 mb-8">
              En SoluAgua nos dedicamos a resolver todo tipo de problemas de plomería, desde pequeñas reparaciones hasta grandes instalaciones comerciales. Nuestro equipo de técnicos certificados está altamente capacitado para ofrecer un servicio excepcional y garantizado. Trabajamos con los mejores materiales del mercado para asegurar durabilidad y eficiencia en cada proyecto.
            </p>
            
            <div className="space-y-6">
              <Feature 
                icon={<Shield className="h-6 w-6" />}
                title="Servicio Garantizado"
                description="Ofrecemos garantía en todos nuestros trabajos para su tranquilidad."
              />
              
              <Feature 
                icon={<Award className="h-6 w-6" />}
                title="Técnicos Certificados"
                description="Nuestro equipo cuenta con todas las certificaciones necesarias."
              />
              
              <Feature 
                icon={<Clock className="h-6 w-6" />}
                title="Atención Rápida"
                description="Respondemos a sus necesidades en el menor tiempo posible."
              />
              
              <Feature 
                icon={<Users className="h-6 w-6" />}
                title="Personal Profesional"
                description="Técnicos uniformados, puntuales y respetuosos con su propiedad."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;