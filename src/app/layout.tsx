import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <head>
        <MetaPixel />
      </head>
      <body className="min-h-full antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
