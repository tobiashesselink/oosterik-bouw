import {
  Shield,
  RefreshCw,
  Lightbulb,
  Award,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";
import CTAButton from "../components/CTAButton";
import ScrollReveal from "../components/ScrollReveal";

const kernwaarden = [
  {
    icon: Shield,
    title: "Betrouwbaar",
    description: "Afspraken zijn afspraken. Je weet waar je aan toe bent.",
  },
  {
    icon: RefreshCw,
    title: "Flexibel",
    description: "Veranderingen of bijsturingen worden snel en soepel opgepakt.",
  },
  {
    icon: Lightbulb,
    title: "Meedenkend",
    description: "Vanuit vakkennis en praktisch oogpunt denken we actief mee.",
  },
  {
    icon: Award,
    title: "Kwalitatief",
    description: "Elk project verdient een hoogwaardige, nette afwerking.",
  },
  {
    icon: Heart,
    title: "Persoonlijk",
    description: "Je werkt altijd met dezelfde persoon — van plan tot oplevering.",
  },
];

export default function OverOns() {
  return (
    <>
      {/* Page header */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Wie is Oosterik Bouw?
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                  Over ons
                </span>
                <p className="text-lg leading-relaxed text-dark-lighter">
                  Oosterik Bouw is een jong, allround bouwbedrijf dat gespecialiseerd
                  is in kleine tot middelgrote bouwprojecten voor particulieren, kleine
                  ondernemers en bedrijven. Met jarenlange ervaring in de bouw en een
                  brede vakkennis pakt Oosterik Bouw elk project professioneel aan — van
                  de eerste tekening tot de laatste nagel.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-dark-lighter">
                  Bouwen naar de wens van de klant: dat is de kern van alles wat we doen.
                  Goede communicatie, een transparant proces en een hoogwaardig
                  eindresultaat staan centraal in elke samenwerking.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/actie-foto-1.webp"
                  alt="Oosterik Bouw aan het werk"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Onze aanpak
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Persoonlijk betrokken bij jouw project
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
              Het grootste verschil met grotere aannemers? Bij Oosterik Bouw heb je
              altijd één vast aanspreekpunt. De persoon die jouw plannen bespreekt, de
              offerte opstelt en de uitvoering doet — dat is dezelfde persoon. Geen
              doorgeven, geen miscommunicaties en geen afwachten wie er dan 'even naar
              kijkt'.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-dark-lighter">
              Dat maakt het ook makkelijk om tijdens een project bij te sturen.
              Verandert er iets in je wensen? Dan bespreken we dat direct en passen we
              het plan aan. Flexibel en daadkrachtig, zonder omwegen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Waar Oosterik Bouw voor staat
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {kernwaarden.map((waarde, i) => (
              <ScrollReveal key={waarde.title} delay={i * 100}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-surface-dark bg-white p-7 text-center transition-all duration-300 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/25">
                    <waarde.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-dark">
                    {waarde.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-lighter">
                    {waarde.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doelgroep */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                  Doelgroep
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Voor wie werkt Oosterik Bouw?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                  Oosterik Bouw werkt voor particulieren die hun woning willen
                  uitbreiden, verbouwen of verduurzamen. Maar ook kleine ondernemers en
                  bedrijven met een bouwvraag kunnen bij ons terecht. Of het nu gaat om
                  een bijgebouw op het bedrijfsterrein, een verbouwing van een
                  kantoorruimte of renovatiewerkzaamheden — Oosterik Bouw denkt mee en
                  regelt het.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl bg-surface-warm p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { value: "100%", label: "Persoonlijke aanpak" },
                    { value: "1", label: "Vast aanspreekpunt" },
                    { value: "10+", label: "Jaar ervaring" },
                    { value: "A-Z", label: "Volledige ontzorging" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
                    >
                      <p className="font-display text-3xl font-bold text-brand">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-dark-lighter">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-dark p-10 sm:p-16">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
              <Quote
                size={48}
                className="relative mb-6 text-brand/40"
                strokeWidth={1}
              />
              <blockquote className="relative text-xl leading-relaxed text-gray-200 sm:text-2xl">
                "Als u besluit met Oosterik Bouw uw plannen tot uitvoering te brengen,
                staan wij paraat met onze jarenlange ervaring. De wens van de klant staat
                centraal — goede communicatie rechtstreeks met de opdrachtgever vinden wij
                daarbij erg belangrijk."
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Nieuwsgierig geworden?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-lighter">
            We leren je graag kennen. Neem contact op voor een vrijblijvend
            kennismakingsgesprek op locatie.
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
