// Source of truth: "CENTRES_BRIEF SHORT" and "CENTRES_FULL STORIES" (Website Content, September 2026).
// Copy is reproduced as supplied; only typographic spacing and dash punctuation were normalised.

export type StoryBlock = string | { list: string[] } | { pairs: [string, string][] };
export type StorySection = { heading?: string; body: StoryBlock[] };

export type Centre = {
  slug: string;
  /** Name as listed in the centres brief. */
  name: string;
  /** Location as written in the brief. */
  place: string;
  /** Dzongkhag used to group the directory. */
  district: string;
  type: string;
  /** Short introduction from the centres brief. */
  summary: string[];
  /** Full centre story. */
  story: { title: string; dek: string; sections: StorySection[] };
  hub?: boolean;
  image?: { src: string; alt: string; caption?: string; objectPosition?: string; aspect?: string; objectFit?: "cover" | "contain" };
};

export const centres: Centre[] = [
  {
    slug: "lamai-goenpa-zungju-yoesel-ling-drubdey",
    name: "Lamai Goenpa & Zungju Yoesel Ling Drubdey",
    place: "Kangpar, Trashigang",
    district: "Trashigang",
    type: "Monastery & Retreat Centre",
    summary: ["Established at a site regarded as auspicious by Lopen Moenlam Rabzang, a close disciple of Togden Shakya Shri, Lamai Goenpa carries a history of lineage, devotion and retreat practice.", "The monastery was established in 1928 and later revived and developed under the guidance of H.E. Gyeltshen Trulku Rinpoche. In 1986, Rinpoche established his first retreat centre here, fulfilling the aspirations of his root guru, Drubwang Lama Sonam Zangpo, and Lopen Moenlam Rabzang.", "Today, the centre continues as a place of long-term meditation, with monks undertaking six-year retreat."],
    story: {
      title: "Lamai Goenpa",
      dek: "A place foretold by a master",
      sections: [
        { body: [
          "The story of Lamai Goenpa begins with Lopen Moenlam Rabzang, originally from Trongsa, Bhutan, and one of the close and accomplished disciples of Togden Shakya Shri. Lopen Moenlam Rabzang spent many years studying and practicing with his guru in Kham, Tibet. Before he returned to Bhutan, Togden Shakya Shri gave him a prophecy and instructed him to build a temple at a particular place in the East.",
          "Following his guru's instructions, Lopen Moenlam Rabzang began his search.",
          "His journey took him first to Sigar Monastery and eventually to Judan Monastery at the Chenla mountain pass. There, he encountered an old man wearing a yellow robe. When asked the name of the ridge opposite, the man replied, “Tshephu.” When asked his own name, he replied, “Tshetu.”",
          "Before leaving Tibet, Lopen Moenlam Rabzang had received several precious statues from Togden Shakya Shri, including a statue of Tshepagme, the Buddha of Longevity.",
          "The three names — Tshephu, Tshetu and Tshepagme — were understood by Lopen Moenlam Rabzang as an auspicious connection and a possible indication that he had found the place foretold by his guru.",
        ] },
        { heading: "Following the sign", body: [
          "Lopen Moenlam Rabzang initially stayed at the foot of the ridge and sent disciples to explore the area. Eventually, he went there himself.",
          "According to the traditional account, he often rested beneath a tree. One day, a cat came down from the tree and settled comfortably on his lap. Lopen Moenlam Rabzang regarded the cat as a manifestation of the local deity's jewel. When the cat eventually walked away, he followed it. It stopped near two large rocks, where it played and rested. He regarded the place as an auspicious location for establishing a temple and monastery.",
          "Construction began in 1928. The Goenpa was named Lhuendrup Samten Choeling by Thuthob Choeki Jamtsho.",
          "The surrounding Tshephu ridge was considered sacred. It was believed to form the final mountain in a chain extending towards Tibet and eventually to Tsari. Because of the sacred character of the site, Lopen Moenlam Rabzang requested that no residences or other buildings be constructed there.",
        ] },
        { heading: "A community of practitioners", body: [
          "During Lopen Moenlam Rabzang's time, approximately thirty disciples gathered at the Goenpa, including monks and nuns.",
          "Among them was Abi Pangki, whose guru instructed her to devote herself simply to prostrations. She is said to have spent her entire life in this practice, and her footprints are traditionally said to remain visible on the temple floor.",
        ] },
        { heading: "From neglect to revival", body: [
          "Lopen Moenlam Rabzang passed away in 1945. Following his death, the Goenpa became neglected, although lamas continued to be appointed to oversee the monastery.",
          "H.E. Gyeltshen Trulku Rinpoche later became the third successive lama of the monastery. At the instruction of his root guru, Drubwang Lama Sonam Zangpo, Rinpoche took personal initiative to restore and further develop the monastery.",
          "In 1986, responding to the request of local communities, Rinpoche established his first retreat centre at Lamai Goenpa. This fulfilled an aspiration held by both Lopen Moenlam Rabzang and Drubwang Lama Sonam Zangpo, who had regarded the location as particularly auspicious for a retreat centre.",
        ] },
        { heading: "A place of retreat", body: [
          "Since then, Lamai Goenpa has become a place where lamas and accomplished meditators have continued to reside and practice.",
          "The retreat tradition that had long been envisioned for the site is now part of its living present.",
          "Today, eight monks are undertaking a six-year retreat at the centre.",
          "The monastery is accessible by road and has access to modern facilities, providing the practical conditions necessary for long-term retreat and practice.",
        ] },
      ],
    },
  },
  {
    slug: "chi-phu-goenpa-tashi-yoesel-phu-drubdey",
    name: "Chi-Phu Goenpa & Tashi Yoesel Phu Drubdey",
    place: "Khabti, Trashigang",
    district: "Trashigang",
    type: "Monastery & Retreat Centre",
    summary: ["Established as a seat of practice by Drubthob Thogmay Dorji in the nineteenth century, Chi-Phu Goenpa flourished as a centre of meditation before gradually declining.", "In 1987, H.E. Gyeltshen Trulku Rinpoche revived the retreat centre at the request of the local community and renamed it Tashi Yoesel Phu. Originally intended for lay practitioners, the centre was later dedicated to nuns undertaking long-term meditation retreats.", "Today, the centre continues as a place of intensive practice and Buddhist education, with nuns undertaking retreat and young monks studying before continuing their higher studies at Ngagdra Dorji Choegar."],
    story: {
      title: "Chi-Phu Goenpa",
      dek: "From a historic seat of meditation to a living retreat centre",
      sections: [
        { body: [
          "Located in Khabti village in Tashigang, Chi-Phu Goenpa formerly known as Khabti Goenpa has a history stretching back to the nineteenth century.",
          "Around 1837, Drubthob Thogmay Dorji, a descendant of Drubchen Kuenzang Choephel, travelled from Mongar to Khabti Hill and established his seat there. He built a temple and established a retreat programme, and the place flourished as a centre of meditation.",
          "Over time, however, the centre gradually declined, particularly after the passing of three generations of descendants of Drubthob Thogmay Dorji.",
        ] },
        { heading: "Reviving a place of practice", body: [
          "In 1987, responding to an appeal from the local community of Khabti, H.E. Gyeltshen Trulku Rinpoche revived the retreat centre and renamed it Tashi Yoesel Phu. The centre continued to develop. In 1998, accommodation for approximately thirteen disciples was constructed with the support of devoted patrons. The retreat centre was initially intended to provide a place of practice for lay practitioners. Its purpose later evolved.",
        ] },
        { heading: "A place for long-term retreat", body: [
          "In 2004, Rinpoche decided to dedicate the retreat centre to nuns undertaking a nine-year meditation programme.",
          "The programme was designed for nuns who had completed their initial three- to six-year retreat at Jashar Woong Drubdey in Pemagatshel, allowing them to continue into a deeper stage of long-term practice. According to the source account, the centre currently has eight nuns undertaking a three-year retreat on the Six Yogas of Naropa, following completion of their nine-year retreat programme. The centre therefore forms part of a wider pathway of sustained practice, connecting retreat centres and allowing practitioners to progress through successive stages of meditation.",
        ] },
        { heading: "A unique visual expression of practice", body: [
          "The centre's development also includes an unusual connection between the practices undertaken in retreat and the artistic programme within the temple. In 2014, at the request of devoted private sponsor Dasho Goop Sonam Drukpa, Rinpoche redesigned the temple structure.",
          "Among its distinctive features is a wall painting known as Dampa Rigja, depicting the deities visualised by retreat practitioners during a particular five-month intensive meditation period within their three-year retreat programme. Rather than functioning simply as decoration, the painting reflects the visual practices undertaken by practitioners within the retreat tradition.",
        ] },
        { heading: "A three-dimensional mandala", body: [
          "The Khesar Namgyel Choeling Temple also houses a three-dimensional mandala of Tshepagme, the Buddha of Longevity. The mandala is described as unique within Bhutan and rare in the world. The temple was dedicated to His Majesty The Druk Gyalpo, Jigme Khesar Namgyel Wangchuck, with prayers for his longevity and good health and for peace and prosperity in Bhutan. The temple was consecrated in 2013 by His Holiness the 70th Je Khenpo, Trulku Jigme Choeda.",
        ] },
        { heading: "From retreat to education", body: [
          "The centre's role extends beyond retreat.",
          "In 2014, during the annual Haa Moenlam Chenmo, His Holiness the Je Khenpo officially conferred the Tashi Khadar upon Sey Tenzin Rabgay and appointed him as the first Khenpo of Khabti Shedra.",
          "Today, more than twenty young monks receive basic Buddhist education at the shedra before progressing to higher studies at Ngagdra Dorji Choegar in Kurizampa, Mongar. The centre therefore brings together several stages of Buddhist life from foundational study to intensive meditation and long-term retreat.",
        ] },
        { heading: "A continuing place of practice", body: [
          "From its origins as a nineteenth-century meditation seat to its revival and development in the modern era, Chi-Phu Goenpa and Tashi Yoesel Phu Drubdey continue to serve as places of learning, retreat and practice. Its story is one of revival and continuity: an old place of meditation given renewed purpose, while creating conditions for both dedicated retreat practitioners and the next generation of Buddhist students.",
        ] },
      ],
    },
  },
  {
    slug: "morphu-drubdey",
    name: "Morphu Drubdey",
    place: "Bikhar, Tashigang",
    district: "Trashigang",
    type: "Retreat Centre",
    summary: ["Morphu Drubdey grew from the individual retreat houses established by disciples of Drubthob Thogmay Dorji in Bikhar, who came to the area to practise and meditate on their guru's teachings. After years of decline, the retreat centre was revived in 1990 at the request of the Bikhar community and lay monks. Named after the surrounding mountains and local protector deity, Morphu Drubdey continues to host monks undertaking three- to six-year meditation retreats."],
    story: {
      title: "Morphu Drubdey",
      dek: "A retreat tradition carried forward",
      sections: [
        { body: [
          "The story of Morphu Drubdey is closely connected to the disciples of Drubthob Thogmay Dorji, whose temple and retreat centre at Khabti became an important place of practice.",
          "Following the establishment of his temple at Khabti, a number of his disciples travelled to Bikhar and established individual retreat houses around 1953. These practitioners came to put their guru's teachings into practice and dedicate themselves to meditation.",
          "Over time, the retreat centre declined and its practice tradition became dormant.",
        ] },
        { heading: "Reviving the Drubdey", body: [
          "Around the time that Tashi Yoesel Phu Drubdey in Khabti was being revived, the community and lay monks of Bikhar appealed to H.E. Gyeltshen Trulku Rinpoche to restore their retreat centre. In 1990, the doors of the Drubdey reopened, with eight monks taking up residence. The centre was given the name Morphu Drubdey, after the surrounding mountains and the local protector deity known as Morphu.",
        ] },
        { heading: "A place for long-term retreat", body: [
          "Since its revival, Morphu Drubdey has continued to provide a place for monks undertaking extended periods of meditation. Monks regularly come here for three- to six-year meditation retreats, allowing the retreat tradition established by earlier practitioners to continue into the present.",
          "The centre's continuation has been supported by Rinpoche, the local Bikhar community and, more recently, the Royal Government. Additional retreat houses were constructed with government support and inaugurated in 2018, further strengthening the physical conditions for retreat practice.",
        ] },
        { heading: "Continuing the work", body: [
          "The retreat centre continues to require further development to support long-term practice. Among the needs identified in the source account are additional retreat houses, accommodation for the Drubpoen and improved road access.",
        ] },
        { heading: "A simple legacy", body: [
          "Morphu Drubdey's story is one of continuity through practice. What began as individual retreat houses established by disciples seeking to follow their guru's teachings eventually became a recognised retreat centre — revived through the efforts of the local community and Rinpoche, and continuing today as a place of sustained meditation.",
        ] },
      ],
    },
  },
  {
    slug: "dhendup-choeding-drubdey",
    name: "Dhendup Choeding Drubdey",
    place: "Tsanphu, Mongar",
    district: "Mongar",
    type: "Retreat Centre",
    summary: ["Dhendup Choeding Drubdey traces its origins to Lama Sangay Zangpo, who established a monastery at Kuenzang Nagthroe, present-day Tsanphu, in 1790. Although the monastery eventually fell into ruin, its sacred texts, important religious artefacts and the lama's bedroom were said to have remained intact. Centuries later, H.E. Gyeltshen Trulku Rinpoche found the site covered in vegetation and undertook its restoration.", "Renovated in 1992 and formally opened as a retreat centre in 1993, Dhendup Choeding Drubdey now provides a place for practitioners undertaking long-term meditation, with many spending six years or more in retreat."],
    story: {
      title: "Dhendup Choeding Drubdey",
      dek: "A monastery remembered through its ruins",
      sections: [
        { body: [
          "The history of Dhendup Choeding Drubdey reaches back to Lama Sangay Zangpo (1727–1786), a son of Drubchen Kuenzang Chophel and a descendant of a lineage connected with the Buddhist masters of Bhutan.",
          "At the age of eighteen, Lama Sangay Zangpo was ordained as a monk at Punakha Dzong. After completing twelve years of monastic studies, he went to Goen Nangsey Goenpa in Punakha, where he entered a three-year retreat at Zhobukha Ridge under the guidance of Lama Sangay Rinchen, a disciple of Gyalwa Shakya Rinchen. Following his retreat, his teacher is said to have sent him back to his village, believing that his future work would benefit the people of eastern Bhutan.",
        ] },
        { heading: "Establishing a monastery in Tsanphu", body: [
          "Returning to his village, Lama Sangay Zangpo established a monastery at Kuenzang Nagthroe, in what is now Tsanphu, in 1790.",
          "The monastery became well known as a place of Buddhist practice. After Lama Sangay Zangpo's death, however, there was no one to maintain the monastery and it gradually fell into ruin. Yet the site retained remarkable traces of its past. Although the surrounding structures eventually collapsed, the source accounts that Lama Sangay Zangpo's bedroom, religious texts and important sacred artefacts remained intact.",
        ] },
        { heading: "A brief revival", body: [
          "Many years later, Lama Nidup Gyelpo, a disciple of Togden Shakya Shri, was appointed as the lama of the monastery. Little is recorded about this period, but his presence briefly revived Buddhist activity and faith at the site. The revival did not last, however, and the monastery was once again neglected for many years.",
        ] },
        { heading: "Rediscovering the site", body: [
          "When H.E. Gyeltshen Trulku Rinpoche later came upon the site, little remained of the former monastery. The ruins were covered by tall vegetation, and the place had largely disappeared from active use.",
          "In 1992, Rinpoche, together with Lam Neten Namgay of Mongar Rabdey, undertook the renovation of the retreat centre. Additional retreat houses were constructed to accommodate eighteen monks undertaking meditation. A kitchen, guesthouse and store were also added. The narrow footpath leading to the site was widened so that mules could transport food and other supplies. The retreat centre was formally opened in 1993.",
        ] },
        { heading: "A place for long-term meditation", body: [
          "The restored centre once again became a place of dedicated practice. Practitioners continue to undertake long-term meditation retreats here, with each retreat lasting at least six years according to the source account. The centre receives government support for food and other necessities for the monks. Electricity and road access have also been established through contributions from the wider public.",
        ] },
        { heading: "Continuing the restoration", body: [
          "The revival of Dhendup Choeding Drubdey continues beyond the initial restoration. Renovation of the retreat houses and improvement of the access road remain identified priorities for the centre. From the remains of an abandoned monastery to a functioning retreat centre, Dhendup Choeding Drubdey represents the revival of a place whose history stretches back more than two centuries.",
          "Its story is one of loss, preservation and renewal — where the physical monastery disappeared, but traces of its sacred life endured and eventually gave rise to a renewed place of practice.",
        ] },
      ],
    },
  },
  {
    slug: "larjab-drakar-choeling-drubdey",
    name: "Larjab Drakar Choeling & Drubdey",
    place: "Mongar",
    district: "Mongar",
    type: "Monastery & Retreat Centre",
    summary: ["Perched behind Yakpogang Ridge, Larjab Drakar Choeling is one of eastern Bhutan’s important sacred sites, closely associated with the lineage of Drubchen Kuenzang Chophel. According to traditional accounts, the site was established in the early 18th century after Drubchen fulfilled the vision of his root guru. Renovated in 1995 and later developed as a retreat centre by H.E. Gyeltshen Trulku Rinpoche, it continues the region’s long tradition of yogic practice. Today, practitioners undertake three- to six-year meditation retreats in this remote mountain setting."],
    story: {
      title: "Larjab Drakar Choeling",
      dek: "A sacred place in the lineage of eastern Bhutan",
      sections: [
        { body: [
          "Set behind Yakpogang Ridge and facing south, Larjab Drakar Choeling looks across the landscapes of Wamrong, Pemagatshel and Thangrong. Bamboo forests and rocky mountains surround the monastery, giving the place the secluded character associated with retreat and contemplative practice.",
          "The site is closely connected with Drubchen Kuenzang Chophel, one of the important early masters in the lineage from which many retreat and monastic centres in eastern Bhutan trace their roots.",
        ] },
        { heading: "A temple born from a guru’s vision", body: [
          "Sometime between 1701 and 1707, Drubchen Kuenzang Chophel, a disciple of the 9th Je Khenpo of Bhutan, Gyalwa Shakya Rinchen, established Larjab Drakar Choeling in fulfilment of the vision of his root guru.",
          "According to traditional accounts, the Drubchen came to this place as prophesied by his guru and subdued a local spirit known as Sonam Gyamtsho, transforming the being into a protector deity of the sacred site. The temple itself is surrounded by stories of extraordinary construction. It is traditionally said that dakinis laid the foundation using small stones on the steep cliff, while human beings and Dharma protectors continued the work by day and night. The site is particularly associated with the sacred deities of Kalachakra, Vajravarahi and Avalokiteshvara.",
          "The sacred significance attributed to Larjab Drakar Choeling has led to a longstanding belief that the site is comparable to Taktshang in Paro in its historical and religious importance. For devotees in eastern Bhutan who are unable to undertake a pilgrimage to Taktshang, visiting this sacred place is traditionally regarded as an opportunity to accumulate comparable merit.",
        ] },
        { heading: "The 108 yogic disciples", body: [
          "Drubchen Kuenzang Chophel is said to have had 108 yogic disciples. Among them was Drukdra Choephel, one of his principal disciples, who later meditated in a cave where his students eventually established Drubkhang Goenpa in Wamrong, Pemagatshel.",
          "The disciples lived secluded lives dedicated to practice. They built their own simple huts and chortens for prayer and meditation and sustained themselves through their own labour. Grinding stones and grain crushers associated with this way of life are said to remain at the site.",
          "The influence of these practitioners extended far beyond Larjab Drakar Choeling. Their disciples and descendants spread throughout eastern Bhutan, contributing to the establishment and continuation of numerous monasteries, retreat centres and sacred places in Tashigang, Tashi Yangtse, Mongar and Pemagatshel.",
          "In this way, the story of Larjab Drakar Choeling is also part of a much wider story: the transmission of a living practice tradition across eastern Bhutan.",
        ] },
        { heading: "The story of Drubthob Zampa", body: [
          "Another traditional account connects Drubchen Kuenzang Chophel’s disciples with Drubthob Zampa, a bridge said to have been built somewhere between Lingmethang and the ruins of Zhongar Dzong.",
          "According to the legend, one hundred of Drubchen's disciples constructed the bridge in a single day. Its completion was regarded as an auspicious sign for the flourishing of the Buddha Dharma in Bhutan. The story has since become associated with the spread of Dharma throughout eastern Bhutan, a tradition that can still be seen in the many monasteries, retreat centres and sacred sites found across the region today.",
        ] },
        { heading: "From restoration to retreat", body: [
          "By the 1990s, Larjab Drakar Choeling required substantial restoration. In 1995, Mongar Lam Neten Namgay and Tsanphu Drubdey Lopen Norbu Gyeltshen initiated renovation work with the support of communities from Chaskhar and Thangrong Gewogs.",
          "A new three-storey temple was also constructed near the original temple, giving the sacred site renewed life while retaining its historical foundation.",
          "Following the renovation, the local communities appealed to H.E. Gyeltshen Trulku Rinpoche to establish a retreat centre at the site. Rinpoche responded by establishing the retreat centre with ten lay practitioners.",
        ] },
        { heading: "A living retreat tradition", body: [
          "The retreat centre continues the long association of the place with secluded practice. Practitioners from across Bhutan undertake three- to six-year meditation retreats here, carrying forward a tradition that reaches back to the yogic practitioners associated with Drubchen Kuenzang Chophel.",
          "Rinpoche initially supported the retreat centre through his private resources. Today, the centre receives government support.",
          "The remote setting remains an important part of its character. From the nearest road point at Chompa, Korila, it takes approximately one and a half hours to reach the monastery. The surrounding area also contains numerous pilgrimage sites, adding to the spiritual landscape of the place.",
        ] },
        { heading: "Continuing the work", body: [
          "The retreat centre has developed, but its remote location means that infrastructure remains an ongoing concern. Further renovation of the retreat houses, construction of additional retreat accommodation and a proper mule track to the centre have been identified as important needs.",
          "Larjab Drakar Choeling therefore represents more than a historic monastery. It is a place where an old lineage, a landscape of pilgrimage and a continuing tradition of retreat meet, linking the practice of past yogic masters with practitioners undertaking meditation today.",
        ] },
      ],
    },
  },
  {
    slug: "ba-ney-tshering-jong-drubdey",
    name: "Ba-Ney Tshering Jong Drubdey",
    place: "Trashiyangtse",
    district: "Trashiyangtse",
    type: "Retreat Centre",
    summary: ["Known locally as Baney, this sacred site is traditionally believed to have been blessed by Guru Rinpoche and Tshepamey. Its story begins with Lopen Damchen Rinchen, a practitioner from Kheng who settled here after discovering the peaceful ruins of an old house and established a small community of practitioners.", "The site was later revived by H.E. Gyeltshen Trulku Rinpoche, who renamed it Tshering Jong and established a community of twelve monks and one teacher in 1999. Today, the Goenpa is maintained by the local village community."],
    story: {
      title: "Ba-Ney Tshering Jong Drubdey",
      dek: "A place blessed by Tshepamey",
      sections: [
        { body: [
          "Ba-Ney Tshering Jong Drubdey, commonly known as Baney, is a sacred site in Trashiyangtse traditionally associated with Guru Rinpoche and Tshepamey, the Buddha of Long Life. The name is said to have originated from Bae Ney, meaning a sacred or blessed place. Over time, the name was locally pronounced as “Baney,” which is now the commonly used name.",
          "The Goenpa was founded by Lopen Damchen Rinchen, a practitioner originally from Kheng.",
        ] },
        { heading: "The practitioner from Kheng", body: [
          "Lopen Damchen Rinchen completed his Buddhist studies in Trongsa and took Sangdrup Tshepamey Thro Lhamo as his yidam. He later travelled to Trashiyangtse on pilgrimage and to visit a relative living there. During his journey, he meditated on the mountain behind the old Trashiyangtse Dzong. From his meditation site, he is said to have been able to see Bae Ney to the east. Each night, he noticed what appeared to be a large fire burning at the location. Curious about its source, he travelled there to investigate. Instead of finding a fire, he encountered only the ruins of an old house.",
          "The place appeared peaceful and well suited to practice. He therefore built a small hut and began living there. In time, around ten disciples gathered around him, establishing an early community of practitioners at the site.",
        ] },
        { heading: "The arrival of Tshepamey", body: [
          "One day, Lopen Damchen Rinchen told his disciples that he was expecting a guest and instructed them to receive the visitor properly. The disciples waited throughout the day, but no one arrived. Then, unexpectedly, an elderly Tibetan woman carrying a bag appeared at night.",
          "She presented Lopen Damchen Rinchen with a statue of Tshepamey. According to the traditional account, however, the statue was missing the tshe bum, the long-life vase traditionally held by Tshepamey. This was regarded as an inauspicious sign, and Lopen Damchen Rinchen is said to have passed away soon afterwards.",
        ] },
        { heading: "The sacred tshe bum", body: [
          "The story continues with an extraordinary account of his cremation.",
          "It is traditionally believed that his ashes formed a small mound and that his bones transformed into a tshe bum, which appeared on top of the mound. When the monastery was later constructed, this sacred tshe bum was placed inside one of the statues as an inner relic. Whether understood as a sacred tradition, a spiritual account or an expression of the deep reverence held for the founder, the story remains an important part of the identity of Ba-Ney.",
        ] },
        { heading: "From family stewardship to decline", body: [
          "The present-day temple was built by Samten Wangchuk, the son of Tsampa Chime, one of Lopen Damchen Rinchen’s disciples. The Goenpa was subsequently cared for by Samten Wangchuk’s descendants. Over generations, however, the monastery was eventually abandoned and fell into disrepair.",
          "Its history might have ended there, but the local community later sought help to revive the sacred site.",
        ] },
        { heading: "Revived as Tshering Jong", body: [
          "Village elders appealed to H.E. Gyeltshen Trulku Rinpoche to take responsibility for the Goenpa. In response, Rinpoche revived the centre in 1999, enrolling twelve monks and one teacher, and renamed it Tshering Jong. The revival brought renewed life to a place that had nearly disappeared into ruins, reconnecting it with the wider tradition of study, practice and retreat associated with Rinpoche's lineage.",
        ] },
        { heading: "A place entrusted to the community", body: [
          "A few years ago, the Goenpa was handed back to the village community.",
          "Today, it is maintained by local residents, bringing the story of Ba-Ney full circle from an isolated place of practice established by a single practitioner, through generations of family stewardship and a period of decline, to revival and eventual return to the community. Its continuing significance lies not only in its physical temple, but in the stories, sacred traditions and community connection that have allowed the place to endure.",
        ] },
      ],
    },
  },
  {
    slug: "jashar-woong-drubdey-ani-dratshang",
    name: "Jashar Woong Drubdey & Ani Dratshang",
    place: "Pemagatshel",
    district: "Pemagatshel",
    type: "Retreat Centre & Nunnery",
    summary: ["Born from the devotion and vision of Ani Yoesel Choden, Jashar Woong has been a place of retreat and practice for more than nine decades. After receiving the Longchen Nyinthig and Togden Shakya Shri teachings from Thruelzhig Lama Gyeltshen Marpo, she established the retreat centre in 1933 to preserve his teachings.", "Revived by H.E. Gyeltshen Trulku Rinpoche in 1992, the centre has grown into a major nunnery and retreat community. Today, more than forty-five nuns live and practice here, with twenty-two undertaking intensive retreats ranging from three to twelve years.", "The centre is envisioned as a future teaching and training centre for the Togden Shakya Shri lineage in Bhutan."],
    story: {
      title: "Jashar Woong Drubdey",
      dek: "A retreat centre born from devotion",
      sections: [
        { body: [
          "The story of Jashar Woong begins with Ani Yoesel Choden, a devoted practitioner born in Zobel, Pemagatshel, in 1912.",
          "Driven by a deep devotion to the Buddha Dharma, she travelled to Zham Goenpa in Minjey, Lhuentse, where she received precious teachings of the Longchen Nyinthig and the collected teachings of Togden Shakya Shri from Thruelzhig Lama Gyeltshen Marpo, predecessor of H.E. Gyeltshen Trulku Rinpoche. She became one of his closest and most learned disciples.",
        ] },
        { heading: "From Yongla to Jashar Woong", body: [
          "After returning to Pemagatshel, Ani Yoesel Choden initially joined the nuns at Goenpa Singma. Before long, however, she chose a life devoted entirely to meditation. She spent four years meditating at the summit of Yongla. During her retreat, a rainbow was said to appear regularly over the ridge below her meditation place. Seeing this as an auspicious sign, she sent two nuns to investigate the location.",
          "When they reached the site, they lit a fire, and the smoke rose straight into the sky. From her meditation place, Ani Yoesel Choden observed the sign and considered the location highly auspicious for establishing a retreat centre where the teachings of Thruelzhig Lama Gyeltshen Marpo could be preserved.",
          "In 1933, Jashar Woong Retreat Centre was established.",
        ] },
        { heading: "A community of practitioners", body: [
          "During Ani Yoesel Choden’s lifetime, approximately forty to fifty disciples are said to have gathered at the retreat centre. Her life of practice eventually became closely connected with that of H.E. Gyeltshen Trulku Rinpoche. When Rinpoche was nineteen years old, he met Ani Yoesel Choden for the first time at Jashar Woong. By then, she had already spent approximately forty years in meditation.",
          "During their meeting, she made a request that would shape the future of the centre: after her passing, Rinpoche was asked to take responsibility for Jashar Woong. Ten years later, they met again. By then, Ani Yoesel Choden’s health had declined with old age. She passed away in 1982.",
          "Following her passing, Jashar Woong was left abandoned.",
        ] },
        { heading: "Remembering a promise", body: [
          "In 1990, the nearby community, lay monks and Ani Yoesel Choden’s remaining close disciples appealed to Rinpoche to revive the retreat centre. Remembering her earlier request and moved by compassion, Rinpoche undertook the renovation of Jashar Woong in 1992, restoring spiritual activity to the place.",
          "The remote location, however, presented significant challenges. For decades, the nuns had carried water and food supplies over long distances because of limited water and road access. In 1995, Rinpoche expanded the facilities by establishing an additional building lower down the ridge, improving access to education, water and food supplies.",
          "He also took residence there and gave teachings in preparation for the nuns’ meditation practice.",
        ] },
        { heading: "From retreat centre to nunnery", body: [
          "In 2000, the first group of nuns undertook a three-year retreat under Rinpoche’s guidance. At this time, Jashar Woong Drubdey was renamed Shri Samten Choeling. The centre subsequently developed into a larger nunnery and retreat complex, combining residential facilities, education and intensive meditation practice.",
          "In 2008, Rinpoche initiated construction of a new temple. He personally designed and funded the structure, which was completed in 2016 after years of dedicated effort. The temple houses statues of Amitabha Buddha, Avalokiteshvara and Guru Dewa, together with wall paintings depicting the Thousand Buddhas.",
          "The wider nunnery complex includes the temple, dormitories, kitchen and guesthouse. The dormitories received support from the First and Second elected Governments of Bhutan, while the access road was supported by the Third elected Government. At the entrance stands the Tashi Gomang Stupa, built by Rinpoche to bring peace and prosperity to the region. The stupa is surrounded by four Namgay Khangzang Choetens.",
        ] },
        { heading: "A living community of nuns", body: [
          "Today, Jashar Woong Lhuendrup Choeling Nunnery is home to more than forty-five nuns. Twenty-two of them are currently undertaking intensive meditation retreats ranging from three to twelve years, continuing the retreat tradition established by Ani Yoesel Choden.",
          "The nunnery is therefore not simply a residential institution. It is a place where education, contemplation and long-term retreat are carried forward together.",
        ] },
        { heading: "Support for the nunnery", body: [
          "The nunnery has also received support from the Bhutanese monarchy. In 1998, His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck, granted the nuns a monthly stipend. Later, His Majesty King Jigme Khesar Namgyel Wangchuck commanded that they receive the same monthly stipend as other monks and nuns. This support has helped sustain the community and its continuing programme of practice.",
        ] },
        { heading: "The continuation of Ani Yoesel Choden", body: [
          "The story of Jashar Woong also continues through the recognition of Ani Yoesel Choden’s reincarnation. In 2009, Choezang Lhamo, born in Samdrup Jongkhar, was formally recognized as her reincarnation by H.H. the 12th Gyalwang Drukpa.",
          "According to the account, as a young child Choezang Lhamo was able to describe Jashar Woong in considerable detail despite never having visited the place. There was initially hesitation surrounding the recognition of a female Trulku. At the same time, a boy also claimed to be the reincarnation of Ani Yoesel Choden.",
          "H.E. Gyeltshen Trulku Rinpoche therefore requested H.H. the 12th Gyalwang Drukpa to examine both claims. The 12th Gyalwang Drukpa confirmed Choezang Lhamo as the authentic reincarnation and formally sealed her status as a Trulku during the first Annual Drukpa Council in 2009.",
        ] },
        { heading: "A future for the lineage", body: [
          "Jashar Woong today carries both a historical legacy and a future responsibility.",
          "The centre is envisioned as the sole teaching and training centre for the Togden Shakya Shri lineage in Bhutan, giving it an important role in preserving and transmitting the lineage’s teachings to future generations. At the same time, the physical development of the nunnery remains ongoing.",
          "Further infrastructure development, maintenance and renovation of retreat houses, additional hostels, toilets and proper kitchens have been identified as important needs. Above all, ensuring an adequate supply of safe drinking water remains the foremost priority.",
          "From Ani Yoesel Choden’s solitary years of meditation to a growing community of nuns undertaking long-term retreat, Jashar Woong represents a remarkable continuity of practice, one practitioner’s devotion becoming a place where an entire lineage can continue to learn, practise and endure.",
        ] },
      ],
    },
  },
  {
    slug: "togden-choeling-drubdey",
    name: "Togden Choeling Drubdey",
    place: "Gongthung, Tashigang",
    district: "Trashigang",
    type: "Retreat Centre",
    summary: ["Established in 2003 in Yangnyer village, Togden Choeling Drubdey transformed a once-abandoned and feared site into one of the region’s major retreat centres.", "The centre includes a temple, Mahakala temple and retreat houses for sixteen practitioners. At its heart is a remarkable three-dimensional Chakrasamvara mandala, described as the largest of its kind in Bhutan, standing approximately twenty-two feet high and thirteen feet long.", "Today, the centre is under the full management of Tashigang Rabdey."],
    story: {
      title: "Togden Choeling Drubdey",
      dek: "From an abandoned village to a place of practice",
      sections: [
        { body: [
          "Togden Choeling Drubdey is located in the middle of Yangnyer village, facing Tashigang Dzong. When the retreat centre was first established, the surrounding area was largely abandoned. The village’s approximately one hundred households had moved to Pema Koed, leaving behind the ruins of their former homes.",
          "In 2003, Tashigang Lam Neten Singye Rinchen and H.E. Gyeltshen Trulku Rinpoche established Togden Choeling Retreat Centre at the site.",
        ] },
        { heading: "Transforming fear into practice", body: [
          "Before the retreat centre was established, a local belief held that the area was inhabited by evil spirits. People from neighbouring communities were reportedly reluctant to visit the place, even during the daytime.",
          "The establishment of the retreat centre gradually transformed the character and perception of the area. What had once been regarded with fear became a place of religious practice and retreat. The centre grew into one of the largest retreat centres in the region, and the earlier fears associated with the site faded. The story of Togden Choeling is therefore also a story of transformation: an abandoned landscape becoming a living place of practice.",
        ] },
        { heading: "A centre built around retreat", body: [
          "The retreat centre consists of a main temple, a Mahakala temple and retreat houses accommodating sixteen practitioners. The temple is surrounded by eight stupas, traditionally associated with protecting the sacred site from local spirits. At the centre is one of the most distinctive features of Togden Choeling: a large three-dimensional Chakrasamvara mandala. The mandala is described as the largest three-dimensional Chakrasamvara mandala in Bhutan, measuring approximately twenty-two feet in height and thirteen feet in length. Its scale and detailed construction make it an important feature of the centre and offer visitors an unusual opportunity to encounter this sacred form of Vajrayana representation.",
        ] },
        { heading: "A place open to pilgrims", body: [
          "The sacred site draws people beyond the immediate community, offering devotees and visitors from Bhutan and elsewhere an opportunity to pay homage. Today, Togden Choeling Drubdey is under the full management of Tashigang Rabdey, continuing its role as a place of retreat and religious practice.",
        ] },
      ],
    },
  },
  {
    slug: "kadam-goenpa-monastery",
    name: "Kadam Goenpa Monastery",
    place: "Thangrong, Mongar",
    district: "Mongar",
    type: "Monastery",
    summary: ["Established in 1968 to serve the religious needs of the people of Thangrong, Kadam Goenpa grew from a small community initiative into a recognised centre of religious practice.", "The monastery was substantially developed after the local community appealed to H.E. Gyeltshen Trulku Rinpoche in 2005. Thirty monks were enrolled, with the community contributing labour and Rinpoche supporting the major renovation and ongoing expenses.", "Today, the monastery remains closely connected to the local community, including annual religious festivals held by lay monks on the 10th day of the fifth and tenth months of the Bhutanese calendar."],
    story: {
      title: "Thangrong Kadam Goenpa",
      dek: "A monastery serving its community",
      sections: [
        { body: [
          "Thangrong Kadam Goenpa is located in Thangrong, Mongar. Its story began in 1968, when a man named Thinley Wangchuk and his teacher, Gyeltshen of Changshing Goenpa, established the monastery to meet the religious needs of the people of Thangrong Gewog. What began as a local religious institution gradually developed into a more substantial monastery serving the wider community.",
        ] },
        { heading: "Growing with the community", body: [
          "In 1980, a carpenter named Peta sponsored the construction of an additional storey to the Lhakhang. He also built a kitchen, store and residential quarters for the local community. The monastery continued to develop alongside the surrounding locality.",
          "In 2005, the people of Thangrong Gewog appealed to H.E. Gyeltshen Trulku Rinpoche to establish a proper monastery that could further serve the spiritual needs of the community Rinpoche responded by establishing the monastery with thirty monks. The local community contributed labour to the work, while Rinpoche provided materials for the major renovation of the Goenpa.",
        ] },
        { heading: "A growing religious centre", body: [
          "Since the monastery’s establishment and development, the surrounding locality has also experienced significant growth. Today, a school, Basic Health Unit, RNR Centre and several shops are located nearby. Kadam Goenpa has become one of the recognised centres of religious practice in the region. Its development reflects the close relationship between religious institutions and the communities they serve: as the locality grew, so too did the role and needs of the monastery.",
        ] },
        { heading: "Sustaining the monastic community", body: [
          "The monastery continues to support a community of thirty monks. According to the source, the cost of basic food supplies, general expenses for the monks and teachers’ salaries is borne by Rinpoche. At the same time, proper hostels and related facilities remain an important infrastructure need. These needs highlight the practical side of sustaining a monastic institution—not only creating a place for practice, but providing the accommodation, food, education and facilities required for the community to continue.",
        ] },
        { heading: "A living connection with the community", body: [
          "Kadam Goenpa also maintains a strong connection with the people of Thangrong through its annual religious festivals. On the 10th day of the fifth and tenth months of the Bhutanese calendar, religious festivals are conducted by lay monks, or gomchens, with the celebrations organised by the local community.",
          "These gatherings continue the Goenpa’s role as a place where religious practice and community life come together.",
        ] },
      ],
    },
  },
  {
    slug: "ngagdra-dorji-choegar",
    name: "Ngagdra Dorji Choegar",
    place: "Kurizampa, Mongar",
    district: "Mongar",
    type: "Institute for Vajrayana Studies",
    hub: true,
    image: { src: "/media/institution/ngagdra-development-2006-2020.jpg", alt: "Two views of the Ngagdra site above Kurizampa, in 2006 before construction and in 2020", caption: "The Ngagdra site in 2006 and in 2020.", aspect: "1 / 1", objectFit: "contain" },
    summary: ["Ngagdra Dorji Choegar was established in 2007 to provide a permanent place for advanced Vajrayana study and training. Before its establishment, monks travelled between locations each year to receive teachings, empowerments and oral transmissions from H.E. Gyeltshen Trulku Rinpoche.", "Today, the institute serves as the central learning and training ground for practitioners preparing for retreat, as well as for those returning from three-, six- and nine-year retreats for further instruction. With nearly two hundred monks enrolled across various courses, it connects study, practice and retreat across the wider Ngagdra network. At its heart stands a monumental Hevajra statue, formally consecrated in 2015. The institute also houses classrooms, dormitories, a Dharma Assembly Hall, Rinpoche’s residence and a major collection of Buddhist texts.", "More than an institute, Ngagdra Dorji Choegar is the educational foundation of a living Vajrayana tradition."],
    story: {
      title: "Ngagdra Dorji Choegar",
      dek: "The heart of the Ngagdra network",
      sections: [
        { body: [
          "Above the Kurichu River and the Kurizampa Bridge in Mongar stands Ngagdra Dorji Choegar, the Institute for Vajrayana Studies. Unlike the retreat centres spread across eastern Bhutan, Ngagdra Dorji Choegar serves a different but central purpose. It is where practitioners receive the advanced teachings and training that prepare them for retreat and continued practice.",
          "Its establishment brought together a long-standing teaching tradition and a practical need: creating a permanent place where monks, nuns and lay practitioners could receive comprehensive Vajrayana teachings without having to travel from one centre to another.",
        ] },
        { heading: "From travelling teachings to a permanent institute", body: [
          "Before Ngagdra Dorji Choegar was established, approximately fifteen to twenty-five monks would gather each year at different locations for around three months. During these gatherings, they received empowerments, oral transmissions and initiations from H.E. Gyeltshen Trulku Rinpoche.",
          "This arrangement continued for eighteen years. While it allowed the teachings to continue, travelling between different locations each year was demanding for both teachers and practitioners. To address this challenge, Ngagdra Dorji Choegar was founded on 26 April 2007 following a simple religious ceremony.",
          "The establishment of a permanent institute changed the way the teachings could be transmitted.",
        ] },
        { heading: "A place to study before retreat", body: [
          "Ngagdra Dorji Choegar provides advanced Vajrayana studies and training for monks before they enter the various retreat centres. The institute allows practitioners to receive the teachings, instructions and foundational preparation needed for retreat in one place. It also creates a continuing connection between study and practice. Practitioners who complete three-, six- or nine-year retreats return to Ngagdra Dorji Choegar to receive further teachings and instructions from Rinpoche before undertaking advanced retreats or being assigned to monasteries and nunneries. In this way, the institute forms a bridge between study, retreat and continued practice, helping practitioners carry the teachings forward in accordance with the lineage tradition.",
        ] },
        { heading: "Reviving an old tradition", body: [
          "The institute is described as the first Ngagdra, or Institute for Vajrayana Studies, established to revive a tradition that traces its origins back more than four centuries to Tibet, where it was first founded by Kuenkhen Pema Karpo. Its role is therefore not simply to provide Buddhist education. It represents an effort to preserve and continue a specific Vajrayana tradition through systematic study, training and practice.",
          "The institute has also become a central point supporting the wider network of retreat centres in eastern Bhutan. Since its establishment, it has played an important role in promoting retreat culture and Vajrayana practice while supporting and uplifting more than eleven retreat centres across eastern Bhutan.",
        ] },
        { heading: "A place of study, practice and community", body: [
          "Ngagdra Dorji Choegar brings together many elements of monastic and Vajrayana education.",
          "The institute includes:",
          {"list": ["Rinpoche’s residence", "A Hevajra temple", "A Dharma Assembly Hall for lay practitioners", "Dormitories for monks", "Classrooms for mantra, sutra, Buddhist sciences, astrology, mandala studies and English", "A large collection of Buddhist texts from around the world"]},
          "The library is particularly important as a repository of Buddhist literature, supporting the institute’s wider role in study and preservation.",
        ] },
        { heading: "The Hevajra temple", body: [
          "At the centre of the institute stands a monumental Hevajra statue, the principal sacred image of Ngagdra Dorji Choegar. The statue and institute were formally consecrated on 30 October 2015 by H.H. the 70th Je Khenpo, Trulku Jigme Choedra. The consecration was attended by His Royal Highness Gyaltshab Jigme Dorji Wangchuck, accompanied by Her Royal Highness Azhi Yeatso Lhamo. The occasion coincided with the historic celebration of the 60th birth anniversary of His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck, making the consecration a significant occasion for the institute.",
          "The Hevajra statue is described as the largest and tallest of its kind at the time of its consecration. Hevajra is also the principal personal meditational deity associated with Marpa Lotsawa, giving the statue particular significance within the tradition preserved at Ngagdra.",
        ] },
        { heading: "The Five Pillars of the Essential Lineage", body: [
          "During the consecration, H.H. the 70th Je Khenpo highlighted the significance of Ngagdra Dorji Choegar in preserving and practising the authentic Drukpa teachings of the essential lineage.",
          "The tradition is presented through five key aspects:",
          {"pairs": [["The View", "Mahamudra — The Great Seal"], ["The Meditation", "Six Yogas of Nāropa"], ["The Conduct", "Six Cycles of Equal Taste"], ["The Result", "Sevenfold Dependent Origination"], ["That which is cherished in all", "Guru Yoga"]]},
          "These teachings provide an important framework for understanding what makes Ngagdra different from a general Buddhist educational institution. Its purpose is not only to transmit Buddhist philosophy, but to preserve a complete path of Vajrayana study, meditation and practice.",
        ] },
        { heading: "Preparing practitioners for the path", body: [
          "Today, nearly two hundred monks are enrolled in various courses at the institute.",
          "Students receive training across multiple areas before progressing into deeper retreat and practice. Those who have completed long-term retreats can also return to receive further instructions, creating a continuous cycle between education and retreat.",
          "The institute therefore functions as a central point within the larger network: practitioners may begin their training here, move into retreat centres across eastern Bhutan, return for further instruction, and then continue into more advanced stages of practice or serve within monasteries and nunneries.",
        ] },
        { heading: "Continuing to grow", body: [
          "Ngagdra Dorji Choegar was one of the last major projects initiated by Rinpoche.",
          "Since 2018, further expansion has included the construction of individual retreat houses for preliminary and short-term retreat, as well as a guesthouse for devotees who wish to receive teachings under Rinpoche’s guidance. As the number of students and visitors has grown, however, the institute's infrastructure has increasingly come under pressure.",
          "Accommodation and facilities for students, devotees, visiting lamas and Trulkus, and formally enrolled monks remain a significant concern. Water supply, sanitation and related infrastructure are particularly important challenges. Maintaining appropriate health and hygiene standards has become difficult as the campus accommodates a growing number of students, especially given the region’s extreme temperatures.",
        ] },
        { heading: "A living centre for the lineage", body: [
          "Ngagdra Dorji Choegar was created to solve a practical problem, but its significance extends far beyond that original purpose. It brought together teachings that had previously travelled from place to place and created a permanent home for their transmission.",
          "From this centre, practitioners prepare for retreat, return from retreat for further instruction, and continue into advanced practice and service. Through its classrooms, temples, library and wider network of retreat centres, Ngagdra Dorji Choegar connects the different stages of the Vajrayana path. Its future therefore depends not only on preserving the buildings, but on sustaining the learning, practice and transmission that take place within them.",
          "As expressed during the institute’s consecration, the aspiration is for this sacred centre to flourish continuously, like the Kurichu River flowing before it.",
        ] },
      ],
    },
  },
  {
    slug: "darchen-goenpa-tag-dong-drubdey",
    name: "Darchen Goenpa & Tag-dong Drubdey",
    place: "Minjey, Lhuentse",
    district: "Lhuentse",
    type: "Monastery & Retreat Centre",
    summary: ["A place where the lineage is remembered through practice. Thruelzhig Gyeltshen Marpo established a retreat house here in 1918, and decades later H.E. Gyeltshen Trulku Rinpoche built a temple and retreat house on the same sacred site. Expanded in 2019, Tag-dong Drubdey now provides individual retreat houses for long-term meditation."],
    story: {
      title: "Darchen Goenpa & Tag-dong Drubdey",
      dek: "A place where the lineage returned to practice",
      sections: [
        { body: [
          "Darchen Goenpa is located at Kurtoe Minjey in Lhuentse, near the ancient trail once used by kings, ministers and officials travelling between Tashi Yangtse and Lhuentse. The site carries a particular connection to the Ngagdra lineage: Thruelzhig Gyeltshen Marpo, predecessor of H.E. Gyeltshen Trulku Rinpoche, established a modest retreat house here in 1918 and meditated at the site.",
        ] },
        { heading: "Continuing a place of practice", body: [
          "In 1978, at the request of the local community, Rinpoche built a temple where his predecessor's retreat house had stood. He also constructed a retreat house for four monks undertaking intensive meditation retreats. His Majesty the Fourth Druk Gyalpo, Jigme Singye Wangchuck, granted four acres of land around Darchen Goenpa to support the development of a temple and retreat centres.",
          "Rinpoche continued to envision the expansion of the site so that more practitioners could benefit from a place where both he and his predecessor had practised.",
        ] },
        { heading: "Tag-dong Drubdey", body: [
          "That vision took a significant step forward in 2019, when the retreat centre was expanded with nine individual retreat houses, a temple and a Drubpoen's house. At that time, Darchen Goenpa Retreat Centre was renamed Tag-dong Drubdey, in homage to the local deity Lumo Tagdongma.",
          "The project was supported by individual devotees from France, Vietnam and local communities and supervised by Rinpoche's son, Sey Khenpo Tenzin Rabgay.",
        ] },
        { heading: "A living retreat community", body: [
          "The centre now provides a setting for long-term meditation practice. The source records nine monks engaged in a six-year meditation retreat, including Sey Khenpo Tenzin Rabgay.",
          "The original 1978 temple has also carried the marks of time, including deep cracks caused by the 2008 earthquake. Rinpoche is rebuilding the temple while preserving its sacred original statues and wall paintings.",
          "Around the retreat centre, eight great stupas, prayer wheels and a butter-lamp hall are also being constructed, creating spaces where the community can incorporate circumambulation and other Dharma practices into daily life.",
        ] },
      ],
    },
  },
  {
    slug: "mani-dundrup-ling",
    name: "Mani Dundrup Ling",
    place: "Khaling, Tashigang",
    district: "Trashigang",
    type: "Retreat Centre",
    summary: ["On a ridge overlooking Droel Woong, a traditional account tells of a young girl who encountered twenty-one Taras and brought one sacred statue home. Recognizing the site as auspicious, H.E. Gyeltshen Trulku Rinpoche established Mani Dundrup Ling in 2012 as a place especially for elderly lay practitioners devoted to intensive mantra recitation."],
    story: {
      title: "Mani Dundrup Ling",
      dek: "A place remembered through Tara",
      sections: [
        { body: [
          "Mani Dundrup Ling sits on a ridge overlooking Droel Woong village in Khaling, Tashigang. The place carries a traditional account of an extraordinary encounter involving a village girl and twenty-one Taras.",
        ] },
        { heading: "The story of the twenty-one Taras", body: [
          "In the 1930s or 1940s, a young village girl was said to have been tending her cows when a small bird repeatedly approached her, singing. When she followed the bird to the top of the ridge, she discovered its nest.",
          "As she leaned forward to pick up an egg, she heard profound religious music. Looking up, she saw twenty-one Taras descending through the rays of the setting sun and entering a hole in the rocks. Twenty disappeared into the opening. The girl caught the last Tara, which transformed into a statue. She brought the sacred statue home to her father.",
          "The statue was later offered to the Governor of Tashigang, also known as Sey Dopola, in exchange for exemption from tax payments. Lama Moenlam Rabzang, a disciple of Togdhen Shakya Shri and close friend of the Governor, subsequently requested the statue. According to the source, it has since been preserved at Kangpar Lamai Goenpa.",
          "The village where the girl originated came to be known as Droel Woong, meaning “The Land of Tara.”",
        ] },
        { heading: "A retreat centre for devoted practitioners", body: [
          "Recognizing the ridge as an auspicious place, H.E. Gyeltshen Trulku Rinpoche established a small retreat centre there in 2012. It was named Mani Dundrup Ling and intended especially for elderly lay practitioners dedicating their lives to the billion-recitation of the Baza Guru mantra. The centre represents a quieter dimension of the wider network: a place where long-term devotion and mantra practice can continue away from the larger monastic institutions.",
          "According to the source, the retreat centre is presently under community management because of a lack of support from the local community.",
        ] },
      ],
    },
  },
  {
    slug: "gyal-phu-drubdey",
    name: "Gyal-phu Drubdey",
    place: "Mongar",
    district: "Mongar",
    type: "Retreat Centre",
    summary: ["A place with an older connection to the lineage, Gyal-phu was associated with Thruelzhig Gyeltshen Marpo and his Dzogchen Longchen Nyingthik teachings. After an earlier retreat community struggled to continue, the centre reopened in 2018 with royal patronage. Today, practitioners undertake three- to six-year retreats under the spiritual guidance of H.E. Gyeltshen Trulku Rinpoche."],
    story: {
      title: "Gyal-phu Drubdey",
      dek: "A place with an older lineage connection",
      sections: [
        { body: [
          "Gyal-phu Lhakhang, also known as Jeyphu, is associated with the spiritual descendants of Terton Pema Lingpa. The site also carries a direct connection to Thruelzhig Gyeltshen Marpo and his teachings.",
        ] },
        { heading: "Teachings at Gyal-phu", body: [
          "In the early 1990s, at the request of the Zongar Dzongpon, Kunzang Wangdi, Thruelzhig Gyeltshen Marpo gave Dzogchen Longchen Nyingthik teachings at Mongar Dzong and resided at Gyal-phu.",
          "The site therefore forms part of a longer history of teaching and practice within the region.",
        ] },
        { heading: "Reopening the retreat centre", body: [
          "In 2002, a small number of monks stayed at the retreat centre. However, according to the source, they were unable to progress because of inadequate management and a lack of dedicated support from Mongar Rabdey.",
          "At the beginning of 2018, His Royal Highness Gyaltshab Jigme Dorji Wangchuck graciously consented to and blessed the reopening of the retreat centre, extending patronage to nine practitioners. Those practitioners subsequently completed a three-year retreat.",
        ] },
        { heading: "Continuing long-term practice", body: [
          "As of 2023, the source records nine monks and three lay monks undertaking retreat programmes ranging from three to six years under the spiritual guidance of H.E. Gyeltshen Trulku Rinpoche.",
          "Gyal-phu therefore represents not only a historic place of teaching, but also a continuing setting for practitioners undertaking structured retreat.",
        ] },
      ],
    },
  },
  {
    slug: "pongchola-drubdey",
    name: "Pongchola Drubdey",
    place: "Mongar",
    district: "Mongar",
    type: "Retreat Centre",
    summary: ["Once known as Potala, the pure land of Avalokiteshvara, Pongchola carries a long history of sacred objects, temples and practice. A self-enunciating stupa associated with the mani mantra remains at the site. After an earlier monastic school was discontinued, the place was re-established as a retreat centre in 2018, where self-funded practitioners continue their practice."],
    story: {
      title: "Pongchola Drubdey",
      dek: "From Potala to a place of retreat",
      sections: [
        { body: [
          "Pongchola was built in 1755 and was originally known as Potala, referring to the pure land of Avalokiteshvara, Chenrezig.",
          "The name gradually changed through local pronunciation. According to the traditional account, the site was called Potala because Lama Tshetrim Jamtsho, a disciple of Zhabdrung Jigme Drakpa, blessed it as the heavenly abode of Avalokiteshvara.",
        ] },
        { heading: "A stupa associated with the mani mantra", body: [
          "After Lama Tshetrim Jamtsho passed away, a small stupa was built in his memory. The stupa later became renowned locally because the sound of the mani mantra was said to emanate spontaneously from it.",
          "The self-enunciating stupa remains at the site today.",
          "A Goenpa was subsequently built nearby, housing a main statue of Avalokiteshvara. Below the Goenpa stands Chorten Dangrim, an elongated stupa constructed by Zhabdrung Jigme Drakpa in memory of his late father.",
          "Together, these sacred structures stand on a ridge overlooking the surrounding Mongar landscape.",
        ] },
        { heading: "From Lobdra to Drubdey", body: [
          "In 1995, Mongar Lama Neten Namgay approached H.E. Gyeltshen Trulku Rinpoche to establish a Lobdra, or primary monastic school, for monks at the site.",
          "Rinpoche initially supported the Lobdra through his private funds. According to the source, however, the school was later discontinued because of inadequate management and a lack of dedicated effort from Mongar Rabdey.",
          "At the beginning of 2018, following a request from Mongar Rabdey, Rinpoche again consented to establish the site as a Drubdey, or retreat centre.",
          "Today, the source records a small number of self-funded practitioners undertaking retreat programmes under Rinpoche's spiritual guidance.",
        ] },
      ],
    },
  },
  {
    slug: "dokoe-choeling-goenpa",
    name: "Dokoe Choeling Goenpa",
    place: "Gomdhar, Samdrup Jongkhar",
    district: "Samdrup Jongkhar",
    type: "Monastery",
    summary: ["Established by the local community in a remote area that previously had no temple, Dokoe Choeling Goenpa grew from a community initiative into a place of Buddhist practice. After the villagers offered the temple to H.E. Gyeltshen Trulku Rinpoche consecrated and named it in 2016 and established a monastery with nine lay monks. The community remains deeply committed to its continuation."],
    story: {
      title: "Dokoe Choeling Goenpa",
      dek: "A community's first temple",
      sections: [
        { body: [
          "In the remote area of Gomdhar, Samdrup Jongkhar, a community temple was established by a local monk in 2009. Until then, the area had no temple.",
          "The temple was completed in 2015, after which the villagers decided to offer it to H.E. Gyeltshen Trulku Rinpoche.",
        ] },
        { heading: "From community temple to Goenpa", body: [
          "At the community's request, Rinpoche visited Gomdhar in 2016, consecrated the temple and named it Dokoe Choeling Goenpa.",
          "That same year, he established a monastery with nine lay monks, or Gomchens, with the intention of strengthening community vitality and supporting spiritual development.",
        ] },
        { heading: "A place carried by its community", body: [
          "The establishment of the Goenpa brought a new centre of Buddhist practice to the locality. The source describes the community as enthusiastic in embracing spiritual practice and deeply committed to supporting the propagation of Rinpoche's teachings.",
          "The villagers have offered land for the monastery and continue to support the Goenpa.",
          "At the same time, their limited financial capacity makes it difficult for the community to provide all the basic infrastructure and amenities needed to sustain and further develop the monastery.",
          "Dokoe Choeling Goenpa is therefore a story of community initiative: a place that began because a remote community wanted a temple of its own and continues through the commitment of the people who live around it.",
        ] },
      ],
    },
  },
  {
    slug: "shamey-drubdey",
    name: "Shamey Drubdey",
    place: "Mongar",
    district: "Mongar",
    type: "Retreat Centre",
    summary: ["Traditionally regarded as an ancient seat of the lineage holders of Pema Lingpa, Shamey Monastery stood abandoned for years without basic facilities or a resident caretaker. At the end of 2023, seven senior retreat practitioners who had completed six-year retreats at Larjab began a nine-year retreat here. The site remains under private management."],
    story: {
      title: "Shamey Drubdey",
      dek: "Returning practice to an old seat",
      sections: [
        { body: [
          "Shamey Drubdey, also known as Shamé Monastery, is situated on the upper ridge of Gyal Phu in Mongar.",
          "The monastery is traditionally regarded as an ancient seat of the lineage holders of Pema Lingpa.",
        ] },
        { heading: "From abandonment to retreat", body: [
          "For many years, the site consisted of only a small temple and lacked basic facilities, including drinking water. With no caretaker residing there, the monastery was eventually abandoned.",
          "The hereditary custodian later handed the monastery over to Mongar Rabdey.",
        ] },
        { heading: "A new generation of retreat practitioners", body: [
          "Toward the end of 2023, seven senior retreat practitioners arrived at the site after completing six-year retreats at Larjab Retreat Centre. They commenced a nine-year retreat at Shamey.",
          "During their stay, the government provided essential support, including water supply and electricity.",
          "The site therefore marks another transition within the network: from an abandoned place with limited facilities to a renewed environment for practitioners undertaking an extended period of retreat.",
          "The source records that the retreat centre remains under private management.",
        ] },
      ],
    },
  },
  {
    slug: "tsholing-gongma-drubdey",
    name: "Tsholing Gongma Drubdey",
    place: "Tsho Ling, Saling Gewog, Mongar",
    district: "Mongar",
    type: "Retreat Centre",
    summary: ["Built in response to the growing need for retreat space, Tsholing Gongma Drubdey emerged rapidly from a forested mountain site in 2022. Around fifteen retreat houses were constructed, followed by a large temple completed in 2025. With Kalachakra as its principal statue and essential infrastructure now in place, it represents a newer generation of retreat centres within the network."],
    story: {
      title: "Tsholing Gongma Drubdey",
      dek: "A retreat centre built in response to a growing need",
      sections: [
        { body: [
          "Tsholing Drubdey is located at Tsho Ling under Saling Gewog in Mongar, Eastern Bhutan.",
          "Its story is closely connected to the growing number of monks entering the wider retreat system. During 2021–2022, a large number of new monks arrived from monastic colleges in other parts of Bhutan. With the existing retreat centres in eastern Bhutan facing increased demand, an additional retreat centre was needed.",
        ] },
        { heading: "From forested mountain to retreat centre", body: [
          "In 2022, the foundation of the new retreat centre was laid in the forested mountains of Tsho Ling.",
          "Within a few months, approximately fifteen retreat houses were completed using timber, plywood and bricks. The construction was carried out by monks and teachers from Ngagdra Dorji Choegar.",
          "In 2023, nine monks and one retreat master undertook a three-year retreat at the centre.",
        ] },
        { heading: "A temple takes shape", body: [
          "Toward the end of 2023, construction began on the main temple, approximately 40 feet square and 120 feet in length. By 2025, the entire structure, including its interior and exterior, had been completed. The temple houses an eight-foot-tall main statue of Kalachakra, along with statues of Amitabha and Avalokiteshvara. Its walls are adorned with paintings of Dhampa Rigja, Lhenkey Rignga and Goenpo Chamdrel Sum. A residence for Rinpoche was also constructed.",
        ] },
        { heading: "A new centre within the network", body: [
          "The site is now described as having essential infrastructure including drinking water, electricity and road access.",
          "Tsholing Gongma Drubdey is one of the newest centres in the network, showing how the retreat system continues to expand in response to the changing needs of practitioners.",
        ] },
      ],
    },
  },
];

export function getCentre(slug: string) {
  return centres.find((centre) => centre.slug === slug);
}

/** Dzongkhags in the order the directory presents them. */
export const districts = ["Mongar", "Trashigang", "Lhuentse", "Pemagatshel", "Trashiyangtse", "Samdrup Jongkhar"] as const;

export function districtId(district: string) {
  return `district-${district.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
