import { User, Lightbulb, Wrench, Hammer } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const usps = [
  {
    icon: User,
    title: "Één aanspreekpunt",
  },
  {
    icon: Lightbulb,
    title: "Meedenkend vakmanschap",
  },
  {
    icon: Wrench,
    title: "Flexibel en betrouwbaar",
  },
  {
    icon: Hammer,
    title: "Kwalitatieve afwerking",
  },
];

export default function WaaromOosterikSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-24 lg:grid-cols-2">
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

              <div className="mt-10 grid gap-3">
                {usps.map((usp, i) => (
                  <ScrollReveal key={usp.title} delay={i * 100}>
                    <div className="flex items-center gap-4 py-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <usp.icon size={20} strokeWidth={2} />
                      </div>
                      <h3 className="font-sans text-base font-bold text-dark">{usp.title}</h3>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-t-[500px] rounded-b-3xl">
                <img
                  src="/actie-foto-5.webp"
                  alt="Oosterik Bouw aan het werk"
                  className="h-[600px] w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-3xl bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
                <div className="absolute bottom-6 right-6">
                  <div className="flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-2xl bg-dark/90 shadow-2xl backdrop-blur-sm ring-1 ring-white/10">
                    <span className="text-4xl font-extrabold leading-none text-white">10+</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">jaar</span>
                    <span className="text-sm font-medium text-white/60">ervaring</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
