import { motion } from 'framer-motion';
import { companyInfo } from '../data/content';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-stretch pt-20 bg-luxury-dark overflow-hidden border-b border-white/5">
      
      {/* Left Column: Text & CTA */}
      <div className="flex-1 flex items-center px-6 sm:px-12 lg:px-20 py-10 lg:py-12 z-10 bg-luxury-dark relative">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-2xl w-full">
          
          {/* Credentials and Location badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              Licensed General Contractor
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              Houston, TX
            </span>
          </motion.div>

          {/* Huge Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] font-serif"
          >
            Houston’s Premium <br />
            <span className="gold-gradient-text text-glow-light font-bold">Home Remodeling</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl text-neutral-300 font-light mb-6 leading-snug font-sans"
          >
            Flawless Craftsmanship, Managed from Concept to Clean-up.
          </motion.h2>

          {/* Description text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-lg text-neutral-400 mb-8 max-w-lg font-light leading-relaxed"
          >
            We merge architectural planning, custom carpentry, and transparent budgets to build your dream kitchen or spa sanctuary with zero stress.
          </motion.p>

          {/* Single, Highly Focused Pulsing Gold CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => onNavigate('contact')}
              className="group px-10 py-5 bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-gold-glow animate-gold-pulse border border-gold-600 hover:scale-[1.02] rounded-sm"
            >
              Schedule Private Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => onNavigate('gallery')}
              className="px-10 py-5 border border-white/20 hover:border-gold-500 hover:bg-white/5 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer text-center rounded-sm"
            >
              Explore Portfolio
            </button>
          </motion.div>

          {/* Call Attraction Sub-CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-400"
          >
            <span>Or Call For A Free Quote:</span>
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="text-gold-500 hover:text-white transition-colors underline decoration-gold-500/50"
            >
              {companyInfo.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right Column: High-Res Project Image */}
      <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-full relative bg-neutral-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://goldenlineremodeling.com/wp-content/uploads/2020/06/22122df-front-rendering_1680x800_branded.jpg')`,
          }}
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-luxury-dark to-transparent hidden lg:block" />
      </div>

    </section>
  );
}
