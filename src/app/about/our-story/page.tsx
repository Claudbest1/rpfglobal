import { PageTemplate } from "@/components/layout/PageTemplate";
import { ProseSection } from "@/components/content/ProseSection";
import { ministryContent } from "@/content/ministry";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Our Story",
  "The story of Royal Priesthood Family Ministry from 2018 to the House of Prayer.",
);

export default function OurStoryPage() {
  return (
    <PageTemplate
      title="Our Story"
      eyebrow="About Us"
      description="How it all started — from a School of Prayer at the University of Ibadan to the House of Prayer."
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <ProseSection title="How It All Started">
          {ministryContent.history.founding.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </ProseSection>

        <ProseSection title="The House of Prayer">
          {ministryContent.history.houseOfPrayer.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </ProseSection>
      </div>
    </PageTemplate>
  );
}
