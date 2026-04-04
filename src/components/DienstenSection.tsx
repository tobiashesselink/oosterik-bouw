import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

const diensten = [
  {
    title: "Aanbouw & uitbouw",
    image: "/uitbouw.webp",
  },
  {
    title: "Interne verbouwing",
    image: "/actie-foto-1.webp",
  },
  {
    title: "Bijgebouwen & tuinhuizen",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    title: "Dakkapel & dakrenovatie",
    image: "/uitbouw e'de.webp",
  },
  {
    title: "Badkamer & toilet",
    image: "/Tegelssnijden.webp",
  },
  {
    title: "Verduurzaming",
    image: "/Constuctie douglas.webp",
  },
  {
    title: "Renovatie & onderhoud",
    image: "/actie-foto-6.webp",
  },
];

const dienstenRows = [
  [diensten[0], diensten[1]],
  [diensten[2], diensten[3], diensten[4]],
  [diensten[5], diensten[6]],
];

export default function DienstenSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Onze diensten</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Wat kunnen we bouwen?
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-16 space-y-5">
          {dienstenRows.map((row, rowIndex) => (
            <ScrollReveal key={rowIndex} delay={rowIndex * 100}>
              <div className="grid gap-5" style={{ gridTemplateColumns: row.length === 2 ? (rowIndex === 0 ? "2fr 1fr" : "1fr 2fr") : "1fr 1fr 1fr" }}>
                {row.map((dienst, i) => (
                  <ScrollReveal key={dienst.title} delay={i * 80}>
                    <Link
                      to="/diensten"
                      className="group relative block overflow-hidden rounded-[18px]">
                      <img
                        src={dienst.image}
                        alt={dienst.title}
                        className="h-[275px] w-full object-cover transition-all duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                          {dienst.title}
                        </h3>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
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
