# Release Notes — Latin Adyghebze & Readability Improvements

**Branch:** `language/adyghebze-latin`
**Date:** 2026-04-22

---

## 1. Latin Adyghebze Locale (`ad-la`)

### New Locale Added
- Added `ad-la` (Adıǵabze — Latin script) as a new language option alongside the existing `ad-cr` (Cyrillic script)
- Both variants share the Circassian flag icon in the language selector dropdown

### Files Created
- `i18n/locales/ad-la.ts` — full translation stub with all keys, ready to fill
- `public/quotes/ad-la.json` — quotes file for the homepage carousel
- `public/images/lang/ad-la.png` — flag image (shared with Cyrillic variant)

### ESLint Configuration
- Added a file-level ESLint override for `ad-la.ts` to use double quotes instead of single quotes
- Required because Latin Adyghebze uses the apostrophe `'` linguistically (e.g. `ş'e`, `ĺ'ı`) which conflicts with single-quoted TypeScript strings

---

## 2. Cyrillic Adyghebze Locale Renamed (`ad` → `ad-cr`)

- Renamed `i18n/locales/ad.ts` → `i18n/locales/ad-cr.ts`
- Renamed `public/images/lang/ad.png` → `public/images/lang/ad-cr.png`
- Renamed `public/quotes/ad.json` → `public/quotes/ad-cr.json`
- Updated `nuxt.config.ts` locale entry from `code: 'ad'` to `code: 'ad-cr'`
- Added 301 redirect rules: `/ad` → `/ad-cr` and `/ad/**` → `/ad-cr/**` to preserve old links

---

## 3. History Page — i18n Wiring

Previously the history page had all text hardcoded in English regardless of the selected language.

### Changes
- Moved all 15 timeline events (1711–1860) into `history.events[]` in locale files
- Moved the 1864 genocide article paragraphs into `history.genocide_article.p1–p4`
- Updated `history.vue` to use `tm()` + `rt()` for the timeline data
  - `tm()` returns compiled message AST objects in vue-i18n v9 — `rt()` is required to resolve them to plain strings
- Added Circassian (Cyrillic) translations for all new history keys in `ad-cr.ts`

---

## 4. Language Persistence Bug Fix

**Problem:** Selecting a non-English language and then navigating to another page would silently reset the language back to English.

**Root Cause:** Two compounding issues:
1. `LangSelect.vue` used `setLocale()` which changed the runtime locale without updating the URL. With `strategy: 'prefix_and_default'`, the locale lives in the URL path (e.g. `/ad-cr/history`), so navigating via a bare path discarded it.
2. `Navbar.vue` linked to raw paths like `{ path: '/about' }` instead of locale-aware paths, stripping the locale prefix on every navigation.

**Fix:**
- `LangSelect.vue`: replaced `setLocale()` + `<div @click>` with `useSwitchLocalePath()` + `<NuxtLink>` so language switching navigates to the locale-prefixed equivalent of the current page
- `Navbar.vue`: introduced `useLocalePath()` and wrapped all link targets with `localePath('...')` to preserve the active locale across navigation

---

## 5. Readability Improvements

### Line Length
- Added `max-width: 68ch` and `margin-inline: auto` to `p` elements globally
- Reduces average words per line from ~19–20 down to ~10–12
- Container width is unchanged — only paragraph text is constrained; images and other block elements are unaffected

### Section Title Alignment
- Updated `SectionHeaderNoImage.vue` to center-align titles (`align-items: center`, `text-align: center`)
- Applied across all section headers on the About and Diaspora pages

### Font Size
- Increased body font size from `16px` to `20px`
- Line height adjusted from `1.5` to match the larger size

### Font Weight
- Set `font-weight: 500` on the body
- Uses Manrope at its shipped medium weight for improved readability

### Text Color
- Set explicit `color: #000` on the body to ensure pure black text in light mode

### Font Fallback — Special Characters
- Added `Noto Sans` as a fallback font in the font stack (`font-family: 'Manrope', 'Noto Sans', serif`)
- Fixes an issue where extended Latin characters used in Adyghebze Latin script (ḱ, ḣ, ṫ, ṕ, ǵ) appeared heavier than surrounding text because the browser was falling back to a system font that synthesized bold differently
- Noto Sans has consistent weight rendering across its full Unicode range

---

## 6. Other Fixes

- Created empty `public/quotes/fr.json` and `public/quotes/tr.json` to suppress Vue Router warnings for missing quote files on French and Turkish locales
- Added `ISSUE_*.md` to `.gitignore` to prevent local issue draft files from being committed
