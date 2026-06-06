import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Next Generation",
  "Youth and next-generation programs at Royal Priesthood Family Ministry.",
);

export default function NextGenPage() {
  return (
    <PageTemplate
      title="Next Generation"
      eyebrow="What's Next"
      description="Empowering the next generation with faith, purpose, and community."
      message="Youth and next-gen program details are coming soon."
    />
  );
}
