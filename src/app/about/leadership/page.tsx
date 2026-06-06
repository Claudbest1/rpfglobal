import { PageTemplate } from "@/components/layout/PageTemplate";
import { ProseSection } from "@/components/content/ProseSection";
import { ministryContent } from "@/content/ministry";
import { createPageMetadata } from "@/lib/metadata";

const structureAccents = [
  "border-l-rpf-blue",
  "border-l-rpf-teal",
];

export const metadata = createPageMetadata(
  "Leadership",
  "Meet the leadership of Royal Priesthood Family Ministry.",
);

export default function LeadershipPage() {
  const { setman, structure } = ministryContent.leadership;

  return (
    <PageTemplate
      title="Leadership"
      eyebrow="About Us"
      description="RPF is organized at the leadership and operational levels to serve God's purpose."
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <ProseSection title="Organizational Structure">
          <div className="grid gap-4 sm:grid-cols-2">
            {structure.map((item, index) => (
              <div
                key={item.level}
                className={`card-colorful rounded-2xl border-l-4 p-6 ${structureAccents[index]}`}
              >
                <h3 className="font-semibold text-rpf-ink">{item.level}</h3>
                <p className="mt-2 text-sm text-rpf-ink-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ProseSection>

        <ProseSection title="Setman">
          <div className="rounded-2xl border border-rpf-orange/30 bg-gradient-to-br from-rpf-orange-light via-white to-rpf-purple-light p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-rpf-orange">
              {setman.title}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-rpf-ink">
              {setman.name}
            </h3>
            <p className="mt-4 text-rpf-ink-muted">{setman.family}</p>
          </div>
        </ProseSection>
      </div>
    </PageTemplate>
  );
}
