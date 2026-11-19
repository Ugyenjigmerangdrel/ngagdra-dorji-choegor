// Source of truth: "STORIES" (Website Content, September 2026).
// Copy is reproduced as supplied. Teasers without a published article carry no link;
// they are shown as stories in preparation rather than as dead ends.

import type { ImageRef } from "@/lib/content";

export type Teaser = { title: string; text: string; meta?: string; href?: string; cta?: string };

export type StoryCategory = "Institute life" | "Teachings & reflections" | "People" | "Retreat centres" | "Heritage" | "News";

export const storiesIntro = {
  title: "Stories from a living tradition",
  kicker: "People · Practice · Places · Memory",
  intro: [
    "Beyond the buildings and ceremonies are the people who study, retreat, teach and serve; the places where practice continues; and the stories that connect one generation to the next.",
    "Explore the people, places and moments that make up the living life of Ngagdra Dorji Choegar.",
  ],
  action: { label: "Explore stories", href: "#latest" },
};

export const featuredStory = {
  slug: "the-journey-between-retreats",
  meta: "Retreat · 8 min read",
  title: "The journey between retreats",
  paragraphs: [
    "A period of retreat may come to an end, but the journey of practice continues.",
    "In 2026, monks from Tagdong, Kangpar and Jayphu gathered at Ngagdra after completing three-year retreats. Seven monks who had completed an initial three-year retreat at Kangpar went on to complete another three years of intensive practice at Larjab.",
    "For practitioners, these moments mark not simply the completion of a period, but the beginning of another stage of practice.",
  ],
  cta: "Read the story",
  image: {
    src: "/media/community/assembly-hall-gathering.jpg",
    alt: "Monks and lay practitioners gathered in rows inside the assembly hall at Ngagdra",
    caption: "Monks and practitioners gathered in the assembly hall at Ngagdra.",
    objectPosition: "50% 48%",
  } satisfies ImageRef,
};

export const peopleSection = {
  eyebrow: "People",
  title: "The people behind the practice",
  paragraphs: [
    "Institutions are built from places and structures. Traditions are carried by people.",
    "Behind every teaching, retreat and centre are teachers, monks, nuns, retreat practitioners, students and supporters who contribute their time and lives to sustaining the practice.",
    "Their stories are part of the story of Ngagdra.",
  ],
  action: { label: "Explore people", href: "/stories?topic=people#latest" },
  teasers: [
    { title: "Years given to practice", text: "What does it mean to dedicate years of one's life to retreat? A closer look at the people who choose a life shaped by discipline, study, meditation and sustained practice." },
    { title: "Life in retreat", text: "Retreat is a commitment measured not in days, but often in years. Explore the discipline, simplicity and purpose that shape life in long-term retreat." },
    { title: "Those who keep the centres going", text: "Practice depends on more than the practitioners inside the retreat room. Teachers, attendants and others who support the daily life of the centres help create the conditions in which practice can continue." },
  ] satisfies Teaser[],
  image: {
    src: "/media/rinpoche/with-nuns.jpg",
    alt: "H.E. Gyeltshen Trulku Rinpoche seated with a group of nuns outside a building",
    caption: "H.E. Gyeltshen Trulku Rinpoche with nuns.",
  } satisfies ImageRef,
};

export const traditionJourney = {
  eyebrow: "The life of the tradition",
  title: "From study to practice",
  intro: "The journey of practice unfolds through many stages.",
  steps: [
    { title: "Study", body: "Learning the teachings and foundations of the path." },
    { title: "Transmission", body: "Receiving teachings, empowerments and oral transmissions." },
    { title: "Retreat", body: "Taking the teachings into sustained and disciplined practice." },
    { title: "Practice", body: "Deepening meditation, contemplation and ritual practice over time." },
    { title: "Service", body: "Supporting communities, teaching others and sustaining places of practice." },
  ],
  closing: "The stories of Ngagdra can be found along this journey.",
};

