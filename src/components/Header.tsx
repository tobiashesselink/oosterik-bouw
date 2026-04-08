import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/projecten", label: "Projecten" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-ons", label: "Over ons" },
];

interface HeaderProps {
  inverted?: boolean;
}

export default function Header({ inverted = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            src={inverted ? "/logo-inverted-white.png" : "/logo-liggend-transparant.png"}
            alt="Oosterik Bouw logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Hoofdnavigatie">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-base font-medium transition-all duration-200 ${
                    inverted
                      ? isActive
                        ? "text-brand font-semibold"
                        : "text-white hover:text-white"
                      : isActive
                        ? "text-brand font-semibold"
                        : "text-dark/70 hover:text-dark"
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className={`ml-4 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-brand-light active:scale-[0.97] ${
              inverted ? "bg-brand text-white" : "bg-brand text-white"
            }`}>
            Contact
          </Link>
        </nav>

        <button
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden ${
            inverted ? "text-white hover:bg-white/10" : "text-dark hover:bg-dark/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        className={`fixed inset-x-0 top-0 z-40 overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen bg-dark/95 backdrop-blur-md" : "max-h-0"
        }`}>
        <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8">
          <nav className="px-5 pb-6" aria-label="Mobiele navigatie">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-brand/15 text-brand" : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`
                  }>
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
