// Source of truth: "EVENTS" (Website Content, September 2026).
// Copy is reproduced as supplied. Spellings of the institute's and Rinpoche's names are
// normalised to their official forms; all other spellings are kept as written.

import type { StoryBlock } from "@/lib/centres";

export type ChronicleEntry = { id: string; date: string; title?: string; body: StoryBlock[] };
export type ChronicleYear = { year: string; entries: ChronicleEntry[] };

export type EventRecord = {
  slug: string;
  /** Date as printed on the card. */
  dateLabel: string;
  /** ISO date used for ordering and structured data. */
  date: string;
  endDate?: string;
  label: string;
  title: string;
  summary: string[];
  /** Chronicle entries that tell the full story on the event page. */
  entries: string[];
  location?: string;
};

export const eventsIntro = {
  eyebrow: "The Living Chronicle",
  title: "Teachings, ceremonies and gatherings.",
  intro: [
    "From teachings and empowerment to retreats, consecrations and gatherings, these events reflect the continuing activities of Ngagdra Dorji Choegar and the wider network of practitioners and centres.",
    "Explore recent activities, public teachings and important milestones across Bhutan and beyond.",
  ],
};

export const featuredEvent: EventRecord = {
  slug: "2026-dharma-activities-hong-kong",
  dateLabel: "14–25 August 2026",
  date: "2026-08-14",
  endDate: "2026-08-25",
  label: "Hong Kong",
  location: "Drukpa Hong Kong Centre, Hong Kong",
  title: "Dharma Activities in Hong Kong",
  summary: [
    "At the invitation of Drukpa Hong Kong, His Eminence Gyeltshen Trulku Rinpoche visited Hong Kong for a series of Dharma activities, including teachings and empowerments on Tsangpa Gyare’s Seven Buddhas (Tendrel Rabdün), Vajrapani and Amitabha Puja dedicated to the deceased.",
    "The programme brought together practitioners and devotees for teachings, practice and spiritual activities at the Drukpa Hong Kong Centre.",
  ],
  entries: ["2026-24-august"],
};

/** Recent events, newest first. */
export const recentEvents: EventRecord[] = [
  {
    slug: "2026-a-new-stage-of-practice",
    dateLabel: "26 March 2026",
    date: "2026-03-26",
    label: "Retreat & Practice · Ngagdra",
    title: "A New Stage of Practice",
    summary: ["Seven monks who completed a three-year retreat on the Six Yogas of Naropa at Larjab, following their initial three-year retreat at Kangpar, gathered at Ngagdra to offer a Ku-Sung-Thukten Mendrel to Rinpoche."],
    entries: ["2026-26-march"],
  },
  {
    slug: "2026-tsholing-gongma-temple-consecration",
    dateLabel: "05 March 2026",
    date: "2026-03-05",
    label: "Consecration · Mongar",
    title: "Tsholing Gongma Drubdey Temple Consecration",
    summary: ["The temple at Tsholing Gongma Drubdey was consecrated, with monks from Ngagdra and local communities gathering for the ceremony."],
    entries: ["2026-05-march"],
  },
  {
    slug: "2026-26-monks-complete-three-year-retreat",
    dateLabel: "23 February 2026",
    date: "2026-02-23",
    label: "Retreat & Practice · Ngagdra",
    title: "26 Monks Complete Three-Year Retreat",
    summary: ["Twenty-six monks from Tagdong, Kangpar and Jayphu gathered at Ngagdra to receive blessings following the completion of their three-year retreat."],
    entries: ["2026-23-february"],
  },
  {
    slug: "2025-drubwang-nyenjued-phowa",
    dateLabel: "20 December 2025",
    date: "2025-12-20",
    label: "Public Teaching · Ngagdra",
    title: "Drubwang Nyenjued Phowa",
    summary: ["His Eminence Gyeltshen Trulku Rinpoche gave teachings on the Drubwang Nyenjued Phowa practice at Ngagdra Dorji Choegar. More than 1,800 people gathered at Kurizampa to receive the teachings."],
    entries: ["2025-20-december"],
  },
  {
    slug: "2025-khandro-nyinjued-yigying-mahakala",
    dateLabel: "08 December 2025",
    date: "2025-12-08",
    label: "Teaching · Ngagdra",
    title: "Khandro Nyinjued Yigying & Mahakala Teachings",
    summary: ["Teachings and oral transmissions on Khandro Nyinjued Yigying, together with Mahakala empowerment and transmission, brought together Trulkus, lamas, monks and nuns from Bhutan, Ladakh and Darjeeling."],
    entries: ["2025-08-december"],
  },
  {
    slug: "2025-medicine-buddha-empowerment",
    dateLabel: "16 February 2025",
    date: "2025-02-16",
    label: "Public Teaching · Mongar",
    title: "Medicine Buddha Empowerment",
    summary: ["At the request of the Mongar Regional Hospital, His Eminence Gyeltshen Trulku Rinpoche bestowed Medicine Buddha empowerment for hospital staff, the local community and the public."],
    entries: ["2025-16-february"],
  },
];

