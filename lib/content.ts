import { source, type SourceRef, type Verification } from "@/lib/editorial";

export type WorkPillar = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  dek: string;
  meaning: string;
  evidence: string[];
  sections: { title: string; body: string }[];
  image: { src: string; alt: string; objectPosition?: string };
  source: SourceRef;
};

export const workPillars: WorkPillar[] = [
  {
    slug: "vajrayana-education", index: "01", title: "Preparing practitioners through study", shortTitle: "Vajrayana Education",
    dek: "Ngagdra was established so practitioners could receive advanced Vajrayana education and practical preparation before entering extended meditation retreats.",
    meaning: "Study at Ngagdra prepares practitioners to understand and undertake the practices transmitted to them before they enter retreat.",
    evidence: ["Advanced Vajrayana study", "Mantra and Sutra", "Oral transmission", "Visualization and contemplation", "Mandala studies", "Astrology", "English", "Library and Buddhist texts"],
    sections: [
      { title: "Advanced Vajrayana study", body: "The institute brings advanced teaching, empowerment, oral transmission and practical training into one place. Its curriculum exists in direct relation to the longer periods of practice undertaken at retreat centres." },
      { title: "Mantra, Sutra and oral transmission", body: "Students study Mantra and Sutra while receiving oral transmissions from a qualified teacher. In Vajrayana Buddhism, oral transmission authorizes and connects the practitioner to a teaching lineage." },
      { title: "Visualization and contemplation", body: "The publication records visualization and contemplation among the disciplines taught at Ngagdra. These are learned as practices, together with the instructions needed to carry them into retreat." },
      { title: "Mandala studies and astrology", body: "Mandala drawing and astrology are taught alongside religious study. Their inclusion reflects the bodies of knowledge required within the institute's ritual and educational life." },
      { title: "Supporting fields", body: "The curriculum also includes sciences and English. A library holds Buddhist texts from Bhutan and other parts of the world, giving students access to materials needed for study." },
    ],
    image: { src: "/media/education/ngagdra-monks.jpg", alt: "Monks of Ngagdra Dorji Choegar gathered at the institute in Mongar", objectPosition: "50% 42%" }, source: source(7, 26, 27),
  },
  {
    slug: "retreat-preparation-practice", index: "02", title: "Study before retreat. Instruction after retreat.", shortTitle: "Retreat Preparation & Practice",
    dek: "Ngagdra prepares practitioners before retreat and provides further instruction after major periods of extended practice.",
    meaning: "The institute and the Drubdeys, or meditation retreat centres, form connected parts of one system of training and practice.",
    evidence: ["Study", "Oral transmission", "Practical preparation", "Three-year retreat", "Six-year retreat", "Nine-year and longer retreat", "Further instruction", "Continued service and practice"],
    sections: [
      { title: "Preparation at Ngagdra", body: "Practitioners first receive teachings, empowerments, oral transmissions and practical instruction. This preparation gives them the knowledge and discipline required for extended retreat." },
      { title: "Extended practice", body: "The publication records programmes of three, six and nine years, and in some cases twelve years. Duration depends on the practitioner, the centre and the programme; there is no single route followed by everyone." },
      { title: "Returning for instruction", body: "After completing a major period of retreat, practitioners may return to Ngagdra for further teachings and instructions. Some then enter advanced retreat, continue practice, or serve in monasteries and nunneries." },
    ],
    image: { src: "/media/centres/retreat-centres.jpg", alt: "Retreat buildings on a forested hillside in Bhutan", objectPosition: "50% 48%" }, source: source(7, 26, 27),
  },
  {
    slug: "preserving-living-traditions", index: "03", title: "Teachings continued through transmission and practice", shortTitle: "Preserving Living Traditions",
    dek: "The teachings described by the publication are preserved through study, oral transmission, documentation and sustained practice in retreat.",
    meaning: "Continuity depends on teachers transmitting complete teachings and practitioners studying and applying them with care.",
    evidence: ["Drukpa Kagyud", "Nyingma", "Rimay", "Togden Shakya Shri", "Guru Dewa", "Gayjor Duenpa", "Commentaries", "Practice manuals"],
    sections: [
      { title: "A Rimay approach", body: "The publication describes Rinpoche as a supporter of Rimay, a non-sectarian approach that respects the particular teachings of each lineage. His training included transmissions from both Drukpa Kagyud and Nyingma traditions." },
      { title: "From teacher to practitioner", body: "Teachings are received through explanation, empowerment and oral transmission. They are then studied, practised and continued during retreat before being carried into further practice or institutional service." },
      { title: "Teachings at risk", body: "The publication credits Rinpoche with reviewing and preserving teachings considered at risk of disappearing. It names Gayjor Duenpa and Guru Dewa among this work and records that he composed commentaries and a supplementary practice manual for Guru Dewa." },
    ],
    image: { src: "/media/heritage/ritual-assembly.jpg", alt: "Practitioners taking part in a ritual assembly inside a decorated hall", objectPosition: "56% 50%" }, source: source(5, 6, 7, 8),
  },
  {
    slug: "sacred-arts-knowledge", index: "04", title: "Sacred arts and knowledge in study and practice", shortTitle: "Sacred Arts & Knowledge",
    dek: "Mandala drawing, astrology and Buddhist texts form part of study at Ngagdra, while the retreat network maintains major sacred artworks and architecture.",
    meaning: "These disciplines and objects belong to the practice traditions taught across the institute and retreat communities.",
    evidence: ["Mandala drawing", "Astrology", "Buddhist texts", "Hey Vajra statue", "Chakrasamvara mandala", "Dampa Rigja painting", "Longevity Buddha mandala", "Temple murals and stupas"],
    sections: [
      { title: "Knowledge taught at Ngagdra", body: "Students learn mandala drawing and astrology as part of their preparation. The institute also maintains a collection of Buddhist texts for study." },
      { title: "Hey Vajra at Ngagdra", body: "The institute houses a major statue of Hey Vajra, a meditative deity associated in the publication with Marpa Lotsawa. The statue and institute were consecrated on 30 October 2015." },
      { title: "Art across the network", body: "The publication documents a three-dimensional Chakrasamvara mandala at Togden Choeling, a Dampa Rigja wall painting and three-dimensional Longevity Buddha mandala at Khabti, as well as temple murals, stupas and sacred architecture at other sites." },
    ],
    image: { src: "/media/heritage/ceremonial-proceedings.jpg", alt: "Religious practitioners assembled outdoors during ceremonial proceedings", objectPosition: "62% 45%" }, source: source(7, 13, 24, 26, 27),
  },
  {
    slug: "community-public-practice", index: "05", title: "Religious practice open to the wider public", shortTitle: "Community & Public Practice",
    dek: "Some practices at Ngagdra extend beyond the resident monastic community through annual religious programmes for members of the public.",
    meaning: "Three annual public practices connect Ngagdra’s monastic life with the wider community.",
    evidence: ["Drubwang Nyengyued Phowa", "Amitabha Buddha mantra recitation", "Soenjang, Life Purification Ritual"],
    sections: [
      { title: "Annual practices", body: "The publication states that Drubwang Nyengyued Phowa, Amitabha Buddha mantra recitation and Soenjang are held annually at Ngagdra for the wider public." },
      { title: "Annual practice", body: "Drubwang Nyengyued Phowa, Amitabha Buddha mantra recitation and Soenjang bring practitioners and the wider public together at Ngagdra." },
      { title: "An institutional record", body: "Past teachings, ceremonies and gatherings remain part of the event archive as a continuing record of public religious life at the institute." },
    ],
    image: { src: "/media/community/public-blessing.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche with a gathered community during a blessing", objectPosition: "43% 45%" }, source: source(8),
  },
];

