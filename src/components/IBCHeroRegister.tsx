"use client";

import { IBCRegisterButton } from "@/components/IBCRegisterButton";

export function IBCHeroRegister() {
	return (
		<IBCRegisterButton className="btn-primary rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-black/30 disabled:cursor-wait disabled:opacity-60 sm:px-10 sm:py-4 sm:text-lg" />
	);
}
