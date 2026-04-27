"use client";

import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-brand-cream rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center border border-brand-dark/5 shadow-sm">

                    {/* Section Texte */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-terracotta uppercase mb-4 block">
                                Démarrer un projet
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-aesthetic text-brand-dark leading-[1.1]">
                                Prêt à transformer <span className="italic font-light text-brand-dark/60 block mt-2">votre espace ?</span>
                            </h2>
                        </div>
                        <p className="text-brand-dark/60 text-lg leading-relaxed max-w-md font-light">
                            Parlez-nous de votre vision. Notre équipe d&apos;experts est dédiée à concevoir des espaces qui reflètent votre identité, de l&apos;esquisse architecturale aux finitions sur-mesure.
                        </p>
                    </div>

                    {/* Section Formulaire Ultra-Pro */}
                    <div className="flex-1 w-full lg:max-w-xl bg-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] border border-brand-dark/[0.04]">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Input Nom */}
                                <div className="space-y-2">
                                    <label htmlFor="nom" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                        Nom complet
                                    </label>
                                    <input 
                                        type="text" 
                                        id="nom"
                                        className="w-full bg-brand-cream/60 border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:bg-white focus:ring-4 focus:ring-brand-terracotta/10 transition-all text-sm placeholder:text-brand-dark/30" 
                                        placeholder="John Doe" 
                                    />
                                </div>

                                {/* Input Téléphone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                        Téléphone
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone"
                                        className="w-full bg-brand-cream/60 border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:bg-white focus:ring-4 focus:ring-brand-terracotta/10 transition-all text-sm placeholder:text-brand-dark/30" 
                                        placeholder="+212 6..." 
                                    />
                                </div>
                            </div>

                            {/* Input Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-widest pl-1">
                                    Détails de votre projet
                                </label>
                                <textarea 
                                    id="message"
                                    rows={4} 
                                    className="w-full bg-brand-cream/60 border border-brand-dark/10 rounded-2xl px-5 py-4 text-brand-dark focus:outline-none focus:border-brand-terracotta/50 focus:bg-white focus:ring-4 focus:ring-brand-terracotta/10 transition-all resize-none text-sm leading-relaxed placeholder:text-brand-dark/30" 
                                    placeholder="Décrivez brièvement votre projet, le style souhaité, l'espace concerné..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full group flex justify-center items-center gap-3 bg-brand-dark text-white font-medium py-5 rounded-2xl hover:bg-brand-terracotta transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-terracotta/20 mt-2"
                            >
                                <span className="text-[13px] tracking-wider font-semibold">Demander un devis gratuit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}