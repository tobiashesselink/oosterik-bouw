import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

const diensten = [
  {
    title: "Aanbouw & uitbouw",
    description: "Meer leefruimte zonder te verhuizen",
    image: "/uitbouw.webp",
  },
  {
    title: "Interne verbouwing",
    description: "Een andere indeling of complete renovatie",
    image: "/actie-foto-1.webp",
  },
  {
    title: "Bijgebouwen & tuinhuizen",
    description: "Maatwerk dat past bij jouw woning",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    title: "Dakkapel & dakrenovatie",
    description: "Extra hoogte, licht en leefruimte",
    image: "/uitbouw e'de.webp",
  },
  {
    title: "Badkamer & toilet",
    description: "Volledige renovatie van A tot Z",
    image: "/Tegelssnijden.webp",
  },
  {
    title: "Verduurzaming",
    description: "Isolatie, kozijnen en energiebesparing",
    image: "/Constuctie douglas.webp",
  },
  {
    title: "Renovatie & onderhoud",
    description: "Van gevel tot interieur weer als nieuw",
    image: "/actie-foto-6.webp",
  },
];

export default function DienstenSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Onze diensten
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Wat kunnen we bouwen?
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="max-w-lg text-dark-lighter lg:ml-auto lg:text-right">
              Van een complete aanbouw tot verduurzaming — wij regelen het van A
              tot Z, met één vast aanspreekpunt.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured — first two large */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {diensten.slice(0, 2).map((dienst, i) => (
            <ScrollReveal key={dienst.title} delay={i * 100}>
              <Link
                to="/diensten"
                className="group relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={dienst.image}
                  alt={dienst.title}
                  className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {dienst.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Remaining services — compact list */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {diensten.slice(2).map((dienst, i) => (
            <ScrollReveal key={dienst.title} delay={i * 80}>
              <Link
                to="/diensten"
                className="group relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={dienst.image}
                  alt={dienst.title}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold leading-tight text-white">
                    {dienst.title}
                  </h3>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-brand">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-14 text-center">
            <CTAButton to="/diensten" variant="secondary">
              Alle diensten bekijken
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
