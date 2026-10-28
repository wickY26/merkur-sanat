# SEO — Status Summary & Handoff

Starting point for the next session, which will turn this into a long-term SEO plan.
Last updated: 2026-10-28 (branch `feat/cekmekoy-seo-pages`).

## Second brief: Çekmeköy-first pages (2026-10-28)

- 5 more articles from a second set of .docx briefs, same pipeline and rules:
  `/cekmekoy-seramik-workshop`, `/cekmekoy-resim-kursu`, `/cekmekoy-piyano-dersi`,
  `/cekmekoy-bateri-dersi`, `/cekmekoy-drama-dersi` (10 article pages total).
- The old `/…-cekmekoy` pages stay live (user decision). No redirects.
- Text is verbatim, with no edits this time. The Resim heading says "Merkür Sanat Farkı",
  which is left as-is.
- Headings H1 → H2…H6 → H6. 8 bold keywords per article (Resim has 7, as in the brief).
- Meta descriptions written by us. **They still need SEO manager review.**
- No internal links: the new pages are reachable only through `sitemap.xml`.
- **Risk:** "piyano dersi çekmeköy" and "çekmeköy piyano dersi" are effectively the same
  query, so each pair of pages competes for it (keyword cannibalization) and could look
  like doorway pages. Watch Search Console. If both versions of a page split impressions,
  301 the weaker one to the stronger.

## Done in the first brief (2026-09-25)

**SEO article pages** (the SEO manager's brief, content from 5 .docx files):
- `/seramik-workshop-cekmekoy`, `/resim-kursu-cekmekoy`, `/piyano-dersi-cekmekoy`,
  `/bateri-dersi-cekmekoy`, `/drama-dersi-cekmekoy`
- Content lives in `data/articles.ts`, rendered by `components/Article.tsx` via
  `app/[slug]/page.tsx` (statically generated, unknown slugs 404).
- Text copied verbatim from the briefs. Only edit: Drama heading "Merkür Akademi'de" →
  "Merkür Müzik ve Sanat Akademisi'nde" (business name consistency, user-approved).
- Heading structure is **H1 → H2 → H3 → H4 → H5 → H6 → H6**, because the SEO manager
  asked for H2→H6 stepping. Each article has 6 sub-headings, so the 6th stays at H6
  (user chose this). We advised all-H2 (sections are siblings, not nested). This is
  their call, but it's worth raising again in the long-term plan.
- 8 bold keywords per article → `<strong>`.
- Per-page `<title>` ("X | Merkür Müzik ve Sanat Akademisi"), meta description (written
  by us, **not yet approved by the SEO manager**), and canonical URL.

**Site-wide:**
- Google Search Console verification meta tag (`app/layout.tsx` → `metadata.verification`).
- `metadataBase` + canonical origin `https://www.merkursanat.com` (`lib/site.ts`).
- `/sitemap.xml` (home + 5 articles) and `/robots.txt`.
- Home page: hero heading changed from `<h2>` to `<h1>` (it had no H1 before). Title is now
  "Merkür Müzik ve Sanat Akademisi | Çekmeköy Müzik ve Sanat Kursları".
- `LocalBusiness` + `EducationalOrganization` JSON-LD on the home page
  (`data/localBusiness.ts`, `components/LocalBusinessJsonLd.tsx`): name, address, phone,
  geo, hours (closed Monday), Instagram.
- Header links are root-relative (`/#about`) so they work from sub-pages.
- Course cards (Piyano, Bateri, Resim, Seramik, Tiyatro→Drama) link to the article pages
  ("Detaylı bilgi →").

## Open decisions / disagreements

1. **Internal links.** The SEO manager wants no internal links ("pages are only for
   crawlers"). We recommended keeping them. Sitemap-only pages become orphans (weak
   ranking signal), and hiding keyword-targeted local pages from users edges toward
   Google's doorway-page / search-engine-first-content guidance. Links are **currently
   in**. Fallback if they must go: a small footer list instead of removing them entirely.
2. **Tiyatro card → drama page.** Our assumption, not confirmed.
3. **Meta descriptions** in `data/articles.ts` need SEO manager review.

## Needs action outside the codebase

- **Vercel:** redirect `merkursanat.com` → `www.merkursanat.com` (canonical is www).
- **Search Console:** after deploy, verify the property and submit `/sitemap.xml`.
- **Name inconsistency on Google Maps:** the Maps place is named "Merkür Müzik ve Sanat
  **Akademi**", while the site uses "…**Akademisi**". Align the Google Business Profile
  name (name, address and phone consistency is a local ranking factor).
- Validate the JSON-LD with Google's Rich Results Test once deployed.
- Manual visual check of the article pages at mobile/tablet/desktop (not done yet).

## Inputs for the long-term plan (our recommendation)

For "X dersi Çekmeköy" searches, the local map pack matters far more than these articles:
1. **Google Business Profile.** Categories, services (each course), photos, hours, and
   regular posts. Biggest lever by far.
2. **Reviews.** A routine for asking parents and students for Google reviews.
3. **Consistent name/address/phone** across the site, Google profile, Instagram and
   directories.
4. **Turn the article pages into real course pages** people would read: age groups,
   lesson length and frequency, instructors, photos, FAQ ("Kaç yaşında başlanır?",
   "Enstrüman gerekiyor mu?"). Optionally add `Course` / `FAQPage` schema. Same URLs, so
   no SEO loss.
5. Articles/pages for the courses not yet covered (keman, gitar, çello).
6. Open Graph images / social previews; Core Web Vitals check.
