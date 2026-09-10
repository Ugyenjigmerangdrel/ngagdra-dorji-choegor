Ngagdra Dorji Choegar — Brand System v1
1. Brand personality

Use these five attributes as the filter for every design decision:

Reverent · Quiet · Authentic · Scholarly · Welcoming

Visually, think:

Bhutanese monastic heritage × museum editorial design × Apple-like restraint

That means generous whitespace, exceptional typography, large photography, few colors at once, subtle motion, and almost no decorative UI for decoration’s sake.

2. Logo strategy

Your current emblem should become the ceremonial/master mark.

It contains a lot of visual information: the maroon outer seal, Tibetan/Dzongkha lettering, yellow ring, blue field, and multicolored central symbol. Because of that, don't force it into every interface element.

I recommend establishing four official variants:

Master Seal — exactly the current circular emblem, used on the homepage, footer, formal documents, About page, event material and official communication.
Simplified Symbol — extract only the central symbolic mark for avatars, favicon, social icons and small mobile contexts.
Wordmark Lockup — symbol + NGAGDRA DORJI CHOEGAR horizontally, mainly for the website header.
Monochrome Seal — single maroon, white or black version for printing, photographs and restricted applications.
Logo rules

For the full seal, I would set a minimum digital diameter of ~80 px. Below that, switch to the simplified symbol.

Keep clear space around the seal equal to roughly ¼ of the seal diameter.

Never add shadows, gradients, glows, glass effects, outlines or containers around it. Never recolor individual sacred/symbolic elements casually.

One thing worth doing before the website launch is professionally redraw/vectorize this emblem. The symbolism can remain identical; the linework, typography, curves and color values should simply become consistent.

3. Core colour system

I sampled the uploaded emblem. Its strongest visual colors are approximately:

Role	Colour	Hex	Usage
Choegar Maroon	Deep monastery red	#830B0D	Primary brand
Vajra Blue	Royal blue	#4052B6	Secondary
Sacred Yellow	Bright yellow	#FFEC01	Ceremonial accent
Ritual Green	Deep green	#136C18	Rare secondary accent
Ink	Warm black	#1C1A18	Main typography
Warm Paper	Ivory	#FAF8F4	Primary background
Mist	Neutral gray	#F1F0ED	Section differentiation
White	Pure white	#FFFFFF	UI surfaces

But here's the important rule:

Don't use all the logo colours in the interface.

The website palette should be approximately:

70% warm white / paper
20% ink / neutral
8% maroon
2% ceremonial accent

Use blue, green and yellow only when contextually meaningful.

For example, do not create yellow buttons because yellow exists in the logo.

Primary button

#830B0D background
White text

Secondary button

Transparent background
#1C1A18 text
subtle #D8D5CF border

Accent

Use yellow for extremely small details—ceremonial dates, tiny separators, event highlights—not large backgrounds.

This restraint will make the seal look much more prestigious.

4. Typography

Typography should carry most of the identity.

I would deliberately avoid decorative “Asian-looking” Latin fonts. Bhutanese identity should come from the actual Dzongkha/Tibetan language, photography, symbolism and content, not imitation typography.

Latin typography
Primary

Inter

Use it for:

navigation
paragraphs
buttons
captions
dates
UI
forms
event information

It is clean enough to create the Apple-like precision you want.

font-family:
  Inter,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;

For Apple devices, the system fallback naturally brings in San Francisco without requiring you to distribute Apple's font.

Editorial/display typography

For selected major storytelling headlines, I would introduce:

Newsreader

This gives the institute a scholarly/editorial quality without becoming old-fashioned.

Example:

Preserving a living lineage
for generations to come.

Use it sparingly—homepage statements, article titles, biographies, long-form editorial introductions.

Dzongkha / Tibetan typography

Use:

Noto Serif Tibetan — ceremonial/headline text
Noto Sans Tibetan — functional/body text

This separation is important because Tibetan script generally needs more vertical room than Latin text.

Do not force Dzongkha into the exact same line-height as English.

5. Type hierarchy

I would lock the website to a compact system rather than allowing developers to choose sizes page-by-page.

Desktop
Style	Size	Line height
Hero Display	64 px	68 px
Display	52 px	58 px
H1	44 px	50 px
H2	34 px	42 px
H3	26 px	34 px
H4	20 px	28 px
Lead	20 px	32 px
Body	17 px	28 px
Small	15 px	23 px
Caption	13 px	19 px
Eyebrow	12 px	16 px

Hero typography can scale responsively instead of maintaining 64 px on phones.

For example:

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.06;
  letter-spacing: -0.035em;
}
Typography rule

Big headings should be short.

Don't do this:

Welcome to Ngagdra Dorji Choegar Institute and learn about our important activities

Prefer:

A living lineage.

Then explain underneath in restrained body copy.

6. Spacing system

Adopt one predictable spacing system:

4
8
12
16
24
32
48
64
96
128
160

For normal sections:

Desktop: 120–160 px vertical spacing
Tablet: 96 px
Mobile: 64–80 px

Content width:

Site maximum:       1440 px
Normal container:   1200 px
Reading column:      680–760 px
Wide editorial:     1000 px

Avoid filling every empty area.

For this brand, whitespace is part of the identity.

7. Grid

Use a clean 12-column desktop system.

Desktop
12 columns
24–32 px gutters

Tablet
8 columns

Mobile
4 columns
20–24 px page margin

Don't center everything.

Editorial layouts should frequently use asymmetry:

          Section label

