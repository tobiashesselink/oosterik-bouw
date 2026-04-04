import { ArrowLeft, ArrowRight, MapPin, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import ScrollReveal from "../components/ScrollReveal";

const projecten = [
  {
    id: "aanbouw-woonkamer-apeldoorn",
    title: "Aanbouw woonkamer",
    location: "Apeldoorn",
    description: "Ruime aanbouw aan de achterzijde van de woning met grote raampartijen voor extra lichtinval en een mooi uitzicht op de tuin.",
    image: "/uitbouw.webp",
  },
  {
    id: "badkamer-renovatie-doetinchem",
    title: "Badkamer renovatie",
    location: "Doetinchem",
    description: "Complete renovatie van een verouderde badkamer naar moderne inloopdouche met maatwerk tegelwerk en stijlvolle afwerking.",
    image: "/Tegelssnijden.webp",
  },
  {
    id: "tuinhuis-maatwerk-zutphen",
    title: "Tuinhuis op maat",
    location: "Zutphen",
    description: "Luxe tuinhuis met overkapping, volledig op maat gebouwd als werkplaats en opslagruimte.",
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    id: "dakkapel-arnhem",
    title: "Dakkapel plaatsen",
    location: "Arnhem",
    description: "Prefab dakkapel met hoogwaardige afwerking, inclusief vergunningsaanvraag en schilderwerk.",
    image: "/uitbouw e'de.webp",
  },
  {
    id: "isolatie-dak-ede",
    title: "Dakisolatie woning",
    location: "Ede",
    description: "Volledige dakisolatie met nieuwe afwerking aan de binnenzijde voor een energiezuiniger huis.",
    image: "/Constuctie douglas.webp",
  },
  {
    id: "overkapping-douglas",
    title: "Douglas overkapping",
    location: "Hengelo",
    description: "Stevige overkapping van douglas hout met een strakke uitstraling en duurzame afwerking.",
    image: "/overkapping.webp",
  },
];

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
];

const stappen = [
  {
    step: "01",
    title: "Kennismaking & locatiebezoek",
    description: "We bespreken jouw wensen en bekijken de situatie ter plekke.",
  },
  {
    step: "02",
    title: "Plannen uitwerken & offerte",
    description: "We werken je plannen uit met schetstekeningen en een heldere offerte.",
  },
  {
    step: "03",
    title: "Akkoord & voorbereiding",
    description: "Na goedkeuring worden materialen, tekeningen en planning uitgewerkt.",
  },
  {
    step: "04",
    title: "Uitvoering",
    description: "De werkzaamheden starten — met jou als enig aanspreekpunt door het hele traject.",
  },
  {
    step: "05",
    title: "Oplevering",
    description: "Het project wordt netjes opgeleverd, volledig naar jouw wens.",
  },
];

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

