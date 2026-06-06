import { PageHero } from "./PageHero";
import { PlaceholderContent } from "./PlaceholderContent";

type PageTemplateProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  heroImage?: string;
  message?: string;
  ctaHref?: string;
  ctaLabel?: string;
  children?: React.ReactNode;
};

export function PageTemplate({
  title,
  description,
  eyebrow,
  heroImage,
  message,
  ctaHref,
  ctaLabel,
  children,
}: PageTemplateProps) {
  return (
    <>
      <PageHero
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={heroImage}
      />
      <section className="bg-rpf-surface-alt px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {children ?? (
          <PlaceholderContent
            message={message}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
          />
        )}
      </section>
    </>
  );
}
