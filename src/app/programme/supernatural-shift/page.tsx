import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import { getProgramme } from "@/content/programmes";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const programme = getProgramme("supernatural-shift");

export const metadata = createPageMetadata(
	"Supernatural Shift",
	"Supernatural Shift — a transformational programme at Royal Priesthood Family Ministry.",
);

export default function SupernaturalShiftPage() {
	if (!programme) notFound();

	return <ProgrammeDetail programme={programme} />;
}
