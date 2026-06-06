import type { Ministry } from "@/content/ministries";

type MinistryCardProps = {
	ministry: Ministry;
	accent: string;
};

function MinistryBlock({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h4 className="text-sm font-semibold uppercase tracking-wider text-rpf-blue">
				{label}
			</h4>
			<div className="mt-2">{children}</div>
		</div>
	);
}

export function MinistryCard({ ministry, accent }: MinistryCardProps) {
	return (
		<article
			id={ministry.id}
			className={`card-colorful scroll-mt-24 rounded-2xl border-l-4 p-6 sm:p-8 ${accent}`}
		>
			<h3 className="text-xl font-bold text-rpf-ink sm:text-2xl">
				{ministry.name}
			</h3>

			<div className="mt-6 space-y-6 text-sm leading-relaxed text-rpf-ink-muted sm:text-base">
				{ministry.intro?.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}

				{ministry.paragraphs?.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}

				{ministry.vision && (
					<MinistryBlock label="Vision Statement">
						<p>{ministry.vision}</p>
					</MinistryBlock>
				)}

				{ministry.mission && (
					<MinistryBlock label="Mission Statement">
						<p>{ministry.mission}</p>
					</MinistryBlock>
				)}

				{ministry.purpose && (
					<MinistryBlock label="Purpose">
						<p>{ministry.purpose}</p>
					</MinistryBlock>
				)}

				{ministry.purposes && (
					<MinistryBlock label="Purpose">
						<ol className="list-decimal space-y-2 pl-5">
							{ministry.purposes.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ol>
					</MinistryBlock>
				)}

				{ministry.responsibilities && (
					<MinistryBlock label="Core Responsibilities">
						<ul className="list-disc space-y-2 pl-5">
							{ministry.responsibilities.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</MinistryBlock>
				)}

				{ministry.departments && (
					<MinistryBlock label="Departments">
						<div className="space-y-4">
							{ministry.departments.map((dept) => (
								<div key={dept.name}>
									<p className="font-semibold text-rpf-ink">{dept.name}</p>
									<p className="mt-1">{dept.description}</p>
								</div>
							))}
						</div>
					</MinistryBlock>
				)}

				{ministry.meetingDays && (
					<MinistryBlock label="Meeting Days">
						<ul className="list-disc space-y-2 pl-5">
							{ministry.meetingDays.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</MinistryBlock>
				)}

				{ministry.meetings && (
					<MinistryBlock label="Meeting Days and Times">
						<p>{ministry.meetings}</p>
					</MinistryBlock>
				)}

				{ministry.scripture && (
					<blockquote className="border-l-2 border-rpf-orange pl-4 italic text-rpf-ink">
						{ministry.scripture}
					</blockquote>
				)}

				{ministry.note && <p>{ministry.note}</p>}

				{ministry.leaders && ministry.leaders.length > 0 && (
					<MinistryBlock label="Leadership">
						<ul className="space-y-2">
							{ministry.leaders.map((leader) => (
								<li key={`${leader.name}-${leader.role ?? ""}`}>
									<span className="font-semibold text-rpf-ink">
										{leader.name}
									</span>
									{leader.role && (
										<span className="text-rpf-ink-muted"> — {leader.role}</span>
									)}
								</li>
							))}
						</ul>
					</MinistryBlock>
				)}

				{ministry.contact && (
					<MinistryBlock label="Contact">
						<p className="font-semibold text-rpf-ink">{ministry.contact}</p>
					</MinistryBlock>
				)}
			</div>
		</article>
	);
}
