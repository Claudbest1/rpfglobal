import { PageTemplate } from "@/components/layout/PageTemplate";
import { LinkCard } from "@/components/content/LinkCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Resources",
  "Tools, guides, and materials to help you grow in faith and purpose.",
);

const resourceLinks = [
  {
    title: "Daily Confessions",
    href: "/daily-confessions",
    description: "Start each day with faith-filled declarations.",
  },
  {
    title: "Tools for Growth",
    href: "/resources/tools-for-growth",
    description: "Practical resources for spiritual maturity.",
  },
  {
    title: "Ministries",
    href: "/small-groups",
    description: "Explore and serve through our church ministries.",
  },
];

export default function ResourcesPage() {
  return (
    <PageTemplate
      title="Resources"
      description="Equip yourself with biblical, practical, and principle-based tools to achieve significance."
    >
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resourceLinks.map((link, index) => (
          <LinkCard key={link.href} {...link} index={index} />
        ))}
      </div>
    </PageTemplate>
  );
}
