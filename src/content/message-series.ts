import { getYouTubeId } from "@/lib/youtube";

export type MessageAudio = {
	telegramUrl?: string;
	src?: string;
};

export type MessageVideo = {
	id: string;
	youtubeId: string;
	title: string;
	audio?: MessageAudio;
};

export type MessageSeries = {
	id: string;
	title: string;
	eyebrow: string;
	description: string;
	theme: {
		section: string;
		accent: string;
		badge: string;
		heading: string;
	};
	videos: MessageVideo[];
};

export const messageSeries: MessageSeries[] = [
	{
		id: "love-walk",
		title: "Love Walk",
		eyebrow: "Sermon Series",
		description:
			"A transformative journey through God's love — teaching us to walk in grace, truth, and devotion in every area of life.",
		theme: {
			section: "section-purple",
			accent: "border-l-rpf-purple",
			badge: "bg-rpf-purple/10 text-rpf-purple",
			heading: "from-rpf-purple via-rpf-rose to-rpf-orange",
		},
		videos: [
			{
				id: "love-walk-1",
				youtubeId: getYouTubeId(
					"https://youtu.be/hPTFSQLorlI?si=HJ8v8ghDWCyy-Qh5",
				),
				title: "Love Walk",
				audio: {
					src: "/audio/love-walk.mp3",
					telegramUrl: "https://t.me/c/2241814198/238",
				},
			},
		],
	},
	{
		id: "church-life",
		title: "Church Life",
		eyebrow: "Sermon Series",
		description:
			"Explore what it means to belong, grow, and thrive together as the body of Christ.",
		theme: {
			section: "section-teal",
			accent: "border-l-rpf-teal",
			badge: "bg-rpf-teal/10 text-rpf-teal",
			heading: "from-rpf-teal via-rpf-blue to-rpf-purple",
		},
		videos: [
			{
				id: "church-life-1",
				youtubeId: getYouTubeId(
					"https://youtu.be/wGxkwfngISM?si=fENXVivANUJxe9xk",
				),
				title: "Church Life — Part 1",
				audio: {
					src: "/audio/church-life-part-1.mp3",
					telegramUrl: "https://t.me/c/2241814198/237",
				},
			},
			{
				id: "church-life-2",
				youtubeId: getYouTubeId(
					"https://youtu.be/p_2GiBzcoa4?si=MyP4YqYlW9DypML3",
				),
				title: "Church Life — Part 2",
				audio: {
					src: "/audio/church-life-part-2.mp3",
					telegramUrl: "https://t.me/c/2241814198/236",
				},
			},
			{
				id: "church-life-3",
				youtubeId: getYouTubeId(
					"https://youtu.be/XKwrPMmfpf0?si=_l6XzOYb0jRCzO5D",
				),
				title: "Church Life — Part 3",
				audio: {
					src: "/audio/church-life-part-3.mp3",
					telegramUrl: "https://t.me/c/2241814198/235",
				},
			},
			{
				id: "church-life-4",
				youtubeId: getYouTubeId(
					"https://youtu.be/nFexyA9TMXY?si=zw2DLu-Qw-dd_iYo",
				),
				title: "Church Life — Part 4",
				audio: {
					src: "/audio/church-life-part-4.mp3",
					telegramUrl: "https://t.me/c/2241814198/231",
				},
			},
			{
				id: "church-life-5",
				youtubeId: getYouTubeId(
					"https://youtu.be/gxTOI5RHMmg?si=BagKUf2eG7sDHWFm",
				),
				title: "Church Life — Part 5",
				audio: {
					src: "/audio/church-life-part-5.mp3",
					telegramUrl: "https://t.me/c/2241814198/229",
				},
			},
		],
	},
];
