import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  // Get current page from URL
  useEffect(() => {
    const path = window.location.pathname;
    const page = path === '/' ? 'home' : path.slice(1);
    if (['home', 'pricing', 'faq', 'contact', 'testimonials'].includes(page)) {
      setCurrentPage(page);
    }
    
    // Check for plan parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get('plan');
    if (planParam) {
      setSelectedPlan(planParam);
    }
  }, []);

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.slice(1);
      if (['home', 'pricing', 'faq', 'contact', 'testimonials'].includes(page)) {
        setCurrentPage(page);
        
        // Check for plan parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const planParam = urlParams.get('plan');
        setSelectedPlan(planParam || undefined);
        
        // Scroll to top when using browser back/forward
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (page: string, planType?: string) => {
    setCurrentPage(page);
    setSelectedPlan(planType);
    
    // Update URL without page reload
    let url = page === 'home' ? '/' : `/${page}`;
    if (planType && page === 'contact') {
      url += `?plan=${planType}`;
    }
    
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
        return <ContactPage selectedPlan={selectedPlan} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigation} />;
      case 'testimonials':
        return <TestimonialsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer onNavigate={handleNavigation} />
      <Toaster />
    </div>
  );
}