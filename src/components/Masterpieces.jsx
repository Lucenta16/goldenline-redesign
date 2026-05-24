import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const masterpieces = [
  {
    title: "Calacatta Culinary Theater",
    category: "Kitchen Remodeling",
    image: "https://goldenlineremodeling.com/wp-content/uploads/2020/06/high-end-kitchen-remodel-cost-miramar-beach-fl.jpg",
    desc: "A chef-inspired kitchen layout featuring an oversized double-waterfall marble island, hand-crafted ceiling-height cabinets, and integrated gas ranges.",
    specs: ["Calacatta Gold Marble", "Custom Walnut Joinery", "Sub-Zero Integration", "Hidden Pantry Access"],
    budget: "Premium Specification"
  },
  {
    title: "Master Spa Sanctuary",
    category: "Bathroom Remodeling",
    image: "https://goldenlineremodeling.com/wp-content/uploads/2020/07/home-bathroom-remodeling.jpg",
    desc: "A wellness-focused master bathroom complete with a freestanding quartz tub, curbless custom walk-in shower, and brass fixtures.",
    specs: ["Freestanding Quartz Tub", "Imported Marble Tiling", "Frameless Glass Enclosure", "Heated Floor Systems"],
    budget: "Luxury Specification"
  },
  {
    title: "Zero-Edge Swimming Oasis",
    category: "Custom Homes / Landscapes",
    image: "https://goldenlineremodeling.com/wp-content/uploads/2020/05/Extra-features-for-a-luxurious-swimming-pool.jpg",
    desc: "A seamless transition from interior modern living to a premium outdoor pool deck featuring travertine tile layout and landscape architecture.",
    specs: ["Zero-Edge Heated Pool", "Travertine Deck Tiles", "Outdoor Bar & Kitchen", "Automated Pool Systems"],
    budget: "Elite Architectural Spec"
  }
];

export default function Masterpieces() {
  return (
    <section className="py-24 bg-luxury-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Signature Works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal mb-6 leading-tight">
            Craftsmanship in <span className="gold-gradient-text text-glow-light font-bold">Every Detail</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mb-6" />
          <p className="text-neutral-700 font-light text-base md:text-lg leading-relaxed">
            We don't build generic boxes. We craft tailor-made living masterpieces. Explore the detailing, premium materials, and custom finishes of our signature transformations.
          </p>
        </div>

        {/* Masterpieces List */}
        <div className="space-y-24">
          {masterpieces.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Media Card (Visual Anchor) */}
              <div className="w-full lg:w-3/5 bg-white border border-black/5 p-3 shadow-lg relative group overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden relative bg-neutral-900 border border-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Description Card */}
              <div className="w-full lg:w-2/5">
                <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">
                  {item.category}
                </span>
                
                <h3 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 font-light leading-relaxed mb-6 text-base sm:text-lg">
                  {item.desc}
                </p>

                {/* Specs List */}
                <div className="border-t border-black/5 pt-6 mb-6">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block mb-4">
                    Architectural Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex gap-2 items-center text-xs sm:text-sm text-luxury-charcoal font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Badge */}
                <div className="flex items-center justify-between border-t border-black/5 pt-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Project Quality Range</span>
                  <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-bold uppercase tracking-wider">
                    {item.budget}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
