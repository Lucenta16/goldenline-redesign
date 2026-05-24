import { motion } from 'framer-motion';
import { companyInfo, reviews, socialLinks } from '../data/content';
import { Star, ShieldCheck, BadgeCheck, Trophy, Sparkles, Clock, CircleDollarSign } from 'lucide-react';

const trustIconMap = [Clock, CircleDollarSign, ShieldCheck];

const YelpIcon = () => (
  <svg className="w-5 h-5 fill-[#D32323] shrink-0" viewBox="0 0 24 24">
    <path d="M12 11.233c-.024-.515-.174-.984-.447-1.408l4.478-2.585c.447.773.693 1.637.693 2.569 0 .93-.244 1.794-.69 2.565l-4.034-3.141zm-1.89-2.09c-.439-.272-.942-.439-1.48-.466v5.17l2.96-4.704zm-1.48 7.399c.538-.027 1.041-.194 1.48-.466l-2.96-4.704v5.17zm6.759 2.292c.446-.771.69-1.635.69-2.565 0-.932-.246-1.796-.693-2.569l-4.478 2.585c.273.424.423.893.447 1.408l4.034 1.141zm-9.055-.402c-.446-.771-.69-1.635-.69-2.565 0-.932.246-1.796.693-2.569l4.478 2.585c-.273.424-.423.893-.447 1.408l-4.034 1.141z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const AngiesListIcon = () => (
  <div className="w-5 h-5 bg-[#00AA6C] rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 font-sans">
    A
  </div>
);

const BuildZoomIcon = () => (
  <svg className="w-5 h-5 fill-[#0080c8] shrink-0" viewBox="0 0 24 24">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.85l5 4.5V18h-2v-6H9v6H7v-7.65l5-4.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2 shrink-0 text-[#E1306C]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
              Goldenline Remodeling is a premier general contractor serving high-end residential estates in West Hollywood, CA and the surrounding Los Angeles areas. By bridging architectural plans, detailed material sourcing, and expert project management, we deliver flawless results.
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

        {/* Section 2: Why Homeowners Trust Us (New Psychology Hook) */}
        <div className="mb-28 bg-luxury-cream border border-black/5 p-10 md:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Trust Indicators</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-luxury-charcoal">Why Homeowners Trust Us</h2>
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
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Client Relations</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal">Excellence on Yelp</h2>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Yelp Scorecard Card */}
            <div className="w-full lg:w-1/4 bg-white p-8 border border-black/5 shadow-sm flex flex-col justify-between items-center text-center">
              <div className="flex flex-col items-center">
                {/* Yelp Logo (Red Asterisk SVG) */}
                <div className="mb-4 flex items-center gap-2">
                  <YelpIcon />
                  <span className="text-xl font-bold text-black tracking-tight font-sans">yelp</span>
                </div>
                {/* Project Thumbnail Image */}
                <div className="w-24 h-24 rounded-md overflow-hidden bg-neutral-100 border border-black/5 mb-4">
                  <img 
                    src="https://goldenlineremodeling.com/wp-content/uploads/2020/07/home-kitchen-remodeling.jpg" 
                    alt="Golden Line Remodeling" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-luxury-charcoal font-bold text-base leading-snug font-sans mb-2">Golden Line Remodeling</h4>
                {/* 5 Yelp Red Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D32323] text-[#D32323]" />
                  ))}
                </div>
                <span className="text-xs text-neutral-500 font-semibold mb-6 block">34 Yelp reviews</span>
              </div>
              <a 
                href={socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#4889f4] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-widest text-center transition-colors cursor-pointer rounded-sm shadow-sm"
              >
                Write a review
              </a>
            </div>

            {/* Testimonials List */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    {/* Rating Stars (Yelp Red) */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D32323] text-[#D32323]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-400 font-bold font-sans">{review.date}</span>
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

        {/* Section 5: Find Us On Badges */}
        <div className="border-t border-black/5 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Verified Platforms</span>
            <h3 className="text-2xl font-serif font-bold text-luxury-charcoal">Find Us On</h3>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            
            {/* Google Reviews */}
            <a 
              href={socialLinks.google} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 hover:border-gold-500/30 transition-all shadow-sm hover:shadow-md text-center group cursor-pointer"
            >
              <GoogleIcon />
              <span className="text-xs font-bold text-neutral-700 mt-3 group-hover:text-black transition-colors font-sans">Google Reviews</span>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />
                ))}
              </div>
            </a>

            {/* Angie's List */}
            <a 
              href={socialLinks.angieslist} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 hover:border-gold-500/30 transition-all shadow-sm hover:shadow-md text-center group cursor-pointer"
            >
              <AngiesListIcon />
              <span className="text-xs font-bold text-neutral-700 mt-3 group-hover:text-black transition-colors font-sans">Angie's List</span>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#00AA6C] text-[#00AA6C]" />
                ))}
              </div>
            </a>

            {/* Yelp */}
            <a 
              href={socialLinks.yelp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 hover:border-gold-500/30 transition-all shadow-sm hover:shadow-md text-center group cursor-pointer"
            >
              <YelpIcon />
              <span className="text-xs font-bold text-neutral-700 mt-3 group-hover:text-black transition-colors font-sans">Yelp Reviews</span>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D32323] text-[#D32323]" />
                ))}
              </div>
            </a>

            {/* Instagram */}
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 hover:border-gold-500/30 transition-all shadow-sm hover:shadow-md text-center group cursor-pointer"
            >
              <InstagramIcon />
              <span className="text-xs font-bold text-neutral-700 mt-3 group-hover:text-black transition-colors font-sans">Instagram</span>
              <span className="text-[10px] text-neutral-400 mt-1">@goldenline_remodeling</span>
            </a>

            {/* BuildZoom */}
            <a 
              href={socialLinks.buildzoom} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-6 bg-white border border-black/5 hover:border-gold-500/30 transition-all shadow-sm hover:shadow-md text-center group cursor-pointer col-span-2 md:col-span-1"
            >
              <BuildZoomIcon />
              <span className="text-xs font-bold text-neutral-700 mt-3 group-hover:text-black transition-colors font-sans">BuildZoom</span>
              <span className="text-[10px] text-neutral-400 mt-1">Top Contractor</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
