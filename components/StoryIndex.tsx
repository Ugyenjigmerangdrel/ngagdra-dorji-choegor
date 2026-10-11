"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { PendingList } from "@/components/Editorial";
import type { LatestStory, StoryCategory } from "@/lib/stories";

type Category = { label: StoryCategory; intro?: { title: string; text: string } };
type Props = { stories: LatestStory[]; categories: Category[] };

const slugify = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function StoryIndexView({ stories, categories, active, onChoose }: Props & { active: StoryCategory | "All"; onChoose?: (label: StoryCategory | "All") => void }) {
  const count = (label: StoryCategory) => stories.filter((story) => story.category === label).length;
  // Only topics that hold at least one story are offered as filters.
  const topics = categories.filter((category) => count(category.label) > 0);
  // Themes with no stories yet keep their introduction, shown with the stories in preparation.
  const emptyThemes = categories.filter((category) => count(category.label) === 0 && category.intro);
  const shown = active === "All" ? stories : stories.filter((story) => story.category === active);
  const published = shown.filter((story) => story.href);
  const pending = shown.filter((story) => !story.href);
  const intro = categories.find((category) => category.label === active)?.intro;

  return (
    <div className="story-index">
      <div className="filters" role="group" aria-label="Filter stories by topic">
        {(["All", ...topics.map((category) => category.label)] as const).map((label) => (
          <button type="button" key={label} aria-pressed={active === label} onClick={onChoose ? () => onChoose(label) : undefined}>
            {label}<span>{label === "All" ? stories.length : count(label)}</span>
          </button>
        ))}
      </div>
      {intro ? (
        <div className="story-index__intro">
          <h3>{intro.title}</h3>
          <p>{intro.text}</p>
        </div>
      ) : null}
      <div aria-live="polite">
        {published.length ? (
          <ul className="story-index__list">
            {published.map((story) => (
              <li key={story.title}>
                <Link href={story.href!}>
                  <span className="story-index__meta">{story.category} · {story.year}</span>
                  <strong>{story.title}</strong>
                  <span className="story-index__text">{story.text}</span>
                  <span className="cue">Read the story<Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {pending.length || (active === "All" && emptyThemes.length) ? (
          <PendingList
            items={[
              ...pending.map((story) => ({ meta: `${story.category} · ${story.year}`, title: story.title, text: story.text })),
              ...(active === "All" ? emptyThemes.map((theme) => ({ meta: theme.label, title: theme.intro!.title, text: theme.intro!.text })) : []),
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}

/** "Latest stories" with topic filters. The URL (?topic=) holds the selection, so a filtered view can be linked to. */
export function StoryIndex({ stories, categories }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = categories.find((category) => slugify(category.label) === params.get("topic"))?.label ?? "All";

  const choose = (label: StoryCategory | "All") => {
    const next = new URLSearchParams(params.toString());
    if (label === "All") next.delete("topic");
    else next.set("topic", slugify(label));
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return <StoryIndexView stories={stories} categories={categories} active={active} onChoose={choose} />;
}

/** Prerendered, unfiltered list shown until the URL is available on the client. */
export function StoryIndexFallback({ stories, categories }: Props) {
  return <StoryIndexView stories={stories} categories={categories} active="All" />;
}
