"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Rencontre & Brief", desc: "Nous discutons de vos besoins, de votre budget et de vos inspirations pour comprendre votre vision." },
    { num: "02", title: "Conception 3D", desc: "Création de plans et de rendus 3D photo-réalistes pour vous projeter dans votre futur espace." },
    { num: "03", title: "Validation & Devis", desc: "Ajustements finaux, choix des matériaux et validation du budget détaillé." },
    { num: "04", title: "Réalisation", desc: "Suivi du chantier et installation du mobilier pour un résultat clé en main." },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const // <--- Zidna 'as const' hna
        }
    }
};

export default function Process() {
    return (
        <section className="py-24 md:py-32 bg-brand-dark text-white rounded-[40px] my-12 px-8 md:px-16 overflow-hidden relative">

            {/* Effet de lumière subtil en arrière-plan */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-terracotta/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header de la section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-xs font-semibold text-brand-terracotta tracking-[0.2em] uppercase mb-4">
                            Méthodologie
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                            Comment nous <br className="hidden md:block" /> travaillons.
                        </h3>
                    </div>
                    <p className="max-w-md text-white/50 text-sm md:text-base leading-relaxed">
                        Une approche structurée et transparente pour transformer votre vision en réalité, de l'idée initiale à la livraison finale.
                    </p>
                </motion.div>

                {/* Grille des étapes */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-16"
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants} className="group relative cursor-default">

                            {/* Ligne de bordure supérieure avec animation au hover */}
                            <div className="h-[1px] w-full bg-white/10 mb-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-0 bg-brand-terracotta group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>

                            <div className="flex flex-col">
                                {/* Numéro Typographique géant */}
                                <span className="text-6xl md:text-7xl font-light text-white/10 group-hover:text-brand-terracotta transition-colors duration-500 mb-6 font-serif italic">
                                    {step.num}
                                </span>

                                <h4 className="text-xl font-medium mb-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                                    {step.title}
                                </h4>

                                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}