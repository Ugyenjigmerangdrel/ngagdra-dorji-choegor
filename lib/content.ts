// Source of truth: "ABOUT PAGE", "OUR WORKS" and "The big visual_Ngadra" (Website Content, September 2026).
// Copy is reproduced as supplied; only typographic spacing and dash punctuation were normalised.

export type ImageRef = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  aspect?: string;
};

/* Home ------------------------------------------------------------------ */

/** Splits a run of short sentences so each can start its own line in a display heading. */
export const sentences = (text: string) => text.match(/[^.]+\./g)?.map((part) => part.trim()) ?? [text];

export const home = {
  hero: {
    title: "A living lineage. A path of practice. A tradition carried forward.",
    intro:
      "Ngagdra Dorji Choegar is a centre for the study, practice and preservation of Vajrayana teachings in Bhutan. Rooted in a lineage of masters and practitioners, Ngagdra brings together learning, meditation and retreat — helping a living tradition continue through practice and transmission.",
    actions: [
      { label: "Discover Ngagdra", href: "/about" },
      { label: "Explore Our Work", href: "/our-work" },
    ],
  },
  introduction: {
    eyebrow: "Introduction",
    title: "Where teachings become practice.",
    paragraphs: [
      "For generations, the Vajrayana tradition has been carried forward not only through texts and teachings, but through the people who study them, practice them and pass them on.",
      "Ngagdra Dorji Choegar, based in Kurizampa, Mongar, is part of this continuing tradition. Its work brings together Buddhist study, meditation, retreat and the preservation of teachings and practices rooted in the lineage of great masters.",
      "From the institute to retreat centres across eastern Bhutan, Ngagdra is part of a wider effort to create places where teachings can be learned, practiced and lived.",
    ],
    action: { label: "Discover the Institute", href: "/about#the-institute" },
  },
  pillars: [
    { title: "Study", body: "Learning the teachings, texts and practices of the Vajrayana tradition." },
    { title: "Practice", body: "Turning knowledge into lived practice through meditation, discipline and retreat." },
    { title: "Preserve", body: "Protecting the teachings, transmissions, sacred practices and living traditions entrusted through the lineage." },
    { title: "Serve", body: "Supporting practitioners, communities and the continued flourishing of the Dharma." },
  ],
};

/* The network at a glance ----------------------------------------------- */

export const networkAtAGlance = {
  eyebrow: "The Ngagdra Network at a Glance",
  title: "117 people are practising.",
  intro: "Across ten retreat centres in eastern Bhutan, practitioners have created communities dedicated to meditation and sustained practice.",
  stats: [
    { value: "10", label: "retreat centres" },
    { value: "117", label: "practitioners" },
    { value: "5", label: "eastern Dzongkhags" },
  ],
  peopleTitle: "The People Behind the Retreats",
  peopleNote: "Each retreat centre provides a place where practitioners can withdraw from ordinary life and dedicate themselves to sustained meditation and practice.",
  action: { label: "Explore the centres", href: "/centres" },
};

/* About ----------------------------------------------------------------- */

export const about = {
  title: "A living lineage. A path of practice. A tradition carried forward.",
  intro:
    "Ngagdra Dorji Choegar is a centre for the study, practice and preservation of Vajrayana teachings, rooted in an unbroken lineage of teachers and practitioners and continuing through study, meditation and retreat in Bhutan.",
  indexTitle: "A tradition carried through generations",
  index: [
    { label: "Who we are", href: "/about#the-institute" },
    { label: "Our lineage", href: "/about/history" },
    { label: "Our vision", href: "/about/heritage" },
    { label: "Our founder / spiritual head", href: "/about/rinpoche" },
    { label: "Ngagdra today", href: "/about/milestones#today" },
  ],
  institute: {
    title: "The Institute",
    paragraphs: [
      "Before Ngagdra Dorji Choegar existed, monks preparing for retreat had nowhere fixed to turn. Each year for eighteen years, fifteen to twenty-five of them would gather at various locations for a few months at a time to receive empowerments and transmissions from Rinpoche, a demanding, unsettled way to prepare for a life of meditation.",
      "Ngagdra Dorji Choegar was founded on 26 April 2007 to solve that problem: a single, permanent home for the teachings, empowerments, and training that practitioners need before entering retreat. Built above the Kurichu River near the Kurizampa bridge in Mongar, it is today the only Ngagdra institute in the world reviving a tradition first established over 400 years ago in Tibet by Kuenkhen Pema Karpo.",
      "At the institute, monks study mandala drawing, astrology, and Vajrayana philosophy, and practice visualization, contemplation, and oral transmission: a complete curriculum that prepares them for three to nine years of meditation. Nearly two hundred monks are currently enrolled, and the institute also serves practitioners returning from completed retreats for further instruction before their next stage of practice. It anchors and supports more than eleven retreat centres across Eastern Bhutan.",
    ],
  },
};

