"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu } from 'lucide-react';
import { useState } from 'react';
import DevisForm from '@/components/DevisForm';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [devisOpen, setDevisOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 w-full pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo Pill */}
          <Link href="/" className="pointer-events-auto bg-[#ffffff]/90 dark:bg-white/10 backdrop-blur-md shadow-sm border border-brand-beige/20 text-brand-dark px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#ffffff] dark:hover:bg-white/20 transition-colors duration-300">
            <Image
              src="/img/logo.png"
              alt="Rizk Interior Design"
              width={120}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Liens de navigation (Desktop) - Pill */}
          <div className="hidden md:flex pointer-events-auto bg-[#ffffff]/90 dark:bg-white/10 backdrop-blur-md shadow-sm border border-brand-beige/20 items-center gap-8 text-[13px] font-medium px-8 py-3 rounded-full">
            <Link href="/portfolio" className="text-brand-dark hover:text-brand-terracotta transition-colors">
              Projets
            </Link>
            <Link href="/about" className="text-brand-dark/70 hover:text-brand-terracotta transition-colors">
              À propos
            </Link>
            <Link href="/expertise" className="text-brand-dark/70 hover:text-brand-terracotta transition-colors">
              Expertise
            </Link>
            <Link href="/contact" className="text-brand-dark/70 hover:text-brand-terracotta transition-colors">
              Contact
            </Link>
            {/* Phase 2: E-commerce */}
            <div className="relative group cursor-not-allowed">
              <span className="text-brand-dark/40">Boutique</span>
              <span className="absolute -top-3 -right-6 text-[9px] bg-brand-terracotta text-white px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Bientôt
              </span>
            </div>
          </div>

          {/* CTA — ouvre le formulaire devis */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                setDevisOpen(true);
                trackEvent('click_devis_navbar');
              }}
              className="pointer-events-auto bg-brand-dark text-white px-6 py-3 rounded-full text-[13px] hover:bg-brand-terracotta transition-colors flex items-center gap-2 font-medium shadow-md"
            >
              Devis gratuit <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setDevisOpen(true)}
            className="md:hidden pointer-events-auto bg-[#ffffff]/90 dark:bg-white/10 backdrop-blur-md shadow-sm border border-brand-beige/20 text-brand-dark p-3 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </button>

        </div>
      </nav>

      {/* Formulaire Devis — Drawer latéral */}
      <DevisForm isOpen={devisOpen} onClose={() => setDevisOpen(false)} />
    </>
  );
}