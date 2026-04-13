import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, Tag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import ClosingCtaSection from "../components/ClosingCtaSection";
import Header from "../components/Header";
import NotFound from "./NotFound";
import ScrollReveal from "../components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const projectData: Record<
  string,
  {
    title: string;
    category: string;
    location: string;
    year: string;
    type: string;
    description: string;
    image: string;
    gallery: string[];
    tasks: string[];
  }
> = {
  "aanbouw-woonkamer-apeldoorn": {
    title: "Aanbouw woonkamer in Apeldoorn",
    category: "Verbouw",
    location: "Apeldoorn",
    year: "2024",
    type: "Particulier",
    description:
      "De bewoners van deze woning in Apeldoorn wilden de woonkamer uitbreiden met een lichte, open aanbouw aan de achterzijde. Oosterik Bouw verzorgde het volledige traject: van het aanvragen van de omgevingsvergunning en het uitwerken van de constructietekeningen, tot de uitvoering en volledige afwerking. Het resultaat is een naadloze uitbreiding van de woonkamer met grote dakramen voor extra lichtinval en een directe aansluiting op de tuin.",
    image: "/uitbouw.webp",
    gallery: ["/uitbouw.webp", "/uitbouw e'de.webp", "/uitbouw e'de 2.webp", "/Constuctie douglas.webp"],
    tasks: [
      "Omgevingsvergunning aangevraagd en verkregen",
      "Fundering en vloerconstructie aangelegd",
      "Muren opgetrokken en dak gerealiseerd",
      "Dakramen geplaatst",
      "Buitengevel afgewerkt passend bij bestaande woning",
      "Binnenwanden gestuct en afgewerkt",
      "Vloerverwarming aangesloten via onderaannemer",
      "Eindoplevering inclusief schilderklaar opleveren",
    ],
  },
  "badkamer-renovatie-doetinchem": {
    title: "Badkamer renovatie in Doetinchem",
    category: "Renovatie & onderhoud",
    location: "Doetinchem",
    year: "2024",
    type: "Particulier",
    description:
      "Deze verouderde badkamer in Doetinchem was aan vervanging toe. Oosterik Bouw heeft de complete ruimte gestript en opnieuw opgebouwd met moderne materialen. Het resultaat: een strakke inloopdouche, vrijstaand bad en hoogwaardig tegelwerk, gerealiseerd in samenwerking met onze vaste installateur en tegelzetter.",
    image: "/Tegelssnijden.webp",
    gallery: ["/Tegelssnijden.webp", "/actie-foto-1.webp", "/actie-foto-2.webp"],
    tasks: [
      "Sloopwerkzaamheden oude badkamer",
      "Leidingwerk aangepast en vernieuwd",
      "Vloerverwarming aangelegd",
      "Tegelwerk wanden en vloer",
      "Sanitair geïnstalleerd via onderaannemer",
      "Inloopdouche met glazen wand",
      "Afwerking en oplevering",
    ],
  },
  "tuinhuis-maatwerk-zutphen": {
    title: "Tuinhuis op maat in Zutphen",
    category: "Verbouw",
    location: "Zutphen",
    year: "2023",
    type: "Particulier",
    description:
      "De opdrachtgever wenste een multifunctioneel tuinhuis dat zowel als werkplaats en opslagruimte dienst zou doen. Oosterik Bouw heeft een volledig op maat gemaakt bijgebouw ontworpen en gerealiseerd, passend bij de stijl van het hoofdgebouw en de tuin.",
    image: "/tuinhuis-kempers-1.webp",
    gallery: ["/tuinhuis-kempers-1.webp", "/tuinhuis-kempers-2.webp", "/Tuinhuis douglas hengelo.webp"],
    tasks: [
      "Ontwerp en materiaalkeuze in overleg met klant",
      "Fundering geplaatst",
      "Houtconstructie opgebouwd",
      "Dakbedekking aangebracht",
      "Elektra en verlichting aangelegd",
      "Afwerking binnenzijde",
      "Buitenzijde geschilderd passend bij hoofdgebouw",
    ],
  },
};

