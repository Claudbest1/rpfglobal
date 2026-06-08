import Link from "next/link";
import { MessageSeriesSection } from "@/components/MessageSeriesSection";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { messageSeries } from "@/content/message-series";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"Message Series",
	"Teaching series and sermons from Royal Priesthood Family Ministry.",
);

export default function MessagesPage() {
	return (
		<PageTemplate
			title="Message Series"
			eyebrow="Media"
			description="Dive into our teaching series designed to equip you with biblical wisdom and practical faith for everyday life."
		>
			<div className="mx-auto max-w-6xl space-y-12">
				{messageSeries.map((series) => (
					<MessageSeriesSection
						key={series.id}
						series={series}
						featured={series.id === "love-walk"}
					/>
				))}

				<div className="rounded-2xl border border-rpf-blue/20 bg-gradient-to-br from-rpf-blue-light via-white to-rpf-purple-light px-6 py-10 text-center shadow-md sm:px-10">
					<h2 className="text-xl font-bold text-rpf-ink sm:text-2xl">
						More messages every week
					</h2>
					<p className="mx-auto mt-3 max-w-xl text-rpf-ink-muted">
						Subscribe to {siteConfig.shortName} on YouTube for new teachings,
						live services, and series updates.
					</p>
					<Link
						href={siteConfig.social.youtube}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold shadow-lg shadow-rpf-orange/25"
					>
						Subscribe on YouTube
					</Link>
				</div>
			</div>
		</PageTemplate>
	);
}
