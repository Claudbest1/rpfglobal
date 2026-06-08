import { DailyConfessionExperience } from "@/components/DailyConfessionExperience";
import { dailyConfession2026 } from "@/content/daily-confession";

export function DailyConfessionContent() {
	const { title } = dailyConfession2026;

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
		</div>
	);
}
