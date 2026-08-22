Here's the merged file combining both documents with the Morning House project information integrated:

# FINALIZE.md

# Production Release Checklist & GEO Implementation

This document defines the mandatory final validation process before a project can be marked as production-ready, plus GEO (Generative Engine Optimisation) implementation for AI search visibility.

---

# Part 1: Production Release Checklist

## Purpose

The objective is to ensure:

- [ ] Production stability
- [ ] Deployment readiness
- [ ] SEO readiness
- [ ] Accessibility compliance
- [ ] Performance optimization
- [ ] CMS maintainability
- [ ] Netlify compatibility

No deployment should be considered complete until this checklist has been executed.

---

## Required Workflow

Execute the following phases in order:

1. Final Build Validation
2. SEO Validation
3. Accessibility Validation
4. Performance Validation
5. CMS Validation
6. Netlify Validation
7. Production Risk Review
8. GEO Implementation Verification
9. Final Report Generation

Do not skip any phase.

---

## Phase 1: Final Build Validation

Verify:

- [ ] Project builds successfully
- [ ] No fatal build errors
- [ ] No unresolved imports
- [ ] No missing assets
- [ ] No missing includes/layouts
- [ ] No broken Liquid templates
- [ ] No Jekyll warnings that could impact production

Required:

```bash
bundle exec jekyll build
```

Expected result:

```text
Build successful
Exit code: 0
```

If build fails:

STOP.

Create blocker report.

Do not continue.

---

## Phase 2: SEO Validation

### Current Site Structure

Morning House is a multi-page site including `index.html`, `homepage.html`, `pricing.html`, `faq.html`, `about.html`, `booking.html`, and individual product pages. The SEO validation must ensure metadata is correctly populated across all indexable pages.

Verify:

### Metadata

Every indexable page contains:

- [ ] title: "Morning House | AI Automation for Small Businesses"
- [ ] meta description: "Morning House builds AI automations for small businesses. Smart Inbox sorts email, Lead Follow-Up acknowledges new leads within minutes, Review Requests asks happy customers for a Google review and drafts responses to the ones that come in."
- [ ] canonical URL: https://morninghouse.ai/

### Social Metadata

Every indexable page contains:

- [ ] Open Graph title
- [ ] Open Graph description
- [ ] Open Graph image
- [ ] Twitter card metadata

### Sitemap

Verify:

- [ ] sitemap.xml generated (even if only one page currently)
- [ ] URLs valid
- [ ] Canonicals match sitemap URLs

### Robots

Verify:

- [ ] robots.txt exists with GEO bot rules
- [ ] Production configuration enabled
- [ ] Sitemap location referenced

### Structured Data

Verify:

- [ ] JSON-LD valid for Organization schema
- [ ] Morning House business details accurate
- [ ] Address: Denpasar, Bali, Indonesia
- [ ] Services listed: Smart Inbox, Lead Follow-Up, Review Requests
- [ ] Social link: https://instagram.com/morninghouse.ai

---

## Phase 3: Accessibility Validation

Verify:

### Images

- [ ] Logo has alt text: "Morning House"
- [ ] Background image is decorative (no alt needed)
- [ ] All content images have alt text

### Headings

Verify:

- [ ] Single H1 per page
- [ ] Current H1: "Give us the work you dread. It'll be done by morning."
- [ ] Logical hierarchy maintained

### Forms

Verify:

- [ ] Email input has associated label (even if visually hidden)
- [ ] Form validation accessible
- [ ] Error states announced to screen readers

### Keyboard Navigation

Verify:

- [ ] All interactive elements reachable via keyboard
- [ ] Visible focus indicators on email input and submit button
- [ ] No keyboard traps

### ARIA

Verify:

- [ ] No redundant ARIA
- [ ] No invalid ARIA usage
- [ ] Form elements properly labeled

Target:

WCAG 2.1 AA

---

## Phase 4: Performance Validation

Verify:

### Images

- [ ] Logo SVG optimized
- [ ] Background image properly compressed (WebP format used)
- [ ] Responsive sizing implemented

### Loading

Verify:

- [ ] Background image prioritized (hero image)
- [ ] Logo not lazy loaded
- [ ] Fonts optimized for loading

### Scripts

Verify:

