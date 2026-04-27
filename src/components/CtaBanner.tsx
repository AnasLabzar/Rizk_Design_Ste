"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/luxury-banner.png"
                    alt="Intérieur luxueux par Rizk Design"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                />
                {/* Overlay sombre pour la lisibilité */}
                <div className="absolute inset-0 bg-brand-dark/40" />
            </div>

            {/* Contenu */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-aesthetic text-white mb-6 drop-shadow-lg">
                        Prêt à sublimer votre intérieur ?
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-light drop-shadow-md">
                        De la conception architecturale à la réalisation sur-mesure de votre mobilier. Discutons de votre projet.
                    </p>
                    
                    <Link href="#contact">
                        <button className="group relative px-8 py-4 bg-white text-brand-dark rounded-full font-medium text-sm tracking-wide uppercase overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-3">
                            <span className="relative z-10">Démarrer un projet</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-brand-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
