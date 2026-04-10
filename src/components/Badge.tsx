interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "brand";
  className?: string;
}

const variants = {
  // On white or light-gray backgrounds
  light: "border border-dark/8 bg-[#f5f5f5] text-dark/45",
  // On dark (#2c2c26) backgrounds
  dark: "border border-white/15 bg-white/5 text-white/40",
  // On brand-orange backgrounds
  brand: "border border-white/25 bg-white/15 text-white backdrop-blur-sm",
};

export default function Badge({
  children,
  variant = "light",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
