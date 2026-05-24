import { useState } from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/content';
import { Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, Lock, Calendar, ChefHat, Bath, Home, Layers } from 'lucide-react';

const projectTypes = [
  { id: 'kitchens', label: 'Kitchen Remodeling', icon: ChefHat },
  { id: 'bathrooms', label: 'Bathroom Remodeling', icon: Bath },
  { id: 'custom-homes', label: 'Custom Homes', icon: Home },
  { id: 'complete-remodel', label: 'Complete Remodel', icon: Layers }
];

export default function Contact({ initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialService || 'kitchens',
    budget: '50k-100k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectProjectType = (typeId) => {
    setFormData(prev => ({ ...prev, projectType: typeId }));
  };

  return (
    <section className="py-24 bg-luxury-dark relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 text-white">
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest block mb-3">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">Let's Discuss Your Estate</h2>
            <div className="w-16 h-[2px] bg-gold-500 mb-8" />
            <p className="text-neutral-400 font-light leading-relaxed mb-10 text-base">
              Ready to elevate your home? Schedule an on-site consultation. Our design-build estimators will evaluate dimensions, discuss styling concepts, and draft transparent blueprints.
            </p>

            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full text-gold-500 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Call Directly</h4>
                  <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-gold-500 transition-colors font-semibold text-lg">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full text-gold-500 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Send Email</h4>
                  <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-gold-500 transition-colors font-semibold">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full text-gold-500 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Main Office</h4>
                  <p className="text-white font-semibold text-sm">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* License */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-full text-gold-500 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Credentials</h4>
                  <p className="text-white font-semibold text-sm">
                    {companyInfo.license}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Project Planner Card */}
          <div className="lg:col-span-7 bg-white border border-black/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 text-luxury-charcoal"
              >
                <CheckCircle className="w-16 h-16 text-gold-600 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">Request Submitted Successfully</h3>
                <p className="text-neutral-600 text-base max-w-md mx-auto leading-relaxed mb-6">
                  Thank you for contacting Goldenline Remodeling. A design-build coordinator will review your request and reach out to you within 24 business hours to arrange your consult.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors cursor-pointer"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Urgency & Call Banner Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Booking Scarcity Alert */}
                  <div className="flex items-start gap-3 bg-gold-500/10 border border-gold-500/30 p-4">
                    <Calendar className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-gold-700 text-xs font-bold uppercase tracking-wider">Availability</h4>
                      <p className="text-neutral-700 text-[11px] mt-1 leading-normal">
                        Summer 2026 scheduling is now 85% full. Register today.
                      </p>
                    </div>
                  </div>

                  {/* Direct Call Free Quote Banner */}
                  <div className="flex items-start gap-3 bg-neutral-900 border border-white/10 text-white p-4">
                    <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-gold-400 text-xs font-bold uppercase tracking-wider">Call Free Quote</h4>
                      <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-gold-500 transition-colors font-bold text-sm block mt-1 underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-luxury-charcoal border-b border-black/5 pb-2">Bespoke Project Planner</h3>

                {/* Service Type Selection */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block mb-3">1. Select Service Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      const isActive = formData.projectType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => selectProjectType(type.id)}
                          className={`flex items-center gap-3 p-4 border text-left transition-all duration-300 cursor-pointer ${
                            isActive
                              ? 'border-gold-500 bg-gold-500/5 text-gold-700 shadow-sm font-semibold'
                              : 'border-black/5 bg-luxury-white text-neutral-600 hover:text-luxury-charcoal hover:bg-neutral-50'
                          }`}
                        >
                          <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-gold-600' : 'text-neutral-400'}`} />
                          <span className="text-xs uppercase tracking-wider">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">2. Select Project Budget Range</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: '20k-50k', label: '$20k - $50k' },
                      { id: '50k-100k', label: '$50k - $100k' },
                      { id: '100k-250k', label: '$100k - $250k' },
                      { id: '250k+', label: '$250k+' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt.id })}
                        className={`py-2.5 px-3 text-xs border text-center transition-all duration-300 cursor-pointer ${
                          formData.budget === opt.id
                            ? 'border-gold-500 bg-gold-500/10 text-gold-700 font-semibold'
                            : 'border-black/5 bg-luxury-white text-neutral-500 hover:text-luxury-charcoal hover:bg-neutral-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Fields */}
                <div className="border-t border-black/5 pt-4 space-y-4">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">3. Personal & Project Information</label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-luxury-white border border-black/5 px-4 py-3 text-luxury-charcoal placeholder-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-luxury-white border border-black/5 px-4 py-3 text-luxury-charcoal placeholder-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full bg-luxury-white border border-black/5 px-4 py-3 text-luxury-charcoal placeholder-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors text-sm"
                      />
                    </div>

                    {/* Project Description */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your design (Optional)"
                        className="w-full bg-luxury-white border border-black/5 px-4 py-3 text-luxury-charcoal placeholder-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button & Trust Badge */}
                <div className="space-y-4 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-gold-glow animate-gold-pulse border border-gold-600 hover:scale-[1.01]"
                  >
                    Submit Consultation Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>🔒 Your privacy is protected. We never spam.</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
