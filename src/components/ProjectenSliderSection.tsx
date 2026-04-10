import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

const projecten = [
  {
    id: "aanbouw-woonkamer-apeldoorn",
    title: "Aanbouw woonkamer",
    location: "Apeldoorn",
    description:
      "Ruime aanbouw aan de achterzijde van de woning met grote raampartijen voor extra lichtinval en een mooi uitzicht op de tuin.",
    image: "/uitbouw.webp",
  },
  {
    id: "badkamer-renovatie-doetinchem",
    title: "Badkamer renovatie",
    location: "Doetinchem",
    description:
      "Complete renovatie van een verouderde badkamer naar moderne inloopdouche met maatwerk tegelwerk en stijlvolle afwerking.",
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

const INACTIVE_W = 120;
const GAP = 12;
const CARD_H = 540;

export default function ProjectenSliderSection() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const activeRef = useRef(0);
  const animatingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function getActiveW(): number {
    const containerW = containerRef.current?.offsetWidth ?? window.innerWidth;
    return Math.min(640, containerW - 48);
  }

  function getTargetX(idx: number): number {
    const containerW = containerRef.current?.offsetWidth ?? window.innerWidth;
    const activeW = getActiveW();
    return containerW / 2 - activeW / 2 - idx * (INACTIVE_W + GAP);
  }

  function applyState(index: number, animated = false) {
    const activeW = getActiveW();
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      if (animated) {
        gsap.set(card, { width: i === index ? activeW : INACTIVE_W });
      } else {
        gsap.set(card, { width: i === index ? activeW : INACTIVE_W });
      }
    });
    contentRefs.current.forEach((content, i) => {
      if (!content) return;
      gsap.set(content, { opacity: i === index ? 1 : 0, y: 0 });
    });
    if (stripRef.current) {
      gsap.set(stripRef.current, { x: getTargetX(index) });
    }
  }

  useEffect(() => {
    applyState(0);

    const handleResize = () => {
      gsap.killTweensOf([stripRef.current, ...cardRefs.current, ...contentRefs.current]);
      animatingRef.current = false;
      applyState(activeRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animateTo(next: number) {
    if (animatingRef.current || next === activeRef.current) return;
    animatingRef.current = true;
    const prev = activeRef.current;
    activeRef.current = next;

    const activeW = getActiveW();
    const targetX = getTargetX(next);

    gsap
      .timeline({
        defaults: { ease: "power2.inOut", duration: 0.6 },
        onComplete() {
          animatingRef.current = false;
          setDisplayIndex(next);
        },
      })
      .to(cardRefs.current[prev], { width: INACTIVE_W }, 0)
      .to(cardRefs.current[next], { width: activeW }, 0)
      .to(stripRef.current, { x: targetX }, 0)
      .to(contentRefs.current[prev], { opacity: 0, duration: 0.2, ease: "power1.in" }, 0)
      .fromTo(
        contentRefs.current[next],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0.28,
      );
  }

  const goNext = () => animateTo((activeRef.current + 1) % projecten.length);
  const goPrev = () => animateTo((activeRef.current - 1 + projecten.length) % projecten.length);

  return (
    <section className="bg-white py-16 sm:py-24">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
                Recente projecten
              </h2>
            </div>

            <div className="flex items-center gap-5 sm:pb-1">
              <span className="hidden font-mono text-sm tabular-nums text-dark/35 sm:block">
                {String(displayIndex + 1).padStart(2, "0")}
                &thinsp;/&thinsp;
                {String(projecten.length).padStart(2, "0")}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white transition-all duration-200 hover:opacity-80 active:scale-95"
                  aria-label="Vorig project">
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  aria-label="Volgend project">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Slider ─────────────────────────────────────────────────────── */}
      <div ref={containerRef} className="relative mt-10 overflow-hidden" style={{ height: CARD_H }}>
        <div ref={stripRef} className="absolute top-0 left-0 flex" style={{ gap: GAP, willChange: "transform" }}>
          {projecten.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a14]"
              style={{ height: CARD_H }}
              onClick={() => {
                if (i !== activeRef.current) animateTo(i);
              }}>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
                loading="lazy"
              />

              {/* Persistent dim overlay */}
              <div className="absolute inset-0 bg-dark/55" />

              {/* Active content (fades in/out) */}
              <div
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                className="absolute inset-0">
                {/* Rich gradient only on active */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

                <Link
                  to={`/projecten/${project.id}`}
                  className="absolute inset-0 flex flex-col justify-end px-8 py-8 lg:px-10 lg:py-10"
                  onClick={(e) => {
                    if (i !== activeRef.current) e.preventDefault();
                  }}
                  tabIndex={i === displayIndex ? 0 : -1}>
                  <span className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                    {project.location}
                  </span>
                  <h3 className="font-display text-3xl font-bold leading-tight text-white lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Bekijk project
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-12 text-center">
          <CTAButton to="/projecten" variant="secondary">
            Alle projecten bekijken
          </CTAButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
