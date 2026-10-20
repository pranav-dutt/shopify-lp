# Rabiro Design System

The design language for **Rabiro — Marketing Agency**. One system, two themes, four disciplines.

---

## 1. Company context

Rabiro is a full-service marketing agency founded **5 May 2022** by **Pranav Dutt Tripathi** and **Shashank Dubey**, launched with ₹1,574, a hosting account and a skill set. Four earlier ventures failed first — digital products, print-on-demand, dropshipping — and that history is the brand's spine: *earned, not inherited*. The agency now runs from **Mirans Square, D180C, 3rd Floor, Sector 74A, Mohali 140308** with a team of 13.

**Proof points** (keep these current before publishing anywhere):
- ₹85,65,537 / \$88,700 in ad spend currently under management (Meta Partner Center)
- 150 Shopify stores built · Official Shopify Partner
- 80 WordPress and business websites delivered
- ~1.5 years of 360° end-to-end management for Everhealthy Nutrition Academy

**Leadership.** Shashank leads operations and finance. Pranav leads team, clients and agency direction.

### Four service pillars
The system is built around these four and nothing else. Every services grid, deck, proposal and site nav uses this order and these names.

| Pillar | Scope |
|---|---|
| **Branding** | Brand strategy & positioning · visual identity (logo, brand system, guidelines) · messaging & tone of voice · packaging & label · rebrand / refresh |
| **Marketing** | Performance marketing (Meta & Google — setup, audits, creative testing, scaling) · SEO (technical, on-page, content, schema) · social media management & content calendars · email & WhatsApp automation · influencer & UGC partnerships |
| **Development** | Shopify themes & custom apps · WordPress & custom plugins · CRM · SaaS products · landing pages & websites · maintenance & performance |
| **Production** | Product photography · Reels & short-form video · UGC-style shoots · ad creative (static + video) · campaign / lookbook shoots |

### Sources used to build this system
- `uploads/rabiro new logo.png` — master logotype, light artwork (two lockups)
- `uploads/19.png` — master logotype, dark artwork (two lockups)
- `uploads/pasted-1786464162816-0.png` — live Instagram grid, used as evidence for the campaign/social register
- `uploads/about-rabiro.pdf` — company history and proof points
- Brand colours and typeface supplied directly by the client: Rabiro Blue `#1456E5`, Rabiro Green `#7BCF46`, Comfortaa

---

## 2. The positioning this system has to carry

Rabiro is not a cheap agency and must never look like one. The competitive set — Indian performance agencies — defaults to loud gradients, stock 3D, badge soup and stacked testimonials. **Rabiro's differentiator is restraint.** The system is deliberately quiet so that the two brand colours, the work itself, and the numbers do all the talking.

Three rules that protect the premium:

1. **Colour is a scalpel.** Neutrals carry ≥ 90% of every surface. Blue is action. Green is proof. The gradient appears **once** per view.
2. **Space is the luxury.** Section rhythm is 120px, not 48px. Anything that feels crowded is wrong before it is ugly.
3. **Nothing decorative.** No shape confetti, no floating blobs, no drop-shadowed emoji. If an element isn't information or navigation, delete it.

---

## 3. Content fundamentals

### Voice
Rabiro speaks like an operator, not a vendor. Short declaratives. Concrete nouns. Numbers wherever a number exists. It is confident without being loud, and it never oversells — the company's own origin story is about four failures, so honesty is on-brand.

**Person.** "We" for the agency, "you/your" for the client. Never third-person ("Rabiro provides…") outside legal or proposal boilerplate.

**Sentence shape.** One idea per sentence. Fragments are allowed and encouraged in display type. Body copy is complete sentences.

| Do | Don't |
|---|---|
| "₹85.6L in ad spend under management." | "We manage significant advertising budgets for our valued clients." |
| "We don't just promise reach. We deliver results." | "Unlock exponential growth with our synergistic solutions!" |
| "150 Shopify stores built." | "Countless successful ecommerce projects!" |
| "A team that stays." | "Your trusted digital transformation partner." |

### Casing
- **Display / headline:** sentence case. Never ALL CAPS in the corporate register.
- **Eyebrows, labels, nav, buttons, data labels:** UPPERCASE, mono, 0.18em tracking.
- **Buttons:** sentence case ("Book a call", "See the work"), never title case.
- Currency always written with the symbol and Indian grouping: ₹85,65,537. Dual currency as `₹85.6L / \$88.7K` when the audience is mixed.

