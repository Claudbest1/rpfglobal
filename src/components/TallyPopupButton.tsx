"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TallySubmissionPayload = {
	id: string;
	formId: string;
	formName: string;
};

type TallyPopupOptions = {
	key?: string;
	layout?: "default" | "modal";
	width?: number;
	alignLeft?: boolean;
	hideTitle?: boolean;
	overlay?: boolean;
	autoClose?: number;
	showOnce?: boolean;
	doNotShowAfterSubmit?: boolean;
	hiddenFields?: Record<string, string>;
	onOpen?: () => void;
	onClose?: () => void;
	onPageView?: (page: number) => void;
	onSubmit?: (payload: TallySubmissionPayload) => void;
};

type TallyApi = {
	openPopup: (formId: string, options?: TallyPopupOptions) => void;
	closePopup: (formId: string) => void;
};

type TallyWindow = Window & {
	Tally?: TallyApi;
};

type TallyPopupButtonProps = {
	formId: string;
	redirectUrl?: string;
	children?: React.ReactNode;
	className?: string;
	openOnLoad?: boolean;
	allowPageScroll?: boolean;
	loadScript?: boolean;
	popupOptions?: Omit<TallyPopupOptions, "onSubmit" | "onOpen" | "onClose">;
};

function enablePageScroll() {
	document.documentElement.style.overflow = "";
	document.documentElement.style.overscrollBehavior = "";
	document.body.style.overflow = "";
	document.body.style.position = "";
	document.body.style.top = "";
	document.body.style.width = "";
	document.body.style.touchAction = "";
}

export function TallyPopupButton({
	formId,
	redirectUrl,
	children,
	className,
	openOnLoad = false,
	allowPageScroll = true,
	loadScript = true,
	popupOptions,
}: TallyPopupButtonProps) {
	const [ready, setReady] = useState(false);
	const hasAutoOpened = useRef(false);

	useEffect(() => {
		if (loadScript) return;

		const markReady = () => {
			if ((window as TallyWindow).Tally?.openPopup) {
				setReady(true);
				return true;
			}
			return false;
		};

		if (markReady()) return;

		const interval = window.setInterval(() => {
			if (markReady()) window.clearInterval(interval);
		}, 100);

		return () => window.clearInterval(interval);
	}, [loadScript]);

	const openPopup = useCallback(() => {
		const tally = (window as TallyWindow).Tally;
		if (!tally?.openPopup) return;

		tally.openPopup(formId, {
			layout: "modal",
			width: 700,
			overlay: !allowPageScroll,
			hideTitle: false,
			...popupOptions,
			onOpen: () => {
				if (allowPageScroll) enablePageScroll();
			},
			onClose: () => {
				if (allowPageScroll) enablePageScroll();
			},
			onSubmit: () => {
				if (redirectUrl) {
					window.location.href = redirectUrl;
				}
			},
		});
	}, [formId, redirectUrl, allowPageScroll, popupOptions]);

	useEffect(() => {
		if (!ready || !allowPageScroll) return;

		const keepPageScrollable = () => enablePageScroll();
		const observer = new MutationObserver(keepPageScrollable);

		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ["style", "class"],
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
		});

		return () => observer.disconnect();
	}, [ready, allowPageScroll]);

	useEffect(() => {
		if (!ready || !openOnLoad || hasAutoOpened.current) return;
		hasAutoOpened.current = true;
		openPopup();
	}, [ready, openOnLoad, openPopup]);

	return (
		<>
			{children && (
				<button
					type="button"
					onClick={openPopup}
					disabled={!ready}
					className={className}
				>
					{children}
				</button>
			)}
			{loadScript && (
				<Script
					id="tally-embed"
					src="https://tally.so/widgets/embed.js"
					strategy="afterInteractive"
					onLoad={() => setReady(true)}
				/>
			)}
		</>
	);
}