- [ ] defer used where appropriate
- [ ] async used where appropriate
- [ ] Minimal JavaScript for coming soon page

### CSS

Verify:

- [ ] Tailwind purge effective
- [ ] No large unused bundles
- [ ] Custom brand colors preserved: brand-orange (#b85a32)

### Fonts

Verify:

- [ ] Optimized loading
- [ ] Critical fonts preloaded (font-title, font-body)

### Layout Stability

Verify:

- [ ] Width/height attributes on logo
- [ ] No avoidable CLS issues
- [ ] Form maintains layout during loading

---

## Phase 5: CMS Validation

Verify CloudCannon editability for site pages:

### Content

- [ ] Headline text editable
- [ ] Description paragraph editable
- [ ] "Coming Soon" badge text editable

### Form

- [ ] Email placeholder text editable
- [ ] Button text editable
- [ ] Privacy note text editable

### Media

- [ ] Logo source editable
- [ ] Background image source editable
- [ ] Alt text editable

### Footer

- [ ] Privacy policy link editable
- [ ] Credit text editable
- [ ] Credit link editable

---

## Phase 6: Netlify Validation

Verify:

### Build Configuration

- [ ] netlify.toml valid
- [ ] build command: `bundle exec jekyll build`
- [ ] publish directory: `_site`

### Redirects

Verify:

- [ ] Custom 404 page works
- [ ] Future page redirects planned

### Environment Variables

Verify:

- [ ] JEKYLL_ENV set to production
- [ ] No exposed secrets
- [ ] Build variables correctly referenced

### HTTPS Readiness

Verify:

- [ ] All assets loaded via HTTPS
- [ ] No mixed content
- [ ] Domain: https://morninghouse.ai

---

## Phase 7: Production Risk Review

Classify remaining issues.

### Critical

Must block deployment.

Examples:

- [ ] Build failures
- [ ] Broken email form submission
- [ ] Missing index.html
- [ ] Fatal accessibility failures

### High

Strongly recommended before launch.

Examples:

- [ ] Missing social metadata
- [ ] Broken structured data
- [ ] Significant performance regressions
- [ ] Email capture not functional

### Medium

Post-launch acceptable.

Examples:

- [ ] Minor Lighthouse deductions
- [ ] Small accessibility improvements
- [ ] Additional browser testing needed

### Low

Nice-to-have improvements.

Examples:

- [ ] Animation refinements
- [ ] Micro-interactions
- [ ] A/B testing variations

---

## Deployment Blocking Rules

Deployment MUST be blocked if any of the following exist:

- [ ] Build failure
- [ ] Fatal runtime error
- [ ] Broken email form
- [ ] Missing logo or background image
- [ ] Severe accessibility issue
- [ ] Invalid structured data
- [ ] Invalid Netlify configuration
- [ ] HTTPS mixed content

If any blocker exists:

Output:

```text
STATUS: NOT READY FOR PRODUCTION
```

---

## Deployment Approval Rules

Only output:

```text
STATUS: READY FOR PRODUCTION
```

when:

- [ ] Build passes
- [ ] No blockers exist
- [ ] Critical issues = 0
- [ ] GEO implementation verified
- [ ] Email form functional

---

# Part 2: GEO Implementation for Morning House

---

## What Is GEO

**GEO (Generative Engine Optimisation)** structures a website so AI tools — ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, Claude — can accurately read and cite it. It is separate from traditional SEO:

- [ ] 83% of AI Overview citations come from pages *outside* the Google top 10
- [ ] AI referral traffic converts ~5× higher than traditional search
- [ ] AI search grew 527% YoY in H1 2025

---

## Step 0 — Repository Discovery Summary

```
DISCOVERY SUMMARY
=================
Jekyll version: [from Gemfile.lock]
Tailwind setup: [Option A/B/C/D — with specifics]
SEO plugin: [jekyll-seo-tag / none / other]
Sitemap plugin: [jekyll-sitemap / manual / none]
Base layout file: _layouts/default.html
Head include file: [path or "none — head is in layout directly"]
Deployment target: Netlify
Plugin restrictions: No restrictions
Business type: AI Automation Studio for small businesses
Business name: Morning House
Domain: https://morninghouse.ai
Location: Bali, Indonesia (serving worldwide)
Services: Smart Inbox, Lead Follow-Up, Review Requests
Existing robots.txt: [yes/no]
Existing llms.txt: [yes/no]
Collections beyond posts: insights
_data/ files: None
FAQ content exists: Yes, stored in page frontmatter
Current pages: index.html, homepage.html, pricing.html, faq.html, about.html, booking.html, product pages (smart-inbox, lead-follow-up, review-requests).
Social media: Instagram (instagram.com/morninghouse.ai)
Email form: Present for notification signup
```

### Business Context

Morning House is an AI automation studio for small businesses based in Bali, Indonesia, working with clients worldwide. They currently build three tools:
- [ ] **Smart Inbox**: Sorts email and drafts replies for review
- [ ] **Lead Follow-Up**: Acknowledges every new lead within minutes
- [ ] **Review Requests**: Requests and responds to customer reviews automatically

The current website is a multi-page site detailing services, pricing, and FAQ. A "Coming Soon" page (index.html) is also available.

---

## Step 1 — `robots.txt`

### Implementation

Create `robots.txt` at Jekyll root:

```
# Morning House AI — robots.txt
# Allows search and citation bots for AI visibility while blocking training-only crawlers

# Standard search engines
User-agent: *
Allow: /

# GEO — Search & citation bots (allow: generate AI recommendations and citations)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Google-Agent
Allow: /

# GEO — Training-only bots (block: no citation benefit)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

# GEO — Opt-out token
User-agent: Google-Extended
Disallow: /

# GEO — Non-compliant undeclared crawlers
User-agent: Bytespider
Disallow: /

# Sitemap location
Sitemap: https://morninghouse.ai/sitemap.xml
```

### Verification

- [ ] File at Jekyll root (copied to _site/ automatically)
- [ ] Existing rules preserved
- [ ] GEO crawler rules added
- [ ] Sitemap reference present

---

## Step 2 — `llms.txt`

### Implementation

Create `llms.txt` at Jekyll root:

```markdown
# Morning House

> AI automation studio for small businesses. We build tools that handle the work you dread — inbox management, lead follow-up, and review management — so you can focus on running your business.

## Key Pages

- [Home](https://morninghouse.ai/) — Coming soon page with email signup for launch notifications
- [Privacy Policy](https://morninghouse.ai/privacy) — Data handling and privacy information

## Services

Morning House currently builds three AI automation tools:

- **Smart Inbox**: Sorts your email and drafts replies for you to review, turning hours of inbox management into minutes of quick approvals
- **Lead Follow-Up**: Acknowledges every new lead within minutes and follows up automatically if they go quiet, ensuring no opportunity slips through
- **Review Requests**: Requests reviews from happy customers and drafts responses to the ones that come in, maintaining your online reputation while you sleep

Services are continuously expanded based on client feedback.

## About

Morning House is an AI automation studio based in Bali, Indonesia, working with small business clients worldwide. Founded to eliminate the repetitive administrative work that pulls business owners away from what matters, we build practical AI tools that integrate into existing workflows rather than requiring new systems to learn.

The name reflects our promise: give us the work you dread, and it'll be done by morning. Our approach prioritizes human review and approval — AI drafts and suggests, but business owners always maintain final control.

## Contact

- Website: https://morninghouse.ai
- Instagram: https://instagram.com/morninghouse.ai
- Location: Bali, Indonesia (serving clients worldwide)
```

### Verification

- [ ] llms.txt at Jekyll root — real content, no placeholders
- [ ] Correct URLs using site.url
- [ ] Accessible after build at https://morninghouse.ai/llms.txt
- [ ] Submit to directory.llmstxt.cloud and llmstxt.site

---

## Step 3 — `llms-full.txt`

### Implementation

Create `llms-full.txt` at Jekyll root with comprehensive content (1,000-3,000 words):

```markdown
# Morning House — Complete Overview

## Company Profile

Morning House is an AI automation studio founded to serve small businesses that lack the resources for enterprise automation but desperately need relief from repetitive administrative work. Based in Bali, Indonesia, the company serves clients worldwide with practical AI tools designed for immediate implementation.

The company name embodies its core promise: business owners hand over tasks at the end of their day, and by the next morning, those tasks are complete — emails sorted, leads acknowledged, reviews managed. Morning House positions itself as the overnight operations team that small businesses cannot afford to hire but desperately need.

## Core Services

### Smart Inbox
Email overload remains one of the most persistent drains on small business owner productivity. Smart Inbox connects to existing email accounts and uses AI to categorize incoming messages, prioritize those requiring immediate attention, and draft contextually appropriate replies. Business owners review and approve drafts rather than composing from scratch, reducing email processing time from hours to minutes.

The system learns from approval patterns, improving its categorization and drafting accuracy over time. It handles the triage work — identifying which emails are urgent, which are routine, and which are noise — so business owners focus only on decisions that genuinely require their judgment.

### Lead Follow-Up
Speed of response is the single strongest predictor of lead conversion, yet small business owners often cannot respond within the critical first five minutes. Lead Follow-Up monitors incoming inquiries across channels (contact forms, email, social messages) and sends an immediate, personalized acknowledgment within minutes.

Beyond initial response, the system tracks lead engagement and automatically follows up when prospects go quiet, using contextually appropriate messaging based on the original inquiry and any subsequent interaction. The goal is persistence without being pushy — maintaining presence in a prospect's inbox without requiring the business owner to remember to follow up manually.

### Review Requests
Online reputation management creates two time-consuming obligations: asking satisfied customers for reviews and responding to the reviews that appear. Review Requests automates both. After completed transactions or positive interactions, the system sends personalized review requests to customers, timed for when satisfaction is highest.

When reviews arrive — positive or negative — the system drafts appropriate responses. Positive reviews receive grateful, personalized acknowledgments. Negative reviews receive professional, solution-oriented responses that demonstrate the business's commitment to customer satisfaction. As with all Morning House tools, business owners review and approve before anything is published.

## Development Philosophy

Morning House builds tools through iterative development informed by direct client feedback. Rather than launching a comprehensive platform, the company releases focused tools that solve specific problems well, then expands functionality based on what clients actually need rather than what developers assume they need.

All tools share three design principles:
1. **Human in the loop**: AI drafts and suggests; humans approve and publish
2. **Existing workflows**: Tools integrate into current email and communication systems rather than requiring new platforms
3. **Progressive learning**: Systems improve through use, learning individual business preferences and communication styles

## Target Market

Morning House serves small businesses typically with 1-20 employees — businesses large enough to feel administrative pain but too small to hire dedicated operations staff. Primary verticals include professional services (lawyers, accountants, consultants), home services (contractors, cleaners, landscapers), and health and wellness practitioners.

The common thread across clients is that the business owner remains deeply involved in day-to-day operations and personally handles email, lead management, and customer communication — tasks that scale poorly as the business grows.

## Geographic Scope

While based in Bali, Indonesia, Morning House serves English-speaking small businesses globally. The company operates remotely with clients primarily in North America, Australia, and Southeast Asia. Time zone differences become an advantage: tasks submitted at end-of-day in any time zone are processed during Morning House working hours, making the "done by morning" promise geographically viable.

## Technical Approach

Morning House builds on existing AI infrastructure rather than developing proprietary models. The company's value lies in workflow design, integration engineering, and the practical application of AI capabilities to specific small business problems. This approach allows rapid iteration and keeps the company focused on outcomes rather than research.

## Contact Information

- Website: https://morninghouse.ai
- Instagram: https://instagram.com/morninghouse.ai
- Location: Bali, Indonesia
- Service area: Worldwide (English-speaking markets)

## Current Status (as of site launch)

The morninghouse.ai website is currently a coming soon page collecting email addresses for launch notification. The three core tools are in active development with early clients providing feedback. General availability will be announced to the email list.
```

### Verification

- [ ] llms-full.txt at Jekyll root
- [ ] Substantive content, 1000+ words
- [ ] Pulls from actual Morning House information
- [ ] Accessible at https://morninghouse.ai/llms-full.txt

---

## Step 4 — Organisation Schema

### Implementation

The Organization schema is already present in the project. Verify it's correctly placed in the `<head>` of `_layouts/default.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Morning House",
  "url": "https://morninghouse.ai",
  "description": "Morning House builds AI automations for small businesses. Smart Inbox sorts email and drafts replies for review. Lead Follow-Up acknowledges every new lead within minutes and follows up automatically if they go quiet. Review Requests asks happy customers for a Google review and drafts responses to the ones that come in.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "addressCountry": "ID"
  },
  "areaServed": "Worldwide",
  "sameAs": [
    "https://instagram.com/morninghouse.ai"
  ]
}
</script>
```

### Verification

- [ ] Organization schema in base layout `<head>`
- [ ] Using Liquid variables where appropriate
- [ ] No hardcoded values that should be dynamic
- [ ] Address accurate: Denpasar, Bali, Indonesia
- [ ] Social links current: Instagram only
- [ ] Services accurately described
- [ ] Validate with Google Rich Results Test after deploy

---

## Step 5 — LocalBusiness Schema

### Implementation

Add ProfessionalService schema as a separate block in `_layouts/default.html` `<head>`:

```html
<!-- GEO: ProfessionalService Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Morning House",
  "url": "https://morninghouse.ai",
  "description": "AI automation studio for small businesses. Smart Inbox, Lead Follow-Up, and Review Requests automation.",
  "image": "https://morninghouse.ai/assets/images/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "addressCountry": "ID"
  },
  "areaServed": {
    "@type": "Continent",
    "name": "Worldwide"
  },
  "telephone": "",
  "email": "",
  "sameAs": [
    "https://instagram.com/morninghouse.ai"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Inbox",
          "description": "AI-powered email sorting and reply drafting for small businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lead Follow-Up",
          "description": "Automated lead acknowledgment within minutes and intelligent follow-up sequences"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Review Requests",
          "description": "Automated review requests for happy customers and AI-drafted review responses"
        }
      }
    ]
  }
}
</script>
```

### Verification

- [ ] ProfessionalService schema added as separate block
- [ ] Correct @type for AI automation studio
- [ ] Services cataloged with descriptions
- [ ] No empty or placeholder values (omit phone/email if not public)
- [ ] Validate with Google Rich Results Test

---

## Step 6 — FAQ Section

### Implementation


FAQ data is stored in the frontmatter of relevant pages (e.g., `homepage.html`, `faq.html`, `pricing.html`).

```yaml
faq:
  kicker: Questions, answered plainly
  headline: Frequently asked
  items:
    - question: "What does Morning House do?"
      answer: "Morning House builds AI automation tools for small businesses."
    # ... additional items