function GallerySlider({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const isTouchRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowLeftRef = useRef<HTMLButtonElement>(null);
  const arrowRightRef = useRef<HTMLButtonElement>(null);
  const gradLeftRef = useRef<HTMLDivElement>(null);
  const gradRightRef = useRef<HTMLDivElement>(null);
  const thumbImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const thumbButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.04, zIndex: i === 0 ? 1 : 0 });
    });

    isTouchRef.current = window.matchMedia("(hover: none)").matches;

    if (isTouchRef.current) {
      gsap.set([arrowLeftRef.current, arrowRightRef.current], { opacity: 0.9, scale: 1 });
      gsap.set([gradLeftRef.current, gradRightRef.current], { opacity: 1 });
    } else {
      gsap.set([arrowLeftRef.current, arrowRightRef.current], { opacity: 0, scale: 0.8 });
      gsap.set([gradLeftRef.current, gradRightRef.current], { opacity: 0 });
    }
  }, [images]);

  function scrollThumbIntoView(index: number) {
    const container = thumbContainerRef.current;
    const thumb = thumbButtonRefs.current[index];
    if (!container || !thumb) return;

    // Peek = one full thumbnail slot so the prev/next thumb is always partially visible
    const peek = thumb.offsetWidth + 10;
    const thumbLeft = thumb.offsetLeft;
    const thumbRight = thumbLeft + thumb.offsetWidth;
    const visLeft = container.scrollLeft;
    const visRight = visLeft + container.offsetWidth;

    if (thumbLeft < visLeft + peek) {
      container.scrollTo({ left: Math.max(0, thumbLeft - peek), behavior: "smooth" });
    } else if (thumbRight > visRight - peek) {
      container.scrollTo({ left: thumbRight - container.offsetWidth + peek, behavior: "smooth" });
    }
  }

  function goTo(index: number) {
    if (index === activeIndexRef.current || animatingRef.current) return;
    animatingRef.current = true;

    const prev = activeIndexRef.current;
    activeIndexRef.current = index;
    setActiveIndex(index);
    scrollThumbIntoView(index);

    const prevEl = imgRefs.current[prev];
    const nextEl = imgRefs.current[index];

    gsap.set(nextEl, { zIndex: 1, opacity: 0, scale: 1.04 });
    gsap.set(prevEl, { zIndex: 0 });

    gsap.timeline({ onComplete: () => { animatingRef.current = false; } })
      .to(prevEl, { opacity: 0, duration: 0.4, ease: "power2.in" }, 0)
      .to(nextEl, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 0.1);
  }

  function goPrev() { goTo((activeIndexRef.current - 1 + images.length) % images.length); }
  function goNext() { goTo((activeIndexRef.current + 1) % images.length); }

  function handleMainEnter() {
    if (isTouchRef.current) return;
    gsap.to([arrowLeftRef.current, arrowRightRef.current], { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)", stagger: 0.04 });
    gsap.to([gradLeftRef.current, gradRightRef.current], { opacity: 1, duration: 0.25, ease: "power2.out" });
  }
  function handleMainLeave() {
    if (isTouchRef.current) return;
    gsap.to([arrowLeftRef.current, arrowRightRef.current], { opacity: 0, scale: 0.8, duration: 0.2, ease: "power2.in" });
    gsap.to([gradLeftRef.current, gradRightRef.current], { opacity: 0, duration: 0.25, ease: "power2.in" });
  }

  function handleThumbEnter(i: number) {
    if (i === activeIndexRef.current) return;
    gsap.to(thumbImgRefs.current[i], { scale: 1.07, duration: 0.35, ease: "power2.out" });
  }
  function handleThumbLeave(i: number) {
    if (i === activeIndexRef.current) return;
    gsap.to(thumbImgRefs.current[i], { scale: 1, duration: 0.3, ease: "power2.inOut" });
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartXRef.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    touchStartXRef.current = null;
  }

  return (
    <div className="w-full min-w-0">
      {/* Main image */}
      <div
        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0f0f0a]"
        onMouseEnter={handleMainEnter}
        onMouseLeave={handleMainLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <div key={img} ref={(el) => { imgRefs.current[i] = el; }} className="absolute inset-0">
            <img
              src={img}
              alt={`${title} - foto ${i + 1}`}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
        ))}

        {/* Side gradients */}
        <div
          ref={gradLeftRef}
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)" }}
        />
        <div
          ref={gradRightRef}
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{ background: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)" }}
        />

        {/* Left arrow */}
        <button
          ref={arrowLeftRef}
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-lg transition-[background-color,transform] duration-150 hover:bg-brand-light active:scale-95 sm:left-4 sm:h-10 sm:w-10"
          aria-label="Vorige foto"
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="sm:hidden">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="hidden sm:block">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          ref={arrowRightRef}
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-lg transition-[background-color,transform] duration-150 hover:bg-brand-light active:scale-95 sm:right-4 sm:h-10 sm:w-10"
          aria-label="Volgende foto"
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="sm:hidden">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="hidden sm:block">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div ref={thumbContainerRef} className="mt-3 flex w-full min-w-0 gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={img}
            ref={(el) => { thumbButtonRefs.current[i] = el; }}
            onClick={() => goTo(i)}
            onMouseEnter={() => handleThumbEnter(i)}
            onMouseLeave={() => handleThumbLeave(i)}
            className={`shrink-0 cursor-pointer overflow-hidden rounded-xl ${activeIndex === i ? "ring-2 ring-brand ring-inset" : ""}`}
            style={{ width: 112, height: 76 }}
            aria-label={`Foto ${i + 1}`}
          >
            <img
              ref={(el) => { thumbImgRefs.current[i] = el; }}
              src={img}
              alt={`${title} - thumbnail ${i + 1}`}
              className="h-full w-full rounded-xl object-cover"
              style={{ opacity: activeIndex === i ? 1 : 0.45, transition: "opacity 0.3s" }}
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : undefined;

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const bg = bgRef.current;
    if (!section || !container || !bg) return;

    const ctx = gsap.context(() => {
      const cs = window.getComputedStyle(section);
      const initPL = parseFloat(cs.paddingLeft);
      const initPR = parseFloat(cs.paddingRight);
      const initPT = parseFloat(cs.paddingTop);
      const initPB = parseFloat(cs.paddingBottom);
      const initBR = parseFloat(window.getComputedStyle(container).borderTopLeftRadius);

      const scrollEnd = "+=260";

      gsap.fromTo(
        section,
        { paddingLeft: initPL, paddingRight: initPR, paddingTop: initPT, paddingBottom: initPB },
        {
          paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: scrollEnd, scrub: true },
        }
      );

      gsap.fromTo(
        container,
        { borderRadius: initBR },
        {
          borderRadius: 0,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: scrollEnd, scrub: true },
        }
      );

      gsap.fromTo(
        bg,
        { backgroundPositionY: "40%" },
        {
          backgroundPositionY: "55%",
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      {/* Hero — matches HeroSection style */}
      <section ref={sectionRef} className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div ref={containerRef} className="overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
          <div className="relative overflow-hidden">
            {/* Background image — dampened like HeroSection */}
            <div
              ref={bgRef}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPositionY: "40%",
                backgroundPositionX: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/20 to-transparent" />
            {/* Top gradient for nav readability */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/75 to-transparent pointer-events-none" />
            {/* Bottom gradient for title readability */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
            {/* Orange glow — bottom right */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none"
              style={{
                width: "70%",
                height: "100%",
                background: "radial-gradient(circle at 100% 100%, rgba(229, 120, 44, 0.25) 0%, rgba(229, 120, 44, 0.08) 35%, transparent 70%)",
              }}
            />

            {/* Header inside container */}
            <div className="relative mx-auto max-w-7xl px-6 pt-6">
              <Header inverted />
            </div>

            {/* Hero content — bottom aligned */}
            <div className="relative flex min-h-[45vh] flex-col justify-end pb-12 pt-28 lg:pb-16">
              <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
                <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{project.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="min-w-0 lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-dark">Over dit project</h2>
                <p className="mt-4 leading-relaxed text-dark-lighter">{project.description}</p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h3 className="mt-12 font-display text-2xl font-bold text-dark">Wat is er gedaan?</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-dark">{task}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h3 className="mt-12 font-display text-2xl font-bold text-dark">Fotogalerij</h3>
                <div className="mt-5 min-w-0 overflow-x-hidden">
                  <GallerySlider images={project.gallery} title={project.title} />
                </div>
              </ScrollReveal>
            </div>

            {/* Meta sidebar */}
            <div>
              <div className="sticky top-24 rounded-[2rem] bg-[#f3f3f3] p-8">
                <h3 className="mb-6 font-display text-lg font-semibold text-dark">Projectinformatie</h3>
                <dl className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <Tag size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Categorie</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.category}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <Briefcase size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Type project</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.type}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Locatie</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <Calendar size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Jaar</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.year}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCtaSection variant="light" />
    </>
  );
}
