import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowCircle from "../components/ArrowCircle";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const categories = ["Alle projecten", "Nieuwbouw", "Verbouw", "Renovatie & onderhoud", "Verduurzaming"];

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
    title: "Aanbouw woonkamer in Apeldoorn",
    category: "Verbouw",
    description: "Ruime aanbouw aan de achterzijde van de woning met grote raampartijen voor extra lichtinval.",
    image: "/uitbouw.webp",
  },
  {
    id: "badkamer-renovatie-doetinchem",
    title: "Badkamer renovatie in Doetinchem",
    category: "Renovatie & onderhoud",
    description: "Complete renovatie van een verouderde badkamer naar moderne inloopdouche met maatwerk tegelwerk.",
    image: "/Tegelssnijden.webp",
  },
  {
    id: "tuinhuis-maatwerk-zutphen",
    title: "Tuinhuis op maat in Zutphen",
    category: "Verbouw",
    description: "Luxe tuinhuis met overkapping, volledig op maat gebouwd als werkplaats en opslag.",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    id: "dakkapel-arnhem",
    title: "Dakkapel plaatsen in Arnhem",
    category: "Verbouw",
    description: "Prefab dakkapel met hoogwaardige afwerking, inclusief vergunningsaanvraag en schilderwerk.",
    image: "/uitbouw e'de.webp",
  },
  {
    id: "isolatie-dak-ede",
    title: "Dakisolatie woning in Ede",
    category: "Verduurzaming",
    description: "Volledige dakisolatie met nieuwe afwerking aan de binnenzijde voor een energiezuiniger huis.",
    image: "/Constuctie douglas.webp",
  },
  {
    id: "kozijnen-vervangen-ede",
    title: "Kozijnen vervangen met HR++ glas in Ede",
    category: "Verduurzaming",
    description: "Alle kozijnen vervangen door onderhoudsarme kunststof kozijnen met HR++ isolatieglas.",
    image: "/overkapping.webp",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(arrowRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(descRef.current, { height: 0, opacity: 0, marginTop: 0, overflow: "hidden" });
  }, []);

  function handleMouseEnter() {
    gsap.killTweensOf([titleRef.current, descRef.current, arrowRef.current]);
    gsap.to(titleRef.current, { y: -14, duration: 0.35, ease: "power2.out" });
    gsap.to(descRef.current, { height: "auto", opacity: 1, marginTop: 4, duration: 0.35, ease: "power2.out" });
    gsap.to(arrowRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" });
  }

  function handleMouseLeave() {
    gsap.killTweensOf([titleRef.current, descRef.current, arrowRef.current]);
    gsap.to(titleRef.current, { y: 0, duration: 0.28, ease: "power2.inOut" });
    gsap.to(descRef.current, { height: 0, opacity: 0, marginTop: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(arrowRef.current, { opacity: 0, scale: 0.8, duration: 0.2, ease: "power2.in" });
  }

  return (
    <Link
      to={`/projecten/${project.id}`}
      className="group relative block h-[420px] overflow-hidden rounded-2xl bg-[#0f0f0a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: "brightness(0.55) saturate(0.8)" }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/35 to-transparent" />

      {/* Badge — top left */}
      <span className="absolute top-5 left-5 z-10 inline-block rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-dark backdrop-blur-sm">
        {project.category}
      </span>

      {/* Arrow — top right */}
      <ArrowCircle
        ref={arrowRef}
        iconSize={16}
        className="pointer-events-none absolute top-5 right-5 z-10 h-11 w-11 bg-brand text-white"
      />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <h3 ref={titleRef} className="font-display text-3xl font-bold leading-tight text-white">
          {project.title}
        </h3>
        <p
          ref={descRef}
          className="line-clamp-2 text-base leading-snug text-white/75"
        >
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function Projecten() {
  const [activeCategory, setActiveCategory] = useState("Alle projecten");

  const filteredProjects =
    activeCategory === "Alle projecten" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Onze projecten"
        subtitle="Bekijk een selectie van gerealiseerde projecten, elk uitgevoerd met vakmanschap en persoonlijke betrokkenheid."
      />

      {/* Filter bar */}
      <section className="bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand text-white"
                    : "bg-[#f3f3f3] text-dark/60 hover:bg-dark/[0.08] hover:text-dark"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-dark-lighter">Geen projecten gevonden in deze categorie.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 80}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
