"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, PenTool, Box, Sun, Layers, Ruler, Monitor } from "lucide-react";

const expertises = [
    {
        id: "01",
        title: "Conception & Architecture",
        desc: "Notre processus commence par une immersion totale dans votre univers. Nous ne nous contentons pas de dessiner des plans ; nous traduisons vos émotions et votre style de vie en concepts spatiaux avant-gardistes. Chaque ligne tracée est minutieusement pensée pour optimiser les volumes, la lumière et la fonctionnalité.",
        features: [
            "Étude approfondie de faisabilité architecturale",
            "Élaboration de plans d'aménagement 2D et élévations",
            "Modélisation 3D et rendus photoréalistes ultra-détaillés",
            "Création du dossier de conception final complet"
        ],
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        badge: "Rendus 8K",
        tools: ["AutoCAD", "SketchUp Pro", "V-Ray"]
    },
    {
        id: "02",
        title: "Aménagement Intérieur",
        desc: "L'art de l'aménagement réside dans l'équilibre subtil entre le vide et le plein. Nous sculptons l'espace intérieur pour créer une fluidité naturelle. La sélection rigoureuse des matériaux nobles, des textures chaleureuses et l'étude poussée de la colorimétrie donnent naissance à des atmosphères immersives et uniques.",
        features: [
            "Étude ergonomique, zonage et optimisation des flux",
            "Sélection pointue de matériaux, revêtements et textiles",
            "Étude d'éclairage architectural et décoratif",
            "Harmonisation colorimétrique et moodboards"
        ],
        image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1200&auto=format&fit=crop",
        badge: "Sur-mesure",
        tools: ["Adobe Photoshop", "Corona Render", "Dialux"]
    },
    {
        id: "03",
        title: "Mobilier Sur-Mesure",
        desc: "La véritable exclusivité ne s'achète pas, elle se dessine. Notre studio conçoit des pièces maîtresses de mobilier, façonnées par les meilleurs artisans d'art. D'un dressing intégré aux finitions parfaites à une table sculpturale en marbre, chaque élément est une œuvre d'art fonctionnelle intégrée à l'architecture.",
        features: [
            "Design exclusif de pièces uniques et intégrées",
            "Menuiserie haut de gamme et ébénisterie d'art",
            "Sourcing sélectif de matériaux (Marbre, Noyer, Laiton...)",
            "Suivi de fabrication et contrôle qualité artisanal"
        ],
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
        badge: "Artisanat d'art",
        tools: ["Rhinoceros 3D", "SolidWorks"]
    },
    {
        id: "04",
        title: "Maîtrise d'Œuvre & Suivi",
        desc: "Une conception brillante nécessite une exécution sans faille. Nous assurons la direction artistique et technique de votre chantier. Notre pilotage rigoureux coordonne l'élite des artisans et des entrepreneurs pour garantir que le moindre détail imaginé soit fidèlement retranscrit dans la réalité, dans le respect des délais.",
        features: [
            "Élaboration des cahiers des charges et consultations",
            "Planning stratégique et coordination des intervenants",
            "Visites de chantier hebdomadaires et rapports",
            "Réception minutieuse et levée des réserves"
        ],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        badge: "Clé en main",
        tools: ["MS Project", "Revit Architecture"]
    }
];

const technologies = [
    { name: "Modélisation 3D", icon: Box, desc: "SketchUp Pro, 3ds Max, Revit" },
    { name: "Rendus Photoréalistes", icon: Sun, desc: "V-Ray, Corona Renderer, Lumion" },
    { name: "Plans & Architecture", icon: Ruler, desc: "AutoCAD, ArchiCAD" },
    { name: "Design & Moodboards", icon: PenTool, desc: "Suite Adobe (Photoshop, InDesign)" },
    { name: "Calcul d'Éclairage", icon: Monitor, desc: "Dialux evo" },
    { name: "BIM & Gestion", icon: Layers, desc: "Navisworks, MS Project" },
];

