import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Worship",
  "Worship music and experiences from Royal Priesthood Family Ministry.",
);

export default function WorshipPage() {
  return (
    <PageTemplate
      title="Worship"
      eyebrow="Media"
      description="Experience the heart of worship through music and praise."
      message="Worship content is coming soon."
    />
  );
}