export type Story = {
  slug: string; category: string; title: string; dek: string; readTime: string; intro: string;
  sections: [string, string][]; image: { src: string; alt: string; objectPosition?: string };
  source: SourceRef; verification: Verification;
};

export const stories: Story[] = [
  {
    slug: "why-ngagdra-was-established", category: "History", title: "Why Ngagdra was established", readTime: "4 min read",
    dek: "For eighteen years, teachings moved between temporary locations. A permanent institute changed how practitioners could prepare for retreat.",
    intro: "Before Ngagdra had a permanent home, groups of about fifteen to twenty-five monks gathered at different places each year for around three months of teaching.",
    sections: [
      ["Eighteen years of travelling teachings", "Rinpoche gave empowerments, oral transmissions and initiations during these annual gatherings. Moving between sites made sustained teaching difficult for the teacher and practitioners."],
      ["A permanent institute", "Ngagdra Dorji Choegar was founded in Kurizampa on 26 April 2007. It provided one place for advanced Vajrayana study, practical training and preparation before extended meditation retreat."],
      ["A link to the retreat centres", "Practitioners can receive comprehensive preparation at the institute before entering a Drubdey, or meditation retreat centre. After three-, six- or nine-year retreats, some return to Ngagdra for further instruction."],
    ], image: { src: "/media/rinpoche/travelling-horseback.jpg", alt: "Archival photograph of Rinpoche travelling on horseback with monks and attendants through the hills", objectPosition: "50% 42%" }, source: source(26, 27), verification: { status: "source_verified" },
  },
  {
    slug: "preparing-for-years-in-retreat", category: "Practice", title: "Preparing for three, six and nine years of retreat", readTime: "5 min read",
    dek: "The publication describes a connected path from study and oral transmission to retreat and later instruction.",
    intro: "Extended retreat begins with preparation. At Ngagdra, practitioners study teachings, receive oral transmissions and learn the practices they will later undertake for sustained periods.",
    sections: [
      ["Before retreat", "Preparation includes advanced Vajrayana study, Mantra and Sutra, visualization, contemplation, mandala studies and astrology. The publication presents these disciplines as the knowledge and practical training needed before retreat."],
      ["Different periods of practice", "The retreat-centre accounts record programmes of three, six and nine years, with some nuns undertaking as many as twelve years. These are different programmes, not stages that every practitioner must complete."],
      ["Instruction after retreat", "Practitioners may return to Ngagdra after a major retreat period for further teachings. Some proceed to advanced retreat, while others serve in monasteries, nunneries or other practice settings."],
    ], image: { src: "/media/centres/retreat-centres.jpg", alt: "Retreat buildings connected by paths on a forested hillside", objectPosition: "50% 48%" }, source: source(7, 26, 27), verification: { status: "source_verified" },
  },
  {
    slug: "ani-yoesel-choden-jashar-woong", category: "People", title: "Ani Yoesel Choden and Jashar Woong", readTime: "6 min read",
    dek: "The history of Jashar Woong begins with a nun who studied under Thruelzhig Gyeltshen Marpo and founded a retreat centre in 1933.",
    intro: "Ani Yoesel Choden was born in Zobel, Pemagatshel, in 1912. She travelled to Zham Goenpa in Lhuentse to study Longchen Nyingthig and the collected teachings of Togden Shakya Shri under Thruelzhig Gyeltshen Marpo.",
    sections: [
      ["Foundation in 1933", "After returning to Pemagatshel, she spent four years in meditation at Yongla. The publication records a traditional account of the signs through which she selected the site where she established Jashar Woong Retreat Center in 1933."],
      ["A request to Rinpoche", "Ani Yoesel Choden met the present Gyeltshen Trulku Rinpoche when he was nineteen. She asked him to take responsibility for Jashar Woong after her death. Following her passing in 1982 and a period of abandonment, Rinpoche renovated and revived the centre in 1992."],
      ["Education and long retreat", "Rinpoche expanded the facilities in 1995 and lived there while teaching the nuns. The first group began a three-year retreat in 2000. A new temple, begun in 2008 and completed in 2016, supported the nunnery's continued development."],
    ], image: { src: "/media/rinpoche/with-nuns.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche seated with a group of Buddhist nuns", objectPosition: "50% 50%" }, source: source(21, 22, 23), verification: { status: "needs_current_confirmation", note: "Current nun counts, programmes and needs are not repeated here." },
  },
  {
    slug: "lineage-thruelzhig-gyeltshen-marpo", category: "Lineage", title: "The lineage of Thruelzhig Gyeltshen Marpo", readTime: "7 min read",
    dek: "A teacher's journey from Lhuentse to Kham shaped the transmission continued by the present Gyeltshen Trulku Rinpoche.",
    intro: "According to the institute's publication, Thruelzhig Gyeltshen Marpo was born in 1875 in Kurtoe Minjey, Lhuentse. His parents were Ngawang and Ngoedrupmo.",
    sections: [
      ["Study and the journey to Kham", "After an axe injury left him bedridden at about nineteen, he learned to read Buddhist texts. He later studied with Lama Chonyid Rangdroel and travelled to Kham in Eastern Tibet to seek teachings from Drubwang Shakya Shri."],
      ["Teachings and retreat", "The publication records that he received Mahamudra and Great Perfection instructions and the name Kuenzang Pema Dechen Tsel. His practice took him to Singye Dzong, Roelmoteng, Minjey, Zham, Tag Goenpa, Wag Goenpa, Aja Phagmorong, Maratika in Nepal and other locations."],
      ["Disciples and continuity", "The account names at least 108 disciples, including Ani Yoesel Choden and Lama Sonam Zangpo. It identifies the present Kuenzang Tenpai Gyeltshen, recognized by Drubwang Lama Sonam Zangpo, as his reincarnation."],
    ], image: { src: "/media/rinpoche/early-group-archive.jpg", alt: "Archival group portrait of Buddhist teachers and practitioners", objectPosition: "50% 50%" }, source: source(2, 3, 4), verification: { status: "source_verified" },
  },
  {
    slug: "darchen-two-generations", category: "From the Retreat Centres", title: "Darchen across two generations", readTime: "4 min read",
    dek: "A retreat house built in 1918 and a temple built in 1978 connect two generations of the Gyeltshen Trulku lineage.",
    intro: "At Darchen in Minjey, the publication records work by both Thruelzhig Gyeltshen Marpo and the present Gyeltshen Trulku Rinpoche.",
    sections: [
      ["The 1918 retreat house", "Thruelzhig Gyeltshen Marpo established a modest retreat house at Darchen in 1918 and practised there."],
      ["Rinpoche's return to the site", "In 1978, at the request of the local community, the present Rinpoche built a temple where his predecessor's retreat house had stood. He also built a retreat house for four monks."],
      ["Tag-Dong Drubdey", "The centre was expanded in 2019 and renamed Tag-Dong Drubdey. Its record includes nine individual retreat houses and a six-year retreat group."],
    ], image: { src: "/media/rinpoche/retreat-cliff.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche practising beside a cliff", objectPosition: "50% 50%" }, source: source(29, 30), verification: { status: "needs_current_confirmation" },
  },
];

