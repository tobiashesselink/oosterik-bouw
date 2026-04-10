import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const projectTypes = [
  "Aanbouw / uitbouw",
  "Interne verbouwing",
  "Bijgebouw / tuinhuis",
  "Dakkapel / dakrenovatie",
  "Badkamer / toilet",
  "Verduurzaming",
  "Renovatie / onderhoud",
  "Anders",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Neem contact op"
        subtitle="Heb je een bouwplan of vraag? We reageren snel en komen graag bij je langs voor een vrijblijvend locatiebezoek."
      />

      {/* Form + Contact info */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form — left col */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-[2rem] border border-dark/[0.06] bg-white p-8 shadow-sm sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center py-16 text-center">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-dark">
                        Bedankt voor je aanvraag!
                      </h3>
                      <p className="mt-3 max-w-sm text-dark-lighter">
                        We nemen zo snel mogelijk contact met je op — meestal binnen
                        één werkdag.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-2xl font-bold text-dark">
                        Stuur een bericht
                      </h2>
                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="naam" className="mb-2 block text-sm font-medium text-dark">
                              Naam <span className="text-brand">*</span>
                            </label>
                            <input
                              type="text"
                              id="naam"
                              name="naam"
                              required
                              className="w-full rounded-xl border border-dark/[0.08] bg-[#f5f5f5] px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                              placeholder="Je volledige naam"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark">
                              E-mailadres <span className="text-brand">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full rounded-xl border border-dark/[0.08] bg-[#f5f5f5] px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                              placeholder="je@email.nl"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="telefoon" className="mb-2 block text-sm font-medium text-dark">
                              Telefoonnummer
                            </label>
                            <input
                              type="tel"
                              id="telefoon"
                              name="telefoon"
                              className="w-full rounded-xl border border-dark/[0.08] bg-[#f5f5f5] px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                              placeholder="06-12345678"
                            />
                          </div>
                          <div>
                            <label htmlFor="type" className="mb-2 block text-sm font-medium text-dark">
                              Type project
                            </label>
                            <select
                              id="type"
                              name="type"
                              className="w-full rounded-xl border border-dark/[0.08] bg-[#f5f5f5] px-4 py-3.5 text-sm text-dark transition-all duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                            >
                              <option value="">Selecteer een type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="bericht" className="mb-2 block text-sm font-medium text-dark">
                            Bericht / omschrijving
                          </label>
                          <textarea
                            id="bericht"
                            name="bericht"
                            rows={5}
                            className="w-full resize-none rounded-xl border border-dark/[0.08] bg-[#f5f5f5] px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                            placeholder="Vertel kort over je project of vraag..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.98] sm:w-auto cursor-pointer"
                        >
                          <Send size={18} className="mr-2" />
                          Verstuur aanvraag
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact info — right col */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-5">
                <ScrollReveal delay={200}>
                  <div className="rounded-[2rem] border border-dark/[0.06] bg-white p-8 shadow-sm">
                    <h3 className="font-display text-xl font-semibold text-dark mb-6">
                      Contactgegevens
                    </h3>
                    <ul className="space-y-5">
                      {[
                        { icon: Phone, label: "Telefoon", value: "[Telefoonnummer]" },
                        { icon: Mail, label: "E-mail", value: "[E-mailadres]" },
                        { icon: MapPin, label: "Werkgebied", value: "[Werkgebied]" },
                        { icon: Clock, label: "Bereikbaarheid", value: "Werkdagen [tijden]" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                            <item.icon size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-dark-lighter">{item.label}</p>
                            <p className="mt-0.5 text-sm font-semibold text-dark">{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="rounded-[2rem] bg-[#2c2c26] p-8">
                    <h3 className="font-display text-lg font-semibold text-white mb-4">
                      Hoe gaat het na je aanvraag?
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      Na ontvangst van je aanvraag nemen we zo snel mogelijk contact met
                      je op — meestal binnen één werkdag. We plannen dan een afspraak op
                      locatie om je wensen te bespreken en de situatie te bekijken. Van
                      daaruit werken we een passend voorstel uit.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