export const placesSection = {
  eyebrow: "Places of practice",
  title: "Where the teachings take root",
  paragraphs: [
    "Across eastern Bhutan, places of study, meditation and retreat form a wider network of practice.",
    "Some centres grew from older monasteries and places of practice. Others developed as dedicated retreat spaces. Each carries its own history while contributing to a wider living tradition.",
  ],
  action: { label: "Explore the centres", href: "/centres" },
  features: [
    {
      meta: "A place takes shape",
      title: "Tsholing Gongma Drubdey",
      text: "What began as a retreat centre gradually grew into a place with its own temple and community of practice. The Tsholing temple was completed and consecrated in 2026, following the establishment of retreat houses and years of development.",
      href: "/centres/tsholing-gongma-drubdey",
      cta: "Explore centre",
    },
    {
      title: "Places, people, practice",
      text: "From Ngagdra to the retreat centres across eastern Bhutan, each place represents a different part of the journey—from learning and transmission to long-term retreat and practice.",
      href: "/centres",
      cta: "Explore the centres",
    },
  ] satisfies Teaser[],
};

export const oneMoment = {
  eyebrow: "One moment",
  lines: ["1,800 People.", "One Teaching.", "One Gathering."],
  title: "Phowa at Ngagdra",
  paragraphs: [
    "In December 2025, more than 1,800 people gathered at Ngagdra for a public teaching on Drubwang Nyenjued Phowa. The gathering continued for several days and concluded with an Amitabha Empowerment.",
    "For those who gathered, it was a moment of teaching, practice and collective participation.",
  ],
  action: { label: "Read the story", href: "/events/2025-drubwang-nyenjued-phowa" },
  image: {
    src: "/media/events/public-practice-congregation-front.jpg",
    alt: "A large congregation in red and maroon shawls seated on the ground beneath ceremonial canopies",
    caption: "The wider community gathered beneath ceremonial canopies for public practice.",
    objectPosition: "50% 54%",
  } satisfies ImageRef,
};

export const heritageSection = {
  eyebrow: "Heritage",
  title: "Before there was a place",
  paragraphs: [
    "For many years, teachings travelled with the teacher and the communities who gathered to receive them.",
    "The establishment of Ngagdra Dorji Choegar created a permanent place for study and practice after years of travelling teachings.",
    "What began as a journey of teaching and transmission grew into an institute with a wider network of places dedicated to study, retreat and practice.",
  ],
  action: { label: "Milestones", href: "/about/milestones" },
  teaser: {
    title: "From travelling teachings to a place of practice",
    text: "How Ngagdra Dorji Choegar came to be established—and how a place of learning grew into part of a wider network of practice.",
  } satisfies Teaser,
  image: {
    src: "/media/rinpoche/travelling-horseback.jpg",
    alt: "Archival photograph of Rinpoche on horseback with monks and attendants on a hillside path",
    caption: "Travelling teachings: an archival photograph of Rinpoche on the road with monks and attendants.",
    objectPosition: "50% 42%",
  } satisfies ImageRef,
};

export const reflections = {
  eyebrow: "Teachings & reflections",
  title: "What are we talking about?",
  paragraphs: [
    "Many of the words and practices encountered across Ngagdra have histories and meanings that may be unfamiliar to a first-time visitor.",
    "These stories offer simple introductions to the teachings, practices and traditions that shape life at the institute and its centres.",
  ],
  teasers: [
    { title: "What is Phowa?", text: "An introduction to Phowa and its place within the teachings and practices transmitted through the Ngagdra tradition." },
    { title: "What is a Drubdey?", text: "What is a Drubdey, and why are dedicated retreat centres important to the continuation of practice?" },
    { title: "Why do retreats last for years?", text: "Long-term retreat is a central feature of the lives of many practitioners. Explore the purpose and commitment behind years of sustained practice." },
    { title: "What is a lineage?", text: "Teachings are carried from teacher to student across generations. Explore the idea of lineage and its importance to continuity of practice." },
  ] satisfies Teaser[],
};

