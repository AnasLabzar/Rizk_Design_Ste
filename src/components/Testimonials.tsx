"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const reviews = [
    {
        name: "Karim B.",
        role: "Propriétaire de Villa",
        text: "L'équipe Rizk a transformé notre salon. Les rendus 3D étaient exactement ce qu'ils ont livré. Un travail de pro avec un sens du détail impressionnant."
    },
    {
        name: "Sarah L.",
        role: "Directrice d'Hôtel",
        text: "Une approche moderne et une écoute parfaite. Le choix du mobilier et l'agencement ont donné un cachet fou à notre espace de réception."
    },
    {
        name: "Youssef M.",
        role: "Architecte",
        text: "Je collabore souvent avec Rizk Design pour l'aménagement de mes plans. Leur compréhension des volumes et de la lumière est tout simplement inégalée."
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className="py-32 overflow-hidden bg-brand-cream relative">

            {/* Décoration : Énorme guillemet en arrière-plan */}
            <div className="absolute top-20 left-10 md:left-32 text-[20rem] text-brand-dark/5 font-serif leading-none pointer-events-none select-none">
                "
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-xs font-semibold text-brand-terracotta tracking-[0.2em] uppercase mb-4">
                        Témoignages
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-medium text-brand-dark tracking-tight">
                        Ils nous font confiance.
                    </h3>
                </div>

                {/* Slider Container */}
                <div className="relative min-h-[300px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-4xl"
                        >
                            {/* Étoiles */}
                            <div className="flex gap-2 mb-8 text-brand-terracotta">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            {/* Le Texte du Témoignage (Très grand) */}
                            <p className="text-3xl md:text-5xl font-light text-brand-dark leading-[1.3] mb-12 tracking-tight">
                                "{reviews[currentIndex].text}"
                            </p>

                            {/* Auteur */}
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border-2 border-brand-dark/10 flex items-center justify-center font-medium text-xl text-brand-dark">
                                    {reviews[currentIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-medium text-brand-dark text-lg">{reviews[currentIndex].name}</h4>
                                    <p className="text-brand-dark/50">{reviews[currentIndex].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation (Flèches + Compteur) */}
                <div className="mt-16 flex items-center gap-8 border-t border-brand-dark/10 pt-8 max-w-4xl">
                    <div className="flex gap-4">
                        <button
                            onClick={prevReview}
                            className="w-14 h-14 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextReview}
                            className="w-14 h-14 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 group"
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Compteur stylisé (ex: 01 / 03) */}
                    <div className="text-brand-dark/40 font-medium tracking-widest text-sm">
                        <span className="text-brand-dark">0{currentIndex + 1}</span> / 0{reviews.length}
                    </div>
                </div>

            </div>
        </section>
    );
}