/* Rinpoche -------------------------------------------------------------- */

export const rinpoche = {
  name: "H.E. Gyeltshen Trulku Rinpoche",
  intro:
    "His Eminence Drub-La Kuenzang Tenpai Gyeltshen, known as H.E. Gyeltshen Trulku Rinpoche, is an accomplished yogic master recognized in childhood as the reincarnation of a great Dzogchen adept. Over more than five decades, he has built one of the most extensive and disciplined retreat traditions in the Himalayan region, spreading the Vajrayana teachings of the Drukpa Kagyud and Nyingma lineages throughout Eastern Bhutan.",
  sections: [
    {
      id: "early-life",
      title: "Early Life and Training",
      body: "Rinpoche was born in 1953 in Tashi Yangtse, Eastern Bhutan, and lost both parents while still a young child, growing up amid hardship and uncertainty. At age nine, he was recognized by Drubwang Lama Sonam Zangpo (1888–1982) as the reincarnation of Thrulzhig Gyeltshen Marpo (1874–1950), a great Dzogchen master and direct disciple of Togden Shakya Shri, and was formally enthroned in Lhuentse. At twelve, together with Trulku Jigme Choeda — now His Holiness the Je Khenpo of Bhutan — he was introduced to H.E. the First Drukpa Thuksey Rinpoche at Druk Thupten Sangag Choling monastery in Darjeeling, where he trained in Sutra and Mantra for ten years, receiving extensive teachings from Thuksey Rinpoche and Khenpo Noryang. At nineteen, he was appointed Dorji Lopen there by Thuksey Rinpoche himself.",
    },
    {
      id: "teaching-and-retreat",
      title: "Teaching and Retreat Tradition",
      body: "In Darjeeling, Rinpoche received the complete Kangyur oral transmission and Rinchen Tordzoe from H.H. Dudjom Jigdrel Yeshi Dorji, and complete Dzogchen teachings from the 68th Je Khenpo, His Holiness Thrizur Tenzin Dendrup, becoming one of his Precious Heart Sons. He also received Togden Shakya Shri's collected teachings from Drubwang Adzin Rinpoche. Returning to Bhutan at twenty-three, he received Mahamudra, the Six Yogas of Naropa, and empowerments in both the Drukpa Kagyud and Nyingma traditions from his root guru, Drubwang Lama Sonam Zangpo, before entering strict retreat at Hongtsho Goenpa. There he mastered Chagchen Choedruk and Khandro Nyengyue, the whispered lineage of the dakinis among other teachings Sonam Zangpo had received directly from Togden Shakya Shri. In 1982, he was appointed the first Drubpoen of Bhutan's first official retreat centre, at Phajoding, established for the long life of the Fourth Druk Gyalpo.",
    },
    {
      id: "eastern-bhutan",
      title: "Work across Eastern Bhutan",
      body: "From age thirty-four, as prophesied by his guru and at the request of local communities, Rinpoche began his Dharma activities at Kangpar Lamai Goenpa in Tashigang. He has since become a well-known supporter of the Rimay tradition — a non-sectarian approach that safeguards each lineage's distinct teachings against the threat of sectarian decline. Over the decades, he has constructed or renovated more than fifteen retreat centres, seven monasteries, and a nunnery across Eastern Bhutan, some government-funded but most supported and overseen by Rinpoche himself. He has consistently advocated equal opportunity and treatment for monks and nuns alike. In recognition of his service, Rinpoche was conferred the title of Yogic Daken, “The Great Illuminator of the Sacred Buddhist Doctrine of Bhutan” by the 70th Je Khenpo in 2009, the first time such an honor had been given to anyone in Bhutan.",
    },
    {
      id: "ngagdra",
      title: "Ngagdra Dorji Choegar",
      body: "To provide monks with a single place to complete their Vajrayana training before retreat, Rinpoche established Ngagdra Dorji Choegar in Kurizampa, Mongar — the only institute in the world reviving the Ngagdra tradition first founded over 400 years ago in Tibet by Kuenkhen Pema Karpo. The institute houses a 21-foot statue of Hey Vajra, the largest of its kind in Bhutan, and provides training in mandala drawing, astrology, and Vajrayana philosophy. Rinpoche has also introduced a three-year Six Yogas of Naropa practice for senior nuns following their nine-year retreats, and at the special command of His Majesty the King, reintroduced Togden Shakya Shri's secret mind treasure teachings and the Soenjang life-purification ritual, now held annually at the institute for the benefit of the public.",
    },
  ],
};

