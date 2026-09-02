type MetaPixelEventParams = Record<string, string | number | boolean>;

declare global {
	interface Window {
		fbq?: (
			action: string,
			event: string,
			params?: MetaPixelEventParams,
		) => void;
	}
}

export function trackMetaEvent(
	event: string,
	params?: MetaPixelEventParams,
) {
	if (typeof window !== "undefined" && window.fbq) {
		window.fbq("track", event, params);
	}
}
