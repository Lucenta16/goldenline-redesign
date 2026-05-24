import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Hammer } from 'lucide-react';

const projects = [
  {
    id: "kitchen",
    title: "Culinary Kitchen Renovation",
    location: "River Oaks Estate",
    beforeImg: "https://goldenlineremodeling.com/wp-content/uploads/2020/05/architect-blueprints-5.jpg",
    beforeLabel: "Blueprint & Concept",
    afterImg: "https://goldenlineremodeling.com/wp-content/uploads/2020/06/high-end-kitchen-remodel-cost-miramar-beach-fl.jpg",
    afterLabel: "Completed Master Build"
  },
  {
    id: "bathroom",
    title: "Master Spa Retreat",
    location: "West Hollywood Residence",
    beforeImg: "https://goldenlineremodeling.com/wp-content/uploads/elementor/thumbs/about-us-750-p2vgs9g0f2xmsutapwgyrpwj74d3ji08nn21qtyxm4.jpg", // Raw framing stage representation
    beforeLabel: "Concept Space Planning",
    afterImg: "https://goldenlineremodeling.com/wp-content/uploads/2020/05/Shot15_With_Hat_Til_Tile_All.jpg",
    afterLabel: "Completed Precision Tiling"
  }
];

export default function BeforeAfter() {
  const [activeStates, setActiveStates] = useState({
    kitchen: 'after',
    bathroom: 'after'
  });

  const toggleState = (projectId, state) => {
    setActiveStates(prev => ({ ...prev, [projectId]: state }));
  };

  return (
    <section className="py-24 bg-luxury-cream relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Transformations</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal mb-6">Concept to Reality</h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mb-6" />
          <p className="text-neutral-700 font-light text-base leading-relaxed">
            See how we transform architectural layouts and raw spaces into clean, modern residential masterpieces. Toggle each project below to view.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((proj) => {
            const currentState = activeStates[proj.id];
            const displayImg = currentState === 'before' ? proj.beforeImg : proj.afterImg;

            return (
              <div key={proj.id} className="bg-white border border-black/5 p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-xs text-gold-600 font-bold uppercase tracking-wider">{proj.location}</span>
                      <h3 className="text-2xl font-serif font-bold text-luxury-charcoal">{proj.title}</h3>
                    </div>
                    
                    {/* Toggles */}
                    <div className="flex border border-black/5 bg-luxury-white p-1 rounded-sm shrink-0">
                      <button
                        onClick={() => toggleState(proj.id, 'before')}
                        className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                          currentState === 'before'
                            ? 'bg-luxury-charcoal text-white'
                            : 'text-neutral-500 hover:text-luxury-charcoal'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => toggleState(proj.id, 'after')}
                        className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                          currentState === 'after'
                            ? 'bg-gold-500 text-black'
                            : 'text-neutral-500 hover:text-luxury-charcoal'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>

                  {/* Image Display */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border border-black/5 mb-6 group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentState}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        src={displayImg}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Label Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/80 border border-white/10 px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-white backdrop-blur-md">
                      {currentState === 'before' ? (
                        <span className="flex items-center gap-1.5">
                          <Hammer className="w-3.5 h-3.5 text-gold-500" />
                          {proj.beforeLabel}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-green-400" />
                          {proj.afterLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-black/5 pt-4 text-sm text-neutral-600 font-light leading-relaxed">
                  {currentState === 'before' ? (
                    <p>Initial layout planning, drafting dimensions, plumbing coordinates, structural beam details, and styling mockups.</p>
                  ) : (
                    <p>Hand-crafted stone countertops, integrated gas systems, premium finishes, and detailed post-construction cleaning.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
