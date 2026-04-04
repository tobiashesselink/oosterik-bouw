import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CTAButton from "../components/CTAButton";
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
      {/* Page header */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Onze projecten
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Bekijk een selectie van de bouwprojecten die Oosterik Bouw heeft
            gerealiseerd. Elk project wordt met dezelfde zorg en vakmanschap uitgevoerd.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[65px] z-40 border-b border-surface-dark bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand text-white shadow-lg shadow-brand/25"
                    : "bg-surface-warm text-dark-light hover:bg-surface-dark hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-dark-lighter">
                Geen projecten gevonden in deze categorie.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 100}>
                  <Link
                    to={`/projecten/${project.id}`}
                    className="group block overflow-hidden rounded-2xl border border-surface-dark bg-white transition-all duration-300 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        {project.category}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-dark">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-dark-lighter">
                        {project.description}
                      </p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand">
                        Bekijk project
                        <ArrowRight size={14} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Heb je een project in gedachten?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-lighter">
            Vertel ons wat je wilt bouwen. We denken graag met je mee.
          </p>
          <div className="mt-12">
            <CTAButton to="/contact" size="lg">
              Neem contact op
              <ArrowRight className="ml-2" size={18} />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
