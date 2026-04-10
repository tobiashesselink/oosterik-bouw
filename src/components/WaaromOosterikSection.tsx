import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";

export default function WaaromOosterikSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — statement */}
          <ScrollReveal>
            <div className="flex flex-col">
              <Badge className="mb-6">Waarom Oosterik</Badge>
              <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl">
                Persoonlijk.{" "}
                <span className="text-brand">Meedenkend.</span>{" "}
                Flexibel.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-dark-lighter">
                Bij Oosterik Bouw staat persoonlijk vakmanschap centraal. De
                persoon die jouw plannen bespreekt en de offerte opstelt, is ook
                degene die de uitvoering doet. Dat betekent korte lijnen,
                directe communicatie en iemand die van begin tot eind écht
                betrokken is bij jouw project.
              </p>
              <Link
                to="/over-ons"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                Meer over ons
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — photo */}
          <ScrollReveal delay={200}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/actie-foto-5.webp"
                alt="Oosterik Bouw aan het werk"
                className="h-[520px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
