"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, categories, type Category, type Project } from "@/data/projects";

// ── Filter Bar ──────────────────────────────────────────────────────────────
function FilterBar({ active, onChange }: { active: Category; onChange: (c: Category) => void }) {
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                    {active === cat && (
                        <motion.span
                            layoutId="filter-pill"
                            className="absolute inset-0 bg-brand-dark rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                    )}
                    <span className={`relative z-10 transition-colors duration-200 ${active === cat ? "text-white" : "text-brand-dark/60 hover:text-brand-dark"}`}>
                        {cat}
                    </span>
                </button>
            ))}
        </div>
    );
}

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, large }: { project: Project; index: number; large?: boolean }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`group relative overflow-hidden rounded-[24px] bg-brand-dark cursor-pointer ${large ? "row-span-2" : ""}`}
        >
            <Link href={`/portfolio/${project.slug}`} className="block h-full">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    style={{ backgroundImage: `url(${project.img})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className={`${project.tagColor} text-white text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase`}>
                        {project.tag}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full font-medium">
                        {project.year}
                    </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex items-end justify-between">
                    <div>
                        <p className="text-white/50 text-[11px] uppercase tracking-widest font-medium mb-1.5">
                            {project.category} · {project.location}
                        </p>
                        <h3 className={`font-bold text-white leading-tight ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
                            {project.title}
                        </h3>
                    </div>

                    {/* Arrow button */}
                    <motion.div
                        className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 ml-4"
                        animate={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileHover={{ backgroundColor: "rgba(201,74,44,0.9)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                </div>

                {/* Hover description strip */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-[72px] left-6 right-16 z-10"
                >
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{project.shortDesc}</p>
                </motion.div>
            </Link>
        </motion.div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Tous");

    const filtered = activeCategory === "Tous"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <main className="min-h-screen">

            {/* ── Hero Section ────────────────────────────────────────────── */}
            <section className="pt-40 pb-16 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Label */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <span className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">
                                Nos Réalisations
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand-dark leading-[1] tracking-tighter">
                            Portfolio
                        </h1>
                    </motion.div>

                    {/* Project count + subtitle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="md:text-right max-w-sm"
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-full mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                            {projects.length} projets réalisés
                        </div>
                        <p className="text-brand-dark/60 leading-relaxed">
                            De la villa contemporaine au riad de luxe, chaque projet reflète notre engagement pour l&apos;excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Filter Bar ──────────────────────────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 mb-10">
                <div className="flex items-center justify-between border-t border-brand-dark/10 pt-8 gap-6 flex-wrap">
                    <FilterBar active={activeCategory} onChange={setActiveCategory} />
                    <p className="text-sm text-brand-dark/40 font-medium">
                        {filtered.length} projet{filtered.length > 1 ? "s" : ""}
                    </p>
                </div>
            </section>

            {/* ── Masonry Grid ────────────────────────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]"
                    >
                        {filtered.map((project, i) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={i}
                                large={project.featured && i === 0}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* ── CTA Strip ───────────────────────────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-brand-dark rounded-[32px] px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Vous avez un projet ?
                        </h2>
                        <p className="text-white/50 text-lg">
                            Transformons votre vision en réalité.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="flex items-center gap-3 bg-brand-terracotta text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-terracotta/90 transition-colors shrink-0 group"
                    >
                        Demander un devis
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
