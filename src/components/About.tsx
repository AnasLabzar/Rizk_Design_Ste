"use client";

import { motion } from "framer-motion";

export default function About() {
    const stats = [
        { number: "100+", label: "Espaces Repensés" },
        { number: "10+", label: "Années d'Expérience" },
        { number: "100%", label: "Clients Satisfaits" },
        { number: "3D", label: "Rendus Haute Définition" },
    ];

    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Colonne Texte */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <h2 className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">
                                À Propos
                            </h2>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight">
                            Redéfinir l&apos;art de <br />
                            <span className="text-brand-terracotta italic font-serif font-normal">Vivre.</span>
                        </h3>

                        <p className="text-brand-dark/70 text-lg leading-relaxed mt-4">
                            Rizk Design est un studio d&apos;architecture d&apos;intérieur haut de gamme. Nous créons des espaces qui allient esthétique contemporaine et fonctionnalité, en accompagnant les particuliers et les professionnels dans la concrétisation de leur vision.
                        </p>
                    </motion.div>

                    {/* Colonne Statistiques */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-2 gap-4 md:gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-beige/20 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:border-brand-brass/40 hover:shadow-xl transition-all duration-300"
                            >
                                <span className="text-4xl font-bold text-brand-dark">{stat.number}</span>
                                <span className="text-sm text-brand-dark/60 font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
