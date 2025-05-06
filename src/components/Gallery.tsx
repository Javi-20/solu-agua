import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/6000184/pexels-photo-6000184.jpeg',
    alt: 'Instalación de lavabo',
    category: 'baños'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/6447177/pexels-photo-6447177.jpeg',
    alt: 'Reparación de tubería',
    category: 'reparaciones'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/4108028/pexels-photo-4108028.jpeg',
    alt: 'Duchas modernas',
    category: 'baños'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/6444071/pexels-photo-6444071.jpeg',
    alt: 'Instalación de calentador',
    category: 'instalaciones'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/5591501/pexels-photo-5591501.jpeg',
    alt: 'Detección de fugas',
    category: 'reparaciones'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5824478/pexels-photo-5824478.jpeg',
    alt: 'Cocina nueva',
    category: 'cocinas'
  }
];

const Gallery: React.FC = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuestros trabajos recientes y descubra la calidad de nuestros servicios.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => openImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform hover:scale-110"
              />
              <div className="p-4 bg-white">
                <p className="font-medium text-gray-800">{image.alt}</p>
                <p className="text-blue-600 text-sm capitalize">{image.category}</p>
              </div>
            </div>
          ))}
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
            <div className="max-w-4xl max-h-[90vh]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white">
                <p className="text-xl">{selectedImage.alt}</p>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;