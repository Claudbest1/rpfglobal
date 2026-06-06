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
    href: "/media/messages",
    description: "Teaching series to deepen your faith and understanding.",
  },
  {
    title: "Worship",
    href: "/media/worship",
    description: "Music and worship experiences from our ministry.",
  },
  {
    title: "Podcasts",
    href: "/media/podcasts",
    description: "Audio content for encouragement and growth on the go.",
  },
  {
    title: "Testimonies",
    href: "/media/testimonies",
    description: "Stories of faith, transformation, and God's faithfulness.",
  },
];

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
