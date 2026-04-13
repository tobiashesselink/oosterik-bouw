import Header from "./Header";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  minimal?: boolean;
}

export default function PageHero({ title, subtitle, minimal = false }: PageHeroProps) {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
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
        {/* Subtle bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-dark/40" />

        {/* Navigation */}
        <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-6 lg:px-8">
          <Header inverted />
        </div>

        {/* Hero content */}
        {!minimal && title && (
          <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-12">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{subtitle}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
