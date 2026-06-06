import Image from "next/image";
import { IBCTallyPopup } from "@/components/IBCTallyPopup";
import { IBCRegistration } from "@/components/IBCRegistration";
import { LocationMap } from "@/components/LocationMap";
import { ProseSection } from "@/components/content/ProseSection";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { ibcConfig } from "@/config/ibc";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"IBC",
	"International Believers' Convergence — an annual gathering of Royal Priesthood Family Ministry.",
);

const schedule = [
	{ day: "Wednesday – Friday", time: "4:00 PM" },
	{ day: "Saturday", time: "8:00 AM & 3:00 PM" },
	{ day: "Sunday", time: "8:00 AM" },
];

export default function IBCPage() {
	return (
		<>
		<IBCTallyPopup />
		<PageTemplate
			title="IBC"
			eyebrow="International Believers' Convergence"
			description="An annual convocation gathering believers for worship, teaching, and fellowship."
			heroImage={ibcConfig.heroImages.desktop}
			heroImageMobile={ibcConfig.heroImages.mobile}
		>
			<div className="mx-auto max-w-4xl space-y-12">
				<ProseSection title="About IBC">
					<p>
						International Believers&apos; Convergence (IBC) is the annual
						convocation of Royal Priesthood Family Ministry — a time of
						worship, the Word, prayer, and fellowship with believers from
						across communities and nations.
					</p>
					<p>
						The maiden edition was held in June 2024 at the House of Prayer,
						with the theme <strong>The Christian Life</strong>.
					</p>
				</ProseSection>

				<section className="card-colorful rounded-2xl border-l-4 border-l-rpf-orange p-6 sm:p-8">
					<p className="text-sm font-semibold uppercase tracking-wider text-rpf-orange">
						IBC 2026
					</p>
					<h2 className="mt-2 text-2xl font-bold text-rpf-ink sm:text-3xl">
						Grace &amp; Truth
					</h2>
					<p className="mt-4 text-lg font-semibold text-rpf-ink">
						24th – 28th June 2026
					</p>

					<div className="mt-6 grid gap-3 sm:grid-cols-3">
						{schedule.map((item) => (
							<div
								key={item.day}
								className="rounded-xl bg-white/80 px-4 py-3 text-left sm:text-center"
							>
								<p className="text-sm font-semibold text-rpf-ink">{item.day}</p>
								<p className="mt-1 text-sm text-rpf-ink-muted">{item.time}</p>
							</div>
						))}
					</div>

					<div className="mt-6">
						<p className="text-sm font-semibold uppercase tracking-wider text-rpf-blue">
							Location
						</p>
						<p className="mt-2 font-semibold text-rpf-ink">
							{ibcConfig.location.name}
						</p>
						<p className="mt-1 text-rpf-ink-muted">
							{ibcConfig.location.address}
						</p>
					</div>
				</section>

				<LocationMap
					name={ibcConfig.location.name}
					address={ibcConfig.location.address}
					title="Find Us"
				/>

				<IBCRegistration />

				<div className="overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
					<Image
						src="/images/events/ibc-billboard.png"
						alt="IBC 2026 — Grace and Truth, free transportation"
						width={1920}
						height={1080}
						sizes="(max-width: 1024px) 100vw, 896px"
						unoptimized
						className="h-auto w-full"
					/>
				</div>
			</div>
		</PageTemplate>
		</>
	);
}
