import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Serving Opportunities",
  "Discover ways to serve and make an impact in our ministry.",
);

export default function ServingPage() {
  return (
    <PageTemplate
      title="Serving Opportunities"
      eyebrow="What's Next"
      description="Use your gifts to serve God and humanity. Find a place to make a difference."
      message="Service unit listings are coming soon."
      ctaHref="/connect"
      ctaLabel="Ask about serving"
    />
  );
}
