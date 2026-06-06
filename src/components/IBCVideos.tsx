import { LazyVideoPlayer } from "@/components/LazyVideoPlayer";
import { ibcVideos } from "@/content/ibc-videos";

export function IBCVideos() {
	return (
		<section className="rounded-2xl bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
			<h2 className="mb-2 text-xl font-bold text-rpf-ink sm:text-2xl">
				Videos
			</h2>
			<p className="mb-6 text-rpf-ink-muted">
				Watch IBC highlights and messages. Videos load only when you press play,
				so the rest of the page stays fast.
			</p>
			<div className="grid gap-6 sm:grid-cols-2">
				{ibcVideos.map((video) => (
					<LazyVideoPlayer
						key={video.id}
						src={video.src}
						title={video.title}
						poster={video.poster}
					/>
				))}
			</div>
		</section>
	);
}
