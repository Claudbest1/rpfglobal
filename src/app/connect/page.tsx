import { PageTemplate } from "@/components/layout/PageTemplate";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Connect",
  "Get connected with Royal Priesthood Family Ministry — prayer, counseling, and community.",
);


interface ConnectCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ConnectCard = ({ title, description, children }: ConnectCardProps) => (
  <div className="rounded-lg border border-rpf-ink-muted/20 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-bold text-rpf-ink">{title}</h2>
    <p className="mt-3 text-sm leading-relaxed text-rpf-ink-muted">{description}</p>
    {children}
  </div>
);

export default function GetConnectedPage() {
  return (
    <PageTemplate
      title="Get Connected"
      description="Whether you need prayer, counseling, or want to join our community — we are here for you."
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        
        <ConnectCard 
          title="Need Counselling?" 
          description="Are you facing challenges, seeking guidance, or simply need someone to talk to? Our team is available to provide confidential and compassionate support."
        >
          <p className="mt-4 text-sm font-medium text-rpf-teal">
            A contact form is coming soon. Reach us via social media in the meantime.
          </p>
        </ConnectCard>

        <ConnectCard 
          title="Follow Us" 
          description="Stay updated on teachings, events, and ways to connect with our global family."
        >
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
        </ConnectCard>

      </div>
    </PageTemplate>
  );
}