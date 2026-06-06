import Image from "next/image";
import Link from "next/link";
import type { HappeningItem } from "@/content/happenings";

export function HappeningGrid({ items }: { items: HappeningItem[] }) {
	return (
		<div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
			{items.map((item) => (
				<Link
					key={item.image}
					href={item.href}
					className="group overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl sm:rounded-3xl"
				>
					<div className="relative aspect-[16/10] w-full overflow-hidden bg-rpf-surface-muted">
						<Image
							src={item.image}
							alt={item.alt}
							fill
							sizes="(max-width: 640px) 100vw, 50vw"
							unoptimized
							className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
						/>
					</div>
				</Link>
			))}
		</div>
	);
}
