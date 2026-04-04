interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  eyebrow,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-brand" : "text-brand"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-dark"
        }`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            centered ? "text-center" : ""
          } ${light ? "text-gray-300" : "text-dark-lighter"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
