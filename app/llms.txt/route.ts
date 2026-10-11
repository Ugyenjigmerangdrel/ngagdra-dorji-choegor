import { site } from "@/lib/site";

export async function GET() {
  const text = `# ${site.name}

${site.description}

## Core pages
- ${site.url}/about: who we are, lineage, heritage, founder and milestones
- ${site.url}/about/rinpoche: biography of H.E. Gyeltshen Trulku Rinpoche
- ${site.url}/our-work: education, retreat preparation, preservation, sacred arts and public practice
- ${site.url}/centres: the institute and the retreat centres of the Ngagdra network, with a story for each
- ${site.url}/events: the living chronicle of teachings, ceremonies and gatherings
- ${site.url}/stories: stories from a living tradition
- ${site.url}/visit: visitor guidance
- ${site.url}/support: what a retreat requires and current priority needs
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
