import { PageTemplate } from "@/components/layout/PageTemplate";
import { LinkCard } from "@/components/content/LinkCard";
import { ProseSection } from "@/components/content/ProseSection";
import { ministryContent } from "@/content/ministry";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about Royal Priesthood Family Ministry — our vision, mission, story, and leadership.",
);

const aboutLinks = [
  {
    title: "Our Story",
    href: "/about/our-story",
    description: "How RPF began in 2018 and grew into the House of Prayer.",
  },
  {
    title: "Vision & Mission",
    href: "/about/beliefs",
    description: "Raising kings and priests through the Word and prayer.",
  },
  {
    title: "Gatherings",
    href: "/about/gatherings",
    description: "Weekly, monthly, and annual meetings and programmes.",
  },
  {
    title: "Leadership",
    href: "/about/leadership",
    description: "Meet our setman and ministry leadership structure.",
  },
];

export default function AboutPage() {
  return (
    <PageTemplate title="About Us" description={siteConfig.tagline}>
      <div className="mx-auto max-w-3xl space-y-12">
        <ProseSection title="Introduction">
          <p>{ministryContent.introduction}</p>
          <p>
            Since inception in 2018, God has been faithful to build a people
            devoted to prayer, the Word, and the expansion of His kingdom.
          </p>
        </ProseSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {aboutLinks.map((link, index) => (
            <LinkCard key={link.href} {...link} index={index} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