export const milestones = [
  { year: "1875", date: "1875", title: "Birth of Thruelzhig Gyeltshen Marpo", body: "The publication records his birth at Kurtoe Minjey, Lhuentse.", source: source(2) },
  { year: "1918", date: "1918", title: "A retreat house at Darchen", body: "Thruelzhig Gyeltshen Marpo established a retreat house at Darchen.", source: source(29) },
  { year: "1933", date: "1933", title: "Jashar Woong established", body: "Ani Yoesel Choden founded Jashar Woong Retreat Center.", source: source(21) },
  { year: "1953", date: "1953", title: "Birth of H.E. Gyeltshen Trulku Rinpoche", body: "Rinpoche was born in Tashi Yangtse, Eastern Bhutan.", source: source(5) },
  { year: "1982", date: "1982", title: "First Drubpoen at Phajoding", body: "Rinpoche was appointed the first meditation master of the official Buddhist Institute and Retreat Center at Phajoding.", source: source(6) },
  { year: "1986", date: "1986", title: "First eastern retreat centre", body: "Rinpoche established Zungju Yoesel Ling Drubdey at Lamai Goenpa.", source: source(10, 11) },
  { year: "2003", date: "2003", title: "Togden Choeling established", body: "Tashigang Lam Neten Singye Rinchen and Rinpoche established the retreat centre at Gongthung.", source: source(24) },
  { year: "2007", date: "26 April 2007", title: "Ngagdra Dorji Choegar founded", body: "A permanent institute was founded at Kurizampa for Vajrayana study and retreat preparation.", source: source(26) },
  { year: "2009", date: "28 December 2009", title: "Yogic Daken title conferred", body: "H.H. the 70th Je Khenpo conferred the title recorded as ‘The Great Illuminator of the Sacred Buddhist Doctrine of Bhutan.’", source: source(8) },
  { year: "2015", date: "30 October 2015", title: "Institute and Hey Vajra statue consecrated", body: "H.H. the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated the institute and statue.", source: source(27) },
  { year: "2022", date: "2022", title: "Tsholing Gongma development began", body: "The new retreat centre was constructed by monks and teachers from Ngagdra.", source: source(36) },
  { year: "2024", date: "2024", title: "Practitioners sent to Terdrak", body: "The publication records the renewal of retreat practice at the old monastery in Trongsa.", source: source(37, 38) },
];

