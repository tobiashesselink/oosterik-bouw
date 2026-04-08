import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function WaaromOosterikSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <ScrollReveal>
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

          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Waarom kiezen voor <span className="text-brand">Oosterik Bouw</span>?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                Bij Oosterik Bouw heb je altijd met dezelfde persoon te maken. De persoon die jouw plannen bespreekt en
                de offerte opstelt, is ook degene die de uitvoering doet. Dat betekent korte lijnen, directe
                communicatie en iemand die van begin tot eind betrokken is bij jouw project.
              </p>

              <Link
                to="/over-ons"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand px-6 py-2.5 text-sm font-semibold text-brand transition-all duration-200 hover:bg-brand hover:text-white">
                Over ons
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
