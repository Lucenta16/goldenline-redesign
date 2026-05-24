import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryProjects } from '../data/content';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', ...new Set(galleryProjects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-luxury-white relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-3">Portfolio Showroom</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-luxury-charcoal mb-6">Featured Projects</h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mb-6" />
          <p className="text-neutral-600 font-light text-base leading-relaxed">
            Explore actual kitchen designs, master baths, and custom builds completed by Goldenline Remodeling. Experience our commitment to precision.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeFilter === category
                  ? 'bg-gold-500 text-black'
                  : 'bg-white border border-black/5 text-neutral-500 hover:text-luxury-charcoal hover:bg-neutral-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Magazine Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-neutral-100 border border-black/5 shadow-sm"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div>
                    <span className="text-gold-300 text-[10px] uppercase tracking-widest font-bold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white mb-2 leading-tight group-hover:text-gold-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-normal">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Corner Zoom Icon */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Maximize2 className="w-4 h-4 text-gold-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer border border-white/10 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer border border-white/10 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[80vh] flex flex-col justify-center items-center relative"
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain border border-white/5 shadow-2xl"
              />

              <div className="text-center mt-6 max-w-xl">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">
                  {filteredProjects[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-serif text-white font-bold mt-1">
                  {filteredProjects[lightboxIndex].title}
                </h3>
                <p className="text-neutral-400 text-sm font-light mt-2">
                  {filteredProjects[lightboxIndex].desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
