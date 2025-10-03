import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/a7654523732dc57ff3f77a42df3acc9762dbe7cc.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-yellow-500/30 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src={logoImage} 
              alt="AdhyanX Guidance Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-white tracking-tight">
                AdhyanX
              </span>
              <span className="text-xs text-yellow-400 font-medium tracking-wide">
                FUELING CURIOUS MINDS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-colors duration-200 relative group ${
                currentPage === 'home' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            <button 
              onClick={() => handleNavigation('testimonials')}
              className={`font-medium transition-colors duration-200 relative group ${
                currentPage === 'testimonials' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Testimonials
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                currentPage === 'testimonials' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            <button 
              onClick={() => handleNavigation('pricing')}
              className={`font-medium transition-colors duration-200 relative group ${
                currentPage === 'pricing' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Pricing
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                currentPage === 'pricing' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            <button 
              onClick={() => handleNavigation('faq')}
              className={`font-medium transition-colors duration-200 relative group ${
                currentPage === 'faq' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              FAQs
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                currentPage === 'faq' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            <button 
              onClick={() => handleNavigation('contact')}
              className={`font-medium transition-colors duration-200 relative group ${
                currentPage === 'contact' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Contact Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                currentPage === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Book Free Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-yellow-400 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 pb-6 space-y-3 border-t border-yellow-500/30">
            <button 
              onClick={() => handleNavigation('home')}
              className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                currentPage === 'home' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Home
            </button>
            
            <button 
              onClick={() => handleNavigation('testimonials')}
              className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                currentPage === 'testimonials' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Testimonials
            </button>
            
            <button 
              onClick={() => handleNavigation('pricing')}
              className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                currentPage === 'pricing' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Pricing
            </button>
            
            <button 
              onClick={() => handleNavigation('faq')}
              className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                currentPage === 'faq' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              FAQs
            </button>
            
            <button 
              onClick={() => handleNavigation('contact')}
              className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                currentPage === 'contact' ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              Contact Us
            </button>
            
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 mt-4">
              Book Free Session
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}