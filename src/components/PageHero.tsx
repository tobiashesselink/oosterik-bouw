import Badge from "./Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#2c2c26] px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        {badge && <Badge variant="dark" className="mb-6">{badge}</Badge>}
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/45">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
