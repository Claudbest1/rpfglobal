import Image from "next/image";
import { DailyConfessionExperience } from "@/components/DailyConfessionExperience";
import { dailyConfession2026 } from "@/content/daily-confession";

export function DailyConfessionContent() {
	const { title, year, video } = dailyConfession2026;

	return (
		<div className="mx-auto max-w-5xl space-y-12">
			<section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-rpf-navy via-slate-900 to-rpf-purple shadow-xl">
				<div className="px-6 py-10 text-center sm:px-10 sm:py-12">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-rpf-orange">
						Royal Priesthood Family Ministry
					</p>
					<h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
						{title}
					</h2>
					<p className="mt-3 text-base text-slate-300">
						Speak life over your day with faith-filled declarations rooted in
						God&apos;s Word.
					</p>
				</div>
			</section>

			<DailyConfessionExperience />

			<section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg">
				<div className="grid gap-0 lg:grid-cols-2">
					<div className="relative aspect-[9/16] w-full max-h-[640px] lg:max-h-none">
						<Image
							src={video.poster}
							alt={`${title} graphic`}
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							unoptimized
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col justify-center px-6 py-10 sm:px-10">
						<p className="text-sm font-semibold uppercase tracking-wider text-rpf-purple">
							Share &amp; Save
						</p>
						<h3 className="mt-2 text-2xl font-bold text-rpf-ink">
							Carry it with you
						</h3>
						<p className="mt-4 text-rpf-ink-muted">
							Save this confession to your phone, share it with family, or
							return here anytime to watch the video and declare God&apos;s Word
							over your day.
						</p>
						<a
							href={video.poster}
							download="rpf-2026-confession.jpg"
							className="btn-primary mt-6 inline-flex w-fit rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-rpf-orange/25"
						>
							Download graphic
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
