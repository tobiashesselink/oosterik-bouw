import { useEffect, useRef, useState } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onOpened() { setMenuOpen(true); }
    function onCloseDone() { setMenuOpen(false); }

    window.addEventListener("mobile-menu-opened", onOpened);
    window.addEventListener("mobile-menu-close-done", onCloseDone);
    return () => {
      window.removeEventListener("mobile-menu-opened", onOpened);
      window.removeEventListener("mobile-menu-close-done", onCloseDone);
    };
  }, []);

  function openMenu() {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    window.dispatchEvent(new CustomEvent("open-mobile-menu", {
      detail: { top: rect.top, right: window.innerWidth - rect.right },
    }));
  }

  return (
    <header className="flex items-center justify-between py-2 sm:py-4">
      <Link to="/" className="flex items-center">
        <img
          src={inverted ? "/logo-inverted-white.png" : "/logo-liggend-transparant.png"}
          alt="Oosterik Bouw logo"
          className="h-9 w-auto object-contain sm:h-12"
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
          className="ml-4 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-light active:scale-[0.97]">
          Contact
        </Link>
      </nav>

      {/* Mobile hamburger — hidden while the portal button in MobileMenu takes over. */}
      <button
        ref={buttonRef}
        className="flex h-10 w-10 items-center justify-center lg:hidden"
        style={menuOpen ? { visibility: "hidden", pointerEvents: "none" } : undefined}
        onClick={openMenu}
        aria-label="Open menu"
      >
        <span className="flex h-[12px] w-[22px] flex-col justify-between">
          <span className={`block h-0.5 w-full rounded-full ${inverted ? "bg-white" : "bg-dark"}`} />
          <span className={`block h-0.5 w-full rounded-full ${inverted ? "bg-white" : "bg-dark"}`} />
        </span>
      </button>
    </header>
  );
}
