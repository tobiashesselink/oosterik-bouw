import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const stappen = [
  {
    step: "01",
    title: "Kennismaking & locatiebezoek",
    description:
      "We bespreken jouw wensen en bekijken de situatie op locatie. Zo krijgen we een goed beeld van wat er mogelijk is en wat het beste bij jouw woning past.",
  },
  {
    step: "02",
    title: "Plannen uitwerken & offerte",
    description:
      "We werken je plannen verder uit, inclusief schetstekeningen waar nodig. Je ontvangt een heldere offerte zonder verborgen kosten of verrassingen.",
  },
  {
    step: "03",
    title: "Akkoord & voorbereiding",
    description:
      "Na goedkeuring starten de voorbereidingen. Tekeningen, materialen en vergunningen worden uitgewerkt totdat alles klaarstaat voor de start.",
  },
  {
    step: "04",
    title: "Uitvoering",
    description:
      "De werkzaamheden starten. Jij hebt één vast aanspreekpunt voor vragen, aanpassingen en beslissingen. Snel schakelen is iets waar we goed in zijn.",
  },
  {
    step: "05",
    title: "Oplevering",
    description:
      "Na afronding leveren we het project netjes op. We lopen alles samen door zodat jij volledig tevreden bent met het eindresultaat.",
  },
];

export default function WerkwijzeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const stepsListRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const currentStepRef = useRef(0);

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";

    const mm = gsap.matchMedia();

    // ── Background transition (all screen sizes) ─────────────────────────
    mm.add("all", () => {
      const st1 = gsap.to(document.body, {
        backgroundColor: "#2c2c26",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 0%",
          scrub: true,
        },
      });

      const st2 = gsap.to(document.body, {
        backgroundColor: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 50%",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        st1.scrollTrigger?.kill();
        st2.scrollTrigger?.kill();
      };
    });

    // ── Sticky scroll steps (desktop only) ───────────────────────────────
    mm.add("(min-width: 768px)", () => {
      gsap.to(stepsListRef.current, {
        y: () => -(stappen.length - 1) * window.innerHeight,
        ease: "none",
        scrollTrigger: {
          trigger: pinTargetRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${(stappen.length - 1) * window.innerHeight}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (stappen.length - 1));

            if (newIndex !== currentStepRef.current) {
              const prevIndex = currentStepRef.current;
              currentStepRef.current = newIndex;
              const dir = newIndex > prevIndex ? 1 : -1;

              gsap.killTweensOf(numberRef.current);
              gsap.to(numberRef.current, {
                opacity: 0,
                y: dir * -30,
                duration: 0.14,
                ease: "power2.in",
                onComplete: () => {
                  if (!numberRef.current) return;
                  numberRef.current.textContent = stappen[newIndex].step;
                  gsap.fromTo(
                    numberRef.current,
                    { opacity: 0, y: dir * 30 },
                    { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" },
                  );
                },
              });
            }
          },
        },
      });

      return () => {
        currentStepRef.current = 0;
        if (numberRef.current) numberRef.current.textContent = "01";
      };
    });

    return () => {
      mm.revert();
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#2c2c26]">
      {/* ── Mobile: stacked steps ──────────────────────────────────────── */}
      <div className="md:hidden">
        {stappen.map((stap) => (
          <div key={stap.step} className="relative overflow-hidden border-t border-white/[0.07] px-8 py-12">
            {/* Decorative number */}
            <span
              className="pointer-events-none absolute -right-4 -top-4 select-none font-display font-black leading-none text-brand/10"
              style={{ fontSize: "clamp(6rem, 30vw, 10rem)" }}>
              {stap.step}
            </span>
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              Stap {stap.step}
            </span>
            <h3 className="font-display text-3xl font-bold leading-tight text-white">{stap.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/45">{stap.description}</p>
          </div>
        ))}
      </div>

      {/* ── Desktop: pinned sticky scroll ──────────────────────────────── */}
      <div ref={pinTargetRef} style={{ height: "100vh" }} className="hidden md:block">
        <div className="flex h-full">
          {/* Left: scrolling step content */}
          <div className="relative h-full w-[55%] overflow-hidden border-r border-white/[0.07]">
            <div ref={stepsListRef}>
              {stappen.map((stap, i) => (
                <div
                  key={stap.step}
                  style={{ height: "100vh" }}
                  className="flex flex-col justify-center px-8 lg:px-16 xl:px-20">
                  <span className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-brand">
                    Stap {stap.step}
                  </span>
                  <h3 className="font-display text-4xl font-bold leading-tight text-white lg:text-5xl">{stap.title}</h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-white/45">{stap.description}</p>
                  {/* Progress dots */}
                  <div className="mt-10 flex items-center gap-2">
                    {stappen.map((_, di) => (
                      <span
                        key={di}
                        className={`h-[3px] rounded-full transition-none ${
                          di === i ? "w-7 bg-brand" : "w-[10px] bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: big sticky number */}
          <div className="flex h-full w-[45%] items-center justify-center">
            <span
              ref={numberRef}
              className="select-none font-display font-black leading-none text-brand"
              style={{ fontSize: "clamp(7rem, 20vw, 18rem)" }}>
              01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