/** Highlights from the archive, newest first. */
export const archiveEvents: EventRecord[] = [
  {
    slug: "2022-tsholing-retreat-centre-takes-shape",
    dateLabel: "2022",
    date: "2022-05-15",
    label: "Tsholing",
    title: "A Retreat Centre Takes Shape",
    summary: ["Tsholing Drubdey was completed and consecrated during the pandemic, with construction carried out by students of Ngagdra Dorji Choegar."],
    entries: ["2022-15-may"],
  },
  {
    slug: "2021-damchoe-pelkhang-chenmo",
    dateLabel: "2021",
    date: "2021-10-28",
    label: "Ngagdra Dorji Choegar",
    title: "Damchoe Pelkhang Chenmo Inaugurated",
    summary: ["The inauguration marked the establishment of a dedicated centre for the propagation and transmission of sutra, tantra, mantra and related teachings within the Ngagdra institute."],
    entries: ["2021-28-october"],
  },
  {
    slug: "2016-mani-kabum-chagchen-jazhung",
    dateLabel: "2016",
    date: "2016-12-28",
    label: "Ngagdra Dorji Choegar",
    title: "Mani Kabum & Chagchen Jazhung Transmissions",
    summary: ["A major gathering for oral transmission and Buddhist teachings, bringing together thousands of devotees and practitioners from Bhutan and beyond."],
    entries: ["2016-30-december", "2016-22-december"],
  },
  {
    slug: "2015-ngagdra-consecration",
    dateLabel: "30 October 2015",
    date: "2015-10-30",
    label: "Consecration · Ngagdra",
    location: "Ngagdra Dorji Choegar, Kurizampa, Mongar, Bhutan",
    title: "Consecration of Ngagdra Dorji Choegar",
    summary: ["On 30 October 2015, His Holiness the 70th Je Khenpo, Trulku Jigme Choedra, formally consecrated the institute together with its newly completed Hey Vajra statue — the largest and tallest of its kind ever built. His Royal Highness Gyaltshab Jigme Dorji Wangchuck and Her Royal Highness Azhi Yeatso Lhamo attended, and the ceremony coincided with the 60th birth anniversary of His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck making it a nationally significant day."],
    entries: ["2015-30-october"],
  },
];

export const pastEventsIntro = {
  title: "Past events.",
  intro: "A growing record of teachings, retreats, ceremonies and gatherings across the Ngagdra network. Explore earlier events and milestones that continue to shape the life of the institute and its centres.",
};