```

### Page Integration

Render the FAQ content using the `faq.html` include:

```html
{% include faq.html %}
```

### Verification

- [ ] Questions derived from actual Morning House services
- [ ] FAQ section included in relevant pages via frontmatter
- [ ] FAQPage JSON-LD generated correctly if applicable
- [ ] Tailwind classes match existing design system
- [ ] Questions substantive and specific (not vague marketing)

---

## Step 7 — Sitemap

### Implementation

Morning House uses a dynamic `sitemap.xml` that iterates over `site.pages`. Ensure it is present at Jekyll root:

```xml
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for page in site.pages %}
  {% if page.url contains '.xml' or page.url contains '.txt' or page.url contains '.json' %}{% continue %}{% endif %}
  <url>
    <loc>{{ site.url }}{{ page.url | replace:'index.html','' }}</loc>
    <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
    <changefreq>{% if page.url == '/' %}weekly{% else %}monthly{% endif %}</changefreq>
    <priority>{% if page.url == '/' %}1.0{% else %}0.8{% endif %}</priority>
  </url>
  {% endfor %}
</urlset>
```

### Verification

- [ ] sitemap.xml generated
- [ ] All existing pages included (homepage, privacy)
- [ ] Accessible at https://morninghouse.ai/sitemap.xml
- [ ] robots.txt references sitemap URL

---

## Step 8 — IndexNow (Bing)

### Implementation

For Netlify deployment, add to `netlify.toml` or create a build plugin. Alternatively, manually submit at https://www.bing.com/indexnow after deployment.

Create key file at Jekyll root (example: `40a5e4b8c3d24f6e9a1b7c8d3e5f2a1b.txt`) containing the key string.

### Verification

- [ ] Key file at Jekyll root
- [ ] IndexNow submission process documented
- [ ] Manual submission completed after first deploy

---

## Step 9 — Speakable Schema *(optional)*

### Implementation

Add to `_layouts/default.html` `<head>`:

```html
{% if page.url == "/" %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      "h1",
      ".max-w-md"
    ]
  },
  "url": "https://morninghouse.ai/"
}
</script>
{% endif %}
```

### Verification

- [ ] Speakable schema targets h1 and main description
- [ ] CSS selectors match actual homepage elements
- [ ] Only applied to homepage (page.url check)

---

## Step 10 — Tailwind Content Paths Audit

### Implementation

Verify `tailwind.config.js` content array includes all new files:

```js
content: [
  './_layouts/**/*.html',
  './_includes/**/*.html',
  './_posts/**/*.{html,md}',
  './index.html',
  './privacy.html',
  './*.{html,md}',
  // Future pages
  './_data/**/*.yml',
]
```

### Verification

- [ ] tailwind.config.js content paths include all GEO files
- [ ] New FAQ section classes not purged from production CSS
- [ ] Glass morphism classes (backdrop-blur, bg-white/10) preserved
- [ ] Production build tested with full class retention

---

# Part 3: Final Report Format

Generate:

```yaml
deployment_report:
  status: "READY FOR PRODUCTION" or "NOT READY FOR PRODUCTION"

  completed_items:
    - Build validation
    - SEO metadata verification
    - Accessibility audit
    - Performance check
    - GEO implementation
    - robots.txt configured
    - llms.txt created
    - llms-full.txt created
    - Organization schema validated
    - ProfessionalService schema added
    - FAQ section implemented
    - sitemap.xml generated
    - IndexNow prepared

  fixed_issues:
    - [List any issues found and fixed]

  remaining_manual_tasks:
    - Submit llms.txt to directories
    - Submit IndexNow after deploy
    - Google Rich Results Test after deploy
    - Email form backend connection
    - Privacy policy page creation

  risks:
    critical: []
    high: []
    medium: []
    low: []

  recommendations:
    - Create dedicated service pages for Smart Inbox, Lead Follow-Up, Review Requests
    - Add case studies/testimonials section as clients come on board
    - Implement blog for AI automation thought leadership content
    - Add contact page with full form once launched
    - Consider video content explaining each tool

  build_status: "PASSED"

  lighthouse:
    performance: [score]
    accessibility: [score]
    best_practices: [score]
    seo: [score]

  cache_summary:
    files_scanned: [count]
    files_skipped: [count]
    findings_reused: [count]
    findings_new: [count]
    findings_fixed: [count]
    findings_remaining: [count]
