import {
  MessageCircle,
  FileText,
  ClipboardCheck,
  HardHat,
  CheckCircle2,
  Users,
  ArrowRight,
} from "lucide-react";
import CTAButton from "../components/CTAButton";
import ScrollReveal from "../components/ScrollReveal";

const stappen = [
  {
    icon: MessageCircle,
    title: "Kennismaking & locatiebezoek",
    text: "Alles begint met een goed gesprek. We komen bij jou langs om je wensen te bespreken en de situatie op locatie te bekijken. Zo krijgen we een goed beeld van wat er mogelijk is en wat het beste bij jouw woning en wensen past.",
  },
  {
    icon: FileText,
    title: "Plannen uitwerken & offerte",
    text: "Op basis van het locatiebezoek werken we je plannen verder uit — inclusief schetstekeningen als dat nodig is. We stellen een heldere en gedetailleerde offerte op, zodat jij precies weet wat je kunt verwachten.",
  },
  {
    icon: ClipboardCheck,
    title: "Overleg & aanpassingen",
    text: "We bespreken de offerte samen. Heb je nog andere wensen of wil je iets aanpassen? Dat kan altijd. We passen het plan aan totdat het volledig aansluit op wat jij voor ogen hebt.",
  },
  {
    icon: HardHat,
    title: "Voorbereiding",
    text: "Na akkoord op de offerte starten de voorbereidingen. Technische tekeningen worden uitgewerkt, materialen worden geselecteerd (in overleg met jou), en vergunningen worden aangevraagd waar nodig.",
  },
  {
    icon: Users,
    title: "Uitvoering",
    text: "De werkzaamheden starten. Oosterik Bouw voert het werk uit en coördineert eventuele onderaannemers. Jij hebt één vast aanspreekpunt voor alle vragen, aanpassingen of beslissingen.",
  },
  {
    icon: CheckCircle2,
    title: "Oplevering",
    text: "Na afronding van alle werkzaamheden leveren we het project op. We lopen alles samen met je door, zodat jij volledig tevreden bent met het resultaat. Dat is voor ons pas een geslaagd project.",
  },
];

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
      {/* Page header */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Onze werkwijze
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Bij Oosterik Bouw werken we gestructureerd en transparant. Jij weet
            altijd waar je aan toe bent — en je hebt van het eerste gesprek tot de
            oplevering één vast aanspreekpunt.
          </p>
        </div>
      </section>

      {/* Steps with timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-brand via-brand/30 to-brand/10 sm:block" />

            <div className="space-y-8">
              {stappen.map((stap, index) => (
                <ScrollReveal key={stap.title} delay={index * 100}>
                  <div className="group relative flex flex-col gap-6 rounded-2xl border border-surface-dark bg-white p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-xl sm:flex-row sm:items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-8 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand bg-white sm:block" />

                    <div className="flex shrink-0 items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark font-display text-xl font-bold text-white shadow-lg shadow-brand/20">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-2">
                        <stap.icon size={18} className="text-brand" />
                        <h2 className="font-display text-xl font-semibold text-dark">
                          {stap.title}
                        </h2>
                      </div>
                      <p className="leading-relaxed text-dark-lighter">{stap.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                  Onze aanpak
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
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
            <ScrollReveal delay={200}>
              <div>
                <h3 className="mb-6 font-display text-xl font-semibold text-dark">
                  Voordelen op een rij
                </h3>
                <ul className="space-y-3">
                  {voordelen.map((voordeel) => (
                    <li
                      key={voordeel}
                      className="flex items-start gap-3 rounded-xl border border-surface-dark bg-surface p-4 text-sm transition-all hover:border-brand/20 hover:shadow-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-medium text-dark">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Klaar om te beginnen?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-lighter">
            Neem contact op voor een vrijblijvend gesprek. We komen graag bij jou langs.
          </p>
          <div className="mt-12">
            <CTAButton to="/contact" size="lg">
              Plan een locatiebezoek
              <ArrowRight className="ml-2" size={18} />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
