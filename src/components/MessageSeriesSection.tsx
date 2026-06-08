import { MessageAudioPlayer } from "@/components/MessageAudioPlayer";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import type { MessageSeries } from "@/content/message-series";

type MessageSeriesSectionProps = {
	series: MessageSeries;
	featured?: boolean;
};

export function MessageSeriesSection({
	series,
	featured = false,
}: MessageSeriesSectionProps) {
	const isSingle = series.videos.length === 1;
	const hasAudio = series.videos.some((video) => video.audio);

	return (
		<section
			className={`overflow-hidden rounded-3xl border border-slate-200/80 shadow-lg ${series.theme.accent} border-l-4`}
		>
			<div className={`${series.theme.section} px-6 py-8 sm:px-10 sm:py-10`}>
				<div className="mx-auto max-w-4xl">
					<span
						className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${series.theme.badge}`}
					>
						{series.eyebrow}
					</span>
					<h2
						className={`mt-4 bg-gradient-to-r ${series.theme.heading} bg-clip-text text-3xl font-bold text-transparent sm:text-4xl`}
					>
						{series.title}
					</h2>
					<p className="mt-4 max-w-2xl text-base leading-relaxed text-rpf-ink-muted sm:text-lg">
						{series.description}
					</p>
					<p className="mt-3 text-sm font-medium text-rpf-ink-light">
						{series.videos.length}{" "}
						{series.videos.length === 1 ? "message" : "messages"}
						{hasAudio && " · watch or listen"}
					</p>
				</div>
			</div>

			<div className="bg-white px-6 py-8 sm:px-10 sm:py-10">
				<div
					className={
						isSingle || featured
							? "mx-auto max-w-4xl"
							: "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
					}
				>
					{series.videos.map((video) => (
						<div key={video.id} className="space-y-3">
							<YouTubeEmbed videoId={video.youtubeId} title={video.title} />
							{video.audio && (
								<MessageAudioPlayer audio={video.audio} title={video.title} />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
