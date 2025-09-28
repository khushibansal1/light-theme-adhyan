import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <HomePage />;
      case 'pricing':
        return <HomePage />;
      case 'testimonials':
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}