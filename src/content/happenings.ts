export type HappeningItem = {
	image: string;
	alt: string;
	href: string;
};

export const happenings: HappeningItem[] = [
	{
		image: "/images/events/love-walk.png",
		alt: "Love Walk — new sermon series at Royal Priesthood Family Ministry",
		href: "/media/messages",
	},
	{
		image: "/images/events/sunday-service.png",
		alt: "Sunday Service — 8AM at House of Prayer",
		href: "/livestream",
	},
	{
		image: "/images/events/ibc-billboard.png",
		alt: "International Believers' Convergence 2026 — Grace & Truth, free transportation",
		href: "/about/gatherings",
	},
	{
		image: "/images/events/ibc-banner.png",
		alt: "International Believers' Convergence 2026 — Grace & Truth",
		href: "/about/gatherings",
	},
];