### Two registers — know which one you're in
The system has a **corporate register** and a **campaign register**. They share colours, logo and grid; they do not share type behaviour. Mixing them is the fastest way to look average.

**Corporate register** — website, decks, proposals, dashboards, client reporting, hiring, case studies.
Manrope, generous space, sentence case, one accent per view, no illustration. Serious money lives here.

**Campaign register** — Instagram, Reels covers, ad creative, festive posts.
Heavier weights, tighter crops, Hinglish, cutout photography, blue keyline boxes and speech bubbles, warm `--paper` backgrounds. Playful is allowed here — "21 din mein paisa double", "Baap ka, dada ka, bhai ka, sabka marketing karega re tera Rabiro." This is how the agency actually talks on social and it works; it just never leaks onto a proposal.

### Hinglish
Only in the campaign register, only when the punchline needs it, always with the English keyword left in English (`campaign`, `leads`, `strategy`, `marketing`) so the meaning survives for non-Hindi readers.

### Emoji
Not used in the corporate register — ever. In the campaign register, at most one per caption, never inside a graphic.

### Copy lengths to design against
- Eyebrow: 1–3 words
- Display headline: 3–7 words
- Deck / hero subhead: ≤ 14 words
- Body paragraph: ≤ 3 sentences, 62ch measure
- Service card body: ≤ 18 words
- Button label: 1–3 words

---

## 4. Visual foundations

### 4.1 Colour
Two brand colours and a cool-neutral ink ramp. Full token list in `tokens/colors.css`.

- **Rabiro Blue `#1456E5`** — the action colour. Primary buttons, links, active states, the one word you want read first. In dark theme it stays `#1456E5` on fills but shifts to `--blue-300 #82A6F6` for text so it clears contrast.
- **Rabiro Green `#7BCF46`** — the proof colour. Success, growth deltas, "delivered", metric highlights, the second half of the gradient. Never a primary button in the corporate register; it reads consumer-grade at scale.
- **Teal `#17A48C`** — not a brand colour. It exists only as the bridge stop inside the gradient, sampled from the logotype itself.
- **Neutrals** — a 15-step cool ramp at hue ≈ 255. Backgrounds, text and borders all come from here.
- **Paper `#F4F2ED`** — warm off-white, reserved for print collateral and social creative. It's what the live Instagram grid sits on. Do not use it for product UI.

**Ratio discipline:** ~90% neutral, ~7% blue, ~3% green. If you can see more than two brand-coloured objects in one viewport, remove one.

**Gradient.** `--gradient-brand` runs blue → azure → teal → green at 100°, with stops sampled from the real logotype. Legal uses: a 2px rule, a thin keyline border, one gradient word, a large low-opacity ambient wash behind a dark hero. Illegal uses: button fills at small sizes, body text, icon fills, backgrounds behind body copy, more than one instance per view.

### 4.2 Typography
Four faces, four jobs. Specimens in `guidelines/`.

| Role | Face | Use |
|---|---|---|
| Brand | **Comfortaa** | The logotype only, plus rare oversized brand statements. Never body, never UI. |
| Structural | **Manrope** 200–800 | Every headline, every paragraph, every control. Carries the system. |
| Editorial | **Instrument Serif** (regular + italic) | Pull quotes, one italicised accent word in a display headline, chapter numbers. Roughly one appearance per page. |
| Technical | **JetBrains Mono** | Eyebrows, labels, metric units, table headers, IDs, code. |

Display type is set tight: −0.028em to −0.04em tracking, 0.92–1.08 line-height. Body is set open: 1.6–1.65 line-height, 62ch measure. The contrast between the two is a large part of what makes the system read expensive.

**Weights in practice.** Display uses 800 sparingly and 600–700 as the default; 200–300 is available for very large numerals and is where the system gets its editorial feel (a 76px ExtraLight metric next to an 11px mono label is the house move).

### 4.3 Space & layout
4px base grid; component padding steps 8/12/16/24, layout steps 32/48/64/80/120/160. 12-column grid, 32px gutter (48px above 1200px). Containers: 720 / 960 / 1200 / 1400. Section rhythm is **120px** vertical by default, 160px for hero and closing sections, 72px only in dense product UI.

Alignment is left, always. Centred layouts are permitted for exactly two things: a full-bleed statement slide and a closing CTA block.

