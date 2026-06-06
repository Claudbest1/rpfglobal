export type IBCVideo = {
	id: string;
	title: string;
	src: string;
	poster: string;
};

export const ibcVideos: IBCVideo[] = [
	{
		id: "rta",
		title: "RTA",
		src: "/videos/ibc/rta.mp4",
		poster: "/images/videos/rta-thumb.jpg",
	},
	{
		id: "ibc-promo",
		title: "IBC 2026 Promo",
		src: "/videos/ibc/ibc-promo.mp4",
		poster: "/images/videos/ibc-promo-thumb.jpg",
	},
	{
		id: "rjg-final",
		title: "RJG",
		src: "/videos/ibc/rjg-final.mp4",
		poster: "/images/videos/rjg-final-thumb.jpg",
	},
];
