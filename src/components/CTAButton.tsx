import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-light hover:shadow-lg hover:shadow-brand/25 active:scale-[0.98]",
    secondary:
      "bg-dark text-white hover:bg-dark-light hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-brand text-brand hover:bg-brand hover:text-white active:scale-[0.98]",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-6 py-2.5 text-sm",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