### 4.4 Backgrounds
Flat. Light theme is `#FBFCFD` canvas with `#FFFFFF` cards; dark theme is `#07080C` canvas with `#0F1219` cards. There are exactly three permitted ambient treatments, all optional and all dark-theme-first:
1. A single 900px radial wash of `rgba(20,86,229,0.10)` bleeding off one corner.
2. A 1px hairline grid at `rgba(255,255,255,0.04)`, 80px pitch, masked to fade out.
3. A full-bleed photograph at 100% with a bottom-up ink protection gradient.

No mesh gradients, no noise textures in the corporate register, no aurora, no blobs. Social creative may use a light paper grain — that's a campaign-register exception.

### 4.5 Imagery
Photography is the hero, illustration is not used. Direction: real, well-lit, high-contrast, slightly cool grade in the corporate register; warm and punchy in campaign work. Cutout subjects on flat colour are a campaign-register signature (see the live grid). Product photography is shot clean on neutral or single-colour seamless. Faces are lit, never moody. No stock-looking handshake/office imagery ever.

Image radius follows surface radius (18px). Full-bleed imagery has no radius. Protection: images carrying text get a bottom-up `linear-gradient(to top, rgba(10,12,18,.85), transparent 60%)` — never a flat 40% black scrim.

**Placeholders in this system** use a striped SVG with a mono caption describing the shot required.

### 4.6 Cards & surfaces
Light theme: `#FFFFFF`, 1px `--border-default` hairline, 18px radius, `--shadow-2`, no gradient border by default.
Dark theme: `#0F1219`, 1px `rgba(255,255,255,0.10)` hairline, 18px radius, elevation carried by lightness and the hairline rather than shadow. Feature cards may take a top gradient rule or a 1px gradient keyline — one per view.

Radii: 4 (chips/inputs-in-tables) · 8 (inputs, small buttons) · 12 (buttons, tags) · **18 (cards — the default)** · 26 (modals, large panels) · 36 (hero panels) · pill (badges, filters, the boxed logo lockup).

### 4.7 Elevation & shadow
Shadows are two-layer, cool-tinted and deliberately faint in light theme (max 14% at rest). Dark theme uses deeper black shadows plus an `inset 0 1px 0 rgba(255,255,255,0.07)` top highlight to define edges. `--shadow-brand` (a blue glow) is reserved for the single primary CTA on a page.

### 4.8 Motion
Purposeful, short, expo-eased. Nothing bounces — bounce reads consumer, not premium.

- Durations: 90ms instant · 140ms fast (hover, colour) · 220ms base (most transitions) · 380ms slow (panels, modals) · 640ms slower (page/section entrances).
- Easing: `--ease-out` `cubic-bezier(.16,1,.3,1)` for anything entering; `--ease-standard` for state change; `--ease-in-out` for anything reversible.
- Entrance pattern: fade + 12px rise, 640ms, 60ms stagger between siblings. Once per element, on first view.
- Never: spring/bounce, rotation, scale-up entrances, parallax on text, marquees except a deliberate logo ticker.
- `prefers-reduced-motion` collapses all of the above to opacity-only at 140ms.

### 4.9 Interaction states
- **Hover (light):** surface darkens via `--overlay-hover` 4%; cards lift `translateY(-2px)` and step to `--shadow-3`; links go `--text-brand` → `--rabiro-blue`.
- **Hover (dark):** surface *lightens* 6%; border steps `--border-default` → `--border-strong`.
- **Press:** `scale(0.985)` + `--overlay-press`; no colour change beyond the overlay.
- **Focus:** 2px `--border-focus` outline at 2px offset, plus `--ring-focus` on form controls. Never removed.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no other change.
- **Loading:** opacity pulse on the label, never a spinner larger than 16px inside a control.

### 4.10 Transparency & blur
Used for exactly three things: sticky navigation (`backdrop-filter: blur(18px)` over an 80% surface), modal scrims (`--bg-scrim`), and dark-theme soft brand fills (`rgba(20,86,229,0.14)`). Frosted glass is not a decorative treatment here.

---

## 5. Logo & iconography

### Logo
Provided artwork only — **no mark was ever drawn or reconstructed for this system.** Everything in `assets/` is cut from the client's master files with the background alpha'd out.

| File | Use |
|---|---|
| `assets/logo-horizontal-dark.png` | Primary lockup, dark ink — light backgrounds |
| `assets/logo-horizontal-light.png` | Primary lockup, light ink — dark backgrounds |
| `assets/logo-boxed-dark.png` | Pill lockup with gradient keyline — light backgrounds, social stamps |
| `assets/logo-boxed-light.png` | Pill lockup with gradient keyline — dark backgrounds |
| `assets/wordmark-dark.png` / `-light.png` | Wordmark alone, no descriptor — favicons, tight spaces, app headers |

