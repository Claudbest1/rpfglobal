"use client";

import { TallyPopupButton } from "@/components/TallyPopupButton";
import { ibcConfig } from "@/config/ibc";

type IBCRegisterButtonProps = {
	className?: string;
	loadScript?: boolean;
};

const defaultClassName =
	"btn-primary rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-rpf-orange/25 disabled:cursor-wait disabled:opacity-60";

export function IBCRegisterButton({
	className = defaultClassName,
	loadScript = false,
}: IBCRegisterButtonProps) {
	return (
		<TallyPopupButton
			formId={ibcConfig.tallyFormId}
			redirectUrl={ibcConfig.whatsappGroupUrl}
			loadScript={loadScript}
			className={className}
		>
			Register for IBC 2026
		</TallyPopupButton>
	);
}
