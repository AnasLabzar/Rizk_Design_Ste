"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-cream pt-32 pb-24 selection:bg-brand-terracotta selection:text-white">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Bouton retour */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-3 text-brand-dark/50 hover:text-brand-terracotta text-sm font-semibold tracking-widest uppercase transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
                        Retour
                    </Link>
                </motion.div>

                {/* Hero Section Éditoriale */}
                <div className="mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6 max-w-4xl"
                    >
                        <span className="text-[11px] font-bold text-brand-terracotta tracking-[0.3em] uppercase">
                            Notre Maison
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-brand-dark leading-[1.05] tracking-tight">
                            L&apos;architecture <br/>
                            <span className="font-aesthetic italic text-brand-terracotta">comme art de vivre.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Image Bannière */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-[21/9] md:aspect-[2.5/1] relative rounded-[32px] overflow-hidden mb-32 shadow-2xl"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
                        alt="Intérieur somptueux Rizk Design"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Section L'Histoire & Le Fondateur */}
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start mb-40">
                    
                    {/* Colonne Image Fondateur */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-5/12 relative"
                    >
                        <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden shadow-xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
                                alt="Karim Rizk dans son studio"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        {/* Signature SVG Stylisée */}
                        <div className="absolute -bottom-10 -right-10 md:-right-20 bg-white/80 backdrop-blur-md p-8 rounded-[24px] shadow-2xl border border-white">
                            <svg width="200" height="60" viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                                <path d="M20 50 C 30 20, 50 10, 60 40 C 65 55, 75 60, 80 40 C 90 10, 100 20, 110 50 C 120 70, 140 60, 150 40 C 160 20, 180 30, 190 50 C 200 65, 210 50, 220 45" stroke="var(--color-brand-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-[10px] font-bold text-brand-dark/50 tracking-[0.2em] uppercase mt-2 text-center">
                                Karim Rizk - Fondateur
                            </p>
                        </div>
                    </motion.div>

                    {/* Colonne Textes */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-7/12 flex flex-col justify-center pt-10"
                    >
                        <h3 className="text-3xl md:text-5xl font-light text-brand-dark mb-12 leading-tight">
                            &quot;L&apos;harmonie naît de la tension parfaite entre <span className="font-aesthetic italic text-brand-terracotta">tradition et modernité.</span>&quot;
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-dark/70 text-lg leading-relaxed font-light">
                            <div className="space-y-6">
                                <p>
                                    <span className="text-5xl float-left mr-4 mt-2 font-aesthetic text-brand-dark leading-none">E</span>
                                    n 2012, après plusieurs années d&apos;expérience au sein de cabinets d&apos;architecture prestigieux en Europe et au Moyen-Orient, Karim Rizk décide de fonder son propre studio à Casablanca. Animé par la volonté de créer une signature unique, il puise son inspiration dans ses voyages.
                                </p>
                                <p>
                                    Son approche, souvent qualifiée de &quot;Néo-Beldi&quot;, est née d&apos;un constat simple : l&apos;artisanat marocain possède une richesse inouïe qui, une fois épurée, offre un résultat d&apos;une élégance intemporelle.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Aujourd&apos;hui, le studio Rizk Design regroupe une équipe talentueuse de créateurs, d&apos;architectes et de designers 3D. Ensemble, ils gèrent des projets allant de la rénovation de villas privées à la conception d&apos;hôtels boutiques luxueux.
                                </p>
                                <p>
                                    Chaque nouveau projet est une toile vierge, une opportunité de raconter l&apos;histoire de ses clients tout en y apposant cette touche d&apos;excellence et de chaleur humaine qui définit la marque.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section Nos Valeurs */}
                <div className="border-t border-brand-dark/10 pt-24 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { title: "Savoir-faire", desc: "Une maîtrise parfaite des matériaux nobles et des techniques de fabrication, alliée à l'excellence des artisans locaux." },
                            { title: "Sur-mesure", desc: "Chaque espace est pensé comme une œuvre unique, dessinée au millimètre pour refléter l'identité de ses occupants." },
                            { title: "Intemporalité", desc: "Des lignes épurées et des choix esthétiques qui traversent les modes pour une élégance qui perdure dans le temps." }
                        ].map((valeur, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-6"
                            >
                                <span className="text-2xl font-aesthetic text-brand-terracotta">0{i+1}.</span>
                                <h4 className="text-xl font-bold text-brand-dark tracking-wide">{valeur.title}</h4>
                                <p className="text-brand-dark/60 leading-relaxed font-light">{valeur.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
