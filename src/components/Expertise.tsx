export default function Expertise() {
    const skills = [
        { name: "Aménagement Résidentiel", value: "90%" },
        { name: "Design d'Espaces Commerciaux (Hôtels/Bureaux)", value: "75%" },
        { name: "Conception de Mobilier Sur-Mesure", value: "85%" },
        { name: "Rendus 3D & Réalité Virtuelle", value: "95%" },
    ];

    return (
        <section className="py-24 bg-brand-dark text-white rounded-[40px] px-8 md:px-16 my-12 relative overflow-hidden">
            {/* Motif décoratif en fond */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 100 100">
                    <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="currentColor" />
                </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Une Expertise <br /><span className="text-brand-brass">Basée sur la Précision.</span></h2>
                    <p className="text-brand-cream/70 text-lg leading-relaxed mb-8">
                        De l'esquisse initiale à la remise des clés, nous maîtrisons chaque étape du processus architectural. Notre équipe technique utilise les derniers logiciels de pointe pour garantir une exécution parfaite.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-brand-beige/20 pt-8">
                        <div>
                            <p className="text-5xl font-light text-brand-terracotta mb-2">45<span className="text-2xl text-brand-brass">+</span></p>
                            <p className="text-sm font-bold tracking-wider uppercase text-brand-cream/60">Partenaires Artisans</p>
                        </div>
                        <div>
                            <p className="text-5xl font-light text-brand-terracotta mb-2">3D</p>
                            <p className="text-sm font-bold tracking-wider uppercase text-brand-cream/60">Rendus Hyper-réalistes</p>
                        </div>
                    </div>
                </div>

                {/* Barres de progression */}
                <div className="flex flex-col justify-center gap-8">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-medium text-sm md:text-base">{skill.name}</span>
                                <span className="text-brand-brass font-bold">{skill.value}</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-brand-terracotta to-brand-brass rounded-full"
                                    style={{ width: skill.value }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}