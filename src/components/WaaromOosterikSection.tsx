import { User, Lightbulb, Wrench, Hammer } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const usps = [
  {
    icon: User,
    title: "Één aanspreekpunt",
    description:
      "Van offerte tot oplevering werk je altijd met dezelfde persoon samen. Geen tussenpersonen, geen misverstanden.",
  },
  {
    icon: Lightbulb,
    title: "Meedenkend vakmanschap",
    description: "Oosterik Bouw denkt actief mee vanuit praktisch oogpunt, zodat jouw project optimaal uitpakt.",
  },
  {
    icon: Wrench,
    title: "Flexibel en betrouwbaar",
    description:
      "Midden een project van mening veranderd? Geen probleem. Wij schakelen snel en houden je op de hoogte.",
  },
  {
    icon: Hammer,
    title: "Kwalitatieve afwerking",
    description:
      "Elk project wordt met oog voor detail en vakmanschap uitgevoerd — voor een hoogwaardig eindresultaat.",
  },
];

export default function WaaromOosterikSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Oosterik Bouw</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Waarom kiezen voor Oosterik Bouw?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                Veel bouwbedrijven werken met meerdere projectleiders, wisselende ploegen en lange communicatielijnen.
                Bij Oosterik Bouw is dat anders. De persoon die jouw offerte maakt, is ook degene die de uitvoering
                doet.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {usps.map((usp, i) => (
                  <ScrollReveal key={usp.title} delay={i * 100}>
                    <div className="group rounded-2xl bg-surface p-6 transition-all duration-300 hover:shadow-md">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <usp.icon size={20} strokeWidth={2} />
                      </div>
                      <h3 className="font-sans text-base font-bold text-dark">{usp.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-dark-lighter line-clamp-2">{usp.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/actie-foto-5.webp"
                  alt="Oosterik Bouw aan het werk"
                  className="h-[600px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
