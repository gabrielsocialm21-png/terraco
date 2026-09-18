# Terraço Envidraçamentos — Design System

Brand & UI design system for **Terraço Envidraçamentos**, a 100% Sergipe-based
(Aracaju, Brazil) company specialising in **vidros inteligentes** — smart glass
envelopes / balcony glazing ("envidraçamento de varandas"). The brand positions
itself as premium, technical and warm: *"Vidros inteligentes, alma sergipana."*

This system was built from the client's visual-identity Figma file
(**"ID. VISUAL - TERRAÇO"**) plus six logo exports and nine social "destaque"
covers. The Figma file is a brand guideline + Instagram social kit — its component
inventory, colour variables and copy are the source of truth here.

## Sources
- **Figma:** `ID. VISUAL - TERRAÇO.fig` (mounted). Key pages/frames:
  `DUPLIQUE-ESTE-ARQUIVO-PARA-EDITAR` → `TOM DE VOZ`, `E010 - Color` (Essência),
  `E04 - Color` (palette), `Profile` (Instagram profile + story). Figma Variables:
  `Destaque, Cinza Médio, Chumbo, Off, 2`.
- **Uploads:** `MARCAAtivo 1–6` (logo lockups), `TERRAÇO Prancheta 1–9 DESTAQUES`
  (grainy story/highlight covers), `TERRAÇO Prancheta 1 MARCA`.
- Agency credited in the file chrome: **Yamb** ("© John Alex / 2025").

## Brand identity
Terraço's mark is three overlapping **glass panels** (a cool blue-grey gradient)
above an ultra-thin, airy **TERRAÇO** logotype with the descriptor
**ENVIDRAÇAMENTOS**. The mark exists as real bitmap lockups in `assets/logos/`
(symbol, horizontal, horizontal+descriptor, vertical — in dark-bg white and
light-bg dark tones). **There is no separate icon: the glass symbol IS the mark.**
The real logotype is a custom thin geometric face; we render brand type in
**Raleway** as the nearest available match (see Typography).

---

