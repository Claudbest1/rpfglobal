import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Outreaches",
  "Our outreach initiatives and global impact.",
);

export default function MissionsPage() {
  return (
    <PageTemplate
      title="Outreaches"
      eyebrow="Outreach"
      description="Taking the gospel and practical support to communities around the world."
      message="Outreach updates and opportunities are being prepared."
    />
  );
}
