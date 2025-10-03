// Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
    const closeIcon = mobileMenuToggle.querySelector('.close-icon');
    
    let isMobileMenuOpen = false;
    
    mobileMenuToggle.addEventListener('click', function() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        if (isMobileMenuOpen) {
            mobileMenu.classList.add('active');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
    
    // Services Dropdown Toggle
    const servicesBtn = document.getElementById('servicesBtn');
    const servicesMenu = document.getElementById('servicesMenu');
    
    let isServicesOpen = false;
    
    servicesBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isServicesOpen = !isServicesOpen;
        
        if (isServicesOpen) {
            servicesMenu.classList.add('active');
            servicesBtn.classList.add('active');
        } else {
            servicesMenu.classList.remove('active');
            servicesBtn.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!servicesBtn.contains(e.target) && !servicesMenu.contains(e.target)) {
            servicesMenu.classList.remove('active');
            servicesBtn.classList.remove('active');
            isServicesOpen = false;
        }
    });
    
    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            isMobileMenuOpen = false;
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hero-content > *, .floating-card, .main-illustration');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add hover effects to floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset to original rotation
            if (this.classList.contains('card-1')) {
                this.style.transform = 'rotate(3deg) scale(1)';
            } else if (this.classList.contains('card-2')) {
                this.style.transform = 'rotate(-3deg) scale(1)';
            } else if (this.classList.contains('card-3')) {
                this.style.transform = 'rotate(2deg) scale(1)';
            }
            this.style.zIndex = '1';
        });
    });
    
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn, .primary-btn, .mobile-cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your booking logic here
            alert('Booking functionality would be implemented here!');
        });
    });
    
    const secondaryButtons = document.querySelectorAll('.secondary-btn');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your success stories logic here
            alert('Success stories section would be implemented here!');
        });
    });
    
    // Add parallax effect to background decorations
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.decoration');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment the following to enable typing effect
    // const heroTitle = document.querySelector('.hero-title');
    // const titleText = heroTitle.textContent;
    // typeWriter(heroTitle, titleText, 50);
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && isMobileMenuOpen) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            isMobileMenuOpen = false;
        }
        
        // Close dropdown on resize
        if (isServicesOpen) {
            servicesMenu.classList.remove('active');
            servicesBtn.classList.remove('active');
            isServicesOpen = false;
        }
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            if (isMobileMenuOpen) {
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                isMobileMenuOpen = false;
            }
            
            if (isServicesOpen) {
                servicesMenu.classList.remove('active');
                servicesBtn.classList.remove('active');
                isServicesOpen = false;
            }
        }
    });
    
    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    let focusedElementBeforeModal;
    
    // Trap focus within mobile menu when open
    mobileMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusableContent = mobileMenu.querySelectorAll(
                'a[href], button'
            );
            const firstFocusableElement = focusableContent[0];
            const lastFocusableElement = focusableContent[focusableContent.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded {
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);