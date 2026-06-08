"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SyncedConfessionText } from "@/components/SyncedConfessionText";
import { dailyConfession2026 } from "@/content/daily-confession";

export function DailyConfessionExperience() {
	const { year, video } = dailyConfession2026;
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayRequest = () => {
		setIsLoaded(true);
		requestAnimationFrame(async () => {
			try {
				await videoRef.current?.play();
			} catch {
				// Autoplay may be blocked until user interacts again.
			}
		});
	};

	return (
		<div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
			<div className="space-y-6">
				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-rpf-orange">
						Watch &amp; Declare
					</p>
					<h3 className="mt-2 text-2xl font-bold text-rpf-ink">
						{year} Daily Confession Video
					</h3>
					<p className="mt-2 text-rpf-ink-muted">
						Play the video and follow the highlighted words as you declare
						God&apos;s Word over your life.
					</p>
				</div>

				<article className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl ring-1 ring-slate-200/80">
					<div className="relative aspect-[9/16] w-full">
						{isLoaded ? (
							<video
								ref={videoRef}
								controls
								playsInline
								preload="metadata"
								poster={video.poster}
								className="h-full w-full object-cover"
								onTimeUpdate={(event) =>
									setCurrentTime(event.currentTarget.currentTime)
								}
								onPlay={() => setIsPlaying(true)}
								onPause={() => setIsPlaying(false)}
								onEnded={() => setIsPlaying(false)}
								onSeeked={(event) =>
									setCurrentTime(event.currentTarget.currentTime)
								}
							>
								<source src={video.src} type="video/mp4" />
								Your browser does not support embedded video.
							</video>
						) : (
							<button
								type="button"
								onClick={handlePlayRequest}
								className="group relative block h-full w-full"
								aria-label={`Play ${video.title}`}
							>
								<Image
									src={video.poster}
									alt={`${video.title} thumbnail`}
									fill
									sizes="(max-width: 640px) 100vw, 384px"
									unoptimized
									className="object-cover"
								/>
								<span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
								<span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rpf-orange shadow-lg transition-transform group-hover:scale-105">
									<svg
										className="ml-1 h-7 w-7 text-white"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								</span>
							</button>
						)}
					</div>
				</article>
			</div>

			<SyncedConfessionText
				currentTime={currentTime}
				isPlaying={isPlaying}
				year={year}
			/>
		</div>
	);
}
