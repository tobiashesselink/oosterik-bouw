import { MapPin, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Oosterik Bouw heeft onze aanbouw perfect gerealiseerd. Prettige communicatie, duidelijke afspraken en een mooi eindresultaat. Zeker een aanrader!",
    name: "Familie Jansen",
    location: "Apeldoorn",
    image: "/uitbouw.webp",
  },
  {
    quote:
      "Van begin tot eind goed begeleid. De verbouwing van onze badkamer verliep soepel en het resultaat is prachtig. Bedankt!",
    name: "Mevr. de Vries",
    location: "Doetinchem",
    image: "/Tegelssnijden.webp",
  },
  {
    quote:
      "Een echte vakman die meedenkt en afspraken nakomt. Ons tuinhuis staat er strak bij. Wij zijn zeer tevreden.",
    name: "Fam. Hendriks",
    location: "Zutphen",
    image: "/tuinhuis-kempers-1.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Testimonials</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Wat klanten zeggen
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6">
                  <Quote size={24} className="mb-4 text-brand/40" strokeWidth={1.5} />
                  <blockquote className="text-sm leading-relaxed text-dark-lighter">"{t.quote}"</blockquote>
                  <div className="mt-5">
                    <p className="font-semibold text-dark">{t.name}</p>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-dark-lighter">
                      <MapPin size={12} />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
