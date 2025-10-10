import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowRight, BookOpen, Calculator, Atom } from 'lucide-react';
import logoImage from 'figma:asset/a7654523732dc57ff3f77a42df3acc9762dbe7cc.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-yellow-500/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <button 
              onClick={handleLogoClick}
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
            
            <p className="text-gray-300 leading-relaxed">
              Specialized tutoring for IB Diploma and Dutch high school students. We help students from brugklas to final exams achieve their academic goals.
            </p>
            
            <div className="flex items-center justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10+</div>
                <div className="text-xs text-gray-400">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                About Us
              </a>
              <a href="#services" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Our Services
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Contact
              </a>
              <a href="#booking" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Book Session
              </a>
            </div>
          </div>

          {/* Our Subjects */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Subjects</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                <Calculator className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="font-medium text-white text-sm">Mathematics</div>
                  <div className="text-xs text-gray-400">All levels & IB</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <Atom className="h-5 w-5 text-green-400" />
                <div>
                  <div className="font-medium text-white text-sm">Physics</div>
                  <div className="text-xs text-gray-400">VMBO, HAVO, VWO</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="font-medium text-white text-sm">Chemistry</div>
                  <div className="text-xs text-gray-400">All curricula</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <a href="mailto:info@adhyanxguidance.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    info@adhyanxguidance.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Phone</div>
                  <a href="tel:+31612345678" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    +31 6 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Location</div>
                  <div className="text-gray-300">
                    Netherlands<br />
                    <span className="text-sm text-gray-400">Online tutoring nationwide</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Hours</div>
                  <div className="text-gray-300 text-sm">
                    Mon-Fri: 3:00 PM - 9:00 PM<br />
                    Sat-Sun: 10:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-yellow-500/30">
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center text-pink-400 hover:bg-pink-600/30 transition-colors duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-colors duration-200">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Footer */}
        <div className="py-8 border-t border-yellow-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 AdhyanX Guidance. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Specialized tutoring for IB and Dutch high school students
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-xs text-gray-400">
              <a href="#privacy" className="hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#terms" className="hover:text-yellow-400 transition-colors duration-200">Terms of Service</a>
              <a href="#cookies" className="hover:text-yellow-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}