import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";

export default function ClosingCtaSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl bg-brand sm:rounded-[2rem]">
        <div className="mx-auto max-w-4xl px-8 py-20 text-center lg:px-12 lg:py-28">
          <ScrollReveal>
            <Badge variant="brand" className="mb-6">Vrijblijvend kennismakingsgesprek</Badge>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Jouw bouwproject begint
              <br />
              met <span className="text-white/60">één gesprek</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              We komen bij jou langs, bekijken de situatie op locatie en denken
              vrijblijvend met je mee. Van kleine verbouwing tot complete aanbouw
              — altijd één vast aanspreekpunt.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:bg-white/90 active:scale-[0.97]">
                Plan een locatiebezoek
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/projecten"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.97]">
                Bekijk projecten
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
