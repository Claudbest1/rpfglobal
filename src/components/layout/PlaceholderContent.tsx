import Link from "next/link";

type PlaceholderContentProps = {
  message?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlaceholderContent({
  message = "This page is being built. Check back soon for updates.",
  ctaHref = "/connect",
  ctaLabel = "Get in touch",
}: PlaceholderContentProps) {
  return (
    <div className="card-colorful mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rpf-purple-light">
        <svg
          className="h-8 w-8 text-rpf-purple"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17l-5.1-2.73a1 1 0 00-.98.04l-3.5 2.1a1 1 0 00-.44.83v4.24a1 1 0 001 1h14a1 1 0 001-1v-4.24a1 1 0 00-.44-.83l-3.5-2.1a1 1 0 00-.98-.04l-5.1 2.73a1 1 0 00-.92 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v9m0 0l3-3m-3 3L9 9"
          />
        </svg>
      </div>
      <p className="text-base leading-relaxed text-rpf-ink-muted">{message}</p>
      {ctaHref &&
        (ctaHref.startsWith("http") ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            {ctaLabel}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="btn-primary mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            {ctaLabel}
          </Link>
        ))}
    </div>
  );
}