export const numbers = {
  eyebrow: "A tradition in numbers",
  items: [
    { value: "117", label: "Retreat practitioners", text: "Practitioners across the wider network of retreat centres." },
    { value: "17+", label: "Places of practice", text: "Monasteries, retreat centres and places connected with the Ngagdra network are documented across the institutional record." },
    { value: "3 years", label: "A period of intensive retreat", text: "Three-year retreats form an important part of the practice journey at several centres." },
    { value: "6 years", label: "Long-term retreat", text: "Some practitioners undertake extended periods of retreat spanning six years and beyond." },
    { value: "2007", label: "Ngagdra Dorji Choegar", text: "The institute was established in 2007 as a permanent place for Vajrayana study and practice." },
  ],
};

export const livingChronicle = {
  eyebrow: "The living chronicle",
  title: "Some moments become part of the institution's memory.",
  items: [
    { year: "2015", title: "A permanent institute", text: "Ngagdra Dorji Choegar was consecrated as a permanent place for study and practice.", href: "/events/2015-ngagdra-consecration" },
    { year: "2016", title: "Teachings and transmission", text: "Major oral transmissions of Chagchen Jazhung and Mani Kabum were held at Ngagdra.", href: "/events/2016-mani-kabum-chagchen-jazhung" },
    { year: "2021", title: "New places of practice", text: "New centres and places dedicated to study, retreat and practice were inaugurated.", href: "/events/2021-damchoe-pelkhang-chenmo" },
    { year: "2022", title: "Tsholing Drubdey", text: "Tsholing Drubdey was completed and consecrated, marking an important stage in the development of the retreat centre.", href: "/events/2022-tsholing-retreat-centre-takes-shape" },
    { year: "2025", title: "A gathering for Phowa", text: "More than 1,800 people gathered at Ngagdra for a public Phowa teaching.", href: "/events/2025-drubwang-nyenjued-phowa" },
    { year: "2026", title: "A new stage of practice", text: "Practitioners completing long-term retreats gathered at Ngagdra as they prepared to enter another period of intensive practice.", href: "/events/2026-a-new-stage-of-practice" },
  ],
  action: { label: "Explore the chronicle", href: "/events#chronicle" },
};

export const storyCategories: { label: StoryCategory; intro?: { title: string; text: string } }[] = [
  { label: "Institute life", intro: { title: "Where study becomes practice", text: "At Ngagdra Dorji Choegar, learning extends beyond the classroom. Monks and practitioners study Vajrayana teachings, receive transmissions and prepare for the demanding years of retreat that follow." } },
  { label: "Teachings & reflections" },
  { label: "People", intro: { title: "The practitioners who carry the tradition forward", text: "Behind every retreat centre are practitioners who have chosen years of disciplined practice. Their journeys connect study, retreat, transmission and service across the Ngagdra network." } },
  { label: "Retreat centres", intro: { title: "Places of practice across Eastern Bhutan", text: "From historic monasteries and remote retreat houses to newly established centres, each place carries its own history while contributing to a wider living tradition of practice." } },
  { label: "Heritage" },
  { label: "News" },
];

export type LatestStory = { title: string; category: StoryCategory; year: string; text: string; href?: string };

export const latestStories: LatestStory[] = [
  { title: "The journey between retreats", category: "Retreat centres", year: "2026", text: "What happens when one period of retreat ends and another begins?", href: "/stories/the-journey-between-retreats" },
  { title: "The people behind the practice", category: "People", year: "2026", text: "The practitioners, teachers and communities who sustain a tradition through years of dedication." },
  { title: "Where the teachings take root", category: "Retreat centres", year: "2026", text: "The places across eastern Bhutan where study, meditation and retreat continue." },
  { title: "Before there was a place", category: "Heritage", year: "2026", text: "The journey from travelling teachings to the establishment of Ngagdra Dorji Choegar." },
  { title: "What is Phowa?", category: "Teachings & reflections", year: "2026", text: "An introduction to a practice that has been transmitted through generations." },
  { title: "Years given to practice", category: "People", year: "2026", text: "What does it mean to dedicate years of one's life to retreat?" },
];

