import { LinkCard } from "@/components/content/LinkCard";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { programmeConfig } from "@/config/programme";
import { programmes } from "@/content/programmes";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"Programme",
	"Annual gatherings and special programmes at Royal Priesthood Family Ministry.",
);

export default function ProgrammePage() {
	return (
		<PageTemplate
			title="Programme"
			description="Explore our annual convocations, prayer gatherings, and transformational meetings."
			heroImage={programmeConfig.heroImages.desktop}
			heroImageMobile={programmeConfig.heroImages.mobile}
		>
			<div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
				{programmes.map((programme, index) => (
					<LinkCard
						key={programme.id}
						title={programme.title}
						description={programme.subtitle}
						href={`/programme/${programme.slug}`}
						index={index}
					/>
				))}
			</div>
		</PageTemplate>
	);
}
