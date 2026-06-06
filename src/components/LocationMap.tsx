type LocationMapProps = {
	name: string;
	address: string;
	title?: string;
	className?: string;
};

export function LocationMap({
	name,
	address,
	title = "Location",
	className = "",
}: LocationMapProps) {
	const query = encodeURIComponent(`${name}, ${address}`);
	const embedUrl = `https://www.google.com/maps?q=${query}&z=16&output=embed`;
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

	return (
		<section className={className}>
			<h2 className="mb-4 text-xl font-bold text-rpf-ink sm:text-2xl">{title}</h2>
			<div className="mb-4">
				<p className="font-semibold text-rpf-ink">{name}</p>
				<p className="mt-1 text-rpf-ink-muted">{address}</p>
			</div>
			<div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 shadow-md sm:aspect-[21/9]">
				<iframe
					src={embedUrl}
					title={`Map of ${name}`}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					className="absolute inset-0 h-full w-full border-0"
				/>
			</div>
			<a
				href={mapsUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-4 inline-flex text-sm font-semibold text-rpf-blue hover:underline"
			>
				Open in Google Maps
			</a>
		</section>
	);
}
