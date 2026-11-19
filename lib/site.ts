export const site = {
  name: "Ngagdra Dorji Choegar",
  shortName: "Ngagdra",
  description:
    "Ngagdra Dorji Choegar is a centre for the study, practice and preservation of Vajrayana teachings in Bhutan, at Kurizampa, Mongar.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ngagdra.org",
  location: "Kurizampa · Mongar · Eastern Bhutan",
  foundingDate: "2007-04-26",
};

/** Shown wherever the site asks readers to contact the institute, until official details exist. */
export const contactPending = "Contact details for the institute are being confirmed and will be published here.";

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

// "About" opens a submenu of its chapters (labels as in components/AboutNav.tsx), "Our work" and "Visit".
export const primaryNav: NavItem[] = [
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Who we are" },
      { href: "/about/rinpoche", label: "Our founder" },
      { href: "/about/history", label: "Our lineage" },
      { href: "/about/heritage", label: "Our vision" },
      { href: "/about/milestones", label: "Milestones" },
      { href: "/our-work", label: "Our work" },
      { href: "/visit", label: "Visit" },
    ],
  },
  { href: "/centres", label: "Centres" },
  { href: "/events", label: "Events" },
  { href: "/stories", label: "Stories" },
  { href: "/announcements", label: "Announcements" },
  { href: "/support", label: "Support" },
];

/** The two actions the header always shows as buttons; the last one is the filled, primary button. */
export const navActions = [
  { href: "/membership", label: "Become a member" },
  { href: "/donate", label: "Donate" },
];
