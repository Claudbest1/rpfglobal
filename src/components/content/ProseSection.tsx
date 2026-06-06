type ProseSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function ProseSection({ title, children, className = "" }: ProseSectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2 className="mb-4 text-xl font-bold text-rpf-ink sm:text-2xl">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-base leading-relaxed text-rpf-ink-muted">
        {children}
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  subtitle,
  description,
  accent = "border-l-rpf-blue",
}: {
  title: string;
  subtitle?: string;
  description: string;
  accent?: string;
}) {
  return (
    <article className={`card-colorful rounded-2xl border-l-4 p-6 ${accent}`}>
      <h3 className="text-lg font-semibold text-rpf-ink">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-sm font-semibold text-rpf-orange">{subtitle}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-rpf-ink-muted">
        {description}
      </p>
    </article>
  );
}
