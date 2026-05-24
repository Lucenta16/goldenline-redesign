import { motion } from 'framer-motion';
import { companyInfo, reviews } from '../data/content';
import { Star, ShieldCheck, BadgeCheck, Trophy, Sparkles, Clock, CircleDollarSign } from 'lucide-react';

const trustIconMap = [Clock, CircleDollarSign, ShieldCheck];

export default function About() {
  return (
    <section className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section 1: Story & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left Column: Image with floating badge */}
          <div className="relative">
            <div className="border border-black/5 p-2 bg-white shadow-md">
              <img
                src="https://goldenlineremodeling.com/wp-content/uploads/2020/06/about-us-750.jpg"
                alt="Goldenline Interior Craftsmanship"
                className="w-full object-cover aspect-[4/3] border border-black/5"
              />
            </div>
            {/* Floating Luxury Stamp badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white border border-gold-500/30 p-6 shadow-2xl backdrop-blur-md hidden sm:block">
              <div className="flex items-center gap-4">
                <Trophy className="w-8 h-8 text-gold-600 shrink-0" />
                <div>
                  <h4 className="text-luxury-charcoal font-serif font-bold text-sm">Crafting Excellence</h4>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-0.5">CA License #1065685</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div>
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal mb-6 leading-tight">
              Bespoke Spaces, <br />
              <span className="gold-gradient-text text-glow-light font-bold">Exceptional Standard</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mb-6" />
            <p className="text-neutral-700 text-base md:text-lg font-light leading-relaxed mb-6">
              Goldenline Remodeling is a premier general contractor serving high-end residential estates in Houston, TX and Los Angeles, CA. By bridging architectural plans, detailed material sourcing, and expert project management, we deliver flawless results.
            </p>
            <p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed mb-8">
              We pay close attention to every detail during the pre-planning phase. Whether you want to customize your kitchen island cabinets, redesign a master bathroom spa layout, or build a custom home from scratch, our commitment is entirely to your specific vision.
            </p>

            {/* List of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-center text-xs sm:text-sm text-luxury-charcoal">
                <BadgeCheck className="w-5 h-5 text-gold-600 shrink-0" />
                <span className="font-semibold uppercase tracking-wider">CSLB Licensed (#1065685)</span>
              </div>
              <div className="flex gap-3 items-center text-xs sm:text-sm text-luxury-charcoal">
                <BadgeCheck className="w-5 h-5 text-gold-600 shrink-0" />
                <span className="font-semibold uppercase tracking-wider">100% Custom Tailored Designs</span>
              </div>
              <div className="flex gap-3 items-center text-xs sm:text-sm text-luxury-charcoal">
                <BadgeCheck className="w-5 h-5 text-gold-600 shrink-0" />
                <span className="font-semibold uppercase tracking-wider">Punctual Project Managers</span>
              </div>
              <div className="flex gap-3 items-center text-xs sm:text-sm text-luxury-charcoal">
                <BadgeCheck className="w-5 h-5 text-gold-600 shrink-0" />
                <span className="font-semibold uppercase tracking-wider">Clear Transparent Budgets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Why Houston Homeowners Trust Us (New Psychology Hook) */}
        <div className="mb-28 bg-luxury-cream border border-black/5 p-10 md:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Trust Indicators</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-luxury-charcoal">Why Houston Homeowners Trust Us</h2>
            <div className="w-12 h-[2px] bg-gold-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.trustFactors.map((factor, idx) => {
              const Icon = trustIconMap[idx] || ShieldCheck;
              return (
                <div key={idx} className="bg-white p-8 border border-black/5 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-luxury-charcoal mb-3 font-sans">
                    {factor.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Our 3-Step Stress-Free Process (New Conversion Hook) */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Our Framework</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal">3-Step Stress-Free Process</h2>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
            <p className="text-neutral-600 text-sm sm:text-base font-light mt-4">
              We remove buyer anxiety by streamlining the path from your initial idea to the final project handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {companyInfo.steps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-8 border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-gold-500/20 text-6xl font-bold font-serif block mb-6">{step.num}</span>
                  <h3 className="text-2xl font-serif font-bold text-luxury-charcoal mb-4">{step.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-gold-500/30 group-hover:bg-gold-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Client Relations</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal">What Our Customers Say</h2>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 border border-black/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-neutral-700 font-light text-sm sm:text-base leading-relaxed italic mb-8">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="border-t border-black/5 pt-4">
                  <h4 className="text-luxury-charcoal text-sm font-semibold uppercase tracking-wider">{review.name}</h4>
                  <span className="text-[10px] text-gold-600 font-bold uppercase tracking-widest block mt-0.5">
                    {review.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
