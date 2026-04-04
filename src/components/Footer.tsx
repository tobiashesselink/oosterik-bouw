import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/projecten", label: "Projecten" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

const dienstenLinks = [
  { to: "/diensten", label: "Aanbouw & uitbouw" },
  { to: "/diensten", label: "Interne verbouwing" },
  { to: "/diensten", label: "Bijgebouwen & tuinhuizen" },
  { to: "/diensten", label: "Dakkapel & dakrenovatie" },
  { to: "/diensten", label: "Badkamer & toilet" },
  { to: "/diensten", label: "Verduurzaming" },
];

export default function Footer() {
  return (
    <footer className="bg-dark">
      {/* CTA bar */}
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Klaar om te beginnen?</h3>
            <p className="text-sm text-gray-400">Vraag een vrijblijvende offerte aan.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/20">
            Neem contact op
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <Link to="/" className="inline-block">
              <img src="/logo-liggend-transparant.png" alt="Oosterik Bouw" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Bouwen naar jouw wens — van plan tot oplevering. Persoonlijk, betrouwbaar en met oog voor kwaliteit.
            </p>
          </div>

          {/* Pagina's */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">Pagina&apos;s</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-brand-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">Diensten</h3>
            <ul className="space-y-3">
              {dienstenLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-brand-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-gray-400">[Telefoonnummer]</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-gray-400">[E-mailadres]</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-gray-400">[Werkgebied]</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Oosterik Bouw. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
