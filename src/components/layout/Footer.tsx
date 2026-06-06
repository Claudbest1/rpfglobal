import Link from "next/link";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-rpf-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold">{siteConfig.shortName}</h2>
            <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-rpf-orange">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-rpf-orange">
              Connect
            </h3>
            <SocialLinks compact variant="footer" />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-blue-100/50">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
