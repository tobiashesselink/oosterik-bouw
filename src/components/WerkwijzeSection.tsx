import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

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
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Onze <span className="text-brand">werkwijze</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Steps Grid */}
          <div className="grid h-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stappen.map((stap, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={stap.step} delay={i * 80}>
                  <Link
                    to="/werkwijze"
                    className={`group relative block h-full p-8 transition-all duration-500 hover:bg-white/10 ${
                      isEven ? "bg-[#3a3a35] rounded-[0_3rem_0_3rem]" : "bg-[#3a3a35] rounded-[3rem_0_3rem_0]"
                    }`}>
                    {/* Step number */}
                    <span className="mb-4 block font-display text-3xl font-bold text-brand">{stap.step}</span>

                    {/* Content */}
                    <h3 className="mb-2 font-display text-xl font-semibold text-white">{stap.title}</h3>
                    <p className="text-sm text-gray-400">{stap.description}</p>

                    {/* Arrow */}
                    <span className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-brand group-hover:text-white">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}

            {/* Contact Card - 6th card */}
            <ScrollReveal delay={480}>
              <Link
                to="/contact"
                className="group relative flex h-full flex-col justify-between rounded-[3rem_0_3rem_0] bg-brand p-8 transition-all duration-500 hover:bg-brand-light">
                <div>
                  <span className="mb-4 block font-display text-3xl font-bold text-white">06</span>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">Klaar om te starten?</h3>
                  <p className="text-sm text-white/70">
                    Neem contact met ons op en ontdek wat we voor je kunnen betekenen.
                  </p>
                </div>

                <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-all duration-300 group-hover:bg-white/90">
                  Contact
                  <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
