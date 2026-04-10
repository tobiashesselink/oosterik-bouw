import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ClosingCtaSection from "../components/ClosingCtaSection";
import ScrollReveal from "../components/ScrollReveal";

const categories = [
  "Alle projecten",
  "Nieuwbouw",
  "Verbouw",
  "Renovatie & onderhoud",
  "Verduurzaming",
];

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "aanbouw-woonkamer-apeldoorn",
    title: "Aanbouw woonkamer — Apeldoorn",
    category: "Verbouw",
    description: "Ruime aanbouw aan de achterzijde van de woning met grote raampartijen voor extra lichtinval.",
    image: "/uitbouw.webp",
  },
  {
    id: "badkamer-renovatie-doetinchem",
    title: "Badkamer renovatie — Doetinchem",
    category: "Renovatie & onderhoud",
    description: "Complete renovatie van een verouderde badkamer naar moderne inloopdouche met maatwerk tegelwerk.",
    image: "/Tegelssnijden.webp",
  },
  {
    id: "tuinhuis-maatwerk-zutphen",
    title: "Tuinhuis op maat — Zutphen",
    category: "Verbouw",
    description: "Luxe tuinhuis met overkapping, volledig op maat gebouwd als werkplaats en opslag.",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    id: "dakkapel-arnhem",
    title: "Dakkapel plaatsen — Arnhem",
    category: "Verbouw",
    description: "Prefab dakkapel met hoogwaardige afwerking, inclusief vergunningsaanvraag en schilderwerk.",
    image: "/uitbouw e'de.webp",
  },
  {
    id: "isolatie-dak-ede",
    title: "Dakisolatie woning — Ede",
    category: "Verduurzaming",
    description: "Volledige dakisolatie met nieuwe afwerking aan de binnenzijde voor een energiezuiniger huis.",
    image: "/Constuctie douglas.webp",
  },
  {
    id: "kozijnen-vervangen-ede",
    title: "Kozijnen vervangen met HR++ glas — Ede",
    category: "Verduurzaming",
    description: "Alle kozijnen vervangen door onderhoudsarme kunststof kozijnen met HR++ isolatieglas.",
    image: "/overkapping.webp",
  },
];

export default function Projecten() {
  const [activeCategory, setActiveCategory] = useState("Alle projecten");

  const filteredProjects =
    activeCategory === "Alle projecten"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        badge="Portfolio"
        title="Onze projecten"
        subtitle="Bekijk een selectie van gerealiseerde projecten — elk uitgevoerd met vakmanschap en persoonlijke betrokkenheid."
      />

      {/* Sticky filter bar */}
      <section className="sticky top-[65px] z-40 border-b border-dark/[0.06] bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand text-white"
                    : "bg-[#f3f3f3] text-dark/60 hover:bg-dark/[0.08] hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-dark-lighter">
                Geen projecten gevonden in deze categorie.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 80}>
                  <Link
                    to={`/projecten/${project.id}`}
                    className="group relative block h-[380px] overflow-hidden rounded-2xl bg-[#0f0f0a]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.6) saturate(0.8)" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-7">
                      <span className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold leading-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
                        {project.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                        Bekijk project <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <ClosingCtaSection />
    </>
  );
}