/* Lineage and history --------------------------------------------------- */

export const lineage = {
  eyebrow: "Lineage and History",
  kicker: "From teacher to disciple, from generation to generation.",
  title: "A lineage transmitted through practice.",
  intro:
    "Ngagdra Dorji Choegar carries forward a living transmission that spans three generations of Himalayan masters from a 19th-century yogi in Tibet, through a hidden hermit-teacher in Eastern Bhutan, to Rinpoche today.",
  chain: [
    "Togden Shakya Shri",
    "Thruel-Zhig Gyeltshen Marpo",
    "Drubwang Lama Sonam Zangpo",
    "H.E. Gyeltshen Trulku Rinpoche",
    "Ngagdra Dorji Choegar & the next generation",
  ],
  overview: [
    "The teachings preserved at Ngagdra Dorji Choegar trace back to Togden Shakya Shri, one of the great meditation masters of 19th-century Tibet. One of his closest disciples was a Bhutanese yogi named Thruelzhig Gyeltshen Marpo, who spent his life in mountain hermitages across Eastern Bhutan and Nepal, living simply by some accounts never building a single monastery, while quietly passing these teachings on to a circle of realized disciples.",
    "When Thruelzhig Gyeltshen Marpo passed away in 1950, it was prophesied that he would return. Three years later, a child was born in Trashiyangtse; at age nine, he was recognized as that same teacher's reincarnation. Raised and trained for decades under senior masters in Bhutan and Darjeeling, that child is today's H.E. Gyeltshen Trulku Rinpoche — the living continuation of a transmission that has now passed, without interruption, through three generations.",
  ],
  researchers: {
    title: "For Practitioners & Researchers",
    paragraphs: [
      "The lineage held at Ngagdra Dorji Choegar descends principally from Togden Shakya Shri (1853–1919) through his disciple Thruelzhig Gyeltshen Marpo (1874–1950), who received the Collate of the Heart Essence of the Great Perfection, the Jewel Essence of Great Perfection — one of only three disciples entrusted with this transmission — and was given the name Kuenzang Pema Dechen Tsel. Gyeltshen Marpo's own students included Ngagtoen Kalo, Ngagtoen Yalo, Lopoen Pema Wangchuk (his biographer), Ani Yoesel Choeden, Jigme Droelma, Yeshi Zangmo, and his consort Tenzin Pelmo — several recognized as realized practitioners in their own right. Lama Sonam Zangpo also received oral lineage cycles of the Great Perfection directly from him.",
      "In 1962, Drubwang Lama Sonam Zangpo (1888–1982) recognized the nine-year-old Kuenzang Tenpai Gyeltshen as Gyeltshen Marpo's reincarnation. Rinpoche's subsequent training under H.E. the First Drukpa Thuksey Rinpoche, H.H. Dudjom Jigdrel Yeshi Dorji, H.H. Thrizur Tenzin Dendrup (68th Je Khenpo), and Drubwang Adzin Rinpoche integrated this Nyingma Dzogchen transmission with the Drukpa Kagyud Mahamudra lineage — the dual foundation on which Ngagdra Dorji Choegar's curriculum rests today.",
    ],
  },
};

