import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              <img src="/hero-1.webp" alt="Contact" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contact</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Neem contact op
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                Heb je een bouwplaan of vraag? Stuur ons een bericht en we nemen zo snel mogelijk contact met je op.
              </p>
              <form className="mt-10 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b-2 border-surface-dark bg-transparent py-3 text-dark placeholder-dark-lighter/50 outline-none transition-colors focus:border-brand"
                    placeholder="Jouw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b-2 border-surface-dark bg-transparent py-3 text-dark placeholder-dark-lighter/50 outline-none transition-colors focus:border-brand"
                    placeholder="jouw@email.nl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b-2 border-surface-dark bg-transparent py-3 text-dark placeholder-dark-lighter/50 outline-none transition-colors focus:border-brand resize-none"
                    placeholder="Vertel ons over jouw project"
                  />
                </div>
                <CTAButton type="submit" size="lg">
                  Verstuur bericht
                  <ArrowRight className="ml-2" size={18} />
                </CTAButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
