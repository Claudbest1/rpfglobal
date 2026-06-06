"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiveNavButton } from "@/components/layout/GiveNavButton";
import { mainNavigation, type NavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function NavLink({
	item,
	onNavigate,
}: {
	item: NavItem;
	onNavigate?: () => void;
}) {
	const pathname = usePathname();
	const isActive =
		item.href === "/"
			? pathname === "/"
			: pathname === item.href || pathname.startsWith(`${item.href}/`);

	const className = `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
		isActive
			? "text-rpf-orange"
			: "text-rpf-ink-muted hover:bg-rpf-surface-muted hover:text-rpf-blue"
	}`;

	if (item.external) {
		return (
			<a
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				onClick={onNavigate}
			>
				{item.label}
			</a>
		);
	}

	return (
		<Link href={item.href} className={className} onClick={onNavigate}>
			{item.label}
		</Link>
	);
}

function DesktopDropdown({ item }: { item: NavItem }) {
	const pathname = usePathname();
	const isActive =
		pathname === item.href || pathname.startsWith(`${item.href}/`);

	return (
		<div className="group relative">
			<Link
				href={item.href}
				className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
					isActive
						? "text-rpf-orange"
						: "text-rpf-ink-muted hover:bg-rpf-surface-muted hover:text-rpf-blue"
				}`}
			>
				{item.label}
				<svg
					className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</Link>

			<div className="invisible absolute left-0 top-full z-50 min-w-56 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
				<div className="rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
					{item.children?.map((child) =>
						child.children ? (
							<div
								key={child.href}
								className="border-t border-slate-100 first:border-0"
							>
								<p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rpf-purple">
									{child.label}
								</p>
								{child.children.map((sub) => (
									<NavLink key={sub.href} item={sub} />
								))}
							</div>
						) : (
							<NavLink key={child.href} item={child} />
						),
					)}
				</div>
			</div>
		</div>
	);
}

function MobileNavSection({
	item,
	onNavigate,
}: {
	item: NavItem;
	onNavigate: () => void;
}) {
	const [open, setOpen] = useState(false);

	if (!item.children) {
		return <NavLink item={item} onNavigate={onNavigate} />;
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-rpf-ink-muted hover:bg-rpf-surface-muted hover:text-rpf-blue"
			>
				{item.label}
				<svg
					className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{open && (
				<div className="ml-3 border-l border-slate-200 pl-3">
					{item.children.map((child) =>
						child.children ? (
							<div key={child.href} className="py-1">
								<p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rpf-purple">
									{child.label}
								</p>
								{child.children.map((sub) => (
									<NavLink key={sub.href} item={sub} onNavigate={onNavigate} />
								))}
							</div>
						) : (
							<NavLink key={child.href} item={child} onNavigate={onNavigate} />
						),
					)}
				</div>
			)}
		</div>
	);
}

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
				<Link href="/" className="flex shrink-0 items-center gap-3">
					<Image
						src="/images/logo.png"
						alt={`${siteConfig.name} logo`}
						width={80}
						height={80}
						unoptimized
						className="h-11 w-11 object-contain sm:h-14 sm:w-14"
					/>
				</Link>

				<nav
					aria-label="Main navigation"
					className="hidden items-center gap-1 lg:flex"
				>
					{mainNavigation.map((item) =>
						item.children ? (
							<DesktopDropdown key={item.href} item={item} />
						) : (
							<NavLink key={item.href} item={item} />
						),
					)}
				</nav>

				<div className="flex items-center gap-2">
					<GiveNavButton className="hidden sm:flex" />

					<button
						type="button"
						onClick={() => setMobileOpen(!mobileOpen)}
						className="inline-flex items-center justify-center rounded-md p-2 text-rpf-ink-muted hover:bg-rpf-surface-muted hover:text-rpf-blue lg:hidden"
						aria-expanded={mobileOpen}
						aria-controls="mobile-nav"
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						{mobileOpen ? (
							<svg
								className="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden
							>
								<path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden
							>
								<path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{mobileOpen && (
				<nav
					id="mobile-nav"
					aria-label="Mobile navigation"
					className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
				>
					<div className="flex flex-col gap-1">
						{mainNavigation.map((item) => (
							<MobileNavSection
								key={item.href}
								item={item}
								onNavigate={() => setMobileOpen(false)}
							/>
						))}
						<GiveNavButton fullWidth onClick={() => setMobileOpen(false)} />
					</div>
				</nav>
			)}
		</header>
	);
}
