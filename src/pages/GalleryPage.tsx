import React, { useState } from 'react';
import { X } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Baños
  {
    id: 1,
    src: 'https://images.pexels.com/photos/6000184/pexels-photo-6000184.jpeg',
    alt: 'Instalación de lavabo moderno',
    category: 'baños'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/4108028/pexels-photo-4108028.jpeg',
    alt: 'Renovación de ducha',
    category: 'baños'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/7061072/pexels-photo-7061072.jpeg',
    alt: 'Baño completo renovado',
    category: 'baños'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg',
    alt: 'Instalación de bañera',
    category: 'baños'
  },
  
  // Cocinas
  {
    id: 5,
    src: 'https://images.pexels.com/photos/5824478/pexels-photo-5824478.jpeg',
    alt: 'Instalación de fregadero de cocina',
    category: 'cocinas'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5824542/pexels-photo-5824542.jpeg',
    alt: 'Plomería de cocina',
    category: 'cocinas'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/5825602/pexels-photo-5825602.jpeg',
    alt: 'Conexión de lavavajillas',
    category: 'cocinas'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/8134649/pexels-photo-8134649.jpeg',
    alt: 'Renovación completa de cocina',
    category: 'cocinas'
  },
  
  // Reparaciones
  {
    id: 9,
    src: 'https://images.pexels.com/photos/6447177/pexels-photo-6447177.jpeg',
    alt: 'Reparación de tubería',
    category: 'reparaciones'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/5591501/pexels-photo-5591501.jpeg',
    alt: 'Detección de fugas',
    category: 'reparaciones'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/6444050/pexels-photo-6444050.jpeg',
    alt: 'Mantenimiento preventivo',
    category: 'reparaciones'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/6447223/pexels-photo-6447223.jpeg',
    alt: 'Reparación de emergencia',
    category: 'reparaciones'
  },
  
  // Instalaciones
  {
    id: 13,
    src: 'https://images.pexels.com/photos/6444071/pexels-photo-6444071.jpeg',
    alt: 'Instalación de calentador',
    category: 'instalaciones'
  },
  {
    id: 14,
    src: 'https://images.pexels.com/photos/6489094/pexels-photo-6489094.jpeg',
    alt: 'Sistema de filtración de agua',
    category: 'instalaciones'
  },
  {
    id: 15,
    src: 'https://images.pexels.com/photos/6444078/pexels-photo-6444078.jpeg',
    alt: 'Instalación de bombas',
    category: 'instalaciones'
  },
  {
    id: 16,
    src: 'https://images.pexels.com/photos/5824564/pexels-photo-5824564.jpeg',
    alt: 'Sistema de tuberías nuevas',
    category: 'instalaciones'
  }
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('todos');
  
  const filteredImages = filter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Galería de Proyectos</h1>
            <p className="text-xl text-blue-100">
              Explore nuestra colección de trabajos recientes para ver ejemplos de nuestra calidad y experiencia.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Nuestros Trabajos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cada proyecto que realizamos refleja nuestro compromiso con la calidad y la atención al detalle.
              Vea ejemplos de nuestros servicios de plomería en hogares y negocios.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setFilter('todos')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === 'todos' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Todos
              </button>
              <button 
                onClick={() => setFilter('baños')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === 'baños' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Baños
              </button>
              <button 
                onClick={() => setFilter('cocinas')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === 'cocinas' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Cocinas
              </button>
              <button 
                onClick={() => setFilter('reparaciones')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === 'reparaciones' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Reparaciones
              </button>
              <button 
                onClick={() => setFilter('instalaciones')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === 'instalaciones' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Instalaciones
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => openImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-medium text-gray-800">{image.alt}</p>
                  <p className="text-blue-600 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeImage}
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] text-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="mt-4 text-white">
              <p className="text-xl">{selectedImage.alt}</p>
              <p className="text-gray-300 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
      
      <CallToAction />
    </div>
  );
};

export default GalleryPage;