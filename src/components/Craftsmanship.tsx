"use client";

import { motion } from "framer-motion";
import { Sparkles, Hexagon, Layers } from "lucide-react";

export default function Craftsmanship() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ── Colonne Gauche : Composition d'images (Modern Architecture + Moroccan Touch) ── */}
                    <div className="relative h-[600px] w-full md:w-[90%] mx-auto lg:w-full flex justify-center lg:justify-start">
                        
                        {/* Image Principale (Arche Moderne) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute top-0 right-0 lg:right-12 w-[75%] h-[85%] rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop" 
                                alt="Modern Moroccan Interior" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-dark/10" />
                        </motion.div>

                        {/* Image Secondaire (Détail texture/zellige) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute bottom-12 left-0 w-[55%] h-[40%] rounded-[30px] overflow-hidden shadow-xl border-4 border-white"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop" 
                                alt="Zellige Texture" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Badge Flottant Interactif */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute top-1/3 -left-4 md:-left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[220px] border border-white"
                        >
                            <div className="w-12 h-12 bg-brand-terracotta/10 rounded-2xl flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-brand-terracotta" />
                            </div>
                            <p className="font-bold text-brand-dark text-lg leading-tight mb-2">
                                Héritage &<br />Modernité
                            </p>
                            <p className="text-xs text-brand-dark/50 leading-relaxed">
                                Le minimalisme contemporain rencontre l&apos;artisanat local.
                            </p>
                        </motion.div>

                    </div>

                    {/* ── Colonne Droite : Texte et Contenu ── */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                                <h2 className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">
                                    Notre Philosophie
                                </h2>
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight">
                                L&apos;Élégance du <br />
                                <span className="text-brand-terracotta italic font-aesthetic font-normal">Néo-Beldi.</span>
                            </h3>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-brand-dark/60 text-lg leading-relaxed max-w-lg"
                        >
                            Chez Rizk Design, nous croyons que chaque espace doit raconter une histoire. Nous fusionnons les lignes épurées du design international avec la chaleur et la richesse architecturale de l&apos;artisanat marocain.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 pt-8 border-t border-brand-dark/10"
                        >
                            <div className="group">
                                <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center mb-5 group-hover:bg-brand-terracotta transition-colors duration-300">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">Matériaux Nobles</h4>
                                <p className="text-sm text-brand-dark/60 leading-relaxed">
                                    Utilisation subtile de Tadelakt, de Zellige revisité et de bois massif pour des textures uniques et vivantes.
                                </p>
                            </div>
                            
                            <div className="group">
                                <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center mb-5 group-hover:bg-brand-terracotta transition-colors duration-300">
                                    <Hexagon className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">Savoir-Faire</h4>
                                <p className="text-sm text-brand-dark/60 leading-relaxed">
                                    Chaque détail est pensé sur mesure en collaboration avec nos maîtres artisans locaux.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}