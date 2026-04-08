import { ArrowRight, Bath, Building, Home, RefreshCw, Sun, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

const diensten = [
  {
    title: "Aanbouw & uitbouw",
    description: "Meer leefruimte zonder te verhuizen",
    icon: Home,
  },
  {
    title: "Renovatie & verbouwing",
    description: "Van gevel tot interieur, van indeling tot complete renovatie",
    icon: RefreshCw,
  },
  {
    title: "Bijgebouwen & tuinhuizen",
    description: "Maatwerk dat past bij jouw woning",
    icon: Warehouse,
  },
  {
    title: "Dakkapel & dakrenovatie",
    description: "Extra hoogte, licht en leefruimte",
    icon: Building,
  },
  {
    title: "Badkamer & toilet",
    description: "Volledige renovatie van A tot Z",
    icon: Bath,
  },
  {
    title: "Verduurzaming",
    description: "Isolatie, kozijnen en energiebesparing",
    icon: Sun,
  },
];

export default function DienstenSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-3xl bg-[#f3f3f3] sm:rounded-[2rem]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Onze <span className="text-brand">diensten</span>
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Services Grid - 2x3 layout */}
          <div className="mt-16 grid h-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diensten.map((dienst, i) => {
              const Icon = dienst.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={dienst.title} delay={i * 80}>
                  <Link
                    to="/diensten"
                    className={`group relative block h-full p-10 transition-all duration-500 hover:bg-[#2c2c26] ${
                      isEven ? "bg-white rounded-[0_3rem_0_3rem]" : "bg-white rounded-[3rem_0_3rem_0]"
                    }`}>
                    {/* Icon Container */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e5782c] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#2c2c26]">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 font-display text-2xl font-bold text-[#2c2c26] transition-colors duration-300 group-hover:text-white">
                      {dienst.title}
                    </h3>
                    <p className="text-[#6b6b5f] transition-colors duration-300 group-hover:text-white/70">
                      {dienst.description}
                    </p>

                    {/* Arrow */}
                    <span className="absolute bottom-8 right-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#2c2c26] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-white group-hover:text-brand">
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
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
      </div>
    </section>
  );
}
