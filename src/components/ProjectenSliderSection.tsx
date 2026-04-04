import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

const projecten = [
  {
    id: "aanbouw-woonkamer-apeldoorn",
    title: "Aanbouw woonkamer",
    location: "Apeldoorn",
    description: "Ruime aanbouw aan de achterzijde van de woning met grote raampartijen voor extra lichtinval en een mooi uitzicht op de tuin.",
    image: "/uitbouw.webp",
  },
  {
    id: "badkamer-renovatie-doetinchem",
    title: "Badkamer renovatie",
    location: "Doetinchem",
    description: "Complete renovatie van een verouderde badkamer naar moderne inloopdouche met maatwerk tegelwerk en stijlvolle afwerking.",
    image: "/Tegelssnijden.webp",
  },
  {
    id: "tuinhuis-maatwerk-zutphen",
    title: "Tuinhuis op maat",
    location: "Zutphen",
    description: "Luxe tuinhuis met overkapping, volledig op maat gebouwd als werkplaats en opslagruimte.",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    id: "dakkapel-arnhem",
    title: "Dakkapel plaatsen",
    location: "Arnhem",
    description: "Prefab dakkapel met hoogwaardige afwerking, inclusief vergunningsaanvraag en schilderwerk.",
    image: "/uitbouw e'de.webp",
  },
  {
    id: "isolatie-dak-ede",
    title: "Dakisolatie woning",
    location: "Ede",
    description: "Volledige dakisolatie met nieuwe afwerking aan de binnenzijde voor een energiezuiniger huis.",
    image: "/Constuctie douglas.webp",
  },
  {
    id: "overkapping-douglas",
    title: "Douglas overkapping",
    location: "Hengelo",
    description: "Stevige overkapping van douglas hout met een strakke uitstraling en duurzame afwerking.",
    image: "/overkapping.webp",
  },
];

const CARD_WIDTH = 380;
const GAP = 24;

type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
};

let globalSliderRef: { current: HTMLDivElement | null } = { current: null };
let globalGetCenterOffset: () => number = () => 0;
let globalProjectenLength = 0;

function ProjectSlider({ projecten }: { projecten: Project[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  globalSliderRef = sliderRef;
  globalProjectenLength = projecten.length;

  const extended = [...projecten, ...projecten, ...projecten];

  const getCenterOffset = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const center = viewportWidth / 2;
    const halfCard = CARD_WIDTH / 2;
    return center - halfCard;
  }, []);

  globalGetCenterOffset = getCenterOffset;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startOffset = projecten.length * (CARD_WIDTH + GAP);
    slider.scrollLeft = startOffset - getCenterOffset();

    const handleScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const singleSetWidth = projecten.length * (CARD_WIDTH + GAP);

      if (slider.scrollLeft < singleSetWidth * 0.5) {
        slider.scrollLeft += singleSetWidth;
      } else if (slider.scrollLeft > singleSetWidth * 2.5) {
        slider.scrollLeft -= singleSetWidth;
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [getCenterOffset, projecten.length]);

  return (
    <div className="relative mt-16">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
        {extended.map((project, i) => (
          <Link
            key={`${project.id}-${i}`}
            to={`/projecten/${project.id}`}
            className="group relative block h-[500px] w-[380px] shrink-0 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent transition-all duration-300 group-hover:from-dark/95 group-hover:via-dark/50" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">{project.description}</p>
                  <span className="mt-2 inline-flex items-center text-sm font-semibold text-brand transition-all duration-200 hover:gap-2">
                    Bekijk project
                    <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function sliderPrev() {
  const slider = globalSliderRef.current;
  if (!slider) return;
  const currentScroll = slider.scrollLeft;
  const currentIndex = Math.round((currentScroll + globalGetCenterOffset()) / (CARD_WIDTH + GAP)) % globalProjectenLength;
  const prevIndex = (currentIndex - 1 + globalProjectenLength) % globalProjectenLength;
  const targetScroll = (prevIndex + globalProjectenLength) * (CARD_WIDTH + GAP) - globalGetCenterOffset();
  slider.scrollTo({ left: targetScroll, behavior: "smooth" });
}

export function sliderNext() {
  const slider = globalSliderRef.current;
  if (!slider) return;
  const currentScroll = slider.scrollLeft;
  const currentIndex = Math.round((currentScroll + globalGetCenterOffset()) / (CARD_WIDTH + GAP)) % globalProjectenLength;
  const nextIndex = (currentIndex + 1) % globalProjectenLength;
  const targetScroll = (nextIndex + globalProjectenLength) * (CARD_WIDTH + GAP) - globalGetCenterOffset();
  slider.scrollTo({ left: targetScroll, behavior: "smooth" });
}

export default function ProjectenSliderSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Recente projecten</p>
              <h2 className="font-display text-5xl font-bold tracking-tight text-dark sm:text-6xl">
                Onze projecten
              </h2>
            </div>
            <div className="hidden gap-3 sm:flex">
              <button
                onClick={sliderPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white transition-all duration-200 hover:bg-dark-light active:scale-95"
                aria-label="Vorige projecten">
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={sliderNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all duration-200 hover:bg-brand-light active:scale-95"
                aria-label="Volgende projecten">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-14 text-center">
            <CTAButton to="/projecten" variant="secondary">
              Alle projecten bekijken
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
      <ProjectSlider projecten={projecten} />
    </section>
  );
}
