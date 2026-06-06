"use client";

import { TallyPopupButton } from "@/components/TallyPopupButton";
import { ibcConfig } from "@/config/ibc";

export function IBCTallyPopup() {
	return (
		<TallyPopupButton
			formId={ibcConfig.tallyFormId}
			redirectUrl={ibcConfig.whatsappGroupUrl}
			openOnLoad
		/>
	);
}
