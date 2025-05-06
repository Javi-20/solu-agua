import React from 'react';
import { Wrench, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface ServiceItemProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, features, image }) => (
  <div className="mb-16 border-b border-gray-200 pb-12 last:border-0">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <h4 className="font-bold text-gray-800 mb-3">Nuestros servicios incluyen:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Plomería Residencial",
      description: "Ofrecemos servicios completos de plomería para hogares, desde reparaciones simples hasta instalaciones complejas. Nuestros técnicos están capacitados para resolver cualquier problema de plomería en su hogar con eficiencia y calidad.",
      features: [
        "Reparación de fugas y goteos",
        "Instalación y reparación de grifos y llaves",
        "Reparación e instalación de inodoros",
        "Desbloqueo de tuberías y drenajes",
        "Instalación de calentadores de agua",
        "Mantenimiento preventivo"
      ],
      image: "https://images.pexels.com/photos/6444067/pexels-photo-6444067.jpeg"
    },
    {
      title: "Plomería Comercial",
      description: "Entendemos que los problemas de plomería pueden afectar seriamente su negocio. Ofrecemos servicios de plomería comercial para empresas, restaurantes, hoteles y edificios de oficinas con respuesta rápida y soluciones duraderas.",
      features: [
        "Sistemas de plomería para locales comerciales",
        "Reparación de tuberías de alta presión",
        "Mantenimiento preventivo programado",
        "Gestión de sistemas de aguas residuales",
        "Instalación y reparación de bombas",
        "Evaluación y modernización de sistemas"
      ],
      image: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg"
    },
    {
      title: "Instalación de Baños y Cocinas",
      description: "Transformamos sus baños y cocinas con instalaciones de plomería profesionales. Desde la instalación de nuevos accesorios hasta la renovación completa, ofrecemos soluciones personalizadas que combinan funcionalidad y estética.",
      features: [
        "Instalación completa de baños y sanitarios",
        "Renovación de bañeras y duchas",
        "Instalación de fregaderos y grifos de cocina",
        "Instalación de lavavajillas y electrodomésticos",
        "Reubicación de tuberías para remodelaciones",
        "Asesoramiento sobre productos y diseños"
      ],
      image: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg"
    },
    {
      title: "Detección y Reparación de Fugas",
      description: "Utilizamos tecnología avanzada para detectar fugas ocultas sin necesidad de obras invasivas. Nuestro equipo especializado en detección de fugas localiza el problema rápidamente, minimizando daños y costos de reparación.",
      features: [
        "Detección de fugas no invasiva",
        "Localización de fugas en paredes y pisos",
        "Detección de fugas en tuberías subterráneas",
        "Reparación de tuberías sin excavación",
        "Inspección con cámara de tuberías",
        "Evaluación de daños por agua"
      ],
      image: "https://images.pexels.com/photos/5591501/pexels-photo-5591501.jpeg"
    },
    {
      title: "Servicios de Emergencia",
      description: "Los problemas de plomería no esperan, por eso ofrecemos servicios de emergencia disponibles 24 horas al día, 7 días a la semana. Nuestro equipo responde rápidamente para resolver emergencias como fugas, tuberías rotas o inundaciones.",
      features: [
        "Disponibilidad 24/7",
        "Tiempo de respuesta rápido",
        "Reparación de emergencia de tuberías rotas",
        "Solución de inundaciones",
        "Restauración de suministro de agua",
        "Reparación de emergencia de calentadores"
      ],
      image: "https://images.pexels.com/photos/1000639/pexels-photo-1000639.jpeg"
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-blue-100">
              Ofrecemos soluciones profesionales para todas sus necesidades de plomería, tanto para residencias como para negocios.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Wrench className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Servicios Profesionales de Plomería
            </h2>
            <p className="text-xl text-gray-600">
              En SoluAgua, ofrecemos una amplia gama de servicios de plomería para satisfacer todas sus necesidades.
              Nuestros plomeros certificados están equipados con las herramientas y conocimientos necesarios para resolver cualquier problema.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      <CallToAction />
    </div>
  );
};

export default ServicesPage;