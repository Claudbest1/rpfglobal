export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Livestream",
    href: "/livestream",
  },
  { label: "IBC", href: "/ibc" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About RPF", href: "/about" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Vision & Mission", href: "/about/beliefs" },
      { label: "Gatherings", href: "/about/gatherings" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Daily Confessions", href: "/daily-confessions" },
      { label: "Ministries", href: "/small-groups" },
      { label: "Outreaches", href: "/missions" },
    ],
  },
  { label: "Resources", href: "/resources" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Message Series", href: "/media/messages" },
      { label: "Editorials", href: "/media/editorials" },
      { label: "Worship", href: "/media/worship" },
      { label: "Podcasts", href: "/media/podcasts" },
      { label: "Testimonies", href: "/media/testimonies" },
    ],
  },
  { label: "Connect", href: "/connect" },
];

export const footerNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/about/our-story" },
  { label: "Gatherings", href: "/about/gatherings" },
  { label: "Media", href: "/media" },
  { label: "Connect", href: "/connect" },
];
