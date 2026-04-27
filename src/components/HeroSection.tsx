"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import DevisForm from "@/components/DevisForm";

// ── Images de projets d'intérieur ──
const heroImages = [
    {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
        label: "Salon Contemporain",
    },
    {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
        label: "Suite Parentale",
    },
    {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
        label: "Villa Moderne",
    },
];

export default function HeroSection() {
    const [devisOpen, setDevisOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Crosshair component pour le côté architectural
    const Crosshair = ({ className }: { className: string }) => (
        <div className={`absolute w-4 h-4 text-brand-dark/20 flex items-center justify-center ${className}`}>
            <Plus className="w-full h-full" strokeWidth={1} />
        </div>
    );

    return (
        <>
            <div
                ref={containerRef}
                className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#F2EFEA]"
            >
                {/* ── Motif Architectural : Dot Grid ── */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle at center, var(--color-brand-dark) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        opacity: 0.06
                    }}
                />

                {/* Repères Architecturaux (Crosshairs) */}
                <Crosshair className="top-8 left-8 hidden md:flex" />
                <Crosshair className="top-8 right-8 hidden md:flex" />
                <Crosshair className="bottom-8 left-8 hidden md:flex" />
                <Crosshair className="bottom-8 right-8 hidden md:flex" />

                {/* Ligne directrice subtile centrale */}
                <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-brand-dark/[0.03] pointer-events-none hidden lg:block" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

                    {/* ── COLONNE GAUCHE : Texte & Stats ── */}
                    <motion.div
                        style={{ y: textY }}
                        className="w-full lg:w-5/12 flex flex-col gap-8"
                    >
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex items-center gap-3 w-fit"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                            <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.25em]">
                                Studio d'Architecture d'Intérieur
                            </span>
                        </motion.div>

                        {/* Titre principal */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-6xl md:text-7xl lg:text-[5rem] font-bold text-brand-dark leading-[1.05] tracking-tight"
                        >
                            Votre espace,<br />
                            <span className="font-aesthetic font-normal text-brand-terracotta pr-4">
                                sublime.
                            </span>
                        </motion.h1>

                        {/* Sous-titre */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.55 }}
                            className="text-brand-dark/60 text-lg leading-relaxed max-w-md font-medium"
                        >
                            Nous créons des intérieurs qui allient esthétique contemporaine
                            et chaleur humaine — de la conception 3D à la livraison clés en main.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex items-center gap-6 flex-wrap"
                        >
                            <motion.button
                                onClick={() => setDevisOpen(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-terracotta transition-colors duration-300 group shadow-lg shadow-brand-dark/10"
                            >
                                Demande de devis
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <a
                                href="#portfolio"
                                className="text-sm font-semibold text-brand-dark/50 hover:text-brand-dark transition-colors flex items-center gap-1.5 group"
                            >
                                Voir nos projets
                                <span className="block w-0 h-[1px] bg-brand-dark group-hover:w-full transition-all duration-300" />
                            </a>
                        </motion.div>

                        {/* Stats - Style Éditorial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex items-center gap-6 md:gap-10 pt-4 mt-4 border-t border-brand-dark/10"
                        >
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-brand-dark">100+</span>
                                <span className="text-[11px] text-brand-dark/50 font-semibold uppercase tracking-wider mt-1">Projets livrés</span>
                            </div>
                            <div className="w-[1px] h-8 bg-brand-dark/10" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-brand-dark">10 ans</span>
                                <span className="text-[11px] text-brand-dark/50 font-semibold uppercase tracking-wider mt-1">D'expertise</span>
                            </div>
                            <div className="w-[1px] h-8 bg-brand-dark/10 hidden md:block" />
                            <div className="flex flex-col hidden md:flex">
                                <span className="text-2xl font-bold text-brand-dark">100%</span>
                                <span className="text-[11px] text-brand-dark/50 font-semibold uppercase tracking-wider mt-1">Satisfaction</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── COLONNE DROITE : Composition d'Images (Aspect Ratios stricts) ── */}
                    <motion.div
                        style={{ y: heroImgY }}
                        className="w-full lg:w-7/12 relative aspect-square md:aspect-[4/3] lg:aspect-square"
                    >
                        {/* 1. Image principale (Haut Droite) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[32px] overflow-hidden shadow-2xl z-10"
                        >
                            <img src={heroImages[0].src} alt={heroImages[0].label} className="w-full h-full object-cover" />
                        </motion.div>

                        {/* 2. Image secondaire (Bas Gauche) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[24px] overflow-hidden shadow-2xl z-20 border-4 border-[#F2EFEA]"
                        >
                            <img src={heroImages[1].src} alt={heroImages[1].label} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                            <p className="absolute bottom-4 left-5 text-white text-[11px] font-bold tracking-wide uppercase">{heroImages[1].label}</p>
                        </motion.div>

                        {/* 3. Image tertiaire (Bas Droite, petite) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.8 }}
                            className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-[20px] overflow-hidden shadow-xl z-30 border-4 border-[#F2EFEA]"
                        >
                            <img src={heroImages[2].src} alt={heroImages[2].label} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                            <p className="absolute bottom-3 left-4 text-white text-[10px] font-bold tracking-wide uppercase">{heroImages[2].label}</p>
                        </motion.div>

                        {/* 4. Carte Glassmorphism Flottante (01 Conception 3D) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                            transition={{ duration: 0.8, delay: 1, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 } }}
                            className="absolute top-[25%] -left-[5%] bg-white/70 backdrop-blur-xl p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white w-[60%] z-40"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-brand-terracotta/10 rounded-full flex items-center justify-center">
                                    <span className="text-brand-terracotta text-xs font-bold">01</span>
                                </div>
                                <span className="text-sm font-bold text-brand-dark">Conception 3D</span>
                            </div>
                            <p className="text-[11px] text-brand-dark/60 font-medium leading-relaxed">
                                Visualisations hyper-réalistes de votre futur espace avant les travaux.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Badges Bas Droite ── */}
                <div className="absolute bottom-6 md:bottom-10 right-5 md:right-12 z-50 flex flex-col sm:flex-row justify-end gap-3 pointer-events-none">
                    {[
                        { num: "02", label: "Mobilier Sur-Mesure" },
                        { num: "03", label: "Suivi de Projet" },
                    ].map(({ num, label }, i) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + (i * 0.1), duration: 0.7 }}
                            className="bg-white/80 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg shadow-brand-dark/5 border border-white flex items-center gap-3 pointer-events-auto cursor-pointer hover:bg-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="bg-brand-dark text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-bold">{num}</span>
                            <span className="font-bold text-xs text-brand-dark">{label}</span>
                            <Plus className="w-3.5 h-3.5 text-brand-dark/40" />
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Formulaire Devis */}
            <DevisForm isOpen={devisOpen} onClose={() => setDevisOpen(false)} />
        </>
    );
}