import Link from "next/link";
import { EditorialCard } from "@/components/EditorialCard";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { editorials } from "@/content/editorials";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"Editorials",
	"Thoughtful articles and reflections from Royal Priesthood Family Ministry.",
);

export default function EditorialsPage() {
	return (
		<PageTemplate
			title="Editorials"
			eyebrow="Media"
			description="Thoughtful writings on faith, life, and purpose from our ministry family."
		>
			<div className="mx-auto max-w-6xl space-y-12">
				<section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-rpf-navy via-slate-900 to-rpf-purple px-6 py-10 text-center shadow-lg sm:px-10">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-rpf-orange">
						Written Reflections
					</p>
					<h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
						Insights for everyday faith
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
						Editorials from {siteConfig.shortName} — biblical perspective on
						life, leadership, family, and walking with God.
					</p>
				</section>

				{editorials.length > 0 ? (
					<div className="grid gap-6 md:grid-cols-2">
						{editorials.map((editorial, index) => (
							<EditorialCard
								key={editorial.id}
								editorial={editorial}
								index={index}
							/>
						))}
					</div>
				) : (
					<section className="rounded-2xl border border-rpf-purple/20 bg-gradient-to-br from-rpf-purple-light via-white to-rpf-blue-light px-6 py-12 text-center shadow-md sm:px-10">
						<div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
							<svg
								className="h-7 w-7 text-rpf-purple"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.75"
								aria-hidden
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
						</div>
						<h2 className="text-xl font-bold text-rpf-ink sm:text-2xl">
							Editorials coming soon
						</h2>
						<p className="mx-auto mt-3 max-w-xl text-rpf-ink-muted">
							We are preparing thoughtful articles and reflections. Check back
							soon, or subscribe on YouTube for the latest from our ministry.
						</p>
						<Link
							href={siteConfig.social.youtube}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold shadow-lg shadow-rpf-orange/25"
						>
							Subscribe on YouTube
						</Link>
					</section>
				)}
			</div>
		</PageTemplate>
	);
}