/* Heritage -------------------------------------------------------------- */

export const heritage = {
  eyebrow: "Our Heritage",
  title: "Preserving a Living Tradition.",
  intro:
    "Walk through Ngagdra Dorji Choegar and its retreat centres, and you'll find more than monks in meditation — you'll find teachings rescued from disappearing, art found nowhere else on earth, and a practice tradition still being carried forward, unbroken, generation after generation.",
  sections: [
    {
      id: "teachings-and-texts",
      title: "Teachings & Texts",
      paragraphs: [
        "Some of the most profound teachings of the Drukpa Kagyud and Nyingma lineages nearly didn't survive. Passed down for generations by word of mouth, cycles like the Gayjor Duenpa Drogoen Tsangpa Gyare's Aspiration for the Seven Qualities of Virtuous Practice and the Guru Dewa teachings of Drubwang Shakya Shri's lineage were slipping toward extinction, with fewer and fewer people left who knew them. Rinpoche sought them out, practiced them, and wrote supplementary commentaries — including a full practice manual for Guru Dewa so they could be taught properly again. A few senior monks and nuns have since completed these teachings during an intensive seven-month retreat.",
        "At the special command of His Majesty the Druk Gyalpo, Jigme Khesar Namgyel Wangchuck, Rinpoche also reintroduced Drubwang Shakya Shri's secret mind treasure teachings, including the Drubwang Nyengyued Phowa practice and the Soenjang — a life-purification ritual believed to lighten karma, extend life, and prepare the mind for a peaceful death. It is now held every year at Ngagdra Dorji Choegar, open to the public.",
      ],
    },
    {
      id: "sacred-arts",
      title: "Sacred Arts",
      paragraphs: [
        "Inside the institute stands a 21-foot statue of Hey Vajra — the largest of its kind in Bhutan, and the personal meditation deity of Marpa Lotsawa. At Togden Choeling Drubdey in Gongthung, Rinpoche built a 22-foot, three-dimensional Chakrasamvara mandala, the largest in the country. And at Khabti Goenpa hangs a wall painting of Dampa Rigja — the one hundred revered deities of the Drukpa Kagyud lineage — the only painting of its kind known to exist anywhere in the world. None of this is decoration. Every statue and mandala is built as a tool for practice: something a meditator can hold in the mind's eye, precisely and without doubt, during years of solitary retreat.",
      ],
    },
    {
      id: "practice-traditions",
      title: "Practice Traditions",
      paragraphs: [
        "At the heart of it all is retreat itself — three years, six years, nine years, sometimes longer, spent largely in silence. Rinpoche has long insisted that monks and nuns walk the same path on equal footing: nuns now undertake the same nine-year meditation programs as monks, and a few senior nuns have gone on to complete twelve years in retreat, some now practicing alone in the mountains and at cremation grounds, following the ancient custom of solitary wandering meditation.",
        "It is, by any measure, one of the most disciplined and complete retreat traditions still practiced in the Himalayan region today.",
      ],
    },
  ],
};

/* Milestones ------------------------------------------------------------ */

export const milestones = {
  eyebrow: "Milestones",
  title: "Institutional timeline",
  entries: [
    {
      id: "before-2007",
      label: "Before 2007",
      body: "For eighteen years, there was no single home for this training. Each year, fifteen to twenty-five monks would travel to gather at different locations for about three months at a time, to receive empowerments and teachings directly from Rinpoche before returning to their retreat centres. It worked, but it asked a great deal of everyone involved.",
    },
    {
      id: "2007",
      label: "2007",
      body: "On 26 April 2007, following a simple religious ceremony, Ngagdra Dorji Choegar opened its doors above the Kurichu River in Mongar — giving monks, for the first time, one permanent place to complete their training.",
    },
    {
      id: "2015",
      label: "2015",
      body: "On 30 October 2015, His Holiness the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated the institute together with its newly completed Hey Vajra statue — the largest and tallest of its kind ever built. His Royal Highness Gyaltshab Jigme Dorji Wangchuck and Her Royal Highness Azhi Yeatso Lhamo attended, and the ceremony coincided with the 60th birth anniversary of His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck making it a nationally significant day.",
      href: "/events/2015-ngagdra-consecration",
    },
    {
      id: "2018",
      label: "2018 onwards",
      body: "As enrollment kept growing, so did the institute. Since 2018, Ngagdra Dorji Choegar has been expanding with individual retreat houses for preliminary and short-term practice, along with a guesthouse for devotees who travel to receive teachings under Rinpoche's guidance.",
    },
    {
      id: "today",
      label: "Today",
      body: "Nearly two hundred monks now study at the institute, and its reach extends well beyond its own walls, supporting and uplifting more than eleven retreat centres across Eastern Bhutan. It remains one of the last major projects Rinpoche has personally overseen, and, by his own account, one close to his heart.",
    },
  ],
};

