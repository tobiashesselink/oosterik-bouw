import { Briefcase, Calendar, MapPin, Tag } from "lucide-react";
import { useParams } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import ClosingCtaSection from "../components/ClosingCtaSection";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";

const projectData: Record<
  string,
  {
    title: string;
    category: string;
    location: string;
    year: string;
    type: string;
    description: string;
    image: string;
    gallery: string[];
    tasks: string[];
  }
> = {
  "aanbouw-woonkamer-apeldoorn": {
    title: "Aanbouw woonkamer in Apeldoorn",
    category: "Verbouw",
    location: "Apeldoorn",
    year: "2024",
    type: "Particulier",
    description:
      "De bewoners van deze woning in Apeldoorn wilden de woonkamer uitbreiden met een lichte, open aanbouw aan de achterzijde. Oosterik Bouw verzorgde het volledige traject: van het aanvragen van de omgevingsvergunning en het uitwerken van de constructietekeningen, tot de uitvoering en volledige afwerking. Het resultaat is een naadloze uitbreiding van de woonkamer met grote dakramen voor extra lichtinval en een directe aansluiting op de tuin.",
    image: "/uitbouw.webp",
    gallery: ["/uitbouw.webp", "/uitbouw e'de.webp", "/uitbouw e'de 2.webp", "/Constuctie douglas.webp"],
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
    title: "Badkamer renovatie in Doetinchem",
    category: "Renovatie & onderhoud",
    location: "Doetinchem",
    year: "2024",
    type: "Particulier",
    description:
      "Deze verouderde badkamer in Doetinchem was aan vervanging toe. Oosterik Bouw heeft de complete ruimte gestript en opnieuw opgebouwd met moderne materialen. Het resultaat: een strakke inloopdouche, vrijstaand bad en hoogwaardig tegelwerk, gerealiseerd in samenwerking met onze vaste installateur en tegelzetter.",
    image: "/Tegelssnijden.webp",
    gallery: ["/Tegelssnijden.webp", "/actie-foto-1.webp", "/actie-foto-2.webp"],
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
    title: "Tuinhuis op maat in Zutphen",
    category: "Verbouw",
    location: "Zutphen",
    year: "2023",
    type: "Particulier",
    description:
      "De opdrachtgever wenste een multifunctioneel tuinhuis dat zowel als werkplaats en opslagruimte dienst zou doen. Oosterik Bouw heeft een volledig op maat gemaakt bijgebouw ontworpen en gerealiseerd, passend bij de stijl van het hoofdgebouw en de tuin.",
    image: "/tuinhuis-kempers-1.webp",
    gallery: ["/tuinhuis-kempers-1.webp", "/tuinhuis-kempers-2.webp", "/Tuinhuis douglas hengelo.webp"],
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
          <h1 className="font-display text-3xl font-bold text-dark">Project niet gevonden</h1>
          <p className="mt-4 text-dark-lighter">Dit project bestaat niet of is nog niet beschikbaar.</p>
          <div className="mt-8">
            <CTAButton to="/projecten">Terug naar projecten</CTAButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero — matches HeroSection style */}
      <section className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
          <div className="relative overflow-hidden">
            {/* Background image — dampened like HeroSection */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/20 to-transparent" />
            {/* Top gradient for nav readability */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/75 to-transparent pointer-events-none" />
            {/* Bottom gradient for title readability */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
            {/* Orange glow — bottom right */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none"
              style={{
                width: "70%",
                height: "100%",
                background: "radial-gradient(circle at 100% 100%, rgba(229, 120, 44, 0.25) 0%, rgba(229, 120, 44, 0.08) 35%, transparent 70%)",
              }}
            />

            {/* Header inside container */}
            <div className="relative mx-auto max-w-7xl px-6 pt-6">
              <Header inverted />
            </div>

            {/* Hero content — bottom aligned */}
            <div className="relative flex min-h-[45vh] flex-col justify-end pb-12 pt-28 lg:pb-16">
              <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
                <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{project.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Meta sidebar */}
            <div className="lg:order-2">
              <div className="sticky top-24 rounded-[2rem] bg-[#f3f3f3] p-8">
                <h3 className="mb-6 font-display text-lg font-semibold text-dark">Projectinformatie</h3>
                <dl className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark/[0.07] text-brand">
                      <Tag size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Categorie</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.category}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark/[0.07] text-brand">
                      <Briefcase size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Type project</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.type}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark/[0.07] text-brand">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Locatie</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark/[0.07] text-brand">
                      <Calendar size={15} />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-dark/60">Jaar</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-dark">{project.year}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 lg:order-1">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-dark">Over dit project</h2>
                <p className="mt-4 leading-relaxed text-dark-lighter">{project.description}</p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h3 className="mt-12 font-display text-2xl font-bold text-dark">Wat is er gedaan?</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-dark">{task}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h3 className="mt-12 font-display text-2xl font-bold text-dark">Fotogalerij</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-[2rem] aspect-[4/3]">
                      <img
                        src={img}
                        alt={`${project.title} - foto ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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

      <ClosingCtaSection variant="light" />
    </>
  );
}
