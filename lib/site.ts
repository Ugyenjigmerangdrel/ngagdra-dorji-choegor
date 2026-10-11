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

export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/centres", label: "Centres" },
  { href: "/events", label: "Events" },
  { href: "/stories", label: "Stories" },
  { href: "/visit", label: "Visit" },
];
