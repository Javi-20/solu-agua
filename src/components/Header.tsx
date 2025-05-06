import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-600 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Droplet className="text-white h-8 w-8 mr-2" />
            <span className="text-white font-bold text-2xl">SoluAgua</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Inicio" />
            <NavLink to="/services" label="Servicios" />
            <NavLink to="/about" label="Nosotros" />
            <NavLink to="/gallery" label="Galería" />
            <NavLink to="/contact" label="Contacto" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-blue-700 transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <MobileNavLink to="/" label="Inicio" />
          <MobileNavLink to="/services" label="Servicios" />
          <MobileNavLink to="/about" label="Nosotros" />
          <MobileNavLink to="/gallery" label="Galería" />
          <MobileNavLink to="/contact" label="Contacto" />
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-white font-medium text-lg hover:text-blue-200 transition duration-300 ${
        isActive ? 'font-bold border-b-2 border-white' : ''
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-white font-medium text-lg block py-2 ${
        isActive ? 'font-bold bg-blue-800 px-3 rounded' : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;