/* Our work -------------------------------------------------------------- */

export type WorkArea = { slug: string; title: string; body: string; image: ImageRef };

export const ourWork = {
  eyebrow: "Our Works",
  title: "Education, Practice, Preservation and Service.",
  intro:
    "Ngagdra Dorji Choegar's work happens in stages, not in isolation. A student arrives to study; that study prepares them for years of retreat; retreat produces practitioners who preserve the tradition and serve the wider community. Everything below is one connected path, not five separate programs.",
  areas: [
    {
      slug: "vajrayana-education",
      title: "Vajrayana Education",
      body: "Before any student enters retreat, they spend years at the institute mastering what they'll need once they're alone with the practice. Lessons cover mandala drawing, astrology, and Vajrayana philosophy, alongside training in visualization, contemplation, and oral transmission — the full body of knowledge a practitioner needs before three, six, or nine years of solitary meditation can safely begin. Nearly two hundred monks are currently working through this curriculum.",
      image: { src: "/media/education/ngagdra-monks.jpg", alt: "Young monks of Ngagdra Dorji Choegar standing together in ceremonial scarves", objectPosition: "50% 40%" },
    },
    {
      slug: "retreat-preparation-practice",
      title: "Retreat Preparation & Practice",
      body: "Study and retreat aren't separate worlds — one exists to serve the other. Ngagdra Dorji Choegar was built specifically to solve a problem: for eighteen years, monks had to travel to gather teachings piecemeal before entering retreat centres scattered across Eastern Bhutan. Now, everything a student needs — empowerments, transmissions, and initiations — happens in one place first. Practitioners who complete three-, six-, or nine-year retreats also return here afterward, before advancing further or being assigned to a monastery or nunnery.",
      image: { src: "/media/community/assembly-hall-gathering.jpg", alt: "Monks and practitioners seated in rows in the assembly hall at Ngagdra, receiving teachings", objectPosition: "50% 48%" },
    },
    {
      slug: "preserving-living-traditions",
      title: "Preserving Living Traditions",
      body: "Some teachings nearly disappeared. Cycles like the Gayjor Duenpa and the Guru Dewa practices survived by word of mouth for generations, carried by fewer and fewer people who still knew them. Rinpoche has spent decades tracking these teachings down, receiving them properly, and writing commentaries — including a full practice manual for Guru Dewa — so they can be taught again with confidence. A few senior monks and nuns have already completed these practices during dedicated retreat.",
      image: { src: "/media/heritage/ceremonial-proceedings.jpg", alt: "Monks in ceremonial dress playing ritual instruments during a procession", objectPosition: "60% 45%" },
    },
    {
      slug: "sacred-arts-knowledge",
      title: "Sacred Arts & Knowledge",
      body: "Alongside scripture, students learn the visual language of the tradition itself — mandala drawing, astrology, and the iconography behind the institute's own sacred art, including its 21-foot Hey Vajra statue, the largest of its kind in Bhutan. None of this is taught as decoration. Every mandala and every deity a monk learns to draw or visualize becomes a tool he'll rely on later, alone, during years of retreat.",
      image: { src: "/media/heritage/ritual-assembly.jpg", alt: "A ritual assembly inside a richly painted temple hall", objectPosition: "56% 50%" },
    },
    {
      slug: "community-public-practice",
      title: "Community & Public Practice",
      body: "The institute's work doesn't stop at its own walls. At the special command of His Majesty the King, Rinpoche reintroduced the Soenjang — a life-purification ritual believed to lighten karma and prepare the mind for a peaceful death — now held annually at Ngagdra Dorji Choegar and open to the public. It's a reminder that everything studied and practiced here eventually flows back outward, to the communities the institute exists to serve.",
      image: { src: "/media/community/public-blessing.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche moving through a seated crowd during a public blessing", objectPosition: "43% 45%" },
    },
  ] satisfies WorkArea[],
  journey: {
    title: "The Practitioner Journey",
    steps: [
      { title: "Study", body: "Years spent mastering Vajrayana philosophy, mandala drawing, astrology, and the foundations of practice at the institute." },
      { title: "Training", body: "Empowerments, oral transmissions, and initiations received directly from Rinpoche, completing what's needed before retreat." },
      { title: "Retreat", body: "Three, six, or nine years of solitary meditation at one of the network's retreat centres." },
      { title: "Advanced Practice", body: "Senior practitioners including nuns who complete nine-year programs, return to the institute for further teachings before undertaking deeper retreat." },
      { title: "Continuation", body: "Some go on to serve as teachers, meditation masters, or assistants at the very centres that trained them, or take up solitary practice in the mountains, keeping the tradition alive for the next student who begins to study." },
    ],
  },
};

