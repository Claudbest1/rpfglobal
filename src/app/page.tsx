import Link from "next/link";
import { HappeningGrid } from "@/components/HappeningGrid";
import { HeroVideo } from "@/components/HeroVideo";
import { SocialLinks } from "@/components/SocialLinks";
import { WelcomeSection } from "@/components/WelcomeSection";
import { happenings } from "@/content/happenings";
import { siteConfig } from "@/config/site";

export default function Home() {
	return (
		<>
			<section className="relative flex min-h-[64vh] items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[72vh] sm:px-6 sm:py-28 lg:px-8">
				<div aria-hidden className="pointer-events-none absolute inset-0">
					<HeroVideo />
					<div className="absolute inset-0 bg-gradient-to-b from-rpf-navy/75 via-rpf-navy/60 to-rpf-navy/85" />
				</div>

				<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-rpf-orange">
						Welcome to {siteConfig.shortName}
					</p>

					<h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
						{siteConfig.tagline}
					</h1>

					<p className="mb-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
						{siteConfig.description}
					</p>

					<div className="flex flex-wrap items-center justify-center gap-4">
						<Link
							href="/livestream"
							className="btn-primary rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-rpf-orange/25"
						>
							Watch Live
						</Link>
						<Link
							href="/about"
							className="rounded-full border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-rpf-navy"
						>
							About Us
						</Link>
					</div>
				</div>
			</section>

			<WelcomeSection />

			<section className="section-blue border-y border-rpf-blue/10 px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h2 className="mb-10 text-center text-2xl font-bold text-rpf-ink sm:text-3xl">
						Happening at {siteConfig.shortName}
					</h2>

					<HappeningGrid items={happenings} />
				</div>
			</section>

			<section className="section-purple px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-bold text-rpf-ink sm:text-3xl">
						Get Connected
					</h2>
					<p className="mt-3 text-rpf-ink-muted">
						Follow us for teachings, updates, and community
					</p>
					<SocialLinks />
				</div>
			</section>
		</>
	);
}
