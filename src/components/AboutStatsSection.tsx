import { ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export default function AboutStatsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/actie-foto-2.webp"
                    alt="Bouwwerkzaamheden"
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src="/actie-foto-3.webp" alt="Vakmanschap" className="h-40 w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl">
                  <img src="/uitbouw.webp" alt="Project" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src="/actie-foto-4.webp" alt="Resultaat" className="h-64 w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Over ons</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Persoonlijk en vakkundig bouwen
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                Oosterik Bouw is een jong, allround bouwbedrijf dat gespecialiseerd is in kleine tot middelgrote
                bouwprojecten voor particulieren en ondernemers. De kracht zit in de persoonlijke aanpak: de persoon die
                jouw offerte opstelt, jouw plannen bespreekt én de uitvoering doet.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-dark-lighter">
                Met jarenlange ervaring in de bouw en een oog voor detail, wordt elk project — hoe groot of klein ook —
                met hetzelfde vakmanschap en zorg aangepakt.
              </p>
              <div className="mt-10">
                <CTAButton to="/over-ons">
                  Meer over Oosterik Bouw
                  <ArrowRight className="ml-2" size={16} />
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
