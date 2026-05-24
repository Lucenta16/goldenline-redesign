import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from './data/content';
import logoG from './assets/logo-g.png';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Masterpieces from './components/Masterpieces';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { Phone, Menu, X, ArrowUp, ShieldCheck, PhoneCall, CalendarRange } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Section Refs for Smooth Scrolling
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefMap = {
    hero: heroRef,
    services: servicesRef,
    gallery: galleryRef,
    about: aboutRef,
    contact: contactRef
  };

  const handleNavigate = (sectionId) => {
    setMobileMenuOpen(false);
    const targetRef = scrollRefMap[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track scroll position to show Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-luxury-white selection:bg-gold-500 selection:text-black pb-16 lg:pb-0 pt-10 overflow-x-hidden">
      
      {/* Top Gold Announcement Bar (Vibrant high-contrast CTA) */}
      <div className="fixed top-0 inset-x-0 h-10 bg-gold-500 text-black flex items-center justify-center text-xs font-bold uppercase tracking-widest z-50 shadow-md">
        <span>Call For A Free Quote: </span>
        <a 
          href={`tel:${companyInfo.phone}`} 
          className="underline ml-1.5 hover:text-neutral-800 transition-colors font-extrabold"
        >
          {companyInfo.phone}
        </a>
      </div>

      {/* 1. Header Navigation */}
      <header className="fixed top-10 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavigate('hero'); }}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logoG} 
              alt="Goldenline Remodeling" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-luxury-charcoal group-hover:text-gold-600 transition-colors">
                GOLDENLINE
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-gold-600 font-semibold -mt-1 block">
                REMODELING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'gallery', label: 'Portfolio' },
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className="text-xs uppercase tracking-widest font-bold text-neutral-600 hover:text-luxury-charcoal transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call CTA: Cleaned up to show only the primary button on desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => handleNavigate('contact')}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border border-gold-600 shadow-sm"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-luxury-charcoal hover:text-gold-600 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-30 z-30 bg-white/95 border-b border-black/5 py-8 px-6 lg:hidden shadow-lg"
          >
            <div className="flex flex-col gap-5 text-center">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'gallery', label: 'Portfolio' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className="text-sm uppercase tracking-widest font-bold text-neutral-700 hover:text-luxury-charcoal py-2"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="w-full h-[1px] bg-black/5 my-2" />

              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-bold text-luxury-charcoal py-2"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                Call For Free Quote: {companyInfo.phone}
              </a>
              <button 
                onClick={() => handleNavigate('contact')}
                className="w-full py-3.5 bg-gold-500 text-black font-bold text-xs uppercase tracking-widest mt-2"
              >
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Page Layout Sections */}
      <main>
        <div ref={heroRef}>
          <Hero onNavigate={handleNavigate} />
        </div>

        <div ref={servicesRef}>
          <Services onNavigate={handleNavigate} setSelectedService={setSelectedService} />
        </div>

        {/* Before / After Transformation */}
        <BeforeAfter />

        {/* Signature Works Showcase */}
        <Masterpieces />

        <div ref={galleryRef}>
          <Gallery />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={contactRef}>
          <Contact initialService={selectedService} />
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="bg-luxury-cream border-t border-black/5 pt-16 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1: About Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoG} 
                  alt="Goldenline Remodeling" 
                  className="h-10 w-auto object-contain" 
                />
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold tracking-widest text-luxury-charcoal">
                    GOLDENLINE
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-gold-600 font-semibold -mt-0.5 block">
                    REMODELING
                  </span>
                </div>
              </div>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Redesigning estates across Houston and Los Angeles into premium architectural masterpieces. CSLB License #1065685.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-black/5 hover:border-gold-500/30 text-neutral-500 hover:text-gold-600 transition-all shadow-sm" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-black/5 hover:border-gold-500/30 text-neutral-500 hover:text-gold-600 transition-all shadow-sm" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.61l.39-3H13V6.3c0-.98.45-1.3 1.3-1.3H16V1h-3.3C9.75 1 8 2.78 8 5.7V8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-6 border-b border-black/5 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'services', label: 'Our Services' },
                  { id: 'gallery', label: 'Portfolio Showroom' },
                  { id: 'about', label: 'Our Story' },
                  { id: 'contact', label: 'Consultation' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="text-xs text-neutral-600 hover:text-luxury-charcoal transition-colors cursor-pointer font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact coordinates */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-6 border-b border-black/5 pb-2">Contact Details</h4>
              <ul className="space-y-3 text-xs text-neutral-600 font-medium">
                <li>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Direct Line:</span>
                  <a href={`tel:${companyInfo.phone}`} className="text-luxury-charcoal hover:text-gold-600 transition-colors text-sm font-semibold">
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Email Office:</span>
                  <a href={`mailto:${companyInfo.email}`} className="text-luxury-charcoal hover:text-gold-600 transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Houston Operations:</span>
                  <span className="text-luxury-charcoal">{companyInfo.address}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Credentials */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-6 border-b border-black/5 pb-2">Licensing & Compliance</h4>
              <div className="space-y-4 text-xs text-neutral-600 font-light">
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
                  <div>
                    <span className="text-luxury-charcoal font-bold block">CSLB Registered Contractor</span>
                    <span className="text-neutral-500 text-[10px]">License Number: #1065685</span>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-500 leading-normal">
                  All structural, remodeling, and carpentry work conforms to rigorous state specifications and local Houston municipal safety guidelines.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom copyright */}
          <div className="border-t border-black/5 pt-8 mt-12 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
            <span>© 2026 Goldenline Remodeling. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-luxury-charcoal transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-luxury-charcoal transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 4. Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavigate('hero')}
            className="fixed bottom-20 lg:bottom-6 right-6 z-40 p-3 bg-gold-500 hover:bg-gold-600 text-black shadow-lg transition-all cursor-pointer border border-gold-600"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 5. Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 inset-x-0 h-16 bg-black/95 border-t border-white/10 z-50 flex lg:hidden shadow-2xl backdrop-blur-md">
        <a 
          href={`tel:${companyInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 text-white hover:text-gold-500 transition-colors border-r border-white/10 font-bold uppercase tracking-wider text-xs"
        >
          <PhoneCall className="w-4 h-4 text-gold-500" />
          <span>Call For Free Quote</span>
        </a>
        <button
          onClick={() => handleNavigate('contact')}
          className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-wider text-xs cursor-pointer active:scale-95 transition-transform"
        >
          <CalendarRange className="w-4 h-4" />
          <span>Get Free Quote</span>
        </button>
      </div>

    </div>
  );
}
