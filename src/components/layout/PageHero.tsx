import Image from "next/image";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
};

export function PageHero({ title, description, eyebrow, image }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative min-h-[64vh] overflow-hidden border-b border-slate-200/60 sm:min-h-[72vh]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          priority
          unoptimized
          className="object-cover object-center"
        />
      </section>
    );
  }

  return (
    <section className="section-hero-gradient border-b border-slate-200/60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-rpf-purple">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-rpf-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-rpf-ink-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
