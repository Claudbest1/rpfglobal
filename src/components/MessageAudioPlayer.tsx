"use client";

import { useRef, useState } from "react";
import type { MessageAudio } from "@/content/message-series";

type MessageAudioPlayerProps = {
	audio: MessageAudio;
	title: string;
};

function TelegramIcon() {
	return (
		<svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
		</svg>
	);
}

function formatTime(seconds: number) {
	if (!Number.isFinite(seconds)) return "0:00";
	const minutes = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

function TelegramLink({
	url,
	label,
}: {
	url: string;
	label: string;
}) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#229ED9]/30 bg-[#229ED9]/5 px-4 py-2.5 text-sm font-semibold text-[#229ED9] transition-colors hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white"
		>
			<TelegramIcon />
			{label}
		</a>
	);
}

export function MessageAudioPlayer({ audio, title }: MessageAudioPlayerProps) {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [failed, setFailed] = useState(false);

	if (!audio.src && audio.telegramUrl) {
		return <TelegramLink url={audio.telegramUrl} label="Listen on Telegram" />;
	}

	if (!audio.src) {
		return null;
	}

	if (failed) {
		return (
			<div className="space-y-2 rounded-xl border border-slate-200/80 bg-rpf-surface-alt p-4">
				<p className="text-sm text-rpf-ink-muted">
					Audio file not available yet. Listen on Telegram instead.
				</p>
				{audio.telegramUrl && (
					<TelegramLink url={audio.telegramUrl} label="Listen on Telegram" />
				)}
			</div>
		);
	}

	const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

	const togglePlay = async () => {
		const el = audioRef.current;
		if (!el) return;

		if (isPlaying) {
			el.pause();
			setIsPlaying(false);
			return;
		}

		try {
			await el.play();
			setIsPlaying(true);
		} catch {
			setFailed(true);
		}
	};

	const handleSeek = (value: number) => {
		const el = audioRef.current;
		if (!el || !duration) return;
		el.currentTime = (value / 100) * duration;
	};

	return (
		<div className="overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-white to-rpf-surface-alt p-4 shadow-sm">
			<div className="flex items-center gap-3">
				<button
					type="button"
					onClick={togglePlay}
					className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rpf-orange text-white shadow-md transition-transform hover:scale-105"
					aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
				>
					{isPlaying ? (
						<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
						</svg>
					) : (
						<svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M8 5v14l11-7z" />
						</svg>
					)}
				</button>

				<div className="min-w-0 flex-1">
					<p className="truncate text-sm font-semibold text-rpf-ink">{title}</p>
					<p className="text-xs font-medium text-rpf-ink-light">Audio message</p>
					<div className="mt-2 flex items-center gap-2">
						<input
							type="range"
							min={0}
							max={100}
							value={progress}
							onChange={(e) => handleSeek(Number(e.target.value))}
							className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-rpf-orange"
							aria-label={`Seek ${title}`}
						/>
						<span className="shrink-0 text-xs tabular-nums text-rpf-ink-light">
							{formatTime(currentTime)} / {formatTime(duration)}
						</span>
					</div>
				</div>
			</div>

			<audio
				ref={audioRef}
				src={audio.src}
				preload="metadata"
				onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
				onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
				onEnded={() => setIsPlaying(false)}
				onError={() => setFailed(true)}
				className="hidden"
			>
				Your browser does not support audio playback.
			</audio>

			{audio.telegramUrl && (
				<div className="mt-3 border-t border-slate-200/80 pt-3">
					<a
						href={audio.telegramUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#229ED9] hover:underline"
					>
						<TelegramIcon />
						Also on Telegram
					</a>
				</div>
			)}
		</div>
	);
}
