import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Missions",
  "Our mission outreach and global impact initiatives.",
);

export default function MissionsPage() {
  return (
    <PageTemplate
      title="Missions"
      eyebrow="Outreach"
      description="Taking the gospel and practical support to communities around the world."
      message="Mission updates and opportunities are being prepared."
    />
  );
}
