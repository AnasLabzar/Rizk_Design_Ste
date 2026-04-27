"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-cream selection:bg-brand-terracotta selection:text-white pb-24">
            
            {/* Full Width Map Section */}
            <div className="w-full h-[55vh] relative pt-24">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846467383272!2d-7.6322!3d33.5898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e8b2b3b0d1%3A0x8e8a000000000000!2sGauthier%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1714234567890!5m2!1sfr!2sma" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale contrast-[1.1] opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                />
                {/* Overlays pour intégration parfaite au background */}
                <div className="absolute top-24 left-0 right-0 h-32 bg-gradient-to-b from-brand-cream to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />
                
                {/* Floating Badge on Map */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border border-white flex items-center gap-3 pointer-events-none"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-dark">Studio Casablanca</span>
                </motion.div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 -mt-20 md:-mt-32">
                
                <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-24 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] border border-white">
                    
                    {/* Colonne Gauche - Coordonnées */}
                    <div className="flex-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-[11px] font-bold tracking-[0.3em] text-brand-terracotta uppercase mb-4 block">
                                Entrons en contact
                            </span>
                            <h1 className="text-4xl md:text-6xl font-light text-brand-dark leading-[1.1] mb-12">
                                Rencontrons-nous <br/>
                                <span className="font-aesthetic italic text-brand-terracotta">autour d&apos;un café.</span>
                            </h1>

                            <div className="space-y-10">
                                {/* Adresse */}
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-brand-beige/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-terracotta/10 transition-colors">
                                        <MapPin className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/40 mb-2">Notre Studio</h4>
                                        <p className="text-brand-dark/80 text-lg font-light leading-relaxed">
                                            Quartier Gauthier<br />
                                            20000 Casablanca, Maroc
                                        </p>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-brand-beige/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-terracotta/10 transition-colors">
                                        <Phone className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/40 mb-2">Appelez-nous</h4>
                                        <a href="tel:+212600000000" className="text-brand-dark/80 text-lg font-light block hover:text-brand-terracotta transition-colors">
                                            +212 (0) 600 000 000
                                        </a>
                                        <a href="mailto:contact@rizkdesign.com" className="text-brand-dark/80 text-lg font-light block hover:text-brand-terracotta transition-colors mt-1">
                                            contact@rizkdesign.com
                                        </a>
                                    </div>
                                </div>

                                {/* Horaires */}
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-brand-beige/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-terracotta/10 transition-colors">
                                        <Clock className="w-5 h-5 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/40 mb-2">Horaires</h4>
                                        <p className="text-brand-dark/80 text-lg font-light">
                                            Lundi - Vendredi<br />
                                            09:00 - 18:30
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Réseaux Sociaux */}
                            <div className="mt-16 pt-10 border-t border-brand-dark/10">
                                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/40 mb-6">Suivez nos créations</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Colonne Droite - Formulaire ultra premium */}
                    <div className="flex-1 w-full lg:max-w-xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-brand-cream/50 p-8 md:p-12 rounded-[32px] border border-brand-dark/[0.04]"
                        >
                            <h3 className="text-2xl font-light text-brand-dark mb-8">Envoyez-nous un message</h3>
                            
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="nom" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                            Nom complet *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="nom"
                                            required
                                            className="w-full bg-white border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:ring-4 focus:ring-brand-terracotta/10 transition-all text-sm placeholder:text-brand-dark/30 shadow-sm" 
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                            Téléphone *
                                        </label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            required
                                            className="w-full bg-white border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:ring-4 focus:ring-brand-terracotta/10 transition-all text-sm placeholder:text-brand-dark/30 shadow-sm" 
                                            placeholder="+212 6..." 
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        className="w-full bg-white border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:ring-4 focus:ring-brand-terracotta/10 transition-all text-sm placeholder:text-brand-dark/30 shadow-sm" 
                                        placeholder="vous@email.com" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                        Détails de votre projet
                                    </label>
                                    <textarea 
                                        id="message"
                                        rows={5} 
                                        className="w-full bg-white border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:ring-4 focus:ring-brand-terracotta/10 transition-all resize-none text-sm leading-relaxed placeholder:text-brand-dark/30 shadow-sm" 
                                        placeholder="Parlez-nous de votre vision, du style souhaité, de la superficie..."
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full group flex justify-center items-center gap-3 bg-brand-dark text-white font-medium py-5 rounded-2xl hover:bg-brand-terracotta transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-terracotta/20 mt-4"
                                >
                                    <span className="text-[13px] tracking-widest uppercase font-semibold">Envoyer ma demande</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <p className="text-[10px] text-brand-dark/40 text-center uppercase tracking-widest mt-4">
                                    Vos informations resteront confidentielles.
                                </p>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
}