```

---

# Agent Rules

Before declaring completion:

- [ ] Revalidate all modified files.
- [ ] Revalidate all affected layouts.
- [ ] Revalidate all affected includes.
- [ ] Revalidate Netlify configuration.
- [ ] Revalidate SEO metadata generation.
- [ ] Revalidate all GEO files (robots.txt, llms.txt, llms-full.txt).
- [ ] Revalidate all JSON-LD schema blocks.
- [ ] Revalidate FAQ data and template integration.
- [ ] Revalidate Tailwind CSS purge safety.

Never assume a fix worked.

Always verify.

---

# Success Condition

A project is considered complete only when:

- [ ] Production build succeeds
- [ ] No critical blockers remain
- [ ] Core Web Vitals are acceptable
- [ ] SEO requirements are satisfied
- [ ] Accessibility requirements are satisfied
- [ ] GEO implementation is complete and verified
- [ ] All GEO files are accessible at their expected URLs
- [ ] Structured data validates without errors
- [ ] Email capture form is functional
- [ ] Netlify deployment requirements are satisfied

Until then, continue auditing, fixing, validating, and reporting.

---

# References

- [ ] [GEO: Generative Engine Optimization — Princeton & IIT Delhi, KDD 2024](https://arxiv.org/abs/2311.09735)
- [ ] [llms.txt standard specification](https://llmstxt.org)
- [ ] [Jekyll documentation](https://jekyllrb.com/docs/)
- [ ] [Tailwind CSS Content Configuration](https://tailwindcss.com/docs/content-configuration)
- [ ] [IndexNow Protocol](https://www.indexnow.org/documentation)
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Morning House Website](https://morninghouse.ai)