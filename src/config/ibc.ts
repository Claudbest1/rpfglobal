export const ibcConfig = {
	heroImages: {
		mobile: "/images/portrait.jpg",
		desktop: "/images/website-banner.png",
	},
	theme: "Grace & Truth",
	dates: "24th – 28th June 2026",
	location: {
		name: "House of Prayer",
		address: "1B, Deji Akinleye Avenue, Jakan, Agbowo, Ibadan, Oyo State",
	},
	/** Set in Tally: Settings → Redirect on completion → https://chat.whatsapp.com/... */
	whatsappGroupUrl: "https://chat.whatsapp.com/BnkZz5UPVHU3hdfy9lK3dB",
	/** Tally form ID — https://tally.so/forms/jazL81/share */
	tallyFormId: process.env.NEXT_PUBLIC_IBC_TALLY_FORM_ID ?? "jazL81",
} as const;
