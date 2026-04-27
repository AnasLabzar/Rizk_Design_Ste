import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Craftsmanship from "@/components/Craftsmanship";
import About from "@/components/About";
import Faq from "@/components/Faq";

// Import dial l-composant jdid li saybti
import HeroSection from "@/components/HeroSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="w-full">
      
      {/* 1. Le Hero prend TOUTE la largeur et hauteur de l'écran */}
      <HeroSection />

      {/* 2. On remet le conteneur centré pour le reste du site */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-32">

      {/* About Section */}
      <About />

      {/* Baqi les sections */}
      <Services />
      <Craftsmanship />
      <Portfolio />
      <Process />
      <Faq />
      
      </div> {/* Fermeture du conteneur centré pour permettre au composant suivant d'être full-width */}

      {/* Section Bannière Full Width */}
      <CtaBanner />

      {/* Réouverture du conteneur centré pour la suite */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
      <Testimonials />
      <Contact />

    </div>
    </main>
  );
}