export const chronicle: ChronicleYear[] = [
  {
    year: "2026",
    entries: [
      { id: "2026-24-august", date: "24 August", body: [
        "The Dharma activities of His Eminence Gyeltshen Trulku Rinpoche have concluded in Hong Kong. During Rinpoche’s stay, he gave empowerment and teachings on Tsangpa Gyare’s exclusive Seven Buddhas (Tendrel Rabdün), the empowerment of Vajrapani (Chagdor Tumpo), and Amitabha Puja dedicated to the deceased. We would like to express our heartfelt gratitude to everyone who supported and participated in these precious Dharma activities.",
        "At the invitation of Drukpa Hong Kong, His Eminence Gyeltshen Trulku Rinpoche will visit Hong Kong from 14 to 25 August 2026.",
        "During this period, a series of pujas, Dharma teachings, and other spiritual activities will be conducted at the Drukpa Hong Kong Centre.",
        "All are warmly welcome to attend.",
      ] },
      { id: "2026-05-july", date: "05 July", body: [
        "With deep respect for the noble vision of His Majesty King Jigme Khesar Namgyel Wangchuck and the profound purpose of Project 108, I am pleased to offer this humble contribution on behalf of myself, the Retreat Centres, Monasteries, Nunnery under my care, and our devotees.",
        "Although the amount contributed is modest in comparison to the scale and magnitude of this historic undertaking, it is offered with sincere faith, devotion, and heartfelt prayers for the successful completion of this noble undertaking. The construction of 108 Stupas 108 Jangchub Chortens is far more than a physical project. It stands as a timeless expression of our country's collective aspiration for peace, harmony, and it also embodies the spiritual aspirations of our people and reflects the far-reaching vision of His Majesty the King for the benefit of the nation and all sentient beings.",
        "I wish to respectfully convey that our support for this project is not limited to this financial offering alone. Whatever assistance may be required within our means, I and the drubdey community remain ready to contribute. Whether through prayers, spiritual services, or any other support that may be helpful, we shall be honoured to serve in whatever way we can towards the successful realization of His Majesty's vision and the objectives of Project 108. It is my sincere belief that this project will leave a lasting legacy for future generations and bring immeasurable benefit to the country. I offer my prayers for the continued success of everyone working tirelessly to make this vision a reality.",
        "May the project proceed smoothly and may it become a source of lasting merit, peace, and blessings for all sentient beings.",
        "With prayers and best wishes,",
        "H.E. Gyeltshen Trulku Rinpoche",
      ] },
      { id: "2026-31-may", date: "31 May", body: [
        "On the auspicious occasion of Buddha’s Parinirvana, His Eminence Gyeltshen Trulku Rinpoche consecrated the newly completed stupas at Darchen Mindroel Choeling Goenpa, Minjey, Lhuentse. Five of the eight stupas have been completed to date. The construction of these sacred monuments has been generously sponsored by local communities, families, and individual patrons from Malaysia and Singapore.",
      ] },
      { id: "2026-27-may", date: "27 May", body: [
        "On behalf of Ngagdra Dorji Choegar and Darchen Mindroel Choeling, we would like to express our heartfelt gratitude to the Drukpa Dharmashri Butterworth, Malaysia for offering the sacred Buddha and Bodhisattvas relics. May these sacred relics bring peace and prosperity to Bhutan and spread the Buddha Dharma in all directions.",
      ] },
      { id: "2026-20-april", date: "20 April", body: [
        "Following the invitation from His Holiness Gyalwang Drukpa, Gyeltshen Trulku Rinpoche graciously agreed to give teachings at Drukpa Plouray in France for 10 days. Accompanied by Drubpon Ngawang Tenzin Rinpoche, he is continuing his European tour and is currently in Barcelona where he has just completed a weekend of teachings including a Vajrasattva initiation. The next teachings will be given in Zurich, Geneva, and finally Rennes during the second half of April. Drukpa Barcelona and the retreatants rejoiced in the presence of His Eminence and spent a wonderful time with him by the sea this afternoon.",
      ] },
      { id: "2026-10-april", date: "10 April", body: [
        "For the first time in Europe, His Eminence Gyeltshen Trulku Rinpoche conducted a Soenjang (The Life-Purification Rite) of the Bhagavan Vajra Akshobhya at Drukpa Plouray Center, France, for the benefit of the general public.",
        "Most people are familiar with the Shinjang ceremony — the ritual of purification performed for the deceased, to cleanse their obscurations and guide their consciousness toward a peaceful rebirth. Yet few realize that there exists another, even more profound ritual, one that can be done while we are still alive: the Soenjang, the life-purification rite.",
        "Where Shinjang seeks to benefit those who have already departed, Soenjang is for the living, for those facing illness, heavy obstacles, or critical turns in life, and for anyone who wishes to clear the karmic causes of future suffering before it is too late.",
        "As taught in the ancient Iron Hook of Liberation by Guru Padmasambhava, the Soenjang works with the blessings of Bhagavān Akṣobhya, the Unshakable Buddha. Through sacred mantra, ablution, and offerings, the negative karmic seeds that have followed us from lifetime to lifetime are drawn out, purified, and burned away.",
      ] },
      { id: "2026-26-march", date: "26 March", body: [
        "Today, on this auspicious occasion, seven monks who successfully completed a three-year retreat on the Six Yogas of Naropa at Larjab Retreat Center following their initial three-year retreat at Kangpar Retreat Center offered a Ku-Sung-Thukten Mendrel to His Eminence Gyeltshen Trulku Rinpoche at Ngagdra Dorji Choegar.",
      ] },
      { id: "2026-05-march", date: "05 March", body: [
        "Yesterday, His Eminence Gyeltshen Trulku Rinpoche consecrated the temple at Tsholing Gongma Drubdey in Mongar.",
        "The temple houses an eight-foot-tall main statue of Kalachakra, as well as statues of Amitabha and Avalokiteshvara. The walls are adorned with paintings of Dampa Rigja, the Eight Miraculous Signs of Kunkhyen Pema Karpo, Lhenkey Rignga and Gonpo Chamdrel Sum. Monks from Ngagdra and local people gathered for the ceremony.",
        "The retreat center hosts eight monks who have completed a three-year retreat and will soon embark on another three-year retreat to practice the Six Yogas of Naropa.",
      ] },
      { id: "2026-26-february", date: "26 February", body: [
        "His Eminence Gyeltshen Trulku Rinpoche in Darjeeling to attend the 50th anniversary celebrations of Druk Sang-Ngag Choeling Monastery. Rinpoche studied at the monastery under the First Drukpa Thuksey Rinpoche, Khenpo Noryang, and Khenpo Ngawang Choeda.",
        "Today, Rinpoche had an audience with H.H. Gyalwang Drukpa and also attended the birthday celebrations of H.H. Gyalwang Drukpa and H.E. Drukpa Thuksey Rinpoche",
      ] },
      { id: "2026-23-february", date: "23 February", body: [
        "Today, 26 monks, 9 from Tagdong Drubdey, 9 from Kangpar Drubdey, and 8 from Jayphu Drubdey, gathered at Ngagdra Dorji Choegar, Kurizampa to offer their respects and receive blessings from His Eminence Drub-La Gyeltshen Trulku Rinpoche upon the successful completion of their three-year retreat.",
        "Following this sacred milestone, they will soon embark on another three-year retreat dedicated to the profound practice of the Six Yogas of Naropa.",
        "May their continued dedication bring immense benefit to the teachings and to all sentient beings",
      ] },
    ],
  },
  {
    year: "2025",
    entries: [
      { id: "2025-20-december", date: "20 December", body: [
        "His Eminence Gyeltshen Trulku Rinpoche gave teachings to the general public on the Drubwang Nyenjued Phowa practice at Ngagdra Dorji Choegar, Kurizampa, Mongar.",
        "The sacred Drubwang Nyenjued Phowa practice, or Transference of Consciousness at the Time of Death, is a profound and powerful method for guiding the consciousness through the crown aperture into Dewachen, the pure land of Amitabha Buddha. More than 1,800 people gathered at Kurizampa Wangthang from across the country to receive the teachings. The Phowa practice will conclude on 25th December with the Amitabha Empowerment.",
      ] },
      { id: "2025-08-december", date: "08 December", body: [
        "His Eminence Gyeltshen Trulku Rinpoche is currently giving teachings and oral transmissions on the most profound and sacred Khandro Nyinjued Yigying, as well as empowerment and oral transmission of the Mahakala text.",
        "Around 135 Trulkus, lamas, monks, and nuns from Ladakh, Darjeeling, and various parts of the country have gathered to receive these teachings at Ngagdra Dorji Choegar, Kurizampa, Mongar",
      ] },
      { id: "2025-28-november", date: "28 November", body: [
        "From 21st to 23rd November 2025, His Eminence Gyeltshen Trulku Rinpoche with 108 Rethreps, Retreatants, Lamas and Ngagdraps conducted the volunteer kurims at GMC. This is the first of its kind volunteerism in GMC to spiritually support the successful attainment of the great noble vision of His Majesty the King.",
      ] },
      { id: "2025-24-november", date: "24 November", body: [
        "His Eminence Gyeltshen Trulku Rinpoche offered Thugmoen for the foundation laying of Gelephu International Airport bridge; and paid a visit to Druk Jarung Chorten site for the prayers.",
      ] },
      { id: "2025-16-february", date: "16 February", body: [
        "On request from lam and hospital management of Mongar regional hospital, HE Gyeltshen Trulku Rinpoche bestowed Medicine Buddha (Sangay Menlha) empowerment to the hospital staff, community and public around today.",
      ] },
      { id: "2025-02-february", date: "02 February", body: [
        "Over thousands of devotees gathered at Ngagdra Dorji Choegar, Kurizampa for a weeklong Phowa transmission and practice. It is presided over by His Eminence Gyeltshen Trulku Rinpoche, and the Phowa tradition is Nyenju Phowa, the closest oral transmission Phowa. It is orally transmitted from Mila Repa to Maha Togdhen Shakya Shri, then to Lama Sonam Zangpo and to His Eminence Gyeltshen Trulku Rinpoche. It has been 40th year now that Rinpoche has been compassionately conferring this Phowa tradition to countless devotees so far",
      ] },
      { id: "2025-12-january", date: "12 January", title: "Naga Puja and Offering", body: [
        "At the request of the Vietnamese community in Perth, Western Australia, His Eminence Gyeltshen Trulku Rinpoche, accompanied by resident Lama Nawang and the Drubpon, conducted a Naga Puja and offerings today. The puja was performed for healing the injuries inflicted on Nagas by human activities, fostering peace and harmony for marine life, and ultimately benefiting all sentient beings.",
        "In recent years, devastating typhoons and floods have caused significant loss of life and property worldwide. The Naga Puja emphasizes harmonizing with nature and protecting the environment, as Nagas are regarded as guardians of the natural world, particularly water bodies such as rivers, lakes, and oceans. By performing this puja, practitioners honor these beings, contributing to ecological balance and environmental preservation.",
        "Additionally, the ritual is believed to remove obstacles, reduce misfortunes, and cleanse negative karma, paving the way for smoother life experiences. As Perth is a city rich with oceans, rivers, and lakes, it is considered a dwelling place for Nagas.",
        "Drukpa Australia expresses its profound gratitude to Rinpoche, the monks, sponsors, and volunteers who made this meaningful event possible. Special thanks go to Mr. Sony and his wife for generously providing their boat and services. We dedicate merits to the happiness and enlightenment of all sentient beings.",
      ] },
    ],
  },
  {
    year: "2024",
    entries: [
      { id: "2024-18-september", date: "18 September", body: [
        "Tashi Rabbey (consecration) of trinity chortens at Minjey Tadong Drubdey (retreat centers). The choten installation is dedicated for the wellbeing of the TsaWaSum and sentient beings across.",
      ] },
      { id: "2024-13-september", date: "13 September", body: [
        "HE Rinpoche presided over a three-day Tshogbum (hundred thousand ganachakra) offering at Khabti, Trashigang for the wellbeing of our country and long life of His Majesty The King and Kukhor.",
      ] },
      { id: "2024-24-february", date: "24 February", body: [
        "A ten-day long Vajra Kilaya Sadhana co-presided by HH Drukpa Choegon Rinpoche Jetsun Choekyi Gonpo and HE Gyeltshen Trulku Rinpoche at Ngagdra Dorji Choegar concluded today with Nyana Sidhi (Nyoedrup) attainment blessings.",
        "The Sadhana was performed by highly revered and realized retreat masters, yogis, practitioners, devotees and patrons from Bhutan, Ladakh and across.",
        "In these difficult times, this Sadhana is dedicated for the wellbeing of our nation and global community at large.",
      ] },
      { id: "2024-17-february", date: "17 February", body: [
        "His Eminence Gyeltshen Trulku Rinpoche presided over a ten days Vajra Kilaya Drubchen at Ngagdra Dorji Choegar, Kurizampa Mongar. The Drubchen is organised to celebrate the birth anniversary of His Majesty the King and for the well-being of the nation.",
      ] },
      { id: "2024-03-february", date: "03 February", body: [
        "His Eminence Gyeltshen Trulku Rinpoche presided over the consecration ceremony of Vajra Kilaya Mandala at Ngagdra Dorji Choegar, Kurizampa, today.",
      ] },
      { id: "2024-21-january", date: "21 January", body: [
        "A week-long annual Drubwang Nyenjued Phowa (transference of consciousness) practice at Ngagdra Dorji Choegar, Kurizampa, concluded today with Tshogkhor and displayed Yoepamey Thongdrel.",
      ] },
    ],
  },
  {
    year: "2023",
    entries: [
      { id: "2023-03-july", date: "03 July", body: [
        "HE Rinpoche conferred Mithrukpai Sonjang (Akshobya Living Purification Ritual and Empowerment) for the first time in Malaysia.",
        "In fact, the living purification ritual associated with Buddha Akshobya was commenced in Bhutan by Rinpoche a few years back and now it is five times preceded in Bhutan before it is conducted in Malaysia. Many sentients and devotees attain Buddha Akshobya's ultimate joyous paradise.",
      ] },
      { id: "2023-12-march", date: "12 March", body: [
        "A month-long initiation (Thri) on HeyVajra Tantra (Gyue TaagNyi) from HE Gyeltshen Trulku Rinpoche ended today with GanaChakra (Tshokhor) and Mandala offering.",
      ] },
    ],
  },
  {
    year: "2022",
    entries: [
      { id: "2022-10-july", date: "10 July", body: [
        "Upon repeated submissions from the devotees residing in Thimphu, His Eminence Gyeltshen Trulku Rinpoche consented to confer Zambhala RigNga Wang (Panca Kubera Abhiseka) on 9th July 2022 coinciding the birth anniversary of Guru Rinpoche.",
      ] },
      { id: "2022-15-may", date: "15 May", body: [
        "Amidst pandemic, within a 40-days, Tsholing Drubdey, one of the retreat centers that shall cater to the overwhelming numbers of retreat enthusiasts under HE Gyeltshen Trulku Rinpoche has been completed and consecrated today.",
        "This is the first of its kind completing retreat center construction within a shortest span of time ever (40 working days).",
        "Construction has been carried out by the students of Ngagdra Dorji Choegar led by Ngagdra Khenpo under the supervision of His Eminence Rinpoche.",
        "Ngagdra extends deepest gratitude to all the devotees and Jindhas (benefactors) for both cash and kind support.",
      ] },
    ],
  },
  {
    year: "2021",
    entries: [
      { id: "2021-31-october", date: "31 October", body: [
        "Coinciding with the commemoration of Paranirvana of Drogoen Tshangpa Gyarey today, His Eminence consecrated Nyung-ney Lhakhang (shrine for the rites of fasting and silence) at the seat of Lam Moenlam Rabzang, Lamai Gonpa, Kangpara",
      ] },
      { id: "2021-28-october", date: "28 October", body: [
        "Coinciding with the descending day of Buddha Shakyamuni on 27th October 2021, inaugurated the Damchoe Pelkhang Chenmo (Tantra Na Vajra Dharma Sudharma Maha Prathi Talaya) of Ngagdra Dorji Choegar, Kurizampa, Mongar.",
        "The infrastructure shall be the center of excellence in the propagation of sutra, tantra, mantra along with abhisheka (Wang), agama (Lung), Nita (Thri) for Ngagdra Dorji Choegar institute",
      ] },
      { id: "2021-16-september", date: "16 September", body: [
        "Bikhar Ugyen Choling Lhakhang, under Samkhar Gewog, Trashigang has been consecrated today. The Lhakhang with mural paintings of 25 manifestations of Avaloketeshvara is the first installed. The Lhakhang also has lineage paintings and storey hight Rigsum Gonpo (Lord of the three families) statues. The installation has been carried out under the supervision and spiritual guidance of His Eminence Gyeltshen Trulku Rinpoche.",
      ] },
    ],
  },
  {
    year: "2019-2020",
    entries: [
      { id: "2020-27-december", date: "27 December", body: [
        "His Eminence Gyeltshen Trulku Rinpoche presided over a week-long Phowa (consciousness transference) program in Thangrong communities.",
        "The program ended today with the inferential sign of practice by rupturing the crown with Kusha grass.",
      ] },
    ],
  },
  {
    year: "2016",
    entries: [
      { id: "2016-30-december", date: "30 December", body: [
        "Oral transmission of Mani Kabum (teaching of Avaloketeshvara) and Chagchen Jazhung (root Sutra of Mahamudra) conferred by His Holiness the Je Khenpo upon supplication by HE Drubwang Gyeltshen Trulku Rinpoche at Ngagdra Dorji Choegar, Kurizampa Mongar was ended successfully on 28th dec 2016. Over 3000 devotees including revered Trulkus, Dratshang Lopens, retreat masters, lams, Khenpos and a lot of genuine practitioners received profound levels of transmissions. Out of many attendees and Trulkus following were the most distinguished ones:",
        {"list": ["HE Drubwang Kyabjey Gyeltshen Trulku Rinpoche", "Ven Dorji Lopen", "Ven Letshog Lopen", "HE Trulku Rigzin Chenpo Tshewang Norbu Rinpoche", "Kuenga Trulku Rinpoche", "Drigung Trulku", "Sakteng Trulku Rinpoche", "Ani Trulku Rinpoche", "Repas and Netens", "Je Zimpon and Drungchen"]},
        "A week-long precious transmission has ended with a lot of fulfillment to all attendees, from the lowest to highest levels of practitioners and devotees across the country, Nepal, India and overseas.",
        "As a part of humble attendees, we deeply remain indebted to His Holiness the Kyabjey Yezhin Norbu Rinpoche and HE Drubwang Gyeltshen Trulku Rinpoche for such profound oral transmissions and hosting this at the first ever established Tantrism Institute (Ngagdra), at the bank sacred Kuri-chu, the river that originates from the seat of maha yogic master Pha Marpa and Melarepa's holy retreat places, especially Kula-Gangri) indicating ever flourishing the propagation of quality tantrism tradition and retreat practices.",
        "We join in prayers and pay tribute to all past, present and future Buddhisattavas who truly benefit and turn the three wheels of propagations and authentic practices.",
      ] },
      { id: "2016-22-december", date: "22 December", body: [
        "Oral transmission of Chagchen Jazhung (root Shastras of Mahamudra) and Mani Kabum (teachings of avaloketeshvara by Tibetan king songtsen Gampo) by His Holiness the 70th Je Khenpo Trulku Jigme Choedra at Ngagdra Dorji Choegar, Kurizampa, Mongar, Eastern Bhutan. (21-12-2016)",
      ] },
    ],
  },
  {
    year: "2015",
    entries: [
      { id: "2015-30-october", date: "30 October", body: [
        "Ngagdra Dorji Choegar consecration ceremony is scheduled on 30th Oct 2015. The event marks as an important for the nation as this is the first Ngagdra (Institute for Vajrayana studies) in the country and that will be formally consecrated as a Kurim for His Majesty 4th Druk Gyalpo Jigme Singay Wangchuk, His Holiness The 70th Je Khenpo Trulku Jigme Choedra and Her Majesty Queen Mother Ashi Dorji Wangmo Wangchuk.",
        {"pairs": [["Place", "Ngagdra Dorji Choegar, Kurizampa, Mongar, Bhutan"], ["Date", "30th Oct 2015"]]},
      ] },
    ],
  },
  {
    year: "2010",
    entries: [
      { id: "2010-11-january", date: "11 January", body: [
        "H.E. Gyeltshen Trulku Rinpoche received Khadar from Punakha \"Machen\" — the 3rd person after His Majesty and Je Khenpo who received 'Khadar' for the 1st time in the history of our country.",
      ] },
    ],
  },
];

export const allEvents: EventRecord[] = [featuredEvent, ...recentEvents, ...archiveEvents];

export function getEvent(slug: string) {
  return allEvents.find((event) => event.slug === slug);
}

const entryIndex = new Map(chronicle.flatMap((year) => year.entries.map((entry) => [entry.id, { ...entry, year: year.year }] as const)));

export function getChronicleEntry(id: string) {
  return entryIndex.get(id);
}

/**
 * Whether an event has passed, relative to when the page was last rendered.
 * Event pages revalidate daily so the label stays current.
 */
export function eventStatus(event: Pick<EventRecord, "date" | "endDate">, today = new Date().toISOString().slice(0, 10)) {
  const end = event.endDate ?? event.date;
  if (end < today) return "Past event";
  if (event.date <= today) return "Taking place now";
  return "Upcoming";
}

/** The event page, if any, that tells the full story of a chronicle entry. */
export function eventForEntry(id: string) {
  return allEvents.find((event) => event.entries.includes(id));
}
