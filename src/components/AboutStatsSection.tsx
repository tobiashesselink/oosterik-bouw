import { ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export default function AboutStatsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Photo with USP container */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/actie-foto-5.webp"
                  alt="Oosterik Bouw project"
                  className="h-[350px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-dark/20 to-transparent" />
                
                {/* USP Chips overlaying the photo */}
                <div className="absolute bottom-8 left-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-dark shadow-lg backdrop-blur-sm">
                  Betrouwbaar
                </div>
                <div className="absolute top-1/3 right-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-dark shadow-lg backdrop-blur-sm">
                  Meedenkend
                </div>
                <div className="absolute bottom-16 right-12 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-dark shadow-lg backdrop-blur-sm">
                  Flexibel
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal delay={200}>
            <div className="pt-12">
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Waarom kiezen voor <span className="text-brand">Oosterik Bouw</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                Bij Oosterik Bouw heb je altijd met dezelfde persoon te maken. De persoon die jouw plannen bespreekt en de offerte opstelt, is ook degene die de uitvoering doet. Dat betekent korte lijnen, directe communicatie en iemand die van begin tot eind betrokken is bij jouw project.
              </p>
              <div className="mt-10">
                <CTAButton to="/over-ons">
                  Over ons
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