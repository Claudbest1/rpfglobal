import { PageTemplate } from "@/components/layout/PageTemplate";
import { InfoCard } from "@/components/content/ProseSection";
import { ministryContent } from "@/content/ministry";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gatherings",
  "Weekly, monthly, and annual meetings at Royal Priesthood Family Ministry.",
);

export default function GatheringsPage() {
  const { weekly, monthly, annual } = ministryContent.gatherings;

  return (
    <PageTemplate
      title="Gatherings"
      eyebrow="About Us"
      description="Join us for Bible study, worship, prayer, and our annual convocations."
    >
      <div className="mx-auto max-w-4xl space-y-12">
        <section>
          <h2 className="mb-6 text-xl font-bold text-rpf-ink sm:text-2xl">
            Weekly Meetings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {weekly.map((item, i) => (
              <InfoCard
                key={item.name}
                title={item.name}
                subtitle={item.schedule}
                description={item.description}
                accent={i === 0 ? "border-l-rpf-blue" : "border-l-rpf-purple"}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-rpf-ink sm:text-2xl">
            Monthly Meetings
          </h2>
          <div className="grid gap-4">
            {monthly.map((item, i) => (
              <InfoCard
                key={item.name}
                title={item.name}
                subtitle={item.schedule}
                description={item.description}
                accent={i === 0 ? "border-l-rpf-orange" : "border-l-rpf-teal"}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-rpf-ink sm:text-2xl">
            Annual Meetings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {annual.map((item, i) => (
              <InfoCard
                key={item.name}
                title={item.name}
                subtitle={item.schedule}
                description={item.description}
                accent={i === 0 ? "border-l-rpf-rose" : "border-l-rpf-blue"}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
