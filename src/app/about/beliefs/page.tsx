import { PageTemplate } from "@/components/layout/PageTemplate";
import { ProseSection } from "@/components/content/ProseSection";
import { ministryContent } from "@/content/ministry";
import { createPageMetadata } from "@/lib/metadata";

const missionAccents = [
  "border-l-rpf-blue bg-rpf-blue-light/40",
  "border-l-rpf-purple bg-rpf-purple-light/40",
];

export const metadata = createPageMetadata(
  "Vision & Mission",
  "The vision and mission of Royal Priesthood Family Ministry.",
);

export default function BeliefsPage() {
  return (
    <PageTemplate
      title="Vision & Mission"
      eyebrow="About Us"
      description="Our calling is to raise kings and priests through the Word and prayer."
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <ProseSection title="Vision">
          <p className="rounded-2xl bg-gradient-to-r from-rpf-blue via-rpf-purple to-rpf-orange bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            {ministryContent.vision}
          </p>
        </ProseSection>

        <ProseSection title="Mission">
          <div className="space-y-6">
            {ministryContent.mission.map((item, index) => (
              <div
                key={item.title}
                className={`card-colorful rounded-2xl border-l-4 p-6 ${missionAccents[index]}`}
              >
                <h3 className="text-lg font-semibold text-rpf-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-rpf-ink-muted">{item.text}</p>
                <p className="mt-2 text-sm font-medium text-rpf-blue">
                  {item.references}
                </p>
              </div>
            ))}
          </div>
        </ProseSection>
      </div>
    </PageTemplate>
  );
}
