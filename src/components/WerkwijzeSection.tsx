import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

const stappen = [
  {
    step: "01",
    title: "Kennismaking & locatiebezoek",
    description: "We bespreken jouw wensen en bekijken de situatie ter plekke.",
  },
  {
    step: "02",
    title: "Plannen uitwerken & offerte",
    description: "We werken je plannen uit met schetstekeningen en een heldere offerte.",
  },
  {
    step: "03",
    title: "Akkoord & voorbereiding",
    description: "Na goedkeuring worden materialen, tekeningen en planning uitgewerkt.",
  },
  {
    step: "04",
    title: "Uitvoering",
    description: "De werkzaamheden starten — met jou als enig aanspreekpunt door het hele traject.",
  },
  {
    step: "05",
    title: "Oplevering",
    description: "Het project wordt netjes opgeleverd, volledig naar jouw wens.",
  },
];

export default function WerkwijzeSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Onze werkwijze</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Stap voor stap
              </h2>
              <div className="mt-12 space-y-0">
                {stappen.map((stap, i) => (
                  <ScrollReveal key={stap.step} delay={i * 80}>
                    <Link
                      to="/werkwijze"
                      className="group flex items-start gap-6 border-t border-white/10 py-6 transition-colors hover:bg-white/[0.02]">
                      <span className="font-display text-2xl font-bold text-brand/60">{stap.step}</span>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-white">{stap.title}</h3>
                        <p className="mt-1 text-sm text-gray-400">{stap.description}</p>
                      </div>
                      <ArrowRight
                        size={20}
                        className="mt-1 text-gray-500 transition-all group-hover:translate-x-1 group-hover:text-brand"
                      />
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal>
                <div className="mt-10">
                  <CTAButton to="/werkwijze" variant="outline">
                    Volledige werkwijze bekijken
                  </CTAButton>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex h-full items-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/actie-foto-5.webp"
                  alt="Onze werkwijze"
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
