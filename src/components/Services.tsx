"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const servicesList = [
    {
        num: "01",
        title: "Conception 3D",
        description: "Visualisez votre futur espace avec nos rendus 3D hyper-réalistes avant même le début des travaux. Une projection parfaite de vos idées.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
        num: "02",
        title: "Aménagement",
        description: "Optimisation de votre intérieur pour allier esthétique moderne, confort et fonctionnalité absolue. Des espaces fluides et réfléchis.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        num: "03",
        title: "Mobilier Sur-Mesure",
        description: "Choix de pièces uniques et de mobilier haut de gamme adaptés à votre style. Nous sélectionnons les meilleurs matériaux.",
        image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=1200&auto=format&fit=crop",
    },
    {
        num: "04",
        title: "Suivi de Projet",
        description: "Nous coordonnons l'ensemble des étapes et assurons le bon déroulement de votre aménagement de A à Z. Zéro stress pour vous.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect on the header
    const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    return (
        <section id="services" ref={sectionRef} className="py-24 md:py-32 relative">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                
                {/* ── En-tête de section ── */}
                <motion.div 
                    style={{ y: headerY }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <h2 className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">
                                Notre Expertise
                            </h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight">
                            Des espaces conçus <br />
                            <span className="font-serif italic font-normal text-brand-terracotta">sur mesure.</span>
                        </h3>
                    </div>
                    <p className="text-brand-dark/60 text-base md:text-lg max-w-md leading-relaxed">
                        Nous transformons vos visions en réalité grâce à un accompagnement personnalisé et une expertise technique pointue pour chaque détail.
                    </p>
                </motion.div>

                {/* ── Grille de services Premium ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-brand-beige/40 hover:border-brand-terracotta/20 min-h-[420px] md:min-h-[480px] p-8 md:p-12 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                        >
                            {/* Image de fond au hover */}
                            <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Contenu de la carte */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-6xl md:text-7xl font-light text-brand-dark/5 group-hover:text-white/20 transition-colors duration-500 font-serif">
                                        {service.num}
                                    </span>
                                    <div className="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:border-white/20 group-hover:bg-white/10 group-hover:backdrop-blur-md transition-all duration-500 group-hover:-rotate-45">
                                        <ArrowUpRight className="w-6 h-6 text-brand-dark group-hover:text-white transition-colors duration-500" />
                                    </div>
                                </div>

                                <div className="mt-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h4 className="text-2xl md:text-3xl font-bold text-brand-dark group-hover:text-white transition-colors duration-500 mb-4 tracking-tight">
                                        {service.title}
                                    </h4>
                                    <p className="text-brand-dark/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}