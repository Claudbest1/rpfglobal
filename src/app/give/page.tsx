import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
	"Give",
	"Partner with Royal Priesthood Family Ministry through your generous giving.",
);

export default function GivePage() {
	return (
		<PageTemplate
			title="Give"
			description="Your generosity helps us reach more lives with the gospel and equip believers around the world."
		>
			<div className="mx-auto max-w-4xl">
				<p className="mb-6 text-center text-base text-rpf-ink-muted">
					Give via UBA bank transfer using the account details below.
				</p>
				<div className="overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
					<Image
						src="/images/Accounts.png"
						alt="Royal Priesthood Family Ministry UBA giving accounts — Naira 2141131931 and 1028405035, USD 3004857416, GBP 3004857447, EUR 3004857461"
						width={1920}
						height={1080}
						sizes="(max-width: 1024px) 100vw, 896px"
						unoptimized
						className="h-auto w-full"
					/>
				</div>
			</div>
		</PageTemplate>
	);
}
