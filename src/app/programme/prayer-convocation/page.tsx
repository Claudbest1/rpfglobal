import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import { getProgramme } from "@/content/programmes";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const programme = getProgramme("prayer-convocation");

export const metadata = createPageMetadata(
	"Prayer Convocation",
	"Annual Prayer Convocation retreat and camp meeting at Royal Priesthood Family Ministry.",
);

export default function PrayerConvocationPage() {
	if (!programme) notFound();

	return <ProgrammeDetail programme={programme} />;
}
