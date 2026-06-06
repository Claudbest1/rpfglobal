import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Testimonies",
  "Stories of faith and transformation from our community.",
);

export default function TestimoniesPage() {
  return (
    <PageTemplate
      title="Testimonies"
      eyebrow="Media"
      description="Be encouraged by firsthand accounts of how faith has impacted lives in our community."
      message="Testimony videos and stories are being collected. Check back soon."
    />
  );
}
