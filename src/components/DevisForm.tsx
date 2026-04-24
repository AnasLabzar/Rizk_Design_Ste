"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, ChevronDown } from "lucide-react";

// Types de projets disponibles
const projectTypes = [
    "Aménagement résidentiel",
    "Design de salon",
    "Chambre & suite parentale",
    "Cuisine & salle de bain",
    "Espace professionnel / Bureau",
    "Hôtel & Restaurant",
    "Rénovation complète",
    "Autre",
];

const budgets = [
    "Moins de 50 000 MAD",
    "50 000 – 150 000 MAD",
    "150 000 – 300 000 MAD",
    "300 000 – 500 000 MAD",
    "Plus de 500 000 MAD",
    "À définir",
];

interface DevisFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DevisForm({ isOpen, onClose }: DevisFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        nom: "",
        telephone: "",
        email: "",
        type: "",
        budget: "",
        ville: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulation envoi
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
        setSubmitted(true);
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => setSubmitted(false), 400);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay sombre */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40"
                    />

                    {/* Panel latéral */}
                    <motion.div
                        key="panel"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 35 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md z-50 flex flex-col"
                        style={{ background: "#FAFAF8" }}
                    >
                        {/* Header du panel */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-brand-beige/30">
                            <div>
                                <p className="text-[10px] font-bold text-brand-terracotta uppercase tracking-[0.2em] mb-0.5">
                                    Rizk Design
                                </p>
                                <h2 className="text-xl font-bold text-brand-dark">
                                    Demande de Devis
                                </h2>
                            </div>
                            <button
                                onClick={handleClose}
                                className="w-9 h-9 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-brand-dark/60" />
                            </button>
                        </div>

                        {/* Contenu scrollable */}
                        <div className="flex-1 overflow-y-auto px-8 py-6">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    /* ── État succès ── */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col items-center justify-center text-center gap-6 py-20"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                                        >
                                            <CheckCircle className="w-16 h-16 text-brand-terracotta" strokeWidth={1.5} />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-brand-dark mb-2">
                                                Demande envoyée !
                                            </h3>
                                            <p className="text-brand-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                                                Merci {form.nom.split(" ")[0]}. Notre équipe vous contactera dans les{" "}
                                                <strong>24 heures</strong> pour discuter de votre projet.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-brand-terracotta transition-colors"
                                        >
                                            Fermer
                                        </button>
                                    </motion.div>
                                ) : (
                                    /* ── Formulaire ── */
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Infos personnelles */}
                                        <div>
                                            <p className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest mb-3">
                                                Vos coordonnées
                                            </p>
                                            <div className="space-y-3">
                                                <Field
                                                    label="Nom complet *"
                                                    type="text"
                                                    placeholder="Ex: Amine Benali"
                                                    value={form.nom}
                                                    onChange={(v) => setForm({ ...form, nom: v })}
                                                    required
                                                />
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Field
                                                        label="Téléphone *"
                                                        type="tel"
                                                        placeholder="+212 6XX XXX XXX"
                                                        value={form.telephone}
                                                        onChange={(v) => setForm({ ...form, telephone: v })}
                                                        required
                                                    />
                                                    <Field
                                                        label="Email"
                                                        type="email"
                                                        placeholder="vous@email.com"
                                                        value={form.email}
                                                        onChange={(v) => setForm({ ...form, email: v })}
                                                    />
                                                </div>
                                                <Field
                                                    label="Ville / Zone"
                                                    type="text"
                                                    placeholder="Ex: Casablanca, Maarif"
                                                    value={form.ville}
                                                    onChange={(v) => setForm({ ...form, ville: v })}
                                                />
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-brand-beige/30" />

                                        {/* Détails du projet */}
                                        <div>
                                            <p className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest mb-3">
                                                Votre projet
                                            </p>
                                            <div className="space-y-3">
                                                <SelectField
                                                    label="Type de projet *"
                                                    options={projectTypes}
                                                    value={form.type}
                                                    onChange={(v) => setForm({ ...form, type: v })}
                                                    required
                                                />
                                                <SelectField
                                                    label="Budget estimatif"
                                                    options={budgets}
                                                    value={form.budget}
                                                    onChange={(v) => setForm({ ...form, budget: v })}
                                                />
                                                <div className="space-y-1.5">
                                                    <label className="text-[11px] font-semibold text-brand-dark/60 uppercase tracking-wider">
                                                        Description du projet
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        placeholder="Décrivez votre espace, vos envies, style souhaité..."
                                                        value={form.message}
                                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                        className="w-full bg-white border border-brand-beige/40 rounded-2xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-terracotta/60 focus:ring-2 focus:ring-brand-terracotta/10 transition-all resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={isLoading || !form.nom || !form.telephone || !form.type}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full bg-brand-dark text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-terracotta transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-2"
                                        >
                                            {isLoading ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Envoyer ma demande
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-[10px] text-brand-dark/30 text-center leading-relaxed">
                                            Réponse garantie sous 24h · Devis 100% gratuit · Sans engagement
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Composants internes réutilisables ──

function Field({
    label,
    type,
    placeholder,
    value,
    onChange,
    required,
}: {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
    required?: boolean;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-brand-dark/60 uppercase tracking-wider">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full bg-white border border-brand-beige/40 rounded-2xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-terracotta/60 focus:ring-2 focus:ring-brand-terracotta/10 transition-all"
            />
        </div>
    );
}

function SelectField({
    label,
    options,
    value,
    onChange,
    required,
}: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
    required?: boolean;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-brand-dark/60 uppercase tracking-wider">
                {label}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full appearance-none bg-white border border-brand-beige/40 rounded-2xl px-4 py-3 pr-10 text-sm text-brand-dark focus:outline-none focus:border-brand-terracotta/60 focus:ring-2 focus:ring-brand-terracotta/10 transition-all cursor-pointer"
                    style={{ color: value ? "" : "rgba(61,46,35,0.3)" }}
                >
                    <option value="" disabled>Sélectionner...</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt} style={{ color: "#3d2e23" }}>
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40 pointer-events-none" />
            </div>
        </div>
    );
}
