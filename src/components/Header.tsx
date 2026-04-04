import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/projecten", label: "Projecten" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-ons", label: "Over ons" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-width invisible spacer for fixed positioning context */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-2 pb-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header
            className={`pointer-events-auto flex items-center justify-between rounded-xl px-6 py-4 transition-all duration-500 ${
              scrolled
                ? "bg-white/80 shadow-lg backdrop-blur-xl border border-white/20"
                : "bg-transparent border border-transparent"
            }`}>
            <Link to="/" className="flex items-center">
              <img src="/logo-liggend-transparant.png" alt="Oosterik Bouw logo" className="h-12 w-auto object-contain" />
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Hoofdnavigatie">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
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
                className="ml-4 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
                Contact
              </Link>
            </nav>

            <button
              className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden ${
                scrolled ? "text-white hover:bg-white/10" : "text-dark hover:bg-dark/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] bg-dark/95 backdrop-blur-md" : "max-h-0"
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
