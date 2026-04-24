import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rizk Design | Aménagement d'intérieur & Mobilier",
  description: "Plateforme professionnelle pour l'aménagement d'intérieur et la commande de mobilier sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="flex flex-col min-h-screen relative">
        {/* ── Global Moroccan Pattern Background ── */}
        <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="global-moroccan" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                            {/* Étoile marocaine simplifiée et élégante */}
                            <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="1" />
                            <path d="M60 30 L90 60 L60 90 L30 60 Z" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="0.5" />
                            <circle cx="60" cy="60" r="15" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="0.5" />
                            <path d="M0 0 L30 30 M120 0 L90 30 M0 120 L30 90 M120 120 L90 90" stroke="var(--color-brand-terracotta)" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="5" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="1" />
                            <circle cx="120" cy="0" r="5" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="1" />
                            <circle cx="0" cy="120" r="5" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="1" />
                            <circle cx="120" cy="120" r="5" fill="none" stroke="var(--color-brand-terracotta)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#global-moroccan)" />
                </svg>
            </div>
            {/* Radial Gradient pour fondre le pattern subtilement (plus visible au centre) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-brand-cream)_90%)] opacity-60" />
        </div>

        <Navbar />

        {/* Le contenu principal (la page) */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Le Footer ajouté ici */}
        <Footer />
      </body>
    </html>
  );
}