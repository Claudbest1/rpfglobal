import Link from "next/link";
import { TallyPopupButton } from "@/components/TallyPopupButton";
import { ibcConfig } from "@/config/ibc";

export function IBCRegistration() {
	const { tallyFormId, whatsappGroupUrl } = ibcConfig;

	return (
		<section
			id="register"
			className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
		>
			<p className="text-sm font-semibold uppercase tracking-wider text-rpf-purple">
				Register
			</p>
			<h2 className="mt-2 text-2xl font-bold text-rpf-ink sm:text-3xl">
				IBC 2026 Registration
			</h2>
			<div className="mt-4 space-y-4 text-base leading-relaxed text-rpf-ink-muted">
				<p>Hello esteemed Kings and Priests,</p>
				<p>
					We welcome you to our annual International Believers&apos;
					Convergence themed <strong className="text-rpf-ink">Grace and Truth</strong>.
				</p>
				<p>
					We are delighted to have you join us for this impactful gathering of
					believers, where hearts will be transformed and lives enriched through
					God&apos;s Word and fellowship.
				</p>
				<p>
					The registration form opens when you visit this page. After submitting,
					you will be directed to our WhatsApp group. You can also click below
					to open it again.
				</p>
			</div>

			<div className="mt-8 flex flex-wrap justify-center gap-4">
				<TallyPopupButton
					formId={tallyFormId}
					redirectUrl={whatsappGroupUrl}
					className="btn-primary rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-rpf-orange/25 disabled:cursor-wait disabled:opacity-60"
				>
					Register for IBC 2026
				</TallyPopupButton>
				<a
					href={whatsappGroupUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full border-2 border-rpf-teal px-8 py-3.5 text-base font-semibold text-rpf-teal transition-colors hover:bg-rpf-teal hover:text-white"
				>
					Join WhatsApp Group
				</a>
			</div>

			<p className="mt-6 text-center text-sm text-rpf-ink-muted">
				Already registered? Join the{" "}
				<Link
					href={whatsappGroupUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="font-semibold text-rpf-teal hover:underline"
				>
					IBC 2026 Participants WhatsApp group
				</Link>{" "}
				for updates and fellowship.
			</p>
		</section>
	);
}
