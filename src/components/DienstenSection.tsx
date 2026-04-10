import gsap from "gsap";
import { Bath, Building, Home, RefreshCw, Sun, Warehouse } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowCircle from "./ArrowCircle";
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

interface DienstCardProps {
  dienst: (typeof diensten)[number];
}

function DienstCard({ dienst }: DienstCardProps) {
  const Icon = dienst.icon;
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(arrowRef.current, { opacity: 0, scale: 0.8 });
  }, []);

  const showArrow = () => {
    gsap.killTweensOf(arrowRef.current);
    gsap.to(arrowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.5)",
    });
  };

  const hideArrow = () => {
    gsap.killTweensOf(arrowRef.current);
    gsap.to(arrowRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <Link
      to="/diensten"
      className="group relative block h-full bg-white p-10 transition-all duration-500 hover:bg-[#2c2c26] rounded-[2rem_0_2rem_2rem]"
      onMouseEnter={showArrow}
      onMouseLeave={hideArrow}
    >
      {/* Icon container */}
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

      {/* Arrow — colors via CSS group-hover, opacity/scale via GSAP */}
      <ArrowCircle
        ref={arrowRef}
        iconSize={18}
        className="absolute top-8 right-8 h-10 w-10 bg-white text-brand backdrop-blur-sm"
      />
    </Link>
  );
}

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

          {/* Grid */}
          <div className="mt-16 grid h-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((dienst, i) => (
              <ScrollReveal key={dienst.title} delay={i * 80}>
                <DienstCard dienst={dienst} />
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
      </div>
    </section>
  );
}
