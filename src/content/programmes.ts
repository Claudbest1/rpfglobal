export type Programme = {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	details?: string[];
	heroImage?: string;
	heroImageMobile?: string;
};

export const programmes: Programme[] = [
	{
		id: "ibc",
		slug: "ibc",
		title: "IBC",
		subtitle: "International Believers' Convergence",
		description:
			"The annual convocation of Royal Priesthood Family Ministry — a time of worship, the Word, prayer, and fellowship with believers from across communities and nations.",
	},
	{
		id: "supernatural-shift",
		slug: "supernatural-shift",
		title: "Supernatural Shift",
		subtitle: "A gathering of transformation",
		description:
			"Supernatural Shift is a powerful programme designed to usher believers into a new dimension of faith, prayer, and the move of the Spirit.",
		heroImage: "/images/Website banner.jpg",
		heroImageMobile: "/images/Supernatural Shift_3.jpg",
	},
	{
		id: "prayer-convocation",
		slug: "prayer-convocation",
		title: "Prayer Convocation",
		subtitle: "Annual retreat and camp meeting",
		description:
			"An annual retreat and camp meeting of the ministry, begun in December 2018. The recurring theme is Awakening, featuring seasoned men of God as guest speakers.",
		details: ["Held annually in December"],
	},
	{
		id: "prayer-bootcamp",
		slug: "prayer-bootcamp",
		title: "Prayer Bootcamp",
		subtitle: "Intensive prayer training",
		description:
			"Prayer Bootcamp equips believers with practical tools for a vibrant prayer life and deeper communion with God.",
	},
];

export function getProgramme(slug: string) {
	return programmes.find((programme) => programme.slug === slug);
}
