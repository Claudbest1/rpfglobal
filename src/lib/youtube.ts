export function getYouTubeId(url: string): string {
	const match = url.match(
		/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
	);
	return match?.[1] ?? url;
}

export function getYouTubeThumbnail(videoId: string): string {
	return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string, autoplay = false): string {
	const params = autoplay ? "?autoplay=1" : "";
	return `https://www.youtube-nocookie.com/embed/${videoId}${params}`;
}
