import { MinistryCard } from "@/components/content/MinistryCard";
import { ProseSection } from "@/components/content/ProseSection";
import { PageTemplate } from "@/components/layout/PageTemplate";
import {
	ministries,
	ministriesIntro,
	ministryAccents,
} from "@/content/ministries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"Ministries",
	"Explore the ministries of Royal Priesthood Family Ministry and how you can serve.",
);

export default function MinistriesPage() {
	return (
		<PageTemplate
			title="Ministries"
			eyebrow="About Us"
			description="Serving God and His people through dedicated ministry arms across the church."
		>
			<div className="mx-auto max-w-4xl space-y-10">
				<ProseSection>
					<p className="text-lg text-rpf-ink">{ministriesIntro}</p>
				</ProseSection>

				<div className="space-y-8">
					{ministries.map((ministry, index) => (
						<MinistryCard
							key={ministry.id}
							ministry={ministry}
							accent={ministryAccents[index % ministryAccents.length]}
						/>
					))}
				</div>
			</div>
		</PageTemplate>
	);
}
