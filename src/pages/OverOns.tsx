import { Award, Heart, Lightbulb, RefreshCw, Shield } from "lucide-react";
import PageHero from "../components/PageHero";
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
    description: "Je werkt altijd met dezelfde persoon, van plan tot oplevering.",
  },
];

export default function OverOns() {
  return (
    <>
      <PageHero title="Wie is Oosterik Bouw?" />

      {/* Intro section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Persoonlijk betrokken bij <span className="text-brand">jouw project</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                  Oosterik Bouw is een jong, allround bouwbedrijf dat gespecialiseerd is in kleine tot middelgrote
                  bouwprojecten voor particulieren, kleine ondernemers en bedrijven. Met jarenlange ervaring in de bouw
                  en een brede vakkennis pakt Oosterik Bouw elk project professioneel aan, van de eerste tekening tot de
                  laatste nagel.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-dark-lighter">
                  Bouwen naar de wens van de klant: dat is de kern van alles wat we doen. Goede communicatie, een
                  transparant proces en een hoogwaardig eindresultaat staan centraal in elke samenwerking.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/actie-foto-1.webp"
                  alt="Oosterik Bouw aan het werk"
                  className="h-[480px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Kernwaarden */}
          <div className="mt-16 sm:mt-24">
            <div className="rounded-3xl bg-[#f3f3f3] px-6 py-12 sm:p-16">
              <ScrollReveal>
                <div className="mb-10 text-center">
                  <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                    Waar <span className="text-brand">Oosterik Bouw</span> voor staat
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {kernwaarden.map((waarde, i) => (
                  <ScrollReveal key={waarde.title} delay={i * 80}>
                    <div className="flex h-full flex-col rounded-[2rem_0_2rem_2rem] bg-white p-8">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                        <waarde.icon size={22} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-dark mb-3">{waarde.title}</h3>
                      <p className="text-sm leading-relaxed text-dark-lighter">{waarde.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doelgroep section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  <span className="text-brand">Voor wie</span> werkt Oosterik Bouw?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                  Oosterik Bouw werkt voor particulieren die hun woning willen uitbreiden, verbouwen of verduurzamen.
                  Maar ook kleine ondernemers en bedrijven met een bouwvraag kunnen bij ons terecht. Of het nu gaat om
                  een bijgebouw op het bedrijfsterrein, een verbouwing van een kantoorruimte of renovatiewerkzaamheden.
                  Oosterik Bouw denkt mee en regelt het.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[2rem] bg-gray-50 p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { value: "100%", label: "Persoonlijke aanpak" },
                    { value: "1", label: "Vast aanspreekpunt" },
                    { value: "10+", label: "Jaar ervaring" },
                    { value: "A-Z", label: "Volledige ontzorging" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white p-6 text-center">
                      <p className="font-display text-4xl font-bold text-brand">{stat.value}</p>
                      <p className="mt-1 text-sm text-dark-lighter">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-[2rem] bg-gray-50 p-10 sm:p-16">
              <span className="mb-4 block font-display text-6xl font-black leading-none text-brand/20">"</span>
              <blockquote className="font-display text-xl italic leading-relaxed text-dark sm:text-2xl">
                Als je besluit met Oosterik Bouw je plannen tot uitvoering te brengen, staan wij paraat met onze
                jarenlange ervaring. De wens van de klant staat centraal. Goede communicatie rechtstreeks met de
                opdrachtgever vinden wij daarbij erg belangrijk.
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
