"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const servicesList = [
    {
        title: "Conception 3D",
        description: "Visualisez votre futur espace avec nos rendus hyper-réalistes. Une projection parfaite, élevant la modélisation au rang d'œuvre digitale.",
        gif: "https://theexceptionalfurniture.com/wp-content/uploads/2024/08/turbulent-flow_13319680.gif"
    },
    {
        title: "Aménagement",
        description: "Nous sculptons les volumes pour allier esthétique contemporaine et fluidité. Chaque aménagement respecte l'âme du lieu.",
        gif: "https://theexceptionalfurniture.com/wp-content/uploads/2024/08/art-work_15353530.gif"
    },
    {
        title: "Mobilier Sur-Mesure",
        description: "La rareté de l'artisanat d'exception. Nos pièces sont fabriquées par des artisans d'élite avec des matériaux nobles.",
        gif: "https://theexceptionalfurniture.com/wp-content/uploads/2024/08/natural-product_14955332.gif"
    },
    {
        title: "Suivi de Chantier",
        description: "Nous gérons chaque corps de métier avec une rigueur implacable pour que l'œuvre finale soit le reflet exact de la conception.",
        gif: "https://theexceptionalfurniture.com/wp-content/uploads/2024/08/tile_10966491.gif"
    },
];

export default function Services() {
    return (
        <section id="services" className="pt-24 md:pt-32 pb-24 bg-transparent relative">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                
                {/* ── En-tête Éditorial Luxe ── */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-brand-dark/10 pb-12 mb-16 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <h2 className="text-[11px] font-bold text-brand-dark/50 tracking-[0.25em] uppercase">
                                Nos Domaines d&apos;Expertise
                            </h2>
                        </div>
                        <h3 className="text-5xl md:text-6xl font-aesthetic text-brand-dark leading-[1.1]">
                            L&apos;excellence à <span className="text-brand-terracotta">chaque étape.</span>
                        </h3>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:max-w-sm"
                    >
                        <p className="text-brand-dark/60 text-base font-medium leading-relaxed">
                            Une approche holistique où l&apos;architecture rencontre l&apos;art. Découvrez nos quatre piliers fondamentaux pour transformer votre vision en réalité.
                        </p>
                    </motion.div>
                </div>

                {/* ── Grille de services (Luxe & Minimaliste) ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-[#ffffff]/40 dark:bg-[#ffffff]/5 hover:bg-[#ffffff] dark:hover:bg-[#ffffff]/10 transition-colors duration-500 rounded-[20px] p-8 md:p-10 border border-brand-dark/[0.04] shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col"
                        >
                            {/* Icone GIF Animé */}
                            <div className="mb-10 relative">
                                <div className="w-20 h-20 rounded-full bg-[#ffffff] dark:bg-[#ffffff]/10 flex items-center justify-center overflow-hidden border border-brand-dark/5 group-hover:border-brand-terracotta/20 transition-colors duration-500 relative">
                                    {/* unoptimized={true} est CRITIQUE pour que les GIFs s'animent dans Next.js */}
                                    <Image 
                                        src={service.gif}
                                        alt={service.title}
                                        width={48}
                                        height={48}
                                        unoptimized={true}
                                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                {/* Petit numéro stylisé en arrière plan */}
                                <span className="absolute -top-4 -right-2 text-7xl font-aesthetic text-brand-dark/[0.03] pointer-events-none group-hover:text-brand-terracotta/[0.05] transition-colors duration-500">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Contenu */}
                            <h4 className="text-xl font-bold text-brand-dark mb-4 tracking-tight">
                                {service.title}
                            </h4>
                            <p className="text-brand-dark/60 text-sm leading-relaxed font-medium mt-auto">
                                {service.description}
                            </p>
                            
                            {/* Ligne décorative au hover */}
                            <div className="w-0 h-[2px] bg-brand-terracotta mt-8 group-hover:w-full transition-all duration-500 ease-out" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}