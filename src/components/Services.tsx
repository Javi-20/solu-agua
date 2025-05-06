import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, ArrowRight, Droplet, Home, Building, ShowerHead, PenTool as Tool, Pipette as PipeValve } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="card-3d bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
    >
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600 animate-float">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-800 mb-3 gradient-text">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
      >
        Ver detalles
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 gradient-text">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de plomería para hogares y empresas con 
            la mejor calidad y garantía.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Home className="h-8 w-8" />}
            title="Plomería Residencial"
            description="Reparación y mantenimiento de tuberías, grifos, inodoros, y sistemas de drenaje para su hogar."
            delay={0.1}
          />
          
          <ServiceCard 
            icon={<Building className="h-8 w-8" />}
            title="Plomería Comercial"
            description="Soluciones para empresas, restaurantes, hoteles y edificios comerciales con servicio rápido y eficiente."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={<ShowerHead className="h-8 w-8" />}
            title="Instalación de Baños"
            description="Instalación y renovación de baños completos, incluyendo sanitarios, duchas, bañeras y lavamanos."
            delay={0.3}
          />
          
          <ServiceCard 
            icon={<Droplet className="h-8 w-8" />}
            title="Detección de Fugas"
            description="Identificación y reparación de fugas de agua visibles y ocultas utilizando tecnología avanzada."
            delay={0.4}
          />
          
          <ServiceCard 
            icon={<Tool className="h-8 w-8" />}
            title="Reparaciones de Emergencia"
            description="Servicio de emergencia disponible 24/7 para solucionar problemas urgentes de plomería."
            delay={0.5}
          />
          
          <ServiceCard 
            icon={<PipeValve className="h-8 w-8" />}
            title="Limpieza de Drenajes"
            description="Desbloqueo y limpieza profesional de tuberías y drenajes obstruidos en baños y cocinas."
            delay={0.6}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link 
            to="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all hover:scale-105 inline-flex items-center hover:shadow-lg"
          >
            Ver todos los servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;