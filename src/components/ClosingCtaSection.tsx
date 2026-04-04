import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

export default function ClosingCtaSection() {
  return (
    <section className="relative py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/actie-foto-6.webp')",
        }}
      />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Klaar om jouw bouwplannen
            <br />
            te realiseren?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Neem vrijblijvend contact op voor een kennismakingsgesprek op locatie. We bespreken jouw wensen en kijken
            samen naar de mogelijkheden.
          </p>
          <div className="mt-8">
            <CTAButton to="/contact" size="md">
              Neem contact op
              <ArrowRight className="ml-2" size={16} />
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