Large title                 Small supporting text

                           [          ]
[                        ] [  image   ]
[      main image        ] [          ]
[                        ]

That will make it feel more like a cultural institution than a template.

8. Photography direction

Photography will determine whether this brand feels authentic.

Prioritize:

People → rituals → place → details → history

Show monks and community members doing things rather than constantly posing for the camera.

Capture:

teachings
ceremonies
prayer
study
manuscripts
architectural details
hands and ritual objects
preparation before events
local landscape
community participation
historical photographs
Image treatment

Use natural colour.

Avoid heavy Instagram filters, oversaturation, dramatic HDR and fake golden glows.

The red and yellow in Bhutanese architecture are already powerful enough.

For certain archival sections, desaturated or monochrome imagery can work beautifully.

9. UI shapes

Do not make the site extremely rounded.

That would conflict with the institutional character.

Use approximately:

Buttons       8–10 px radius
Inputs        8 px
Cards         0–12 px
Images        0–8 px
Large panels  12–16 px maximum

Avoid giant 24–32 px SaaS-style rounded cards.

More importantly:

Don't put everything inside a card.

Prefer:

Title
────────────

Content                                      →

Content                                      →

Content                                      →

rather than six floating rectangles.

10. Buttons

Buttons should be quiet.

Primary

Visit the Institute →

Maroon background, white text.

Height approximately 44–48 px.

Secondary

Learn about our lineage →

Text + arrow, often without a container at all.

Ceremonial CTA

For donations, avoid visually shouting:

DONATE NOW

Instead:

Support Ngagdra Dorji Choegar

Then explain what the contribution enables.

Donation should feel like one part of the organization—not the identity of the organization.

11. Navigation

The header should be exceptionally restrained.

Something like:

[mark] NGAGDRA DORJI CHOEGAR

About     Lineage     What We Do     Events     Journal

                                              Support

I'd avoid placing the enormous full round seal in the navigation bar.

Use the simplified symbol + wordmark there.

The full seal can appear prominently on the homepage or footer.

12. Brand motif

You already have a strong visual source in the emblem.

Rather than inventing generic lotus patterns, extract geometric relationships from the central vajra.

These could become:

thin section dividers
subtle corner ornaments
loading animation
page transitions
event poster geometry
social media templates
favicon
small decorative marks

But these should usually appear at 5–10% visual intensity.

Think:

Symbolic detail discovered on closer inspection.

Not:

Buddhist ornament covering the whole page.

13. Motion language

Apple-like polish should come more from motion than decoration.

Use:

180–250 ms for interaction transitions.
400–700 ms for editorial reveals.

Mostly:

opacity
translateY 8–16px
scale 0.98 → 1

No bouncing, spinning icons or excessive parallax.

A particularly beautiful motif could be the central vajra assembling very subtly when the homepage first loads—but only once.

14. Graphic design system

The same identity should extend to events, social media and documents.

I would create three major graphic families.

Institutional

White/ivory background.

Small seal.

Strong typography.

Lots of whitespace.

Used for reports, official announcements and institutional material.

Cultural / Ceremonial

Full-bleed photography.

Small maroon typography blocks.

Dzongkha becomes prominent.

Used for teachings and ceremonies.

Editorial

Large serif title.

Image + caption.

Page-number/journal aesthetic.

Used for articles, biographies and historical material.

They should look like members of the same family, not separate designs.

15. Homepage visual language

For example:

                          Ngagdra Dorji Choegar
                                  ○

                Preserving a living lineage
                    for generations to come.

          Ngagdra Dorji Choegar is dedicated to...
                         
                         ↓


────────────────────────────────────────────────────


                    [ LARGE PHOTOGRAPH ]


────────────────────────────────────────────────────


OUR INSTITUTE

A place for practice,
learning and community.

                                        Read our story →


────────────────────────────────────────────────────


WHAT WE DO

Teachings
Preservation
Community
Education


────────────────────────────────────────────────────


UPCOMING

21 OCT
Annual Teaching Programme
                                         View event →


────────────────────────────────────────────────────


        [quiet full-width documentary photograph]


           Support the continuation
              of this tradition.

                  Contribute →


────────────────────────────────────────────────────

Notice how little UI is involved.

The content itself becomes the design.

16. Design tokens

I'd actually put the following into the codebase so the identity cannot slowly drift:

:root {
  /* Brand */
  --brand-maroon: #830b0d;
  --brand-blue: #4052b6;
  --brand-yellow: #ffec01;
  --brand-green: #136c18;

  /* Foundation */
  --ink: #1c1a18;
  --ink-secondary: #625e59;
  --paper: #faf8f4;
  --surface: #ffffff;
  --surface-muted: #f1f0ed;
  --border: #dedbd5;

  /* Width */
  --content: 1200px;
  --reading: 720px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
}
The most important decision

The logo currently says:

ceremony, tradition, symbolism, colour.

So the rest of the brand should say:

silence, space, clarity, dignity.

That tension is what can make Ngagdra Dorji Choegar feel distinctive.

I would not redesign the institute into another maroon-and-gold monastery website. Use the maroon as a signature, preserve the emblem faithfully, and surround it with extremely refined neutral design.

The visual formula I'd lock is:

Warm white + ink typography + documentary photography + occasional maroon + authentic Dzongkha + generous whitespace + the ceremonial seal.

That gives you a brand system strong enough to govern the website, articles, events, donation pages, print material and social media without every designer inventing a new visual language.