export const recurringPractices = ["Drubwang Nyengyued Phowa", "Amitabha Buddha mantra recitation", "Soenjang, Life Purification Ritual"];

export const eventPhotography = {
  congregationFront: {
    src: "/media/events/public-practice-congregation-front.jpg",
    alt: "A large congregation seated beneath ceremonial canopies during a public religious programme",
    caption: "The wider community gathered beneath ceremonial canopies for public religious practice.",
    aspect: "3 / 2",
    objectPosition: "50% 54%",
  },
  offeringProcession: {
    src: "/media/events/ceremonial-offering-procession.jpg",
    alt: "Religious practitioners carrying sacred objects and white ceremonial scarves",
    caption: "Practitioners carrying sacred objects and white ceremonial scarves during the proceedings.",
    aspect: "3 / 2",
    objectPosition: "52% 50%",
  },
  congregationClose: {
    src: "/media/events/public-practice-congregation-close.jpg",
    alt: "Members of the public attending a religious gathering",
    caption: "Members of the public attending a religious gathering.",
    aspect: "3 / 2",
    objectPosition: "50% 52%",
  },
  congregationSide: {
    src: "/media/events/public-practice-congregation-side.jpg",
    alt: "A gathered community seated beneath ceremonial canopies",
    caption: "The gathered community during a public religious programme.",
    aspect: "3 / 2",
    objectPosition: "50% 50%",
  },
  teaching: {
    src: "/media/events/teacher-during-public-teaching.jpg",
    alt: "A Buddhist teacher smiling during a public teaching",
    caption: "A teacher during a public religious programme.",
    aspect: "2 / 3",
    objectPosition: "50% 46%",
  },
  ceremonialPortrait: {
    src: "/media/events/ceremonial-teacher-portrait.jpg",
    alt: "Ceremonial portrait of a Buddhist teacher seated before an ornate throne",
    caption: "A ceremonial portrait preserved as part of the institute’s photographic record.",
    aspect: "2 / 3",
    objectPosition: "50% 50%",
  },
} as const;

export const publicPracticeGallery = Object.values(eventPhotography);

export const events = [{
  slug: "2015-ngagdra-consecration", status: "past" as const, title: "Consecration of Ngagdra Dorji Choegar and the Hey Vajra statue", date: "2015-10-30", dateLabel: "30 October 2015", location: "Ngagdra Dorji Choegar, Kurizampa, Mongar, Bhutan", category: "Historical Event",
  dek: "H.H. the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated the institute and its Hey Vajra statue.",
  intro: "The consecration was attended by His Royal Highness Gyaltshab Jigme Dorji Wangchuck, accompanied by Her Royal Highness Azhi Yeatso Lhamo.",
  image: { src: "/media/community/public-blessing-wide.jpg", alt: "A large religious gathering at Ngagdra Dorji Choegar", caption: "Religious gathering at Ngagdra Dorji Choegar.", objectPosition: "50% 48%" },
  imageProvenanceVerified: false, source: source(27),
}];
