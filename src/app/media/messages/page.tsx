import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Message Series",
  "Teaching series and sermons from Royal Priesthood Family Ministry.",
);

export default function MessagesPage() {
  return (
    <PageTemplate
      title="Message Series"
      eyebrow="Media"
      description="Dive into our teaching series designed to equip you with biblical wisdom."
      message="Message archives are being organized. Subscribe on YouTube for the latest teachings."
      ctaHref="https://www.youtube.com/@RPFGLOBAL"
      ctaLabel="Watch on YouTube"
    />
  );
}
