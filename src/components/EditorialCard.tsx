import Link from "next/link";
import type { Editorial } from "@/content/editorials";

type EditorialCardProps = {
	editorial: Editorial;
	index?: number;
};

const accents = [
	"border-l-rpf-blue from-rpf-blue-light/40",
	"border-l-rpf-purple from-rpf-purple-light/40",
	"border-l-rpf-orange from-rpf-orange-light/40",
	"border-l-rpf-teal from-rpf-teal-light/40",
];

export function EditorialCard({ editorial, index = 0 }: EditorialCardProps) {
	const accent = accents[index % accents.length];
	const content = (
		<article
			className={`group overflow-hidden rounded-2xl border border-slate-200/80 border-l-4 bg-gradient-to-br to-white p-6 shadow-sm transition-shadow hover:shadow-md ${accent}`}
		>
			<p className="text-xs font-semibold uppercase tracking-wider text-rpf-ink-light">
				{editorial.date}
				{editorial.author && (
					<span className="text-rpf-ink-muted"> · {editorial.author}</span>
				)}
			</p>
			<h2 className="mt-3 text-xl font-bold text-rpf-ink transition-colors group-hover:text-rpf-orange">
				{editorial.title}
			</h2>
			<p className="mt-3 text-sm leading-relaxed text-rpf-ink-muted">
				{editorial.excerpt}
			</p>
			{editorial.href && (
				<p className="mt-4 text-sm font-semibold text-rpf-blue group-hover:text-rpf-orange">
					Read editorial →
				</p>
			)}
		</article>
	);

	if (!editorial.href) {
		return content;
	}

	if (editorial.href.startsWith("http")) {
		return (
			<a
				href={editorial.href}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
			>
				{content}
			</a>
		);
	}

	return (
		<Link href={editorial.href} className="block">
			{content}
		</Link>
	);
}
