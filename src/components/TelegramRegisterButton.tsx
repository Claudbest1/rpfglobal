import { trackMetaEvent } from "@/lib/meta-pixel";

const TELEGRAM_CHANNEL = "https://t.me/RPFglobal";

function TelegramIcon() {
	return (
		<svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
		</svg>
	);
}

type TelegramRegisterButtonProps = {
	className?: string;
	variant?: "primary" | "telegram";
	fullWidth?: boolean;
	trackLead?: boolean;
};

export function TelegramRegisterButton({
	className = "",
	variant = "primary",
	fullWidth = false,
	trackLead = false,
}: TelegramRegisterButtonProps) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-colors";
	const width = fullWidth ? "w-full" : "";

	const styles =
		variant === "telegram"
			? "border-2 border-[#229ED9] bg-[#229ED9] text-white hover:bg-[#1d8bc4] hover:border-[#1d8bc4] shadow-lg shadow-[#229ED9]/25"
			: "btn-primary shadow-lg shadow-rpf-orange/25";

	const handleClick = () => {
		if (trackLead) {
			trackMetaEvent("Lead", {
				content_name: "Supernatural Shift Register",
			});
		}
	};

	return (
		<a
			href={TELEGRAM_CHANNEL}
			target="_blank"
			rel="noopener noreferrer"
			onClick={handleClick}
			className={`${base} ${width} ${styles} ${className}`}
		>
			<TelegramIcon />
			Register
		</a>
	);
}
