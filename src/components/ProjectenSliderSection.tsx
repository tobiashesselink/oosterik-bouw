import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
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

const loopedProjecten = [...projecten, ...projecten, ...projecten];

const swiperGlobalRef: { current: SwiperType | null } = { current: null };

// Blokkeert animatie terwijl al een animatie loopt zodat rapid-clicking niet werkt.
let isAnimating = false;

/**
 * Animeer naar de volgende of vorige slide met GSAP zodat de breedte van de slides
 * en de wrapper-translate synchroon bewegen. Swiper's eigen animatie gebruiken we
 * niet meer — die berekent de doelpositie vóór de breedte verandert waardoor het
 * hakkerig oogt.
 */
function navigate(swiper: SwiperType, direction: "next" | "prev") {
  if (isAnimating) return;
  isAnimating = true;

  const curr = swiper.activeIndex;
  const nextIdx = direction === "next" ? curr + 1 : curr - 1;

  if (nextIdx < 0 || nextIdx >= swiper.slides.length) {
    isAnimating = false;
    return;
  }

  const currentSlide = swiper.slides[curr] as HTMLElement;
  const nextSlide = swiper.slides[nextIdx] as HTMLElement;
  const wrapperEl = swiper.wrapperEl as HTMLElement;

  // Bereken de doelpositie door tijdelijk de eindbreedtes in te stellen,
  // zodat Swiper's snapGrid de correcte waarden bevat.
  const savedCurrent = currentSlide.style.width;
  const savedNext = nextSlide.style.width;

  currentSlide.style.width = "320px";
  nextSlide.style.width = "640px";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (swiper as any).updateSlides?.();

  const snapIdx = Math.min(nextIdx, swiper.snapGrid.length - 1);
  const endTranslate = -swiper.snapGrid[snapIdx];

  // Herstel de originele inline-breedtes zodat GSAP kan animeren vanuit de huidige staat.
  currentSlide.style.width = savedCurrent;
  nextSlide.style.width = savedNext;

  // Z-index direct toepassen (niet geanimeerd).
  currentSlide.classList.remove("swiper-slide-active");
  nextSlide.classList.add("swiper-slide-active");

  // Haal de link-elementen op voor filter/opacity animatie.
  const currentLink = currentSlide.querySelector<HTMLElement>("a");
  const nextLink = nextSlide.querySelector<HTMLElement>("a");

  // Alles synchroon animeren: wrapper translate + slide breedtes + visuele effecten.
  const currentContent = currentSlide.querySelector<HTMLElement>("[data-slide-content]");
  const nextContent = nextSlide.querySelector<HTMLElement>("[data-slide-content]");

  gsap
    .timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
      onComplete() {
        // Sync Swiper's interne staat na de GSAP animatie.
        swiper.translate = endTranslate;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (swiper as any).updateSlides?.();
        swiper.updateActiveIndex();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (swiper as any).updateSlidesClasses?.();
        isAnimating = false;
      },
    })
    .to(wrapperEl, { x: endTranslate }, 0)
    .to(currentSlide, { width: 320 }, 0)
    .to(nextSlide, { width: 640 }, 0)
    .to(currentLink, { filter: "blur(2px)", opacity: 0.65 }, 0)
    .to(nextLink, { filter: "blur(0px)", opacity: 1 }, 0)
    .to(currentContent, { opacity: 0, y: 8, duration: 0.2, ease: "power1.in" }, 0)
    .fromTo(nextContent, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.22);
}

export function sliderPrev() {
  if (swiperGlobalRef.current) navigate(swiperGlobalRef.current, "prev");
}

export function sliderNext() {
  if (swiperGlobalRef.current) navigate(swiperGlobalRef.current, "next");
}

export default function ProjectenSliderSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-5xl font-bold tracking-tight text-dark sm:text-6xl">Onze projecten</h2>
            </div>
            <div className="hidden gap-3 sm:flex">
              <button
                onClick={() => swiperRef.current && navigate(swiperRef.current, "prev")}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white transition-all duration-200 hover:bg-dark-light active:scale-95"
                aria-label="Vorige projecten">
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => swiperRef.current && navigate(swiperRef.current, "next")}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all duration-200 hover:bg-brand-light active:scale-95"
                aria-label="Volgende projecten">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div className="relative mt-16 overflow-hidden">
        <Swiper
          slidesPerView="auto"
          centeredSlides
          spaceBetween={32}
          loop
          initialSlide={projecten.length}
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiperGlobalRef.current = swiper;
            // Stel inline-breedtes in zodat GSAP altijd vanuit een bekende staat animeert.
            swiper.slides.forEach((slide, i) => {
              const el = slide as HTMLElement;
              el.style.width = i === swiper.activeIndex ? "640px" : "320px";
              const content = el.querySelector<HTMLElement>("[data-slide-content]");
              if (content) gsap.set(content, { opacity: i === swiper.activeIndex ? 1 : 0, y: 0 });
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (swiper as any).updateSlides?.();
            requestAnimationFrame(() => swiper.update());
          }}
          className="project-slider !overflow-visible !h-[500px]">
          {loopedProjecten.map((project, index) => (
            <SwiperSlide key={`${project.id}-${index}`}>
              {({ isActive }) => (
                <Link
                  to={`/projecten/${project.id}`}
                  className={`${isActive ? "group" : ""} relative block h-[500px] w-full select-none overflow-hidden rounded-2xl`}
                  style={{
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    opacity: isActive ? 1 : 0.65,
                    cursor: isActive ? "pointer" : "default",
                    pointerEvents: isActive ? "auto" : "none",
                  }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <div data-slide-content className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                      <h3 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-200 line-clamp-2">{project.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-brand">
                        Bekijk project
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ScrollReveal>
        <div className="mt-14 text-center">
          <CTAButton to="/projecten" variant="secondary">
            Alle projecten bekijken
          </CTAButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
