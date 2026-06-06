import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Podcasts",
  "Inspiring audio content from Royal Priesthood Family Ministry.",
);

export default function PodcastsPage() {
  return (
    <PageTemplate
      title="Podcasts"
      eyebrow="Media"
      description="Insightful conversations and teachings to deepen your faith on the go."
      message="Podcast episodes are coming soon."
    />
  );
}
