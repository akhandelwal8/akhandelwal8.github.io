# Search discoverability audit

Assessed September 6, 2026: https://akhandelwal8.github.io/

## Assessment

The site has a strong foundation: static HTML, openly accessible research PDFs and abstracts, and authoritative Yale and NBER profiles linking to it. Public search returned the homepage and multiple PDFs. This confirms some discoverability; it does not establish Google rankings, traffic, or complete index coverage. Search Console, Bing Webmaster Tools, and private analytics reports were not accessed.

The largest opportunity is to make the existing research easier to identify, navigate, and cite. The site previously had a short affiliation-only homepage description, empty headings on the about and research pages, and no dedicated HTML pages for individual papers. Several PDF titles are generic in public search results. The live sitemap included CSS, RSS, and robots.txt URLs and incorrectly assigned 2018 modification dates to current research and biography pages.

## Changes prepared

| Area | Change | Purpose |
| --- | --- | --- |
| Homepage | A readable research introduction and links to eight selected paper pages below the existing portrait cover | Give readers and crawlers context about the economist and his research |
| Biography and research index | Descriptive headings, concise introductions, full organization names, and direct Yale and NBER profile links | Clarify identity, affiliation, and research fields |
| Metadata | Unique page descriptions, escaped attributes, canonical and social URLs, one zoom-friendly viewport | Produce coherent metadata without leaking abstracts or quotes into malformed attributes |
| Structured data | Person, WebSite, ProfilePage, and ScholarlyArticle JSON-LD | Express verified identities and relationships using the visible content |
| Paper pages | Eight HTML pages with full author names, publication details, visible abstracts, PDF links, and available research materials | Provide stable destinations for readers and citations |
| Google Scholar | Per-paper citation title, authors, year, PDF URL, and available journal/DOI fields | Supply bibliographic metadata in Scholar's documented format |
| Research links | Correct the neural-networks paper's appendix and BibTeX links, which pointed to the wrong directory and file type | Restore access to supporting materials |
| Sitemap | Only canonical HTML pages, including paper pages; modification dates only when explicitly supplied | Remove misleading freshness dates and non-page entries |
| Crawlers | Explicit allow-all robots.txt and sitemap declaration | Preserve the site's existing open crawler access, including Googlebot and OAI-SearchBot |
| Accessibility | English document language, main landmark, descriptive portrait alt text, server-rendered subpage layout, and abstracts readable without JavaScript | Improve direct access to the existing content |
| Measurement | Retain the Google verification token and GA4 tag; remove the obsolete Universal Analytics snippet that used the GA4 ID | Keep the relevant measurement setup consistent |

The highways paper title now says “measure” rather than “detect,” matching its published PDF and BibTeX. The exporting paper now says “Randomized Experiment” rather than “Randomized Trial,” matching its published PDF. Existing paper PDF paths, coauthors, downloads, and the pre-existing research-material reorder are preserved. Two pre-existing broken supporting-material links on the neural-networks paper are corrected.

The eight paper pages cover Tariffs in 2025, The Value of De Minimis Imports, Trade and Development in a Fracturing World, the new-highways satellite paper, The US-China Trade War and Global Reallocations, The Return to Protectionism, Measuring the Unequal Gains from Trade, and Exporting and Firm Performance.

## What helps Google and AI search

Google's AI features use the same SEO foundations as ordinary search: accessible, useful textual content, internal links, and accurate information. Structured data is helpful context, not a guaranteed ranking or citation boost. [Google's AI guidance](https://developers.google.com/search/docs/appearance/ai-features).

ChatGPT's search crawler is OAI-SearchBot. Training access through GPTBot is a separate control; permitting training does not guarantee mentions in model answers. The allow-all rule preserves the previous access policy for both. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).

No llms.txt file or hidden AI-specific content was added. Google explicitly says it ignores llms.txt for visibility and rankings. [Google's generative AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Paper pages sit in the same directories as their existing PDFs to follow Google Scholar's guidance for citation_pdf_url. Bibliographic fields use publication years or the displayed working-paper version, rather than the date a page was created. [Google Scholar inclusion guidance](https://scholar.google.com/intl/en/scholar/inclusion.html).

## Next steps after publication

1. In Google Search Console, select the existing website property, submit `sitemap.xml`, and inspect the homepage, research index, and new paper URLs. Request indexing for the priority pages. The repository already contains a verification token, but account ownership and verification status have not been confirmed. [Google sitemap submission guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
2. Add or verify the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/) and submit the same sitemap. This provides another indexing and crawl-diagnostics channel.
3. Record a baseline of impressions, clicks, queries, and landing pages; compare comparable periods after recrawling. Separate searches for “Amit Khandelwal” from topic and paper-title searches. Track referral traffic from AI services in GA4 when attribution is available; it will not capture every mention or visit.
4. Use the corresponding paper-page URLs when updating your own profiles or sharing research. Yale and NBER already link to the homepage. Additional accurate links to relevant papers can help readers discover them; no external profiles or messages were changed.
5. Extend the same paper-page pattern to the rest of the publication list as papers are updated. Keep dataset descriptions and release dates current, especially for the statutory-tariff downloads.

Indexing, ranking, and AI citations are decided by each service and cannot be guaranteed. A public crawl is also not a Core Web Vitals measurement; performance should be checked in Search Console after deployment.

## Maintenance

Each selected paper lives in `_papers/`. Its front matter is the source of its title, authors, abstract, publication information, and resources. The research list includes the same abstract through `paper-abstract.html`; update the paper file once rather than maintaining duplicate abstracts.

Keep citation years tied to the publication or working-paper version. The 2020 journal issue is used for The Return to Protectionism even though its BibTeX records 2019 online publication. The de minimis page explicitly labels its February 2025 policy setting.

The sitemap includes output pages automatically. Add `last_modified_at` only when a page has a known substantive update, and maintain that date when its content changes. Omitting an unknown date is preferable to publishing an inaccurate one. [Google's lastmod guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

The `docs/` and `scripts/` directories are excluded from publication. This audit is for the repository owner, not public website copy.

## Verification and publication status

The Jekyll 3.10 production build passed in safe mode. The generated output passed checks for 12 canonical HTML pages and eight scholarly pages: unique titles and descriptions, one nonempty H1 per page, canonical/social URL consistency, valid JSON-LD and XML, full visible abstracts, and citation metadata pointing to valid PDFs in the same directories as their HTML pages. All 448 local link and asset references checked across these pages resolve. All 29 original research abstracts remain intact; the two broken supporting-material links were repaired. The pre-existing link-order edit is preserved.

The site changes are prepared for publication but have not been pushed or deployed. Search Console submission and account-level traffic measurement remain after publication. No browser interaction or Core Web Vitals tests were performed.

## Owner review revisions

After the initial audit and verification, the visible About and Research page headings were removed, along with the About contact line and Research introduction. The homepage introduction, selected-paper list, and visible name/affiliation text were also removed at the owner's request. The homepage now retains its portrait and navigation. The eight dedicated paper pages remain linked from the research page. Search and citation metadata remain in place. Each revision passed a production rebuild and checks of the requested removals; the earlier homepage content and heading checks above describe the initial version.
