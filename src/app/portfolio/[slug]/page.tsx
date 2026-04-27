"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Layers, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { use } from "react";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: Props) {
    const { slug } = use(params);
    const projectIndex = projects.findIndex((p) => p.slug === slug);

    if (projectIndex === -1) notFound();

    const project = projects[projectIndex];
    const nextProject = projects[(projectIndex + 1) % projects.length];
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

    return (
        <main className="min-h-screen">

            {/* ── Full-bleed Hero ─────────────────────────────────────────── */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                {/* Background image */}
                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.img})` }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute top-28 left-6 md:left-12 z-20"
                >
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au portfolio
                    </Link>
                </motion.div>

                {/* Hero content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <span className={`${project.tagColor} text-white text-[10px] font-semibold px-4 py-2 rounded-full tracking-widest uppercase inline-block mb-6`}>
                                {project.tag}
                            </span>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tighter mb-8">
                                {project.title}
                            </h1>

                            {/* Info bar */}
                            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-brand-terracotta" />
                                    {project.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-brand-terracotta" />
                                    {project.year}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-brand-terracotta" />
                                    {project.area}
                                </span>
                                <span className="text-white/30">|</span>
                                <span className="text-white/60">{project.category}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Content Section ──────────────────────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <span className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">À propos du projet</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-light text-brand-dark leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Right: Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:col-span-4 lg:col-start-9"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                            <span className="text-xs font-bold text-brand-dark/50 tracking-[0.2em] uppercase">Services rendus</span>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {project.services.map((service, i) => (
                                <li key={i} className="flex items-center gap-3 text-brand-dark/80 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0" />
                                    {service}
                                </li>
                            ))}
                        </ul>

                        {/* Quick stats */}
                        <div className="mt-12 pt-10 border-t border-brand-dark/10 grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-3xl font-bold text-brand-dark">{project.area}</p>
                                <p className="text-sm text-brand-dark/50 mt-1">Surface aménagée</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-brand-dark">{project.year}</p>
                                <p className="text-sm text-brand-dark/50 mt-1">Année de livraison</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Image Gallery ────────────────────────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`rounded-[20px] overflow-hidden bg-brand-dark ${i === 0 ? "md:col-span-2 lg:col-span-2 h-[420px]" : "h-[300px]"}`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Next / Prev Project Navigation ──────────────────────────── */}
            <section className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-32">
                <div className="border-t border-brand-dark/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Previous */}
                    <Link
                        href={`/portfolio/${prevProject.slug}`}
                        className="group flex items-center gap-6 p-6 rounded-[20px] hover:bg-brand-dark/5 transition-colors"
                    >
                        <div className="w-14 h-14 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all duration-300 shrink-0">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <div>
                            <p className="text-xs text-brand-dark/40 uppercase tracking-widest font-medium mb-1">Projet précédent</p>
                            <p className="text-xl font-bold text-brand-dark">{prevProject.title}</p>
                        </div>
                    </Link>

                    {/* Next */}
                    <Link
                        href={`/portfolio/${nextProject.slug}`}
                        className="group flex items-center justify-end gap-6 p-6 rounded-[20px] hover:bg-brand-dark/5 transition-colors text-right"
                    >
                        <div>
                            <p className="text-xs text-brand-dark/40 uppercase tracking-widest font-medium mb-1">Projet suivant</p>
                            <p className="text-xl font-bold text-brand-dark">{nextProject.title}</p>
                        </div>
                        <div className="w-14 h-14 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all duration-300 shrink-0">
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </section>

        </main>
    );
}
