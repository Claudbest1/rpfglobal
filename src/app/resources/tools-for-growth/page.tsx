import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Tools for Growth",
  "Practical resources to help you grow in faith and maturity.",
);

export default function ToolsForGrowthPage() {
  return (
    <PageTemplate
      title="Tools for Growth"
      eyebrow="Resources"
      description="Practical guides and materials to support your spiritual journey."
      message="Growth resources are being curated. Check back soon."
    />
  );
}
