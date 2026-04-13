import gsap from "gsap";
import { type ReactNode, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const LEAVE_DURATION = 0.28;
const ENTER_DURATION = 0.42;

function getCurrentHref() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef(true);
  const isTransitioning = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(content, { opacity: 1, y: 0 });
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    gsap.killTweensOf([overlay, content]);

    if (prefersReducedMotion.current) {
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(content, { opacity: 1, y: 0, clearProps: "transform" });
      isTransitioning.current = false;
      return;
    }

    const revealTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        gsap.set(overlay, { pointerEvents: "none" });
        gsap.set(content, { clearProps: "transform" });
        isTransitioning.current = false;
      },
    });

    revealTimeline.set(content, { opacity: 0.78, y: 18 });
    revealTimeline.to(overlay, { autoAlpha: 0, duration: ENTER_DURATION }, 0);
    revealTimeline.to(content, { opacity: 1, y: 0, duration: ENTER_DURATION + 0.04 }, 0.06);

    return () => {
      revealTimeline.kill();
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      const anchor = target instanceof Element ? target.closest("a") : null;

      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.dataset.noTransition !== undefined) return;

      const nextUrl = new URL(anchor.href, window.location.href);

      if (nextUrl.origin !== window.location.origin) return;

      const isHashOnlyChange =
        nextUrl.pathname === window.location.pathname &&
        nextUrl.search === window.location.search &&
        nextUrl.hash !== window.location.hash;

      if (isHashOnlyChange) return;

      const nextHref = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;

      if (nextHref === getCurrentHref()) return;

      event.preventDefault();

      if (isTransitioning.current) return;

      const overlay = overlayRef.current;
      const content = contentRef.current;

      if (!overlay || !content || prefersReducedMotion.current) {
        isTransitioning.current = true;
        navigate(nextHref);
        return;
      }

      gsap.killTweensOf([overlay, content]);
      isTransitioning.current = true;

      const leaveTimeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          navigate(nextHref);
        },
      });

      leaveTimeline.set(overlay, { pointerEvents: "auto" });
      leaveTimeline.to(content, { opacity: 0.22, duration: LEAVE_DURATION }, 0);
      leaveTimeline.to(overlay, { autoAlpha: 1, duration: LEAVE_DURATION + 0.02 }, 0);
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [navigate]);

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed inset-0 z-[120] bg-surface-dark opacity-0"
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
