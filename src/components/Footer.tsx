import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-dark">
      {/* Orange radial glow — top right */}
      <div
        className="pointer-events-none absolute right-0 top-0"
        style={{
          width: "60%",
          height: "100%",
          background:
            "radial-gradient(circle at 100% 0%, rgba(229,120,44,0.20) 0%, rgba(229,120,44,0.07) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <Link to="/" className="inline-block">
              <img src="/logo-inverted-white.png" alt="Oosterik Bouw" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Bouwen naar jouw wens, van plan tot oplevering. Persoonlijk, betrouwbaar en met oog voor kwaliteit.
            </p>
          </div>

          {/* Pagina's */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Pagina&apos;s</h3>
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
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Diensten</h3>
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
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
                <a href="tel:+31630092478" className="text-gray-400 transition-colors hover:text-brand-light">06 30 09 24 78</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <a href="mailto:info@oosterikbouw.nl" className="text-gray-400 transition-colors hover:text-brand-light">info@oosterikbouw.nl</a>
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
      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Oosterik Bouw. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
