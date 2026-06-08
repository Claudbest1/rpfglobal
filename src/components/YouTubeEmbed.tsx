"use client";

import Image from "next/image";
import { useState } from "react";
import {
	getYouTubeEmbedUrl,
	getYouTubeThumbnail,
} from "@/lib/youtube";

type YouTubeEmbedProps = {
	videoId: string;
	title: string;
};

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
	const [isPlaying, setIsPlaying] = useState(false);

	if (isPlaying) {
		return (
			<div className="overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-slate-200/80">
				<div className="relative aspect-video w-full">
					<iframe
						src={getYouTubeEmbedUrl(videoId, true)}
						title={title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="absolute inset-0 h-full w-full border-0"
					/>
				</div>
			</div>
		);
	}

	return (
		<button
			type="button"
			onClick={() => setIsPlaying(true)}
			className="group relative w-full overflow-hidden rounded-2xl bg-black text-left shadow-lg ring-1 ring-slate-200/80 transition-shadow hover:shadow-xl"
			aria-label={`Play ${title}`}
		>
			<div className="relative aspect-video w-full">
				<Image
					src={getYouTubeThumbnail(videoId)}
					alt=""
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					unoptimized
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
				<span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rpf-orange shadow-lg transition-transform duration-300 group-hover:scale-110">
					<svg
						className="ml-1 h-7 w-7 text-white"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden
					>
						<path d="M8 5v14l11-7z" />
					</svg>
				</span>
			</div>
			<p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-sm font-semibold text-white">
				{title}
			</p>
		</button>
	);
}
