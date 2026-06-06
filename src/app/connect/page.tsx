import { PageTemplate } from "@/components/layout/PageTemplate";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Connect",
  "Get connected with Royal Priesthood Family Ministry — prayer, counseling, and community.",
);

export default function ConnectPage() {
  return (
    <PageTemplate
      title="Get Connected"
      description="Whether you need prayer, counseling, or want to join our community — we are here for you."
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="card-colorful rounded-2xl border-l-4 border-l-rpf-teal p-8">
          <h2 className="text-xl font-bold text-rpf-ink">Need Counselling?</h2>
          <p className="mt-3 text-sm leading-relaxed text-rpf-ink-muted">
            Are you facing challenges, seeking guidance, or simply need someone
            to talk to? Our team is available to provide confidential and
            compassionate support.
          </p>
          <p className="mt-4 text-sm font-medium text-rpf-teal">
            A contact form is coming soon. Reach us via social media in the
            meantime.
          </p>
        </div>

        <div className="card-colorful rounded-2xl border-l-4 border-l-rpf-purple p-8">
          <h2 className="text-xl font-bold text-rpf-ink">Follow Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-rpf-ink-muted">
            Stay updated on teachings, events, and ways to connect with our
            global family.
          </p>
          <div className="mt-6">
            <SocialLinks compact />
          </div>
          {siteConfig.contact.email && (
            <p className="mt-6 text-sm text-rpf-ink-muted">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-rpf-blue hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}
