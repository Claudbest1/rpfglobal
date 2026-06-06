import Link from "next/link";

const accentStyles = [
  {
    border: "border-l-rpf-blue",
    hover: "group-hover:text-rpf-blue",
  },
  {
    border: "border-l-rpf-purple",
    hover: "group-hover:text-rpf-purple",
  },
  {
    border: "border-l-rpf-orange",
    hover: "group-hover:text-rpf-orange",
  },
  {
    border: "border-l-rpf-teal",
    hover: "group-hover:text-rpf-teal",
  },
];

export function LinkCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  const accent = accentStyles[index % accentStyles.length];

  return (
    <Link
      href={href}
      className={`card-colorful group rounded-2xl border-l-4 p-6 ${accent.border}`}
    >
      <h2
        className={`text-lg font-semibold text-rpf-ink transition-colors ${accent.hover}`}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-rpf-ink-muted">
        {description}
      </p>
    </Link>
  );
}
