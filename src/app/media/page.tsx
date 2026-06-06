import { PageTemplate } from "@/components/layout/PageTemplate";
import { LinkCard } from "@/components/content/LinkCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Media",
  "Messages, worship, podcasts, and testimonies from Royal Priesthood Family Ministry.",
);

const mediaLinks = [
  {
    title: "Message Series",
    href: "/messages",
    description: "Teaching series to deepen your faith and understanding.",
  },
  {
    title: "Worship",
    href: "/worship",
    description: "Music and worship experiences from our ministry.",
  },
  {
    title: "Podcasts",
    href: "/podcasts",
    description: "Audio content for encouragement and growth on the go.",
  },
  {
    title: "Testimonies",
    href: "/testimonies",
    description: "Stories of faith, transformation, and God's faithfulness.",
  },
].map(link => ({
    ...link,
  href: `/media${link.href}`,
}))

export default function MediaPage() {
  return (
    <PageTemplate
      title="Media"
      description="Explore messages, worship, podcasts, and testimonies from our global family."
    >
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {mediaLinks.map((link, index) => (
          <LinkCard key={link.href} {...link} index={index} />
        ))}
      </div>
    </PageTemplate>
  );
}