/* Support --------------------------------------------------------------- */

export const support = {
  eyebrow: "Support",
  title: "Support the Practice, Not Just the Place",
  lead: "Practice does not end with retreat. It becomes a service.",
  requires: {
    eyebrow: "What a retreat requires",
    title: "What does a retreat require?",
    intro: "A retreat is more than a room.",
    items: [
      { icon: "nourishment", title: "Nourishment", body: "Food and basic living expenses" },
      { icon: "essentials", title: "Essentials", body: "Clothing and personal necessities" },
      { icon: "place", title: "A place to practise", body: "Retreat houses, kitchens, water and basic facilities" },
      { icon: "learning", title: "The conditions for learning", body: "Texts, teaching spaces and educational resources" },
      { icon: "continuity", title: "Continuity", body: "Support that allows practitioners to remain focused on practice" },
    ],
    closing: "When basic needs are cared for, practitioners can devote themselves more fully to practice.",
  },
  needs: {
    eyebrow: "Building the conditions for practice",
    title: "Current priority needs",
    // Each need is quoted from the centre's own story (CENTRES_FULL STORIES).
    items: [
      {
        centre: "jashar-woong-drubdey-ani-dratshang",
        text: "Further infrastructure development, maintenance and renovation of retreat houses, additional hostels, toilets and proper kitchens have been identified as important needs. Above all, ensuring an adequate supply of safe drinking water remains the foremost priority.",
      },
      {
        centre: "ngagdra-dorji-choegar",
        text: "Accommodation and facilities for students, devotees, visiting lamas and Trulkus, and formally enrolled monks remain a significant concern. Water supply, sanitation and related infrastructure are particularly important challenges.",
      },
      {
        centre: "larjab-drakar-choeling-drubdey",
        text: "Further renovation of the retreat houses, construction of additional retreat accommodation and a proper mule track to the centre have been identified as important needs.",
      },
      {
        centre: "dhendup-choeding-drubdey",
        text: "Renovation of the retreat houses and improvement of the access road remain identified priorities for the centre.",
      },
      {
        centre: "kadam-goenpa-monastery",
        text: "According to the source, the cost of basic food supplies, general expenses for the monks and teachers’ salaries is borne by Rinpoche. At the same time, proper hostels and related facilities remain an important infrastructure need.",
      },
      {
        centre: "dokoe-choeling-goenpa",
        text: "The villagers have offered land for the monastery and continue to support the Goenpa. At the same time, their limited financial capacity makes it difficult for the community to provide all the basic infrastructure and amenities needed to sustain and further develop the monastery.",
      },
    ],
  },
  how: {
    eyebrow: "How to support",
    title: "How to support",
  },
};
