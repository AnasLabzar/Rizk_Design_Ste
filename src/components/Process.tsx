"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Rencontre & Brief", desc: "Nous discutons de vos besoins, de votre budget et de vos inspirations pour comprendre parfaitement votre vision et votre mode de vie." },
    { num: "02", title: "Conception 3D", desc: "Création de plans détaillés et de rendus 3D photo-réalistes. Une étape cruciale pour vous projeter dans votre futur espace." },
    { num: "03", title: "Validation & Devis", desc: "Ajustements finaux, sélection précise des matériaux, du mobilier et validation du budget détaillé de manière transparente." },
    { num: "04", title: "Réalisation", desc: "Suivi du chantier rigoureux, coordination des artisans et installation finale du mobilier pour un résultat clé en main." },
];

export default function Process() {
    return (
        <section className="py-24 md:py-32 bg-transparent relative border-t border-brand-dark/20">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

                {/* ── En-tête de section Éditorial ── */}
                <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:w-7/12"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tighter uppercase break-words hyphens-auto">
                            NOTRE<br />
                            MÉTHODOLOGIE
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-4/12 flex flex-col justify-end"
                    >
                        <p className="text-brand-dark/70 text-lg font-medium leading-relaxed">
                            <span className="text-brand-dark font-bold">Un processus rigoureux.</span><br />
                            De la première esquisse à la remise des clés, nous transformons votre vision en réalité avec une transparence absolue à chaque étape.
                        </p>
                    </motion.div>
                </div>

                {/* ── Grille d'étapes (Border Grid) ── */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-dark/20"
                >
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="p-8 md:p-10 border-r border-b border-brand-dark/20 flex flex-col hover:bg-brand-cream transition-colors duration-500 group"
                        >
                            <span className="text-5xl font-aesthetic text-brand-terracotta mb-8">
                                {step.num}
                            </span>
                            <h4 className="text-xl font-bold text-brand-dark mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                {step.title}
                            </h4>
                            <p className="text-brand-dark/60 font-medium leading-relaxed text-sm md:text-base">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}