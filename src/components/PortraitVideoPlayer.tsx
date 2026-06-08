"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type PortraitVideoPlayerProps = {
	src: string;
	title: string;
	poster: string;
};

export function PortraitVideoPlayer({
	src,
	title,
	poster,
}: PortraitVideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	const handlePlayRequest = () => {
		setIsLoaded(true);
		requestAnimationFrame(() => {
			videoRef.current?.play();
		});
	};

	return (
		<article className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl ring-1 ring-slate-200/80">
			<div className="relative aspect-[9/16] w-full">
				{isLoaded ? (
					<video
						ref={videoRef}
						controls
						playsInline
						preload="metadata"
						poster={poster}
						className="h-full w-full object-cover"
					>
						<source src={src} type="video/mp4" />
						Your browser does not support embedded video.
					</video>
				) : (
					<button
						type="button"
						onClick={handlePlayRequest}
						className="group relative block h-full w-full"
						aria-label={`Play ${title}`}
					>
						<Image
							src={poster}
							alt={`${title} thumbnail`}
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
	);
}
