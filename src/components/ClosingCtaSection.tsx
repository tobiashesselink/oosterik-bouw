import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

interface ClosingCtaSectionProps {
  variant?: "dark" | "light";
}

export default function ClosingCtaSection({ variant = "dark" }: ClosingCtaSectionProps) {
  if (variant === "light") {
    return (
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-[#f3f3f3] sm:rounded-[2rem]">
          <div className="mx-auto max-w-4xl px-8 py-20 text-center lg:px-12 lg:py-28">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
                Klaar om te starten?
                <br />
                <span className="text-brand">We komen bij je langs.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-lighter">
                We bespreken jouw wensen op locatie, denken vrijblijvend mee en stellen een heldere offerte op. Van
                kleine verbouwing tot complete aanbouw, vakkundig uitgevoerd met één vast aanspreekpunt.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                  Plan een locatiebezoek
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl sm:rounded-[2rem]">
        <div className="relative">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/actie-foto-2.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-dark/70" />
          {/* Subtle brand glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 80% 120%, rgba(229, 120, 44, 0.18) 0%, transparent 60%)",
            }}
          />

          <div className="relative mx-auto max-w-4xl px-8 py-20 text-center lg:px-12 lg:py-28">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Klaar om te starten?
                <br />
                <span className="text-white/50">We komen bij je langs.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
                We bespreken jouw wensen op locatie, denken vrijblijvend mee en stellen een heldere offerte op. Van
                kleine verbouwing tot complete aanbouw, vakkundig uitgevoerd met één vast aanspreekpunt.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                  Plan een locatiebezoek
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
