import Link from "next/link";

type GiveNavButtonProps = {
	fullWidth?: boolean;
	onClick?: () => void;
	className?: string;
};

function ArrowIcon() {
	return (
		<svg
			className="h-4 w-4 text-white"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			aria-hidden
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5 12h14M13 6l6 6-6 6"
			/>
		</svg>
	);
}

export function GiveNavButton({
	fullWidth = false,
	onClick,
	className = "",
}: GiveNavButtonProps) {
	return (
		<Link
			href="/give"
			onClick={onClick}
			className={`group relative flex h-11 items-center overflow-hidden rounded-xl bg-gray-800 pl-11 pr-4 cursor-pointer ${
				fullWidth ? "mt-3 w-full" : "w-32"
			} ${className}`}
		>
			<div
				aria-hidden
				className="absolute left-1.5 top-1.5 h-[calc(100%-12px)] w-9 rounded-md bg-rpf-orange transition-all duration-300 ease-in-out group-hover:w-[calc(100%-12px)]"
			/>

			<div className="pointer-events-none absolute left-1.5 top-1.5 z-10 flex h-[calc(100%-12px)] w-9 items-center justify-center">
				<ArrowIcon />
			</div>

			<span className="relative z-10 text-base font-medium text-gray-200 transition-colors duration-300 group-hover:text-white pl-3">
				Give
			</span>
		</Link>
	);
}
