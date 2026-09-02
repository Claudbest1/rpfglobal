"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

export function SupernaturalShiftTracking() {
	useEffect(() => {
		trackMetaEvent("ViewContent", {
			content_name: "Supernatural Shift",
			content_category: "Programme",
		});
	}, []);

	return null;
}