## CONTENT FUNDAMENTALS — how Terraço writes
Primary language is **Brazilian Portuguese**. Tone (from the file's *Tom de Voz*):
**seguro, técnico e elegante — mas nunca frio; próximo, humano e sergipano — mas
nunca informal demais; inspirador e sofisticado — mas sempre objetivo.**

- **Voice:** authoritative technical expertise with local warmth. Speaks *with
  security* (experience), *sofistication* (premium finish), *proximity* (a Sergipe
  company that gets the local way of living), and *clarity* (the client must grasp
  the value and safety).
- **Person:** addresses the client directly ("o seu ambiente", "transformar
  espaços") — warm second person, never slangy.
- **Casing:** wordmark and big display are **UPPERCASE, widely tracked**; body and
  UI use sentence case. Descriptors run as tracked all-caps ("VIDROS INTELIGENTES,
  ALMA SERGIPANA").
- **No emoji.** The only glyphs used in social copy are a downward arrow (↓) and
  the verified check. Numbers use Brazilian formatting (3.680, not 3,680).
- **Signature lines:** "Vidros inteligentes. Alma sergipana." · "Mais conforto,
  segurança e valorização." · "Atendimento em Aracaju e região."
- **Guiding words:** Confiança · Segurança · Tecnologia · Sofisticação · Cuidado ·
  Sergipanidade · Inteligência · Valorização.
- **Archetype:** *O Governante* (Ruler — security, authority, high standard) with
  a touch of *O Criador* (Creator — bespoke, transformative projects).

---

## VISUAL FOUNDATIONS
- **Base:** deep **Chumbo** charcoal `#1B1B1B` / slide canvas `#202020`. The system
  is **dark-first**; light layouts use **Off** `#F2F2F2`.
- **Two colour families over the dark base:**
  - **Cool / vidro** — blue-grey glass tones (`#DAE0E3 · #CEDDE6 · #D0E7ED ·
    #92B4C0 · #86A1AB`) and the signature **glass gradient** (`240.5°`, used on the
    mark and on flat panels).
  - **Warm / Sergipe** — `Marsala Terroso #AE4339`, `Terracota Suave #E58E6D`,
    `Creme Areia #F9EEDB` — the earthy, human counterpoint.
  - **Accent:** **Destaque** glass-cyan `#52DDEB` (with teal companion `#42B1BC`) —
    the single brightest hit, used sparingly for emphasis and active states.
- **Typography:** thin geometric **display** (Raleway 100–300) for the wordmark
  voice and oversized section numerals; **Archivo** as the institutional workhorse
  for headings, body and UI; tracked all-caps **labels**. Big display line-height is
  very tight (0.86); body is airy (27px on 16px).
- **Imagery:** two registers — (1) warm, natural **lifestyle & architecture**
  photography (balconies, glazing, families at home; warm daylight, real interiors);
  (2) the **grainy black-and-white glass/light textures** ("destaques") — heavy film
  grain, high contrast, abstract refracted light — used for covers, story openers
  and section dividers. Backgrounds are full-bleed; text sits over **protection
  gradients** (bottom/top scrims), never a solid capsule.
- **Corners & cards:** panels use **16px** radius (24px large; 7px for the IG
  buttons — exact from source). Cards on dark are a subtle raised `#262626`; on
  imagery they are frameless with a scrim.
- **Borders:** hairline, low-opacity off-white on dark (`0.12`–`0.28`).
- **Shadow:** soft and deep for elevation (`0 8–24px`), plus a cool **glass shadow**
  tint for floated glass surfaces.
- **Transparency & blur:** the glass gradient and semi-transparent panels evoke the
  product itself; use translucency deliberately, not decoratively.
- **Motion:** restrained and elegant — fades and gentle `ease-out` slides
  (150–480ms). No bounces, no infinite loops on content.
- **Hover/press:** hover lightens/brightens; press = `brightness(0.9)`. Keep it
  quiet.
- **Layout:** guideline slides sit on a generous ~120px gutter with **corner info
  chrome** (brand label, topic, © Terraço · Yamb, page number).

---

## ICONOGRAPHY
The source file ships **no custom icon set or icon font**. Iconography is limited to:
- The **glass symbol** (the mark) — the brand's one true graphic device.
- The **verified check** (recreated as `VerifiedBadge`, tinted glass-cyan).
- Generic **Instagram app chrome** (home/search/add/heart/back/close/…), which we
  draw as thin ~1.8px line icons matching iOS Instagram, purely for the mockup.
- Unicode ↓ in social copy.

**Substitution flagged:** no icon library is used by the brand; app-chrome glyphs are
hand-drawn line icons. If a broader UI icon set is ever needed, standardise on a thin
line set (e.g. Lucide/Feather at ~1.8px) to match. No emoji.

---

## FONT SUBSTITUTIONS (please confirm / supply originals)
The brand's real fonts are **licensed / non-web** faces. We substituted the nearest
Google Fonts and flag them here:
- Custom thin logotype / display → **Raleway** (100–300). Close in spirit; the true
  wordmark is slightly more condensed.
- **"NewBlack Typeface"** (labels/numerals) → **Archivo** tracked caps.
- **"Sentic Text"** (colour-swatch labels) → **Archivo / Raleway**.
- **Montserrat Light** (200px section numerals) — available, used as-is.
- **SF Pro** (Instagram UI) → system font stack (`-apple-system`).
- **Archivo** — the institutional body font — is genuine and available.

➡️ **If you have the licensed brand fonts (the real logotype face + NewBlack +
Sentic), please share the files and we'll swap them in.**

---

## Components
Built as reusable React primitives (namespace `window.TerraODesignSystem_91237a`):

**Brand** (`components/brand/`)
- **Logo** — brand mark from the real bitmap lockups. *(kit: `Logo`)*
- **InformacoesLayout** — corner metadata chrome for guideline slides. *(kit:
  `Informações - Layout`, the most-instanced symbol — 17×)*
- **GrainCover** — grainy B&W glass-texture cover with the thin logotype.
  *(intentional addition — the `DESTAQUES` cover motif)*

**Social — Instagram kit** (`components/social/`)
- **Seguir** — Follow / Seguindo button. *(kit: `Seguir`)*
- **PerfilStory** — story/profile avatar with ring states. *(kit: `Perfil + Story`)*
- **VerificadoPagina** — page handle + verified check. *(kit: `Verificado pagina`)*
- **InstagramHighlightIcons** — highlight ("destaque") cover. *(kit: `Instagram
  highlight icons`)*
- **IGButton** — generic action button underlying `Seguir` (also Message / Email).
  *(intentional addition)*
- **StoryAvatar** — avatar primitive underlying `PerfilStory`. *(intentional addition)*
- **HighlightCover** — cover primitive underlying `InstagramHighlightIcons`.
  *(intentional addition)*
- **VerifiedBadge** — the check glyph used by `VerificadoPagina`. *(intentional addition)*
- **ProfileName** / **UserName** / **AccountType** / **Website** — profile text
  fields. *(kit: `Name` · `user_name` · `account type` · `website`)*
- **ProfileStat** — Posts / Followers / Following stat column. *(intentional addition —
  discrete part of the "Profile" frame)*
- **IGTabBar** — Instagram bottom navigation. *(intentional addition — app chrome)*

**Chrome — device & status** (`components/chrome/`)
- **StatusBar** — iOS status bar. *(kit: `Bars/Status Bar/*` — Time / Wifi / Battery /
  Cellular / Connections / Dark Status Bar)*
- **HomeIndicator** — bottom home bar. *(kit: `• iPhone XS / Home Indicator`)*
- **Camera** — story-composer camera glyph. *(kit: `Camera`)*

**Media — feed tiles** (`components/media/`)
- **Img01 … Img09** — square feed-post tiles for the profile grid. *(kit: `Img-01`…
  `Img-09`; 04–06 are the kit's flat placeholders, the rest carry real photos)*

### Component mapping to the Figma kit
Kit families are implemented under their source vocabulary — **Seguir**,
**PerfilStory** (`Perfil + Story`), **VerificadoPagina** (`Verificado pagina`),
**InstagramHighlightIcons**, **Logo**, **InformacoesLayout** (`Informações - Layout`).
Six lower-level **intentional additions** back them and are reused directly: IGButton,
StoryAvatar, HighlightCover, VerifiedBadge, ProfileStat, GrainCover, IGTabBar.

**Intentionally NOT built** as components — only the `Img-01…09` gray photo
placeholders remain: they carry no design (flat #C4C4C4 fills standing in for the
real photography, which lives in `assets/photos/`), so there is nothing to
componentise. Everything else in the kit is now built.

## UI kits
- **`ui_kits/instagram/`** — interactive @terracoenvidracamentos profile + story
  mockup inside an iPhone frame (recreates the source "Profile" frame).

## Slides
- **`slides/`** — six brand-guideline slide types (cover, section divider, statement,
  colour spec, grain cover, institutional) at 1280×720, with the corner info chrome.

## Foundations (Design System tab)
- **`guidelines/`** — specimen cards: colours (accent / cool / warm / neutral /
  gradient), type (display / institutional / labels), spacing, radius & elevation,
  and brand (voice words / grain motif / logo lockups).

---

## Root manifest / index
- `styles.css` — global entry point (imports only). Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `effects.css`, `fig-tokens.css`
  (Figma Variables).
- `assets/` — `logos/`, `photos/` (real project photography), `textures/`
  (grain covers).
- `components/` — `brand/`, `social/`.
- `ui_kits/instagram/` — profile + story mockup.
- `slides/` — guideline slide types.
- `guidelines/` — foundation specimen cards.
- `SKILL.md` — Agent-Skill entry point.

## Caveats
- Brand fonts are substituted (see above) — pending the licensed originals.
- White logo lockups are recoloured from the black exports (alpha preserved), so the
  glass panels read as frosted white on dark rather than the cool gradient; the
  colour gradient survives on the light-background lockups and the `symbol` asset.
- No standalone brand icon set exists in the source; app-chrome glyphs are generic.
