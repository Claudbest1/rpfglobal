import { PageTemplate } from "@/components/layout/PageTemplate";
import { YouTubeLivePlayer } from "@/components/YouTubeLivePlayer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Livestream",
  "Join us live for worship, teaching, and fellowship from anywhere in the world.",
);

export default function LivestreamPage() {
  return (
    <PageTemplate
      title="Livestream"
      description="Experience our services online. Join us live for worship, teaching, and fellowship."
      heroImage="/images/livestream.png"
    >
      <YouTubeLivePlayer />
    </PageTemplate>
  );
}
