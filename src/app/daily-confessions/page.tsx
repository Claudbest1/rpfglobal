import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Daily Confessions",
  "Faith-filled daily declarations to start your day with purpose.",
);

export default function DailyConfessionsPage() {
  return (
    <PageTemplate
      title="Daily Confessions"
      eyebrow="Resources"
      description="Speak life over your day with faith-filled declarations rooted in God's Word."
      message="Daily confession content is being prepared. Check back soon."
    />
  );
}