**Rules.** Clear space on all sides = the height of the "o" counter. Minimum width: 120px screen / 28mm print for the full lockup; 84px for the wordmark. Never recolour, outline, stretch, rotate, add shadow, or place the primary lockup on a busy photograph — use the boxed lockup on imagery, as the live Instagram grid does. There is **no standalone symbol/monogram**; if a square avatar is needed, use the wordmark's "ro" ring crop from the master file or a plain gradient tile — do not invent one.

### Iconography
No icon set was supplied with the brand. **Substitution flagged: this system uses [Lucide](https://lucide.dev) at 1.5px stroke** — geometric, open-terminal, rounded caps, which sits correctly against Comfortaa's rounded geometry and Manrope's semi-geometric forms. Load from CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

- Sizes: 16 (inline/labels) · 20 (buttons, list items) · 24 (nav, cards) · 32 (feature). Stroke stays 1.5px at every size; never scale stroke with the icon.
- Colour: `currentColor`. Icons inherit text colour and are never gradient-filled.
- Icons never appear alone as a service illustration — pillar cards use type and number, not a picture.
- Unicode as icon: only `→` (arrows in links/CTAs, matching the live grid) and `·` as a separator. No emoji, no dingbats.

**If Rabiro has its own icon set, replace Lucide and delete this note.**

---

## 6. Index

The system and the things built with it are kept apart. Everything at the root is **the system**;
`website/` is a **consumer** of it and owns no tokens, assets or component source.

```
SYSTEM (root)
styles.css                  entry point — @import list only
tokens/                     fonts · colors (light + dark) · typography · spacing · effects · base
assets/                     supplied logo lockups — horizontal · boxed · wordmark, light + dark ink
guidelines/                 20 foundation specimen cards
components/
  core/                     Button · IconButton · Badge · Tag · Divider
  forms/                    Input · Textarea · Select · Checkbox · Radio · Switch
  surfaces/                 Card · Tabs · Accordion · Dialog · Tooltip · Toast
  brand/                    Logo · Eyebrow · StatBlock · ServiceCard
ui_kits/
  _ds-loader.js             RBLoad / RBCoreFiles — resolves components in the browser
  website/                  agency marketing site kit — corporate register
  social/                   Instagram feed, story and carousel templates — campaign register
slides/                     ten 1920×1080 deck templates on deck-stage
templates/
  pitch-deck/               PitchDeck.dc.html — 1920×1080 deck starting folder
  landing-page/             LandingPage.dc.html — corporate-register marketing page
thumbnail.html              the system's tile — logo on ink + brand swatch strip
SKILL.md                    Agent Skills manifest

APPLICATIONS
website/                    the agency marketing site — five pages, shared nav + footer,
                            site-data.js copy layer, motion.js. Pulls ../styles.css and
                            ../assets/ only. See website/readme.md.
```

When a value the site needs doesn't exist yet, it gets added to `tokens/` — never hard-coded inside
`website/`. New applications (dashboards, proposals, microsites) follow the same shape: their own
folder, referencing up.

Each component ships three files: `.jsx` (implementation), `.d.ts` (documented props) and
`.prompt.md` (what it is *for* — usually narrower than its props allow). Read the `.prompt.md`
before using a component.

### Intentional additions
No source defined a component inventory, so a standard primitive set was authored. Four brand-specific additions beyond the standard set, each earning its place:
- **Logo** — enforces the correct lockup/theme pairing so nobody hand-places a PNG.
- **Eyebrow** — the mono uppercase label is the system's most repeated signal; it deserves a component.
- **StatBlock** — the proof numbers are core to positioning and must always be set the same way.
- **ServiceCard** — the four pillars appear on the site, in decks and in proposals; one implementation.

### Templates
`templates/<slug>/` folders are what a consuming project copies to start a new piece of work. Each
holds its entry `.dc.html` plus a `ds-base.js` whose single `base` line points at this system — edit
that one line when the folder is copied elsewhere. Templates are deliberately *not* compiled into the
component bundle; they are starting layouts, not primitives.

### Known gaps / to confirm with the client
- Font files were not supplied; Comfortaa, Manrope, Instrument Serif and JetBrains Mono are loaded from Google Fonts. Send licensed binaries if any of these are self-hosted.
- No icon set supplied — Lucide substituted (see above).
- No standalone symbol/monogram exists in the supplied artwork.
- Photography library not supplied; all imagery in this system is a labelled placeholder.
