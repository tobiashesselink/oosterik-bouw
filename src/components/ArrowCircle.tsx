import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";

interface ArrowCircleProps {
  className?: string;
  iconSize?: number;
}

/**
 * Reusable arrow circle button (diagonal up-right arrow).
 * Parents control visibility/scale via GSAP using the forwarded ref.
 * Initial state (opacity: 0, scale: 0.8) should be set by the parent via
 * gsap.set(), matching the shared animation:
 *   show → gsap.to(ref, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
 *   hide → gsap.to(ref, { opacity: 0, scale: 0.8, duration: 0.2, ease: "power2.in" })
 */
const ArrowCircle = forwardRef<HTMLDivElement, ArrowCircleProps>(
  ({ className = "", iconSize = 16 }, ref) => (
    <div
      ref={ref}
      className={`flex shrink-0 items-center justify-center rounded-full ${className}`}
    >
      <ArrowUpRight size={iconSize} />
    </div>
  )
);

ArrowCircle.displayName = "ArrowCircle";
export default ArrowCircle;
