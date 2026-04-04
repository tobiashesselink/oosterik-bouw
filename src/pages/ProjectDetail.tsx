import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";
import CTAButton from "../components/CTAButton";
import ScrollReveal from "../components/ScrollReveal";

const projectData: Record<string, {
  title: string;
  category: string;
  location: string;
  year: string;
  type: string;
  description: string;
  image: string;
  gallery: string[];
  tasks: string[];
}> = {
  "aanbouw-woonkamer-apeldoorn": {
    title: "Aanbouw woonkamer — Apeldoorn",
    category: "Verbouw",
    location: "Apeldoorn",
    year: "2024",
    type: "Particulier",
    description: "De bewoners van deze woning in Apeldoorn wilden de woonkamer uitbreiden met een lichte, open aanbouw aan de achterzijde. Oosterik Bouw verzorgde het volledige traject: van het aanvragen van de omgevingsvergunning en het uitwerken van de constructietekeningen, tot de uitvoering en volledige afwerking. Het resultaat is een naadloze uitbreiding van de woonkamer met grote dakramen voor extra lichtinval en een directe aansluiting op de tuin.",
    image: "/uitbouw.webp",
    gallery: [
      "/uitbouw.webp",
      "/uitbouw e'de.webp",
      "/uitbouw e'de 2.webp",
      "/Constuctie douglas.webp",
    ],
    tasks: [
      "Omgevingsvergunning aangevraagd en verkregen",
      "Fundering en vloerconstructie aangelegd",
      "Muren opgetrokken en dak gerealiseerd",
      "Dakramen geplaatst",
      "Buitengevel afgewerkt passend bij bestaande woning",
      "Binnenwanden gestuct en afgewerkt",
      "Vloerverwarming aangesloten via onderaannemer",
      "Eindoplevering inclusief schilderklaar opleveren",
    ],
  },
  "badkamer-renovatie-doetinchem": {
    title: "Badkamer renovatie — Doetinchem",
    category: "Renovatie & onderhoud",
    location: "Doetinchem",
    year: "2024",
    type: "Particulier",
    description: "Deze verouderde badkamer in Doetinchem was aan vervanging toe. Oosterik Bouw heeft de complete ruimte gestript en opnieuw opgebouwd met moderne materialen. Het resultaat: een strakke inloopdouche, vrijstaand bad en hoogwaardig tegelwerk — gerealiseerd in samenwerking met onze vaste installateur en tegelzetter.",
    image: "/Tegelssnijden.webp",
    gallery: [
      "/Tegelssnijden.webp",
      "/actie-foto-1.webp",
      "/actie-foto-2.webp",
    ],
    tasks: [
      "Sloopwerkzaamheden oude badkamer",
      "Leidingwerk aangepast en vernieuwd",
      "Vloerverwarming aangelegd",
      "Tegelwerk wanden en vloer",
      "Sanitair geïnstalleerd via onderaannemer",
      "Inloopdouche met glazen wand",
      "Afwerking en oplevering",
    ],
  },
  "tuinhuis-maatwerk-zutphen": {
    title: "Tuinhuis op maat — Zutphen",
    category: "Verbouw",
    location: "Zutphen",
    year: "2023",
    type: "Particulier",
    description: "De opdrachtgever wenste een multifunctioneel tuinhuis dat zowel als werkplaats en opslagruimte dienst zou doen. Oosterik Bouw heeft een volledig op maat gemaakt bijgebouw ontworpen en gerealiseerd, passend bij de stijl van het hoofdgebouw en de tuin.",
    image: "/tuinhuis-kempers-1.webp",
    gallery: [
      "/tuinhuis-kempers-1.webp",
      "/tuinhuis-kempers-2.webp",
      "/Tuinhuis douglas hengelo.webp",
    ],
    tasks: [
      "Ontwerp en materiaalkeuze in overleg met klant",
      "Fundering geplaatst",
      "Houtconstructie opgebouwd",
      "Dakbedekking aangebracht",
      "Elektra en verlichting aangelegd",
      "Afwerking binnenzijde",
      "Buitenzijde geschilderd passend bij hoofdgebouw",
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : undefined;

  if (!project) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center py-32 text-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-dark">
            Project niet gevonden
          </h1>
          <p className="mt-4 text-dark-lighter">
            Dit project bestaat niet of is nog niet beschikbaar.
          </p>
          <div className="mt-8">
            <CTAButton to="/projecten">Terug naar projecten</CTAButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/projecten"
              className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Terug naar projecten
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {project.category}
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Info + Description */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Meta info */}
            <div className="lg:order-2">
              <div className="sticky top-24 rounded-2xl border border-surface-dark bg-white p-7 shadow-sm">
                <h3 className="mb-5 font-display text-lg font-semibold text-dark">
                  Projectinformatie
                </h3>
                <dl className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <dt className="text-dark-lighter">Type project</dt>
                      <dd className="mt-0.5 font-medium text-dark">{project.type}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <dt className="text-dark-lighter">Locatie</dt>
                      <dd className="mt-0.5 font-medium text-dark">{project.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <dt className="text-dark-lighter">Jaar</dt>
                      <dd className="mt-0.5 font-medium text-dark">{project.year}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 lg:order-1">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-dark">
                  Over dit project
                </h2>
                <p className="mt-4 leading-relaxed text-dark-lighter">
                  {project.description}
                </p>
              </ScrollReveal>

              {/* Tasks */}
              <ScrollReveal delay={100}>
                <h3 className="mt-12 font-display text-xl font-semibold text-dark">
                  Wat is er gedaan?
                </h3>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {project.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-dark-light">{task}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Gallery */}
              <ScrollReveal delay={200}>
                <h3 className="mt-12 font-display text-xl font-semibold text-dark">
                  Fotogalerij
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl">
                      <img
                        src={img}
                        alt={`${project.title} - foto ${i + 1}`}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soortgelijk project in gedachten?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Wij vertellen je graag wat de mogelijkheden zijn voor jouw situatie.
            Neem vrijblijvend contact op voor een gesprek op locatie.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <CTAButton to="/contact" size="lg">
              Vraag een vrijblijvende offerte aan
            </CTAButton>
            <CTAButton to="/projecten" variant="outline" size="lg">
              Bekijk alle projecten
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
