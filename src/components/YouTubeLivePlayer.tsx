"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function YouTubeLivePlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChannel = siteConfig.youtubeChannels[activeIndex];
  const embedUrl = `https://www.youtube.com/embed/live_stream?channel=${activeChannel.channelId}`;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {siteConfig.youtubeChannels.map((channel, index) => (
          <button
            key={channel.channelId}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              index === activeIndex
                ? "btn-primary shadow-md"
                : "border-2 border-rpf-blue text-rpf-blue hover:bg-rpf-blue-light"
            }`}
          >
            {channel.label}
          </button>
        ))}
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl">
        <iframe
          key={activeChannel.channelId}
          src={embedUrl}
          title={`${activeChannel.label} livestream`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <p className="mt-4 text-center text-sm text-rpf-ink-light">
        We stream on both channels — switch above if one shows offline. Past
        messages are always available on YouTube.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <a
          href={activeChannel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Watch on YouTube
        </a>
        <Link
          href="/media/messages"
          className="btn-secondary rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Past messages
        </Link>
      </div>
    </div>
  );
}
