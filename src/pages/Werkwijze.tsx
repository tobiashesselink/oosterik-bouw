import Badge from "../components/Badge";
import ClosingCtaSection from "../components/ClosingCtaSection";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

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

const voordelen = [
  {
    title: "Één aanspreekpunt",
    description: "Van offerte tot oplevering werk je met dezelfde persoon. Geen doorverbinden, geen misverstanden.",
  },
  {
    title: "Directe communicatie",
    description: "Geen tussenpersonen of projectmanagers. Je belt rechtstreeks met degene die het werk uitvoert.",
  },
  {
    title: "Flexibel bij wijzigingen",
    description: "Plannen veranderen. Wij schakelen snel en passen de aanpak aan zonder extra bureaucratie.",
  },
  {
    title: "Transparante offerte",
    description: "Heldere prijsopgave zonder kleine lettertjes. Wat er staat, is wat je betaalt.",
  },
  {
    title: "Praktisch vakmanschap",
    description: "We denken mee vanuit kennis en ervaring, niet vanuit wat het makkelijkste is voor ons.",
  },
  {
    title: "Hoogwaardige afwerking",
    description: "We leveren pas op als het ook echt klaar is. Kwaliteit en afwerking zijn niet onderhandelbaar.",
  },
];

export default function Werkwijze() {
  return (
    <>
      <PageHero
        title="Onze werkwijze"
        subtitle="Van het eerste gesprek tot de sleuteloverdracht — stap voor stap, met duidelijke communicatie en geen verrassingen."
      />

      {/* Steps */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Zo pakken wij het aan
              </h2>
              <p className="mt-4 leading-relaxed text-dark-lighter">
                Een bouwproject slaagt of faalt bij de aanpak. Hieronder zie je precies hoe wij te werk gaan.
              </p>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-dark/[0.06]">
            {stappen.map((stap, i) => (
              <ScrollReveal key={stap.step} delay={i * 60}>
                <div className="grid items-center gap-6 py-12 lg:grid-cols-[160px_1fr] lg:gap-20 lg:py-14">
                  {/* Number block */}
                  <div className="flex items-center gap-5 lg:block">
                    <span
                      className="select-none font-display font-black leading-none text-brand/[0.10]"
                      style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}>
                      {stap.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-dark sm:text-3xl">
                      {stap.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-dark-lighter">{stap.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 max-w-xl">
              <Badge variant="light" className="mb-5">
                Onze aanpak
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Wat maakt onze aanpak anders?
              </h2>
              <p className="mt-4 leading-relaxed text-dark-lighter">
                Veel bouwbedrijven werken met meerdere projectleiders en lange communicatielijnen. Bij Oosterik Bouw is
                dat anders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voordelen.map((voordeel, i) => (
              <ScrollReveal key={voordeel.title} delay={i * 60}>
                <div className="flex flex-col gap-3 rounded-2xl bg-white p-7">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="font-display text-base font-bold text-dark">{voordeel.title}</h3>
                  <p className="text-sm leading-relaxed text-dark-lighter">{voordeel.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaSection />
    </>
  );
}
