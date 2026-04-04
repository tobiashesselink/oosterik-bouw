import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Header inverted />
        </div>
        <div className="pt-[50px] pb-[60px]">
          <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Bouwen naar jouw <span className="text-brand">wens</span> van plan tot oplevering
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                Oosterik Bouw realiseert kleine tot middelgrote bouwprojecten voor particulieren en bedrijven. Eén
                aanspreekpunt dat met je meedenkt, van de eerste schets tot de oplevering.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                  Vraag offerte aan
                  <ArrowRight className="ml-2" size={16} />
                </Link>
                <Link
                  to="/projecten"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-[0.97]">
                  Bekijk projecten
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/tuinhuis-kempers-2.webp"
                alt="Oosterik Bouw project"
                className="h-[600px] w-full object-cover"
                style={{
                  borderRadius: "250px 60px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
