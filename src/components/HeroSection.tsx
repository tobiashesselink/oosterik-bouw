import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
        <div className="relative overflow-hidden">
          {/* Background image with gradients for overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/tuinhuis-kempers-2.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Dark gradient overlay - stronger on left for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
          {/* Dark overlay at top for nav visibility */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/75 to-transparent pointer-events-none" />
          {/* Orange glow effect - radial glow in right bottom corner */}
          <div 
            className="absolute right-0 bottom-0 pointer-events-none"
            style={{
              width: '70%',
              height: '100%',
              background: 'radial-gradient(circle at 100% 100%, rgba(229, 120, 44, 0.25) 0%, rgba(229, 120, 44, 0.08) 35%, transparent 70%)',
            }}
          />
          
          <div className="relative mx-auto max-w-7xl px-6 pt-6">
            <Header inverted />
          </div>
          <div className="relative pt-[140px] pb-[160px]">
            <div className="mx-auto max-w-7xl w-full px-6">
              <div className="flex flex-col justify-center max-w-3xl">
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-7xl">
                  Vakkundig bouwen, van eerste schets tot <span className="text-brand">oplevering</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Oosterik Bouw realiseert kleine tot middelgrote bouwprojecten voor particulieren en bedrijven. Eén
                  aanspreekpunt dat met je meedenkt, van de eerste schets tot de oplevering.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
