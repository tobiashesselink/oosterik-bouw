import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/projecten", label: "Projecten" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const animating = useRef(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Portal hamburger/X button — rendered at document.body so it escapes
  // any stacking context (e.g. StickyHeader's z-50 + GSAP transform).
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const [btnPos, setBtnPos] = useState<{ top: number; right: number } | null>(null);

  // Animate lines to X after the portal button mounts (refs become available).
  useEffect(() => {
    if (!btnPos || !line1Ref.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(line1Ref.current, { y: 5, rotation: 45 });
      gsap.set(line2Ref.current, { y: -5, rotation: -45 });
    } else {
      gsap.timeline()
        .to(line1Ref.current, { y: 5, duration: 0.15, ease: "power2.in" })
        .to(line2Ref.current, { y: -5, duration: 0.15, ease: "power2.in" }, "<")
        .to(line1Ref.current, { rotation: 45, duration: 0.22, ease: "power3.out" })
        .to(line2Ref.current, { rotation: -45, duration: 0.22, ease: "power3.out" }, "<");
    }
  }, [btnPos]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(bgRef.current, { opacity: 0 });
    gsap.set(gradientRef.current, { opacity: 0 });

    if (!reduced) {
      const items = navItemRefs.current.filter(Boolean);
      gsap.set(items, { opacity: 0, y: 60 });
    }

    window.addEventListener("open-mobile-menu", open);
    window.addEventListener("close-mobile-menu", close);
    return () => {
      window.removeEventListener("open-mobile-menu", open);
      window.removeEventListener("close-mobile-menu", close);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function open(e: Event) {
    if (animating.current) return;
    animating.current = true;

    // Position portal button exactly where the header button was.
    const { top, right } = (e as CustomEvent<{ top: number; right: number }>).detail;
    setBtnPos({ top, right });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = navItemRefs.current.filter(Boolean);

    gsap.set(overlayRef.current, { visibility: "visible" });
    window.dispatchEvent(new CustomEvent("mobile-menu-opened"));

    if (reduced) {
      gsap.set(bgRef.current, { opacity: 1 });
      gsap.set(gradientRef.current, { opacity: 1 });
      gsap.set(items, { opacity: 1, y: 0 });
      animating.current = false;
      return;
    }

    gsap.timeline({ onComplete: () => { animating.current = false; } })
      .to(bgRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .to(gradientRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .to(items, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.08,
      }, "-=0.3");
  }

  function close() {
    if (animating.current) return;
    animating.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = navItemRefs.current.filter(Boolean);

    if (reduced) {
      gsap.set(overlayRef.current, { visibility: "hidden" });
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(gradientRef.current, { opacity: 0 });
      gsap.set(items, { opacity: 0, y: 60 });
      animating.current = false;
      setBtnPos(null);
      window.dispatchEvent(new CustomEvent("mobile-menu-close-done"));
      return;
    }

    // Animate icon back to hamburger — runs in parallel with overlay close.
    if (line1Ref.current) {
      gsap.timeline()
        .to([line1Ref.current, line2Ref.current], { rotation: 0, duration: 0.2, ease: "power2.in" })
        .to(line1Ref.current, { y: 0, duration: 0.15, ease: "power3.out" }, "-=0.05")
        .to(line2Ref.current, { y: 0, duration: 0.15, ease: "power3.out" }, "<");
    }

    // Overlay close — portal button stays visible until this finishes so the
    // hamburger icon remains on top of the fading overlay the whole time.
    gsap.timeline({
      onComplete: () => {
        gsap.set(overlayRef.current, { visibility: "hidden" });
        gsap.set(items, { y: 60 });
        animating.current = false;
        setBtnPos(null);
        window.dispatchEvent(new CustomEvent("mobile-menu-close-done"));
      },
    })
      .to(items, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in",
        stagger: { each: 0.05, from: "end" },
      })
      .to(gradientRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.1")
      .to(bgRef.current, { opacity: 0, duration: 0.35, ease: "power2.in" }, "-=0.15");
  }

  return createPortal(
    <>
      {/* Animated hamburger/X button — at body level so z-[110] always wins
          over the overlay (z-[100]) regardless of any parent stacking context. */}
      {btnPos && (
        <button
          className="fixed z-[110] flex h-10 w-10 items-center justify-center lg:hidden"
          style={{ top: btnPos.top, right: btnPos.right }}
          onClick={close}
          aria-label="Sluit menu"
        >
          <span className="flex h-[12px] w-[22px] flex-col justify-between">
            <span
              ref={line1Ref}
              className="block h-0.5 w-full rounded-full bg-white"
              style={{ transformOrigin: "50% 50%" }}
            />
            <span
              ref={line2Ref}
              className="block h-0.5 w-full rounded-full bg-white"
              style={{ transformOrigin: "50% 50%" }}
            />
          </span>
        </button>
      )}

      {/* Fullscreen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] overflow-hidden lg:hidden"
        style={{ visibility: "hidden" }}
      >
        {/* Dark background */}
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-dark)" }}
        />

        {/* Warm orange gradient */}
        <div
          ref={gradientRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 88% 6%, rgba(229,120,44,0.55) 0%, rgba(229,120,44,0.2) 32%, transparent 62%)",
          }}
        />

        {/* Nav items — vertically centered */}
        <div className="relative z-10 flex h-full flex-col justify-center px-10 sm:px-16">
          <nav aria-label="Mobiele navigatie">
            {navLinks.map((link, i) => (
              <div
                key={link.to}
                ref={(el) => { navItemRefs.current[i] = el; }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={close}
                  className={({ isActive }) =>
                    `block py-2.5 font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl ${
                      isActive ? "text-brand" : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>,
    document.body
  );
}
