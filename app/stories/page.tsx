import { Arrow } from "@/components/Arrow";
import Link from "next/link";
import { Suspense } from "react";
import { Bleed } from "@/components/Bleed";
import { EditorialImage } from "@/components/EditorialImage";
import { PendingList, SectionHead, Stats, Steps, Teaser, TextLink } from "@/components/Editorial";
import { NextSteps } from "@/components/NextSteps";
import { PageHeader } from "@/components/PageHeader";
import { StoryIndex, StoryIndexFallback } from "@/components/StoryIndex";
import { pageMetadata } from "@/lib/seo";
import {
  featuredStory,
  heritageSection,
  latestStories,
  livingChronicle,
  numbers,
  oneMoment,
  peopleSection,
  placesSection,
  reflections,
  storiesIntro,
  storyCategories,
  traditionJourney,
} from "@/lib/stories";

export const metadata = pageMetadata("Stories", storiesIntro.intro[0], "/stories");

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow={storiesIntro.kicker}
        title={storiesIntro.title}
        lead={storiesIntro.intro}
        crumbs={[{ name: "Stories", path: "/stories" }]}
        actions={<a className="button" href={storiesIntro.action.href}>{storiesIntro.action.label}<Arrow direction="down" /></a>}
        image={{ src: "/media/community/public-blessing.jpg", alt: "H.E. Gyeltshen Trulku Rinpoche moving through a seated crowd during a public blessing", caption: "Rinpoche among the community during a public blessing.", objectPosition: "43% 45%", priority: true, sizes: "(max-width: 860px) calc(100vw - 40px), 40vw", aspect: "4 / 3" }}
      />

      <section className="section" aria-labelledby="featured-title">
        <div className="container rail">
          <div className="rail__head">
            <p className="eyebrow">Featured story · {featuredStory.meta}</p>
            <h2 id="featured-title">{featuredStory.title}</h2>
          </div>
          <div className="rail__body prose prose--lead">
            {featuredStory.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={`/stories/${featuredStory.slug}`}>{featuredStory.cta}</TextLink>
          </div>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="people-title">
        <div className="container grid feature">
          <EditorialImage {...peopleSection.image} sizes="(max-width: 860px) calc(100vw - 40px), 46vw" aspect="3 / 2" className="feature__media" />
          <div className="feature__copy">
            <SectionHead id="people-title" eyebrow={peopleSection.eyebrow} title={peopleSection.title} intro={peopleSection.paragraphs} action={peopleSection.action} />
          </div>
        </div>
        <div className="container network-wrap">
          <PendingList items={peopleSection.teasers} />
        </div>
      </section>

      <section className="section" aria-labelledby="journey-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <p className="eyebrow">{traditionJourney.eyebrow}</p>
            <h2 id="journey-title">{traditionJourney.title}</h2>
            <p>{traditionJourney.intro}</p>
          </div>
          <Steps steps={traditionJourney.steps} label={traditionJourney.title} />
          <p className="requires-closing">{traditionJourney.closing}</p>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="places-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="places-title" eyebrow={placesSection.eyebrow} title={placesSection.title} />
          </div>
          <div className="rail__body prose prose--lead">
            {placesSection.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={placesSection.action.href}>{placesSection.action.label}</TextLink>
          </div>
        </div>
        <div className="container teaser-grid teaser-grid--2 network-wrap">
          {placesSection.features.map((teaser) => <Teaser key={teaser.title} {...teaser} />)}
        </div>
      </section>

      <section className="section section--brand" aria-labelledby="moment-title">
        <div className="container moment">
          <p className="moment__lines" aria-label={oneMoment.lines.join(" ")}>
            {oneMoment.lines.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
          </p>
          <div className="moment__copy">
            <p className="eyebrow">{oneMoment.eyebrow}</p>
            <h3 id="moment-title">{oneMoment.title}</h3>
            {oneMoment.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <TextLink href={oneMoment.action.href}>{oneMoment.action.label}</TextLink>
          </div>
        </div>
      </section>

      <Bleed images={[oneMoment.image]} caption={oneMoment.image.caption} />

      <section className="section section--band" aria-labelledby="heritage-title">
        <div className="container grid feature feature--reverse">
          <EditorialImage {...heritageSection.image} sizes="(max-width: 860px) calc(100vw - 40px), 54vw" aspect="3 / 2" className="feature__media" />
          <div className="feature__copy">
            <SectionHead id="heritage-title" eyebrow={heritageSection.eyebrow} title={heritageSection.title} intro={heritageSection.paragraphs} action={heritageSection.action} />
          </div>
        </div>
        <div className="container network-wrap">
          <PendingList items={[heritageSection.teaser]} />
        </div>
      </section>

      <section className="section" aria-labelledby="reflections-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="reflections-title" eyebrow={reflections.eyebrow} title={reflections.title} />
          </div>
          <div className="rail__body prose prose--lead">
            {reflections.paragraphs.map((text) => <p key={text}>{text}</p>)}
          </div>
        </div>
        <div className="container network-wrap">
          <PendingList items={reflections.teasers} />
        </div>
      </section>

      <section className="section section--band" aria-labelledby="numbers-title">
        <div className="container">
          <p className="eyebrow" id="numbers-title">{numbers.eyebrow}</p>
          <Stats items={numbers.items} />
        </div>
      </section>

      <section className="section" aria-labelledby="chronicle-title">
        <div className="container rail">
          <div className="rail__head">
            <SectionHead id="chronicle-title" eyebrow={livingChronicle.eyebrow} title={livingChronicle.title} action={livingChronicle.action} />
          </div>
          <ol className="rail__body event-list">
            {livingChronicle.items.map((item) => (
              <li key={item.year}>
                <Link href={item.href}>
                  <time>{item.year}</time>
                  <strong>{item.title}</strong>
                  <span className="event-list__text">{item.text}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--band" id="latest" aria-labelledby="latest-title">
        <div className="container">
          <div className="section-head section-head--wide">
            <h2 id="latest-title">Latest stories</h2>
          </div>
          <Suspense fallback={<StoryIndexFallback stories={latestStories} categories={storyCategories} />}>
            <StoryIndex stories={latestStories} categories={storyCategories} />
          </Suspense>
        </div>
      </section>
      <NextSteps />
    </>
  );
}
