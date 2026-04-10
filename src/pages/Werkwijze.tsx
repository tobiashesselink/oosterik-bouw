import Badge from "../components/Badge";
import ClosingCtaSection from "../components/ClosingCtaSection";
import ScrollReveal from "../components/ScrollReveal";
import WerkwijzeSection from "../components/WerkwijzeSection";

const voordelen = [
  "Één aanspreekpunt van begin tot eind",
  "Directe communicatie, geen tussenpersonen",
  "Flexibel bij wijzigingen tijdens het project",
  "Betrouwbaar en transparant",
  "Meedenkend vanuit praktisch vakmanschap",
  "Hoogwaardige afwerking",
];

export default function Werkwijze() {
  return (
    <>
      {/* GSAP scroll-pinned step animation with embedded header */}
      <WerkwijzeSection />

      {/* Wat maakt onze aanpak anders? */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left col */}
            <ScrollReveal>
              <div>
                <Badge variant="light" className="mb-6">
                  Onze aanpak
                </Badge>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Wat maakt onze aanpak anders?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                  Veel bouwbedrijven werken met meerdere projectleiders, wisselende
                  ploegen en lange communicatielijnen. Bij Oosterik Bouw is dat anders.
                  De persoon die jouw offerte maakt, is ook degene die de uitvoering doet.
                  Dat betekent: korte lijnen, directe communicatie en iemand die écht
                  betrokken is bij jouw project.
                </p>
              </div>
            </ScrollReveal>

            {/* Right col */}
            <ScrollReveal delay={200}>
              <div className="rounded-[2rem] bg-[#f3f3f3] p-8">
                <ul className="space-y-3">
                  {voordelen.map((voordeel) => (
                    <li
                      key={voordeel}
                      className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
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
                      <span className="text-sm font-medium text-dark">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ClosingCtaSection />
    </>
  );
}
