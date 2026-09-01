import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import { getProgramme } from "@/content/programmes";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const programme = getProgramme("prayer-bootcamp");

export const metadata = createPageMetadata(
	"Prayer Bootcamp",
	"Prayer Bootcamp — intensive prayer training at Royal Priesthood Family Ministry.",
);

export default function PrayerBootcampPage() {
	if (!programme) notFound();

	return <ProgrammeDetail programme={programme} />;
}
