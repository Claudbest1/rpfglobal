import { ProseSection } from "@/components/content/ProseSection";
import { PageTemplate } from "@/components/layout/PageTemplate";
import type { Programme } from "@/content/programmes";

type ProgrammeDetailProps = {
	programme: Programme;
};

export function ProgrammeDetail({ programme }: ProgrammeDetailProps) {
	return (
		<PageTemplate
			title={programme.title}
			eyebrow="Programme"
			description={programme.subtitle}
			heroImage={programme.heroImage}
			heroImageMobile={programme.heroImageMobile}
		>
			<div className="mx-auto max-w-4xl">
				<ProseSection title={`About ${programme.title}`}>
					<p>{programme.description}</p>
					{programme.details?.map((detail) => (
						<p key={detail}>
							<strong>{detail}</strong>
						</p>
					))}
				</ProseSection>
			</div>
		</PageTemplate>
	);
}
