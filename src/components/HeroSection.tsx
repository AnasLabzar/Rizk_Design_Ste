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
        size: "large",
    },
    {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
        label: "Suite Parentale",
        size: "small",
    },
    {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
        label: "Villa Moderne",
        size: "small",
    },
];

export default function RizkHero() {
    const [devisOpen, setDevisOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <>
            <div
                ref={containerRef}
                className="relative h-screen w-full overflow-hidden flex items-center"
                style={{ background: "#EAE6E0" }}
            >

                {/* ── Fond texturé subtil ── */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d2e23' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                />

                <div className="relative z-10 w-full h-full flex items-center pb-24 md:pb-0">
                    <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-32 lg:pt-0">

                        {/* ── COLONNE GAUCHE : Texte ── */}
                        <motion.div
                            style={{ y: textY }}
                            className="flex flex-col gap-7"
                        >
                            {/* Tag */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="flex items-center gap-2 w-fit"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                                <span className="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-[0.2em]">
                                    Studio d&apos;Architecture d&apos;Intérieur
                                </span>
                            </motion.div>

                            {/* Titre principal */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.08] tracking-tight"
                            >
                                Votre espace,<br />
                                <span className="font-serif italic font-normal text-brand-terracotta">
                                    réinventé.
                                </span>
                            </motion.h1>

                            {/* Sous-titre */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.55 }}
                                className="text-brand-dark/55 text-base md:text-lg leading-relaxed max-w-md"
                            >
                                Nous créons des intérieurs qui allient esthétique contemporaine
                                et chaleur humaine — de la conception 3D à la livraison clés en main.
                            </motion.p>

                            {/* Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="flex items-center gap-4 flex-wrap"
                            >
                                <motion.button
                                    onClick={() => setDevisOpen(true)}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-3 bg-brand-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-terracotta transition-colors duration-300 group shadow-md"
                                >
                                    Demande de devis
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <a
                                    href="#portfolio"
                                    className="text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors flex items-center gap-1.5 pb-0.5 border-b border-brand-dark/20 hover:border-brand-dark"
                                >
                                    Voir nos projets
                                </a>
                            </motion.div>

                            {/* Stats inline */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                className="flex items-center gap-8 pt-2"
                            >
                                {[
                                    { n: "100+", l: "Projets livrés" },
                                    { n: "10 ans", l: "d'expertise" },
                                    { n: "100%", l: "Satisfaction" },
                                ].map(({ n, l }) => (
                                    <div key={l}>
                                        <p className="text-xl font-bold text-brand-dark">{n}</p>
                                        <p className="text-xs text-brand-dark/45 font-medium">{l}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── COLONNE DROITE : Composition d'images ── */}
                        <motion.div
                            style={{ y: heroImgY }}
                            className="relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[600px] w-full mt-8 lg:mt-0"
                        >
                            {/* Image principale grande */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="absolute top-0 right-0 w-[78%] h-[75%] rounded-[28px] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={heroImages[0].src}
                                    alt={heroImages[0].label}
                                    className="w-full h-full object-cover"
                                />
                                {/* Badge sur image */}
                                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <span className="text-[11px] font-semibold text-brand-dark">{heroImages[0].label}</span>
                                </div>
                            </motion.div>

                            {/* Image secondaire bas-gauche */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                                className="absolute bottom-0 left-0 w-[46%] h-[44%] rounded-[22px] overflow-hidden shadow-xl"
                            >
                                <img
                                    src={heroImages[1].src}
                                    alt={heroImages[1].label}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">{heroImages[1].label}</p>
                            </motion.div>

                            {/* Image tertiaire — carte flottante */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.9 }}
                                className="absolute bottom-8 right-[4%] w-[38%] h-[34%] rounded-[18px] overflow-hidden shadow-xl"
                            >
                                <img
                                    src={heroImages[2].src}
                                    alt={heroImages[2].label}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">{heroImages[2].label}</p>
                            </motion.div>

                            {/* Carte flottante d'info — haut gauche */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                                transition={{ duration: 0.8, delay: 1.1, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 } }}
                                className="absolute top-[18%] left-0 bg-white/85 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/60 w-[52%]"
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-7 h-7 bg-brand-terracotta/10 rounded-lg flex items-center justify-center">
                                        <span className="text-brand-terracotta text-xs font-bold">01</span>
                                    </div>
                                    <span className="text-sm font-semibold text-brand-dark">Conception 3D</span>
                                </div>
                                <p className="text-[11px] text-brand-dark/55 leading-relaxed">
                                    Visualisations réalistes de votre futur espace.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Cards bas de page (mobile + desktop) ── */}
                <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 z-20 flex justify-end gap-3">
                    {[
                        { num: "02", label: "Mobilier Sur-Mesure" },
                        { num: "03", label: "Suivi de Projet" },
                    ].map(({ num, label }) => (
                        <motion.button
                            key={num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.7 }}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="bg-white/75 backdrop-blur-2xl px-5 py-3 rounded-full shadow-md border border-white/50 flex items-center gap-3 hover:bg-white transition-all duration-300 group"
                        >
                            <span className="bg-brand-dark text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">{num}</span>
                            <span className="font-semibold text-sm text-brand-dark">{label}</span>
                            <Plus className="w-3.5 h-3.5 text-brand-dark/40 group-hover:rotate-90 transition-transform duration-300" />
                        </motion.button>
                    ))}
                </div>

                {/* ── Scroll indicator ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border border-brand-dark/20 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-0.5 h-1.5 rounded-full bg-brand-dark/30" />
                    </motion.div>
                </motion.div>

            </div>

            {/* Formulaire Devis */}
            <DevisForm isOpen={devisOpen} onClose={() => setDevisOpen(false)} />
        </>
    );
}