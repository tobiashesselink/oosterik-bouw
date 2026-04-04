import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
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
      {/* Page header */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Neem contact op
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Heb je een bouwplan, een vraag of wil je gewoon eens sparren over de
            mogelijkheden? Neem gerust contact op. We reageren snel en komen graag bij
            je langs voor een vrijblijvend locatiebezoek.
          </p>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-2xl border border-surface-dark bg-white p-8 shadow-sm sm:p-10">
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
                              className="w-full rounded-xl border border-surface-dark bg-surface-warm px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark-lighter/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                              className="w-full rounded-xl border border-surface-dark bg-surface-warm px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark-lighter/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                              className="w-full rounded-xl border border-surface-dark bg-surface-warm px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark-lighter/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                              className="w-full rounded-xl border border-surface-dark bg-surface-warm px-4 py-3.5 text-sm text-dark transition-all duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                            className="w-full resize-none rounded-xl border border-surface-dark bg-surface-warm px-4 py-3.5 text-sm text-dark transition-all duration-200 placeholder:text-dark-lighter/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                            placeholder="Vertel kort over je project of vraag..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/25 active:scale-[0.98] sm:w-auto cursor-pointer"
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

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <ScrollReveal delay={200}>
                  <div className="rounded-2xl border border-surface-dark bg-white p-8 shadow-sm">
                    <h3 className="mb-6 font-display text-xl font-semibold text-dark">
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
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                            <item.icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm text-dark-lighter">{item.label}</p>
                            <p className="mt-0.5 font-medium text-dark">{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="rounded-2xl bg-dark p-8 text-white">
                    <h3 className="mb-4 font-display text-xl font-semibold">
                      Hoe gaat het na je aanvraag?
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
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
