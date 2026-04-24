import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#FAF5EE] text-brand-dark pt-24 pb-12 w-full border-t border-brand-dark/5">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Section - Grid Minimaliste */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

                    {/* Colonne 1: Logo & Vision (prend 4 colonnes sur 12) */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/img/logo.png"
                                alt="Rizk Interior Design"
                                width={180}
                                height={60}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-brand-dark/60 text-sm leading-relaxed max-w-xs">
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
                            <li className="text-brand-dark/70">123 Avenue du Design<br/>75000 Paris</li>
                            <li>
                                <a href="mailto:contact@rizk-design.com" className="font-medium hover:text-brand-terracotta transition-colors border-b border-brand-dark/20 pb-0.5">
                                    contact@rizk-design.com
                                </a>
                            </li>
                        </ul>
                        
                        {/* Réseaux Sociaux Textuels (Plus élégant que les icônes) */}
                        <div className="flex gap-6 mt-8 text-sm font-medium">
                            <a href="#" className="hover:text-brand-terracotta transition-colors">Instagram</a>
                            <a href="#" className="hover:text-brand-terracotta transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Typographie Géante au centre */}
                <div className="w-full text-center overflow-hidden mb-12">
                     <h2 className="text-[15vw] md:text-[12vw] font-serif italic text-brand-dark/5 leading-none select-none">
                         rizk design.
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
                        {/* Option 1: Texte simple stylisé */}
                        <a href="https://urbagroupe.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-terracotta transition-colors">
                            <Image src="/svg/logo-urba.svg" alt="Image Design" width={140} height={70} className="h-8 w-auto" />
                        </a>
                        
                        {/* Option 2 (Décommente si tu as le logo SVG/PNG):
                        <a href="https://urbagroupe.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/img/urba-logo.png" alt="Urba Groupe" width={60} height={20} className="h-4 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                        </a>
                        */}
                    </div>
                </div>

            </div>
        </footer>
    );
}