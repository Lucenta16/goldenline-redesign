import { motion } from 'framer-motion';
import { services } from '../data/content';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const iconMap = {
  ChefHat: Icons.ChefHat,
  ShowerHead: Icons.Bath,
  Home: Icons.Home,
  Layers: Icons.Layers,
  ShieldAlert: Icons.Shield,
  Zap: Icons.Zap
};

export default function Services({ onNavigate, setSelectedService }) {
  return (
    <section className="py-24 bg-luxury-cream relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Architectural Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal mb-6 leading-tight">
            Bespoke Services Tailored <br />
            To Your <span className="gold-gradient-text text-glow-light">Lifestyle</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mb-6" />
          <p className="text-neutral-700 font-light text-base md:text-lg leading-relaxed">
            From luxury kitchen custom islands to fully engineered custom structural builds, we integrate high-end aesthetics with local Texas building codes and standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden glass-card glass-card-hover p-8 flex flex-col justify-between min-h-[440px] border border-black/5 bg-white/70"
              >
                {/* Image Background Slide on Hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />

                <div>
                  {/* Icon & Title */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-luxury-cream border border-black/5 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-gold-600" />
                    </div>
                    <span className="text-neutral-300 font-serif text-3xl group-hover:text-gold-500/30 transition-all duration-500 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-luxury-charcoal mb-4 group-hover:text-gold-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Body description (boosted size to 16px/17px) */}
                  <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Hover Features & CTA */}
                <div>
                  <ul className="space-y-2 mb-6 border-t border-black/5 pt-4">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs sm:text-sm text-neutral-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => {
                      if (setSelectedService) setSelectedService(service.id);
                      onNavigate('contact');
                    }}
                    className="w-full flex items-center justify-between text-xs sm:text-sm uppercase tracking-wider font-bold text-luxury-charcoal group-hover:text-gold-600 border-t border-black/5 pt-4 group-hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
