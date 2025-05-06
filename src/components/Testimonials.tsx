import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Propietario de casa',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 5,
    text: 'Excelente servicio. Los técnicos llegaron puntualmente, identificaron rápidamente el problema y lo resolvieron de manera profesional. Definitivamente los recomendaría.'
  },
  {
    id: 2,
    name: 'María González',
    role: 'Gerente de Restaurante',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 5,
    text: 'SoluAgua nos ha ayudado con varios problemas de plomería en nuestro restaurante. Siempre responden rápidamente y su trabajo es de alta calidad. Un servicio confiable.'
  },
  {
    id: 3,
    name: 'Javier Méndez',
    role: 'Administrador de edificio',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4,
    text: 'Hemos contratado a SoluAgua para el mantenimiento general de plomería en nuestro edificio de apartamentos. Son profesionales, puntuales y muy eficientes.'
  },
  {
    id: 4,
    name: 'Laura Torres',
    role: 'Propietaria de casa',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 5,
    text: 'Tuve una emergencia por una fuga de agua y SoluAgua respondió inmediatamente. Llegaron en menos de una hora y solucionaron el problema. ¡Muy agradecida con su servicio!'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experiencias reales de clientes satisfechos con nuestros servicios de plomería.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="testimonial-slider"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-bold text-xl">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex text-yellow-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="h-4 w-4 fill-current" 
                                fill={i < testimonial.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-white' : 'bg-blue-300'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-blue-800 p-2 rounded-full text-white opacity-80 hover:opacity-100 focus:outline-none z-10"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-blue-800 p-2 rounded-full text-white opacity-80 hover:opacity-100 focus:outline-none z-10"
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;