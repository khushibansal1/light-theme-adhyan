import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Get current page from URL
  useEffect(() => {
    const path = window.location.pathname;
    const page = path === '/' ? 'home' : path.slice(1);
    if (['home', 'pricing', 'faq', 'contact', 'testimonials'].includes(page)) {
      setCurrentPage(page);
    }
  }, []);

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.slice(1);
      if (['home', 'pricing', 'faq', 'contact', 'testimonials'].includes(page)) {
        setCurrentPage(page);
        // Scroll to top when using browser back/forward
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Update URL without page reload
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
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
        return <PricingPage />;
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
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}