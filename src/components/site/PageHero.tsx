interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-gradient-warm">
      <div className="container mx-auto px-6 text-center max-w-3xl animate-fade-up">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-5">{eyebrow}</p>
        )}
        <h1 className="font-serif text-5xl md:text-7xl text-foreground text-balance leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
