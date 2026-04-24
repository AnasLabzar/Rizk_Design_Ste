"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "Combien coûte une étude d'aménagement intérieur ?",
        answer: "Le coût dépend de la surface et de la complexité du projet. Nous proposons un premier rendez-vous gratuit pour évaluer vos besoins, suite auquel nous vous fournissons un devis détaillé (généralement calculé au mètre carré)."
    },
    {
        question: "Intégrez-vous de l'artisanat marocain dans tous vos projets ?",
        answer: "Non, nous nous adaptons à 100% à vos goûts. Cependant, notre signature réside dans notre capacité à intégrer des touches subtiles de Néo-Beldi (matériaux, textures, formes) si vous désirez un intérieur unique qui raconte une histoire."
    },
    {
        question: "Combien de temps dure la phase de conception 3D ?",
        answer: "En moyenne, la phase de conception et de rendus 3D prend entre 2 à 4 semaines, incluant les allers-retours avec vous pour affiner chaque détail avant la validation finale."
    },
    {
        question: "Gérez-vous le chantier et les artisans de A à Z ?",
        answer: "Absolument. Nous proposons un service 'Clé en main'. Nous sélectionnons les meilleurs artisans (menuisiers, maçons, peintres) et coordonnons l'ensemble des travaux pour garantir un résultat fidèle aux plans."
    }
];

export default function Faq() {
    // State bach n-trackiw ina question li m7loula (null = tahaja ma m7loula)
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        // Ila clikina 3la nfs l-question, kat-tssed. Sinon, kat-t7el jdida.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 max-w-4xl mx-auto px-6">

            {/* Header avec animation au scroll */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-xs font-semibold text-brand-brass tracking-[0.2em] uppercase mb-4">
                    Informations
                </h2>
                <h3 className="text-4xl md:text-5xl font-medium text-brand-dark tracking-tight">
                    Questions Fréquentes.
                </h3>
            </motion.div>

            {/* Liste des FAQs */}
            <div className="flex flex-col border-t border-brand-dark/10">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-brand-dark/10"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between py-8 text-left group focus:outline-none"
                            >
                                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-brand-terracotta' : 'text-brand-dark group-hover:text-brand-terracotta'}`}>
                                    {faq.question}
                                </span>

                                <span className="ml-6 flex-shrink-0 text-brand-dark/50 group-hover:text-brand-terracotta transition-colors duration-300">
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Plus className="w-6 h-6 stroke-[1.5]" />
                                    </motion.div>
                                </span>
                            </button>

                            {/* AnimatePresence hia li kat-sme7 l-element y-animé mnin y-khrj mn l-DOM */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-brand-dark/60 leading-relaxed text-lg max-w-3xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}