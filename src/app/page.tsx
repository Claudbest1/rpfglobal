import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<Image
					src="/images/bg.png"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-center opacity-50"
				/>
				<div className="absolute inset-0 bg-black/45" />
			</div>

			<main className="relative z-10 flex max-w-5xl flex-col items-center text-center">
				<div className="animate-float mb-10">
					<div className="relative">
						<div aria-hidden className="absolute -inset-6 " />
						<Image
							src="/images/logo.png"
							alt="Royal Priesthood Family Ministry logo"
							width={280}
							height={280}
							priority
							unoptimized
							className="relative bg-transparent"
						/>
					</div>
				</div>

				<h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
					<span className="bg-gradient-to-r from-rpf-periwinkle via-rpf-gold-soft to-rpf-gold bg-clip-text text-transparent animate-shimmer">
						Site Under Construction
					</span>
				</h1>

				<p className="mb-12 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
					We are building something beautiful for our global family. Check back
					soon for updates, teachings, and ways to connect with us.
				</p>

				<div className="w-full max-w-xs">
					<div className="mb-2 flex justify-between text-xs text-rpf-periwinkle/70">
						<span>Building in progress</span>
						<span className="text-rpf-gold">Soon</span>
					</div>
					<div className="h-1 overflow-hidden rounded-full bg-white/10">
						<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-rpf-purple via-rpf-gold to-rpf-periwinkle animate-shimmer" />
					</div>
				</div>

				<SocialLinks />
			</main>

			<footer className="relative z-10 mt-16 text-center text-sm text-white/40">
				<p>
					&copy; {new Date().getFullYear()} Royal Priesthood Family Ministry.
					All rights reserved.
				</p>
			</footer>
		</div>
	);
}
