import ClosingCtaSection from "../components/ClosingCtaSection";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const diensten = [
  {
    title: "Aanbouw & uitbouw",
    text: "Behoefte aan meer leefruimte zonder te verhuizen? Een aan- of uitbouw is dé manier om je woning uit te breiden met extra woonoppervlak. Oosterik Bouw begeleidt dit proces volledig: van het uitwerken van de plannen en het aanvragen van de benodigde vergunningen, tot de realisatie en hoogwaardige afwerking.",
    items: [
      "Woonkamer, keuken of slaapkamer uitbreiden",
      "Zij- of achteraanbouw realiseren",
      "Coördinatie van metselaars, timmerlieden, dakdekkers en installateurs",
      "Vergunningsaanvraag en technische tekeningen",
      "Volledige af- en opbouw",
    ],
    image: "/uitbouw.webp",
  },
  {
    title: "Interne verbouwing",
    text: "Een andere indeling, een extra kamer of een complete renovatie van je woning van binnen. Oosterik Bouw verzorgt interne verbouwingen van begin tot eind. Wij coördineren alle betrokken vakspecialisten, zodat jij één aanspreekpunt hebt en het project soepel verloopt.",
    items: [
      "Muren verzetten of verwijderen",
      "Extra kamers creëren",
      "Open plattegronden realiseren",
      "Vloeren, plafonds en afwerking",
      "Coördinatie van onderaannemers (stukadoor, tegelzetter, etc.)",
    ],
    image: "/actie-foto-1.webp",
  },
  {
    title: "Bijgebouwen & tuinhuizen",
    text: "Van een luxe tuinhuis tot een praktische werkplaats of schuur: Oosterik Bouw bouwt bijgebouwen die écht passen bij jouw wensen en bij de stijl van jouw tuin en woning. Geen standaard bouwpakketten, maar maatwerk dat opvalt.",
    items: [
      "Luxe tuinhuizen op maat (geen prefab)",
      "Werkplaatsen en hobbyruimtes",
      "Schuren en opslagruimtes",
      "Overkappingen en veranda's",
      "Carports",
    ],
    image: "/tuinhuis-kempers-1.webp",
  },
  {
    title: "Dakkapel & dakrenovatie",
    text: "Een dakkapel geeft je woning extra hoogte, licht en leefruimte op de bovenverdieping. Oosterik Bouw regelt de volledige realisatie: van vergunningsaanvraag en tekenwerk tot plaatsing en waterdichte afwerking.",
    items: [
      "Dakkapel plaatsen (vergunning t/m oplevering)",
      "Dakrenovatie en dakonderhoud",
      "Dakisolatie",
      "Nieuwe dakbedekking",
      "Goten en hemelwaterafvoer",
    ],
    image: "/uitbouw e'de.webp",
  },
  {
    title: "Badkamer & toilet renovatie",
    text: "Een verouderde badkamer of toilet kan een grote impact hebben op het wooncomfort. Oosterik Bouw coördineert de volledige renovatie: van slopen en tegelwerk tot sanitairinstallatie en afwerking, in samenwerking met gespecialiseerde vaklieden uit ons netwerk.",
    items: [
      "Complete badkamer renovatie",
      "Toilet vernieuwen",
      "Tegelwerk en vloerafwerking",
      "Sanitair en installatie via onderaannemers",
      "Inloopdouche, vrijstaand bad of maatwerk indeling",
    ],
    image: "/Tegelssnijden.webp",
  },
  {
    title: "Verduurzaming van je woning",
    text: "Een energiezuiniger huis begint bij een goede isolatie. Oosterik Bouw helpt je woning toekomstbestendig te maken met effectieve isolatiemaatregelen en hoogwaardige kozijnen.",
    items: [
      "Dakisolatie",
      "Gevelisolatie",
      "Vervangen van kozijnen met isolatieglas (HR++ of triple glas)",
      "Onderhoudsarm maken van je woning",
      "Advies over subsidies en energiemaatregelen",
    ],
    image: "/Constuctie douglas.webp",
  },
  {
    title: "Renovatie & woningonderhoud",
    text: "Is je woning toe aan een opfrisbeurt of grondige renovatie? Oosterik Bouw pakt renovatieprojecten integraal aan, van gevel tot interieur, zodat je woning er weer jaren tegenaan kan.",
    items: [
      "Totaalrenovatie van woningen",
      "Gevelrenovatie",
      "Onderhoudsarm maken (buitenwanden, kozijnen, dakranden)",
      "Herstelwerkzaamheden na schade",
      "Planmatig onderhoud voor bedrijfspanden",
    ],
    image: "/overkapping.webp",
  },
];

export default function Diensten() {
  return (
    <>
      <PageHero
        title="Onze diensten"
        subtitle="Van aanbouw tot verduurzaming: Oosterik Bouw regelt het van A tot Z, met één vast aanspreekpunt."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-0">
            {diensten.map((dienst, index) => (
              <ScrollReveal key={dienst.title}>
                <div
                  className={`grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 ${
                    index < diensten.length - 1 ? "border-b border-dark/[0.06]" : ""
                  }`}>
                  {/* Text column */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                      Dienst {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-3xl font-bold leading-tight text-dark sm:text-4xl">
                      {dienst.title}
                    </h2>
                    <p className="mt-6 leading-relaxed text-dark-lighter">{dienst.text}</p>
                    <ul className="mt-8 space-y-3">
                      {dienst.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
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
                          <span className="text-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column */}
                  <div className={`overflow-hidden rounded-[2rem] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={dienst.image}
                      alt={dienst.title}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaSection variant="dark" />
    </>
  );
}
