// Centralized project data — used by homepage portfolio section AND /portfolio page

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: "Résidentiel" | "Commercial" | "Hôtellerie";
    tag: string;
    tagColor: string;
    year: string;
    location: string;
    area: string;
    img: string; // Hero / thumbnail image
    images: string[]; // Gallery images for detail page
    shortDesc: string;
    description: string;
    services: string[];
    featured?: boolean; // Featured = large card in grid
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "villa-moderne",
        title: "Villa Moderne",
        category: "Résidentiel",
        tag: "Coup de cœur",
        tagColor: "bg-brand-terracotta",
        year: "2024",
        location: "Casablanca, Maroc",
        area: "320 m²",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Un salon contemporain ouvert sur un jardin d'intérieur.",
        description:
            "Cette villa de 320m² à Casablanca illustre parfaitement notre approche Néo-Beldi: des lignes épurées contemporaines fusionnent avec des matériaux nobles marocains — Tadelakt, Zellige revisité et bois massif. Chaque pièce raconte une histoire entre tradition et modernité.",
        services: ["Conception 3D", "Aménagement intérieur complet", "Sélection mobilier", "Suivi de chantier"],
        featured: true,
    },
    {
        id: 2,
        slug: "appartement-haussmannien",
        title: "Appartement Haussmannien",
        category: "Résidentiel",
        tag: "Haut de gamme",
        tagColor: "bg-brand-dark",
        year: "2024",
        location: "Paris, France",
        area: "180 m²",
        img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Rénovation complète d'un appartement parisien avec touches dorées.",
        description:
            "Un appartement haussmannien entièrement repensé, mariant moulures d'époque et design contemporain. Les volumes généreux ont été sublimés par une palette chromatique sobre — ivoire, bronze et ébène — pour un résultat d'une élégance intemporelle.",
        services: ["Rénovation complète", "Conception 3D", "Décoration & styling", "Mobilier sur-mesure"],
    },
    {
        id: 3,
        slug: "bureaux-startup",
        title: "Bureaux Start-up",
        category: "Commercial",
        tag: "Professionnel",
        tagColor: "bg-brand-dark/70",
        year: "2023",
        location: "Rabat, Maroc",
        area: "450 m²",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Espace de travail collaboratif inspirant et modulable.",
        description:
            "Un plateau de bureaux de 450m² conçu pour stimuler la créativité et la collaboration. Zones de travail ouvertes, salles de réunion acoustiques, espaces de détente — chaque mètre carré a été pensé pour maximiser la productivité et le bien-être des équipes.",
        services: ["Aménagement bureau", "Conception spatiale", "Acoustic design", "Mobilier ergonomique"],
    },
    {
        id: 4,
        slug: "penthouse-contemporain",
        title: "Penthouse Contemporain",
        category: "Résidentiel",
        tag: "Exclusif",
        tagColor: "bg-brand-brass",
        year: "2023",
        location: "Tanger, Maroc",
        area: "280 m²",
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Penthouse avec vue panoramique sur la méditerranée.",
        description:
            "Un penthouse d'exception à Tanger, entièrement orienté vers la mer Méditerranée. Les grandes baies vitrées dissolvent la frontière entre intérieur et extérieur. Le mobilier sur-mesure, fabriqué par nos artisans locaux, répond à l'échelle généreuse des espaces.",
        services: ["Design d'intérieur premium", "Mobilier sur-mesure", "Terrasse & outdoor", "Domotique"],
        featured: true,
    },
    {
        id: 5,
        slug: "riad-neo-beldi",
        title: "Riad Néo-Beldi",
        category: "Hôtellerie",
        tag: "Signature",
        tagColor: "bg-brand-terracotta",
        year: "2023",
        location: "Marrakech, Maroc",
        area: "600 m²",
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Un riad de 10 suites où tradition et luxe contemporain se rencontrent.",
        description:
            "Notre projet phare à Marrakech : la rénovation complète d'un riad centenaire en hôtel boutique de 10 suites. Nous avons respecté l'âme du lieu — zellige, fontaines, cours arborées — tout en l'élevant au niveau du luxe contemporain international.",
        services: ["Rénovation complète", "Décoration 10 suites", "Espaces communs", "Brand & signalétique"],
        featured: true,
    },
    {
        id: 6,
        slug: "boutique-luxe-casablanca",
        title: "Boutique Luxe",
        category: "Commercial",
        tag: "Retail",
        tagColor: "bg-brand-dark",
        year: "2022",
        location: "Casablanca, Maroc",
        area: "120 m²",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Un espace retail premium à l'identité visuelle forte.",
        description:
            "Cette boutique de prêt-à-porter haut de gamme devait incarner l'identité de la marque dès le seuil. Murs en travertin, éclairages architecturaux dirigés et mobilier de présentation sur-mesure créent une expérience shopping mémorable et premium.",
        services: ["Retail design", "Éclairage architectural", "Mobilier de présentation", "Signalétique"],
    },
    {
        id: 7,
        slug: "loft-industriel",
        title: "Loft Industriel",
        category: "Résidentiel",
        tag: "Moderne",
        tagColor: "bg-brand-dark/70",
        year: "2022",
        location: "Bordeaux, France",
        area: "200 m²",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "Ancien entrepôt transformé en résidence loft d'exception.",
        description:
            "La reconversion d'un entrepôt industriel du XIXe siècle en loft contemporain. Nous avons préservé le caractère brut du lieu — poutres apparentes, briques, hauteurs généreuses — tout en y intégrant le confort et l'élégance d'un intérieur de haute tenue.",
        services: ["Reconversion industrielle", "Architecture intérieure", "Mobilier sur-mesure", "Éclairage"],
    },
    {
        id: 8,
        slug: "hotel-boutique-marrakech",
        title: "Hôtel Boutique",
        category: "Hôtellerie",
        tag: "Luxe",
        tagColor: "bg-brand-brass",
        year: "2022",
        location: "Marrakech, Maroc",
        area: "800 m²",
        img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
        ],
        shortDesc: "15 chambres et suites d'un hôtel boutique 5 étoiles.",
        description:
            "Un hôtel boutique de 15 chambres et suites pensé comme une collection d'œuvres d'art habitables. Chaque suite a son propre univers visuel, tout en s'inscrivant dans une identité cohérente et luxueuse. Le spa et les espaces communs complètent une expérience totale.",
        services: ["Hôtellerie design", "15 suites & chambres", "Spa & wellness", "Espaces F&B"],
        featured: true,
    },
];

export const categories = ["Tous", "Résidentiel", "Commercial", "Hôtellerie"] as const;
export type Category = typeof categories[number];
