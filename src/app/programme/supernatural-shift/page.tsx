import Image from "next/image";
import { LocationMap } from "@/components/LocationMap";
import { SupernaturalShiftHeroRegister } from "@/components/SupernaturalShiftHeroRegister";
import { TelegramRegisterButton } from "@/components/TelegramRegisterButton";
import { ProseSection } from "@/components/content/ProseSection";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { getProgramme } from "@/content/programmes";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const programme = getProgramme("supernatural-shift");

const location = {
	name: "The House of Prayer",
	address: "1B, Deji Akinleye Avenue, Jakan, Agbowo, Ibadan, Oyo State",
};

export const metadata = createPageMetadata(
	"Supernatural Shift",
	"Supernatural Shift & Dedication of the House of Prayer — Apostolic Invasion '26 at Royal Priesthood Family Ministry.",
);

export default function SupernaturalShiftPage() {
	if (!programme) notFound();

	return (
		<PageTemplate
			title={programme.title}
			eyebrow="Programme"
			description="Supernatural Shift & Dedication of the House of Prayer"
			heroImage={programme.heroImage}
			heroImageMobile={programme.heroImageMobile}
			heroAction={<SupernaturalShiftHeroRegister />}
		>
			<div className="mx-auto max-w-4xl space-y-12">
				<ProseSection title="About Supernatural Shift">
					<p>
						Join us for <strong>Apostolic Invasion &apos;26</strong> — a
						powerful gathering themed{" "}
						<strong>
							Supernatural Shift &amp; Dedication of the House of Prayer
						</strong>
						. Experience a supernatural move of God with Apostle Arome Osayi
						and host Reverend Temidayo Aderibigbe.
					</p>
				</ProseSection>

				<section className="card-colorful rounded-2xl border-l-4 border-l-rpf-purple p-6 sm:p-8">
					<p className="text-sm font-semibold uppercase tracking-wider text-rpf-purple">
						Apostolic Invasion &apos;26
					</p>
					<h2 className="mt-2 text-2xl font-bold text-rpf-ink sm:text-3xl">
						Supernatural Shift
					</h2>
					<p className="mt-2 text-lg font-semibold text-rpf-orange">
						&amp; Dedication of the House of Prayer
					</p>

					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						<div className="rounded-xl bg-white/80 px-4 py-3">
							<p className="text-sm font-semibold uppercase tracking-wider text-rpf-ink-light">
								Date &amp; Time
							</p>
							<p className="mt-1 font-semibold text-rpf-ink">
								15th – 16th September 2026
							</p>
							<p className="mt-1 text-sm text-rpf-ink-muted">
								3:00 PM (WAT) daily
							</p>
						</div>
						<div className="rounded-xl bg-white/80 px-4 py-3">
							<p className="text-sm font-semibold uppercase tracking-wider text-rpf-ink-light">
								Speakers
							</p>
							<p className="mt-1 font-semibold text-rpf-ink">
								Apostle Arome Osayi
							</p>
							<p className="mt-1 text-sm text-rpf-ink-muted">
								Host: Rev. Temidayo Aderibigbe
							</p>
						</div>
					</div>

					<div className="mt-4 rounded-xl bg-white/80 px-4 py-3">
						<p className="text-sm font-semibold uppercase tracking-wider text-rpf-blue">
							Location
						</p>
						<p className="mt-2 font-semibold text-rpf-ink">{location.name}</p>
						<p className="mt-1 text-rpf-ink-muted">{location.address}</p>
					</div>

					<p className="mt-4 text-sm text-rpf-ink-muted">
						Enquiries:{" "}
						<a href="tel:+2349037973432" className="font-semibold text-rpf-blue hover:underline">
							+234 903 797 3432
						</a>
						,{" "}
						<a href="tel:+2348169004209" className="font-semibold text-rpf-blue hover:underline">
							+234 816 900 4209
						</a>
					</p>

					<div className="mt-8 flex justify-center">
						<TelegramRegisterButton variant="telegram" />
					</div>
				</section>

				<div className="space-y-6">
					<div className="overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
						<Image
							src="/images/events/supernatural-shift-main.jpg"
							alt="Supernatural Shift — Live in Ibadan, 15th–16th September 2026"
							width={1920}
							height={1080}
							sizes="(max-width: 1024px) 100vw, 896px"
							unoptimized
							className="h-auto w-full"
						/>
					</div>

					<div className="mx-auto max-w-sm overflow-hidden rounded-2xl shadow-md sm:max-w-md sm:rounded-3xl">
						<Image
							src="/images/events/supernatural-shift-poster.jpg"
							alt="Supernatural Shift & Dedication of the House of Prayer — event poster"
							width={1080}
							height={1920}
							sizes="(max-width: 640px) 100vw, 448px"
							unoptimized
							className="h-auto w-full"
						/>
					</div>

					<div className="overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
						<Image
							src="/images/events/supernatural-shift-billboard.jpg"
							alt="Supernatural Shift billboard — Apostolic Invasion 2026"
							width={1920}
							height={1152}
							sizes="(max-width: 1024px) 100vw, 896px"
							unoptimized
							className="h-auto w-full"
						/>
					</div>
				</div>

				<section className="rounded-2xl border border-[#229ED9]/20 bg-gradient-to-br from-[#229ED9]/10 via-white to-rpf-purple-light px-6 py-10 text-center shadow-md sm:px-10">
					<h2 className="text-xl font-bold text-rpf-ink sm:text-2xl">
						Ready to join us?
					</h2>
					<p className="mx-auto mt-3 max-w-xl text-rpf-ink-muted">
						Register via our Telegram channel for updates, reminders, and
						everything you need for Supernatural Shift.
					</p>
					<div className="mt-6 flex justify-center">
						<TelegramRegisterButton variant="telegram" />
					</div>
				</section>

				<LocationMap
					name={location.name}
					address={location.address}
					title="Find Us"
				/>
			</div>
		</PageTemplate>
	);
}