const stats = [
  { number: "10+", label: "Jaar ervaring" },
  { number: "150+", label: "Projecten voltooid" },
  { number: "100%", label: "Klanttevredenheid" },
  { number: "1", label: "Vast aanspreekpunt" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-surface p-4 sm:p-6 lg:p-8">
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
          <div
            className="relative flex min-h-[85vh] items-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-1.webp')",
            }}>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-2xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Categories */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Onze diensten</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Wat kunnen we bouwen?
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((dienst, i) => (
              <ScrollReveal key={dienst.title} delay={i * 80}>
                <Link to="/diensten" className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={dienst.image}
                      alt={dienst.title}
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-dark transition-colors group-hover:text-brand">
                    {dienst.title}
                  </h3>
                </Link>
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

      {/* About / Stats Block */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/actie-foto-2.webp"
                      alt="Bouwwerkzaamheden"
                      className="h-64 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/actie-foto-3.webp"
                      alt="Vakmanschap"
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl">
                    <img src="/uitbouw.webp" alt="Project" className="h-40 w-full object-cover" loading="lazy" />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img src="/actie-foto-4.webp" alt="Resultaat" className="h-64 w-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Over ons</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Persoonlijk en vakkundig bouwen
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dark-lighter">
                  Oosterik Bouw is een jong, allround bouwbedrijf dat gespecialiseerd is in kleine tot middelgrote
                  bouwprojecten voor particulieren en ondernemers. De kracht zit in de persoonlijke aanpak: de persoon
                  die jouw offerte opstelt, jouw plannen bespreekt én de uitvoering doet.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-dark-lighter">
                  Met jarenlange ervaring in de bouw en een oog voor detail, wordt elk project — hoe groot of klein ook
                  — met hetzelfde vakmanschap en zorg aangepakt.
                </p>
                <div className="mt-10">
                  <CTAButton to="/over-ons">
                    Meer over Oosterik Bouw
                    <ArrowRight className="ml-2" size={16} />
                  </CTAButton>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-brand sm:text-5xl">{stat.number}</p>
                  <p className="mt-2 text-sm font-medium text-dark-lighter">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Slider */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Recente projecten</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Onze projecten
                </h2>
              </div>
              <div className="hidden gap-3 sm:flex">
                <button
                  onClick={() => {
                    const container = document.getElementById("projects-slider");
                    if (container) container.scrollBy({ left: -340, behavior: "smooth" });
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white transition-all duration-200 hover:bg-dark-light active:scale-95"
                  aria-label="Vorige projecten">
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => {
                    const container = document.getElementById("projects-slider");
                    if (container) container.scrollBy({ left: 340, behavior: "smooth" });
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all duration-200 hover:bg-brand-light active:scale-95"
                  aria-label="Volgende projecten">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
          <div
            id="projects-slider"
            className="mt-16 flex gap-5 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {projecten.map((project) => (
                <Link
                  key={project.id}
                  to={`/projecten/${project.id}`}
                  className="group relative block h-[480px] w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent transition-all duration-300 group-hover:from-dark/95 group-hover:via-dark/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">{project.description}</p>
                        <span className="mt-2 inline-flex items-center text-sm font-semibold text-brand transition-all duration-200 hover:gap-2">
                          Bekijk project
                          <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <ScrollReveal>
            <div className="mt-14 text-center">
              <CTAButton to="/projecten" variant="secondary">
                Alle projecten bekijken
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Onze werkwijze</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Stap voor stap
                </h2>
                <div className="mt-12 space-y-0">
                  {stappen.map((stap, i) => (
                    <ScrollReveal key={stap.step} delay={i * 80}>
                      <Link
                        to="/werkwijze"
                        className="group flex items-start gap-6 border-t border-white/10 py-6 transition-colors hover:bg-white/[0.02]">
                        <span className="font-display text-2xl font-bold text-brand/60">{stap.step}</span>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-white">{stap.title}</h3>
                          <p className="mt-1 text-sm text-gray-400">{stap.description}</p>
                        </div>
                        <ArrowRight
                          size={20}
                          className="mt-1 text-gray-500 transition-all group-hover:translate-x-1 group-hover:text-brand"
                        />
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
                <ScrollReveal>
                  <div className="mt-10">
                    <CTAButton to="/werkwijze" variant="outline">
                      Volledige werkwijze bekijken
                    </CTAButton>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex h-full items-center">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/actie-foto-5.webp"
                    alt="Onze werkwijze"
                    className="h-[600px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Closing CTA */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/actie-foto-6.webp')",
          }}
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Klaar om jouw bouwplannen
              <br />
              te realiseren?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Neem vrijblijvend contact op voor een kennismakingsgesprek op locatie. We bespreken jouw wensen en kijken
              samen naar de mogelijkheden.
            </p>
            <div className="mt-8">
              <CTAButton to="/contact" size="md">
                Neem contact op
                <ArrowRight className="ml-2" size={16} />
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact / Form */}
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
    </>
  );
}
