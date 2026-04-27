"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const stats = [
        { number: "100+", label: "Espaces Repensés" },
        { number: "10+", label: "Années d'Expérience" },
        { number: "100%", label: "Clients Satisfaits" },
    ];

    return (
        <section id="about" className="py-24 md:py-40 relative bg-transparent overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
                    
                    {/* Colonne Image (Gauche) - Style Éditorial */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Image Principale */}
                        <div className="relative w-full aspect-[3/4] md:w-[85%] rounded-[32px] overflow-hidden shadow-2xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                                alt="Détail architectural intérieur luxueux par Rizk Design"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                            <div className="absolute inset-0 bg-brand-dark/5 mix-blend-multiply pointer-events-none" />
                        </div>
                        
                        {/* Image Secondaire (Overlapping) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -bottom-10 right-0 md:-right-10 w-[55%] aspect-square rounded-[24px] overflow-hidden border-8 border-[#FAF5EE] shadow-2xl hidden md:block"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                                alt="Détail mobilier Rizk Design"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Badge Années Expérience */}
                        <div className="absolute top-10 -left-4 md:-left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-brand-dark/5 flex flex-col items-center justify-center">
                            <span className="text-3xl font-aesthetic text-brand-terracotta leading-none">10+</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/50 mt-1">Ans d&apos;expertise</span>
                        </div>
                    </motion.div>

                    {/* Colonne Texte & Stats (Droite) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                    >
                        <header className="mb-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-px bg-brand-terracotta" />
                                <h2 className="text-[11px] font-bold text-brand-dark/60 tracking-[0.3em] uppercase">
                                    L&apos;Essence Rizk Design
                                </h2>
                            </div>
                            
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-[1.1] tracking-tight">
                                L&apos;art de sculpter <br />
                                <span className="font-aesthetic italic text-brand-terracotta">l&apos;espace et la lumière.</span>
                            </h3>
                        </header>

                        <div className="text-brand-dark/70 text-lg leading-relaxed font-light space-y-6 mb-14">
                            <p>
                                Rizk Design est un studio d&apos;architecture d&apos;intérieur haut de gamme spécialisé dans la création d&apos;espaces résidentiels et commerciaux uniques. Notre approche fusionne l&apos;authenticité de l&apos;artisanat avec des lignes architecturales résolument contemporaines.
                            </p>
                            <p>
                                Au-delà de la simple décoration, nous concevons des volumes, sélectionnons des matériaux nobles et dessinons du mobilier sur-mesure pour donner naissance à des intérieurs qui racontent votre histoire avec une élégance intemporelle.
                            </p>
                        </div>

                        {/* Statistiques (Design Minimaliste) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-brand-dark/10">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <span className="text-4xl md:text-5xl font-light text-brand-dark font-aesthetic">
                                        {stat.number}
                                    </span>
                                    <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.15em] leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
