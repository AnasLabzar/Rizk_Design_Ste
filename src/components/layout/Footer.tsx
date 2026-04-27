import Link from 'next/link';
import Image from 'next/image';

const partners = [
    { src: "/img/partners/mim.png", alt: "MIM", scale: "scale-100" },
    { src: "/img/partners/one-marrakech.png", alt: "One Marrakech", scale: "scale-[1.8] md:scale-[2]" },
    { src: "/img/partners/sorec.png", alt: "SOREC", scale: "scale-[1.7] md:scale-[1.9]" },
    { src: "/img/partners/srm-marrakech.png", alt: "SRM Marrakech", scale: "scale-[1.8] md:scale-[2]" },
    { src: "/img/partners/image.png", alt: "Gitex", scale: "scale-100" },
    { src: "/img/partners/logo-urba-events.png", alt: "Urba Events", scale: "scale-100" }
];

export default function Footer() {
    return (
        <footer className="w-full relative z-10">
            {/* ── Bandeau Partenaires (Séparation) ── */}
            <div className="w-full bg-brand-cream py-10 overflow-hidden flex whitespace-nowrap border-y border-brand-dark/10 relative z-20">
                <div className="animate-marquee flex gap-16 md:gap-32 items-center">
                    {partners.map((partner, i) => (
                        <div key={`p1-${i}`} className={`relative h-12 md:h-16 w-32 md:w-48 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default flex items-center justify-center shrink-0 ${partner.scale}`}>
                            <Image 
                                src={partner.src} 
                                alt={partner.alt} 
                                fill
                                sizes="(max-width: 768px) 128px, 192px"
                                className="object-contain" 
                            />
                        </div>
                    ))}
                </div>
                {/* On double pour que l'animation boucle sans coupure */}
                <div className="animate-marquee flex gap-16 md:gap-32 items-center ml-16 md:ml-32">
                    {partners.map((partner, i) => (
                        <div key={`p2-${i}`} className={`relative h-12 md:h-16 w-32 md:w-48 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default flex items-center justify-center shrink-0 ${partner.scale}`}>
                            <Image 
                                src={partner.src} 
                                alt={partner.alt} 
                                fill
                                sizes="(max-width: 768px) 128px, 192px"
                                className="object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Footer Principal ── */}
            <div className="bg-brand-cream text-brand-dark pt-24 pb-12 w-full relative">
                {/* Background très subtil */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/[0.02] to-transparent pointer-events-none" />
                
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                    {/* Top Section - Grid Minimaliste */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

                        {/* Colonne 1: Logo & Vision (prend 4 colonnes sur 12) */}
                        <div className="md:col-span-4 flex flex-col gap-8">
                            <Link href="/" className="inline-block group w-fit">
                                <div className="relative p-2">
                                    {/* Effet Professionnel : Glow subtil au survol */}
                                    <div className="absolute inset-0 bg-brand-terracotta/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full" />
                                    <Image
                                        src="/img/logo.png"
                                        alt="Rizk Interior Design"
                                        width={300}
                                        height={100}
                                        className="h-16 md:h-20 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                                    />
                                </div>
                            </Link>
                            <p className="text-brand-dark/60 text-sm leading-relaxed max-w-xs mt-2 pl-2">
                                Votre partenaire de confiance pour un aménagement d&apos;intérieur élégant, moderne et sur mesure.
                            </p>
                        </div>

                        {/* Colonne 2: Navigation (prend 2 colonnes sur 12) */}
                        <div className="md:col-span-2 md:col-start-7">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 mb-6">Navigation</h4>
                            <ul className="flex flex-col gap-4 text-sm font-medium">
                                <li><Link href="/" className="hover:text-brand-terracotta transition-colors">Projets</Link></li>
                                <li><Link href="#about" className="hover:text-brand-terracotta transition-colors">À Propos</Link></li>
                                <li><Link href="#services" className="hover:text-brand-terracotta transition-colors">Expertise</Link></li>
                                <li><span className="text-brand-dark/40 cursor-not-allowed">Boutique</span></li>
                            </ul>
                        </div>

                        {/* Colonne 3: Contact & Socials (prend 3 colonnes sur 12) */}
                        <div className="md:col-span-3 md:col-start-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 mb-6">Contact</h4>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li className="text-brand-dark/70 leading-relaxed">123 Avenue du Design<br />75000 Paris</li>
                                <li>
                                    <a href="mailto:contact@rizk-design.com" className="font-medium hover:text-brand-terracotta transition-colors border-b border-brand-dark/20 hover:border-brand-terracotta pb-0.5">
                                        contact@rizk-design.com
                                    </a>
                                </li>
                            </ul>

                            {/* Réseaux Sociaux Textuels */}
                            <div className="flex gap-6 mt-8 text-sm font-medium">
                                <a href="#" className="hover:text-brand-terracotta transition-colors relative group">
                                    Instagram
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-terracotta group-hover:w-full transition-all duration-300" />
                                </a>
                                <a href="#" className="hover:text-brand-terracotta transition-colors relative group">
                                    LinkedIn
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-terracotta group-hover:w-full transition-all duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Typographie Géante au centre avec effet */}
                    <div className="w-full text-center overflow-hidden mb-12 relative group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent z-10 pointer-events-none" />
                        <h2 className="text-[10vw] md:text-[8vw] font-aesthetic text-brand-dark/5 leading-none select-none group-hover:text-brand-dark/10 transition-colors duration-1000 transform group-hover:scale-105">
                            Rizk Design.
                        </h2>
                    </div>

                    {/* Bottom Section - Copyright & Credits */}
                    <div className="flex flex-col md:flex-row items-center justify-between text-xs text-brand-dark/50 gap-4 pt-8 border-t border-brand-dark/10">
                        <div className="flex gap-6">
                            <p>© {new Date().getFullYear()} Rizk Design.</p>
                            <Link href="#" className="hover:text-brand-dark transition-colors">Mentions Légales</Link>
                        </div>

                        {/* CREDIT URBA GROUPE */}
                        <div className="flex items-center gap-5 font-medium tracking-wide">
                            <span>Branched by</span>
                            <a href="https://urbagroupe.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-terracotta transition-colors group">
                                <Image src="/svg/logo-urba.svg" alt="Urba Groupe" width={140} height={70} className="h-8 w-auto group-hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}