/* Articles -------------------------------------------------------------- */

export type ArticleBlock = string | { quote: string } | { link: { label: string; href: string } };

export type Article = {
  slug: string;
  category: StoryCategory;
  meta: string;
  title: string;
  dek: string;
  intro: string;
  image: ImageRef;
  sections: { heading: string; body: ArticleBlock[] }[];
  related: Teaser[];
  relatedCentre: { slug: string; name: string; text: string };
  published: string;
};

export const articles: Article[] = [
  {
    slug: "the-journey-between-retreats",
    category: "Retreat centres",
    meta: "Retreat centres · 8 min read",
    title: "The journey between retreats",
    dek: "When one period of practice ends, another may begin.",
    intro: "For a practitioner, completing a retreat is not simply the closing of a chapter. It can mark the beginning of another stage of practice—carrying forward what has been learned through years of disciplined retreat.",
    image: featuredStory.image,
    published: "2026-03-26",
    sections: [
      {
        heading: "A journey measured in years",
        body: [
          "At Ngagdra and its retreat centres, practice takes many forms. Some practitioners undertake periods of intensive retreat lasting three years, while others continue into longer periods of practice.",
          "In February 2026, 26 monks from Tagdong, Kangpar and Jayphu gathered at Ngagdra following the successful completion of three-year retreats. They came together before embarking on another three-year period of Six Yogas of Nāropa practice.",
          "Their gathering offers a glimpse into a journey in which retreat is not an isolated experience, but part of a continuing path of study, practice and dedication.",
        ],
      },
      {
        heading: "From one retreat to another",
        body: [
          "A similar journey unfolded among seven monks who had completed an initial three-year retreat at Kangpar before undertaking another three-year period of Six Yogas of Nāropa practice at Larjab.",
          "In March 2026, following the completion of their retreat at Larjab, they gathered at Ngagdra and offered Ku-Sung-Thukten Mendrel.",
          "The movement between centres reflects the wider network of places through which the Ngagdra tradition supports long-term practice.",
          { quote: "A retreat may have a beginning and an end. The practice continues." },
        ],
      },
      {
        heading: "Places that make practice possible",
        body: [
          "Long-term practice depends on places where practitioners can remain, study and practise over extended periods.",
          "Across the Ngagdra network, retreat centres provide different settings for this journey. Some have grown from older monasteries and places of practice, while others have been developed specifically to support retreat.",
          "Together, these places form a wider landscape of practice across eastern Bhutan.",
          { link: { label: "Explore the centres", href: "/centres" } },
        ],
      },
      {
        heading: "The people behind the retreats",
        body: [
          "A retreat centre is more than its temple, retreat houses or surrounding landscape.",
          "It is a place shaped by the people who practise there and by those who support the conditions that make practice possible.",
          "Teachers guide and transmit the teachings. Practitioners dedicate years to retreat. Attendants and supporters help sustain the everyday needs of the community.",
          "Every retreat therefore becomes part of a larger story—one carried by people, places and generations.",
        ],
      },
      {
        heading: "What comes next?",
        body: [
          "For some practitioners, completing a retreat leads directly into another period of intensive practice.",
          "For others, the next stage may involve teaching, supporting a centre or serving the wider community.",
          "The form may change. The journey continues.",
          "The story of Ngagdra is therefore not only a record of places built or retreats completed. It is a continuing story of people choosing to dedicate their lives to practice.",
        ],
      },
    ],
    related: [
      { title: "Years given to practice", text: "What does it mean to dedicate years of one's life to retreat?" },
      { title: "Where the teachings take root", text: "Explore the places across eastern Bhutan where study, meditation and retreat continue." },
      { title: "Why do retreats last for years?", text: "An introduction to the purpose and commitment behind long-term retreat." },
    ],
    relatedCentre: { slug: "ngagdra-dorji-choegar", name: "Ngagdra Dorji Choegar", text: "The institute for Vajrayana study and practice at Kurizampa, Mongar." },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
