import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Small Groups",
  "Join a small group and grow in faith alongside like-minded believers.",
);

export default function SmallGroupsPage() {
  return (
    <PageTemplate
      title="Small Groups"
      eyebrow="Community"
      description="Build friendships, grow your faith, and find support in smaller community gatherings."
      message="Small group information and sign-up are coming soon."
      ctaHref="/connect"
      ctaLabel="Express interest"
    />
  );
}