export default function ExpertisePage() {
    return (
        <main className="min-h-screen bg-brand-cream pt-32 pb-24 selection:bg-brand-terracotta selection:text-white overflow-hidden relative">
            
            {/* Background subtil */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-terracotta/5 blur-[120px] rounded-full" />
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-brand-dark/5 blur-[100px] rounded-full" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                {/* Bouton retour (Glassmorphism) */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 inline-block"
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-3 text-brand-dark hover:text-brand-terracotta text-[11px] font-bold tracking-[0.2em] uppercase transition-all group bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-sm hover:shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-500" />
                        Retour à l&apos;accueil
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="mb-24 md:mb-40">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-end"
                    >
                        <div className="flex-1">
                            <span className="inline-block bg-white/60 backdrop-blur-xl border border-white px-4 py-2 rounded-full text-[10px] font-bold text-brand-terracotta tracking-[0.3em] uppercase mb-6 shadow-sm">
                                Notre Savoir-Faire
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-brand-dark leading-[1.05] tracking-tight">
                                De l&apos;esquisse <br/>
                                <span className="font-aesthetic italic text-brand-terracotta">à la réalité.</span>
                            </h1>
                        </div>
                        <div className="flex-1 lg:max-w-xl pb-4">
                            <p className="text-brand-dark/70 text-lg leading-relaxed font-light bg-white/30 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-lg shadow-brand-dark/[0.02]">
                                Notre studio déploie une approche holistique pour vous accompagner à chaque étape de votre projet. De la première esquisse conceptuelle jusqu&apos;à la remise des clés, nous orchestons la matière, la lumière et l&apos;espace pour garantir un résultat d&apos;une perfection absolue.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Liste des Expertises (Layout Alterné & Glassmorphism) */}
                <div className="space-y-32 md:space-y-48 mb-40">
                    {expertises.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div 
                                key={exp.id} 
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative`}
                            >
                                {/* Colonne Image avec Glass Badge */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full lg:w-1/2 relative"
                                >
                                    <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl group">
                                        <Image 
                                            src={exp.image}
                                            alt={exp.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply pointer-events-none" />
                                    </div>
                                    
                                    {/* Glassmorphism Floating Badge */}
                                    <div className={`absolute ${isEven ? '-right-6 md:-right-12' : '-left-6 md:-left-12'} bottom-12 bg-white/40 backdrop-blur-2xl border border-white/80 p-6 rounded-3xl shadow-2xl z-20 max-w-[200px]`}>
                                        <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest block mb-1">Focus</span>
                                        <span className="text-xl font-aesthetic text-brand-terracotta leading-tight">{exp.badge}</span>
                                    </div>
                                </motion.div>

                                {/* Colonne Texte avec Glass Cards */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full lg:w-1/2 flex flex-col justify-center relative z-10"
                                >
                                    <span className="text-6xl md:text-9xl font-aesthetic text-brand-dark/5 leading-none mb-2 absolute -top-10 -left-6 z-0 select-none">
                                        {exp.id}
                                    </span>
                                    
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8 leading-tight">
                                            {exp.title}
                                        </h2>
                                        
                                        <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] mb-10">
                                            <p className="text-brand-dark/80 text-lg leading-relaxed font-light">
                                                {exp.desc}
                                            </p>
                                        </div>
                                        
                                        {/* Liste des features (Detailed) */}
                                        <div className="space-y-4 mb-8">
                                            <h4 className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] mb-6">Livrables & Processus</h4>
                                            {exp.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-4 bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                                                    <div className="w-6 h-6 rounded-full bg-brand-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                                                    </div>
                                                    <span className="text-[15px] font-medium text-brand-dark/80">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Logiciels Outils Pill */}
                                        <div className="flex flex-wrap gap-2 mt-8">
                                            {exp.tools.map((tool, i) => (
                                                <span key={i} className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/60 bg-brand-beige/30 px-4 py-2 rounded-full border border-brand-beige/50">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* Section Technologies & Outils (Glassmorphism Grid) */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-40"
                >
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/60 backdrop-blur-xl border border-white px-4 py-2 rounded-full text-[10px] font-bold text-brand-terracotta tracking-[0.3em] uppercase mb-6 shadow-sm">
                            Arsénal Technique
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-brand-dark leading-tight">
                            Technologies de <span className="font-aesthetic italic text-brand-terracotta">pointe.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, i) => {
                            const Icon = tech.icon;
                            return (
                                <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[32px] hover:bg-white/70 transition-all duration-500 hover:shadow-xl hover:shadow-brand-dark/5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-terracotta/10 transition-all duration-500">
                                        <Icon className="w-5 h-5 text-brand-dark group-hover:text-brand-terracotta transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-bold text-brand-dark mb-2">{tech.name}</h4>
                                    <p className="text-sm text-brand-dark/60 font-medium">{tech.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* CTA Final Glassmorphism */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-brand-dark rounded-[40px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Glass Overlay on Dark */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-terracotta/20 blur-[100px] rounded-full mix-blend-screen" />
                    
                    <h3 className="text-4xl md:text-6xl font-light text-white mb-6 relative z-10 leading-tight">
                        Confiez-nous votre <br className="hidden md:block" />
                        <span className="font-aesthetic italic text-brand-terracotta">prochain chef-d&apos;œuvre.</span>
                    </h3>
                    <p className="text-white/60 text-lg max-w-xl mx-auto mb-12 relative z-10 font-light">
                        Que vous souhaitiez repenser entièrement votre résidence ou concevoir un espace commercial d&apos;exception, notre équipe est à votre écoute.
                    </p>
                    <Link 
                        href="/#contact"
                        className="group inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all duration-500 relative z-10 shadow-xl"
                    >
                        <span>Démarrer un projet</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand-dark/10 flex items-center justify-center transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
