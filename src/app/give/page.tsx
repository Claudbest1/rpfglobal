import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Give",
  "Partner with Royal Priesthood Family Ministry through your generous giving.",
);

export default function GivePage() {
  return (
    <PageTemplate
      title="Give"
      description="Your generosity helps us reach more lives with the gospel and equip believers around the world."
      message="Online giving is being set up. Contact us to learn how you can partner with our mission."
      ctaHref="/connect"
      ctaLabel="Contact us to give"
    />
  );
}
