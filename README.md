# Ngagdra Dorji Choegar — Institutional Website

Production-ready Next.js starter for the digital home of Ngagdra Dorji Choegar.

## Stack
- Next.js 16.3.3 (App Router / Server Components)
- React 19.2.7
- TypeScript 5.9+
- Native CSS design system (no component-library visual baggage)
- `next/font`, generated OG image and icon

## Run
```bash
cp .env.example .env.local
npm install
npm run dev
```
Open http://localhost:3000.

## Design direction
Bhutanese monastic heritage × museum editorial design × Apple-like restraint.
The interface uses warm paper, ink typography, restrained maroon, asymmetrical editorial grids and minimal UI chrome.

## SEO / AEO implementation
- Per-page titles, descriptions and canonical URLs
- Open Graph + Twitter metadata
- `sitemap.xml` and `robots.txt`
- Organization + EducationalOrganization + WebSite JSON-LD
- Person JSON-LD for Rinpoche page
- Article + Breadcrumb JSON-LD for stories
- Event architecture ready for verified event detail pages
- Semantic heading hierarchy and answer-first intros
- Crawlable internal links
- RSS feed at `/rss.xml`
- `llms.txt` as a non-authoritative machine-readable navigation aid
- Generated social image and icon
- No fabricated current statistics in structured data

Important: no technical implementation can guarantee ranking. Search performance still depends on unique authoritative content, links/mentions, consistent publishing, image quality, page experience, and correct information.

## Content system
Edit:
- `lib/content.ts` for work pillars and stories
- `lib/site.ts` for core site identity
- route pages for long-form institutional content
- `content/VERIFICATION-CHECKLIST.md` before publishing

## Photography
The source site should use institute-owned or commissioned documentary photography. Visual placeholders are intentional so this codebase does not silently ship third-party copyrighted images.

## Deployment
Vercel is the simplest deployment target, but any Node.js host supporting Next.js 16 works. Set `NEXT_PUBLIC_SITE_URL` to the production canonical origin before building.

## After deployment
1. Verify all items in `content/VERIFICATION-CHECKLIST.md`.
2. Replace media placeholders and official mark.
3. Validate JSON-LD with Schema.org validator and Google Rich Results Test.
4. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Verify canonical domain and redirects (www vs apex).
6. Add Search Console/Bing verification tags only after accounts are available.
7. Track Core Web Vitals and Search Generative AI performance reports.
