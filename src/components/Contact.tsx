"use client"; // <-- C'est la ligne magique qui règle l'erreur !

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="bg-brand-beige/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">

                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">Prêt à transformer votre espace ?</h2>
                    <p className="text-brand-dark/70 text-lg">
                        Parlez-nous de votre projet. Notre équipe d'experts est là pour vous accompagner de la conception à la réalisation.
                    </p>
                </div>

                <div className="flex-1 w-full bg-white p-8 rounded-3xl shadow-lg border border-brand-beige/20">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Nom complet</label>
                                <input type="text" className="w-full bg-brand-cream/50 border border-brand-beige/30 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-terracotta transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Téléphone</label>
                                <input type="tel" className="w-full bg-brand-cream/50 border border-brand-beige/30 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-terracotta transition-colors" placeholder="+212 6..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Message</label>
                            <textarea rows={4} className="w-full bg-brand-cream/50 border border-brand-beige/30 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-terracotta transition-colors resize-none" placeholder="Décrivez brièvement votre projet..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-dark text-white font-medium py-4 rounded-xl hover:bg-brand-terracotta transition-colors shadow-md">
                            Demander un devis gratuit
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}