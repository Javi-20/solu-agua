import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white py-3 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-medium text-sm sm:text-base">
              ¡SERVICIO DE EMERGENCIA 24/7! Llame al (55) 1234-5678 para atención inmediata
            </span>
          </div>
          <button 
            onClick={closeBanner}
            className="text-white hover:text-red-200 focus:outline-none"
            aria-label="Cerrar banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;