import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createPageMetadata(
  title: string,
  description?: string,
): Metadata {
  return {
    title: `${title} | ${siteConfig.shortName}`,
    description: description ?? siteConfig.description,
  };
}
