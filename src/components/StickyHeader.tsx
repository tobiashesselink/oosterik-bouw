import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function StickyHeader() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastY = window.scrollY;
    let visible = false;
    let heroVisible = true;
    let ticking = false;

    // Always start hidden on (re)mount / route change
    gsap.set(el, { y: "-110%" });

    function hide() {
      if (!visible) return;
      visible = false;
      if (reduced) gsap.set(el, { y: "-110%" });
      else gsap.to(el, { y: "-110%", duration: 0.25, ease: "power2.in", overwrite: true });
    }

    function show() {
      if (visible) return;
      visible = true;
      if (reduced) gsap.set(el, { y: "0%" });
      else gsap.to(el, { y: "0%", duration: 0.45, ease: "power2.out", overwrite: true });
    }

    function update() {
      const currentY = window.scrollY;
      const goingDown = currentY > lastY;

      if (heroVisible || goingDown) hide();
      else show();

      lastY = currentY;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    const hero = document.querySelector("main > *:first-child");
    let observer: IntersectionObserver | null = null;

    if (hero) {
      observer = new IntersectionObserver(
        ([entry]) => {
          heroVisible = entry.isIntersecting;
          if (heroVisible) hide();
        },
        { rootMargin: "-130px 0px 0px 0px", threshold: 0 }
      );
      observer.observe(hero);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      gsap.killTweensOf(el);
    };
  }, [pathname]);

  return (
    <div ref={wrapRef} className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-dark sm:rounded-[2rem]">
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
        <div className="relative mx-auto max-w-7xl px-6 py-2.5 sm:py-4 lg:px-8">
          <Header inverted />
        </div>
      </div>
    </div>
  );
}
