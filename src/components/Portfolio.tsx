"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

// Show only the first 4 projects on the homepage
const homeProjects = projects.slice(0, 4);

// Carte avec 3D tilt au survol de la souris
function TiltCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 25 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 25 });
    const scale = useSpring(isHovered ? 1.04 : 1, { stiffness: 300, damping: 25 });

    const imgX = useTransform(mouseX, [-0.5, 0.5], ["3%", "-3%"]);
    const imgY = useTransform(mouseY, [-0.5, 0.5], ["3%", "-3%"]);

    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
        mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const isLarge = index === 0;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", transformPerspective: 1000 }}
            className={`relative rounded-[28px] overflow-hidden cursor-pointer ${isLarge ? "md:col-span-2 h-[420px] md:h-[540px]" : "h-[380px] md:h-[400px]"}`}
        >
            <Link href={`/portfolio/${project.slug}`} className="block h-full">
                {/* Image avec parallax interne */}
                <motion.div
                    style={{ x: imgX, y: imgY, scale: 1.12, backgroundImage: `url(${project.img})` }}
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                />

                {/* Glare */}
                <motion.div
                    style={{
                        opacity: isHovered ? 0.15 : 0,
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8), transparent 60%)`,
                    }}
                    className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent z-20" />

                {/* Tag */}
                <div className="absolute top-5 left-5 z-30">
                    <span className={`${project.tagColor} text-white text-[10px] px-3 py-1.5 rounded-full font-semibold tracking-wide uppercase`}>
                        {project.tag}
                    </span>
                </div>

                {/* Year */}
                <div className="absolute top-5 right-5 z-30">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full font-medium">
                        {project.year}
                    </span>
                </div>

                {/* Bottom content */}
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-30 flex justify-between items-end"
                >
                    <div>
                        <p className="text-white/60 text-xs font-medium mb-1.5 uppercase tracking-widest">{project.category} · {project.location}</p>
                        <h4 className={`font-bold text-white ${isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                            {project.title}
                        </h4>
                    </div>

                    <motion.div
                        style={{ transform: isHovered ? "translateZ(50px)" : "translateZ(0px)" }}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/30 shrink-0 ml-4"
                        animate={{ backgroundColor: isHovered ? "rgba(201,74,44,0.9)" : "rgba(255,255,255,0.2)" }}
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                        <span className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">Nos Réalisations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                        Projets<br className="hidden md:block" /> Récents
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-2 text-brand-dark font-medium hover:text-brand-terracotta transition-colors pb-2 border-b-2 border-brand-dark/30 hover:border-brand-terracotta group"
                    >
                        Voir tout le portfolio
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Grid 3D */}
            <div style={{ perspective: "1200px" }} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {homeProjects.map((project, index) => (
                    <TiltCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}