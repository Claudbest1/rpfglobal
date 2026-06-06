type SocialLink = {
	name: string;
	href: string;
	icon: "youtube" | "instagram" | "facebook";
	color: string;
};

const socialLinks: SocialLink[] = [
	{
		name: "RPF Global on YouTube",
		href: "https://www.youtube.com/@RPFGLOBAL",
		icon: "youtube",
		color: "hover:border-red-500 hover:bg-red-50 hover:text-red-600",
	},
	{
		name: "Temidayo Aderibigbe on YouTube",
		href: "https://www.youtube.com/@TemidayoAderibigbe",
		icon: "youtube",
		color: "hover:border-red-500 hover:bg-red-50 hover:text-red-600",
	},
	{
		name: "RPF Global on Instagram",
		href: "https://www.instagram.com/rpfglobal",
		icon: "instagram",
		color: "hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600",
	},
	{
		name: "Royal Priesthood Family on Facebook",
		href: "https://web.facebook.com/rpfglobal",
		icon: "facebook",
		color: "hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600",
	},
];

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
	const className = "h-6 w-6";

	switch (icon) {
		case "youtube":
			return (
				<svg
					className={className}
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden
				>
					<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
				</svg>
			);
		case "instagram":
			return (
				<svg
					className={className}
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden
				>
					<path d="M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.6.2 2.2.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.2.5 2.2.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.6-.5 2.2-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.2.4-2.2.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2.2-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.2-.5-2.2-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.6.5-2.2.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.2-.4 2.2-.5 1.1-.1 1.4-.1 4.1-.1zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-3.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
				</svg>
			);
		case "facebook":
			return (
				<svg
					className={className}
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden
				>
					<path d="M24 12.1c0-6.6-5.4-12-12-12S0 5.5 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z" />
				</svg>
			);
	}
}

export function SocialLinks({
	compact = false,
	variant = "default",
}: {
	compact?: boolean;
	variant?: "default" | "footer";
}) {
	const isFooter = variant === "footer";

	return (
		<nav aria-label="Social media" className={compact ? "" : "mt-10"}>
			{!compact && (
				<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-rpf-purple">
					Follow us
				</p>
			)}
			<ul
				className={`flex flex-wrap items-center gap-3 ${compact ? "justify-start" : "justify-center"}`}
			>
				{socialLinks.map((link) => (
					<li key={link.name}>
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.name}
							title={link.name}
							className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors ${
								isFooter
									? "border-white/20 bg-white/10 text-white/80 hover:border-rpf-orange hover:bg-rpf-orange/20 hover:text-white"
									: `border-slate-200 bg-white text-rpf-ink-muted shadow-sm ${link.color}`
							}`}
						>
							<SocialIcon icon={link.icon} />
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
