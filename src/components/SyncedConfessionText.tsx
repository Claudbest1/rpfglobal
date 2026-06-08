"use client";

import { useEffect, useMemo, useRef } from "react";
import { confessionTiming, type TimedLine } from "@/content/daily-confession-timing";

type SyncedConfessionTextProps = {
	currentTime: number;
	isPlaying: boolean;
	year: number;
};

function getActiveWordIndex(line: TimedLine, currentTime: number) {
	for (let index = 0; index < line.words.length; index += 1) {
		const word = line.words[index];
		const nextStart = line.words[index + 1]?.start ?? word.end + 0.05;
		if (currentTime >= word.start && currentTime < nextStart) {
			return index;
		}
	}
	return -1;
}

function getLineState(line: TimedLine, currentTime: number) {
	if (currentTime >= line.end) return "past";
	if (currentTime >= line.start && currentTime <= line.end) return "active";
	return "upcoming";
}

export function SyncedConfessionText({
	currentTime,
	isPlaying,
	year,
}: SyncedConfessionTextProps) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const lineRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

	const activeLineId = useMemo(() => {
		for (const stanza of confessionTiming.stanzas) {
			for (const line of stanza) {
				if (currentTime >= line.start && currentTime <= line.end + 0.15) {
					return line.id;
				}
			}
		}
		return null;
	}, [currentTime]);

	useEffect(() => {
		if (!isPlaying || !activeLineId) return;
		const element = lineRefs.current[activeLineId];
		const container = scrollRef.current;
		if (!element || !container) return;

		const containerRect = container.getBoundingClientRect();
		const elementRect = element.getBoundingClientRect();
		const offset = elementRect.top - containerRect.top;
		const target =
			container.scrollTop +
			offset -
			container.clientHeight / 2 +
			element.clientHeight / 2;

		container.scrollTo({ top: target, behavior: "smooth" });
	}, [activeLineId, isPlaying]);

	return (
		<section className="relative flex max-h-[min(70vh,720px)] flex-col overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50 via-[#fdf6e8] to-amber-100/80 shadow-lg">
			<div
				className="pointer-events-none absolute inset-x-6 top-0 z-10 h-8 rounded-b-full bg-amber-200/40"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-x-6 bottom-0 z-10 h-8 rounded-t-full bg-amber-200/40"
				aria-hidden
			/>

			<div className="relative z-20 px-6 pb-4 pt-8 text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800/70">
					{year} Confession
				</p>
				{isPlaying && (
					<p className="mt-2 text-xs font-medium text-rpf-orange">
						Follow along as you declare
					</p>
				)}
			</div>

			<div
				ref={scrollRef}
				className="relative z-20 flex-1 overflow-y-auto px-6 pb-8 sm:px-8"
			>
				<div className="space-y-6 text-center font-medium leading-relaxed">
					{confessionTiming.stanzas.map((stanza, stanzaIndex) => (
						<div key={stanzaIndex} className="space-y-2">
							{stanza.map((line) => {
								const syncActive = isPlaying || currentTime > 0.2;
								const lineState = syncActive
									? getLineState(line, currentTime)
									: "idle";
								const activeWordIndex = syncActive
									? getActiveWordIndex(line, currentTime)
									: -1;

								return (
									<p
										key={line.id}
										ref={(node) => {
											lineRefs.current[line.id] = node;
										}}
										className={`transition-all duration-300 ${
											lineState === "active"
												? "scale-[1.02] text-amber-950"
												: lineState === "past"
													? "text-amber-900/75"
													: lineState === "upcoming"
														? "text-amber-950/35"
														: "text-amber-950"
										}`}
									>
										{(() => {
											let wordIndex = 0;
											return line.text
												.split(/([A-Za-z0-9']+)/)
												.filter((part) => part.length > 0)
												.map((part, partIndex) => {
													if (!/^[A-Za-z0-9']+$/.test(part)) {
														return (
															<span key={`${line.id}-p${partIndex}`}>
																{part}
															</span>
														);
													}

													const currentWordIndex = wordIndex;
													wordIndex += 1;

													const isActive =
														syncActive &&
														lineState === "active" &&
														currentWordIndex === activeWordIndex;
													const isPast =
														lineState === "past" ||
														(lineState === "active" &&
															currentWordIndex < activeWordIndex);

													return (
														<span
															key={`${line.id}-w${partIndex}`}
															className={`inline transition-all duration-150 ${
																isActive
																	? "rounded bg-rpf-orange/25 px-1 font-bold text-rpf-orange shadow-sm"
																	: isPast
																		? "text-amber-950"
																		: ""
															}`}
														>
															{part}
														</span>
													);
												});
										})()}
									</p>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
