# Nursery Rhymes PWA Design

## Overview

A PWA for parents to teach ~1-year-old babies nursery rhymes and tongue twisters. Parents swipe through songs TikTok-style and sing along with the displayed lyrics. Content is 70% Chinese, 30% English.

## Decisions

| Dimension | Decision |
|-----------|----------|
| Tech stack | Pure HTML/CSS/JS, zero dependencies, zero build tools |
| Swipe UX | CSS scroll-snap, full-screen vertical card switching |
| Audio | MVP: none. Play/pause button reserved for future |
| Content | Lyrics hardcoded in songs.js, ~15-20 songs |
| Content split | ~12-14 Chinese, ~5-6 English |
| PWA caching | Service Worker with Cache First + version string |
| Hot update | SW detects new version → banner prompt → user taps to refresh |
| Deploy | Cloudflare Pages, auto-deploy on git push |
| UI style | Large fonts (24px+), large buttons (64px+), soft baby colors, unique background per song |

## Project Structure

```
nursery_rhymes/
├── index.html          # Single page entry
├── style.css           # Styles
├── app.js              # Main logic (swipe, controls)
├── songs.js            # Song data (hardcoded)
├── sw.js               # Service Worker (cache + hot update)
├── manifest.json       # PWA manifest
└── icons/              # PWA icons (192x192, 512x512)
```

## Page Layout

Each song occupies one full viewport height card. Vertical scroll-snap switches between songs.

```
┌─────────────────────┐
│      emoji           │
│      Song Title      │
│      (large font)    │
│                      │
│   Lyric line 1       │
│   Lyric line 2       │
│   Lyric line 3       │
│   Lyric line 4       │
│   ...                │
│                      │
│     ▶ Play (large)   │
│                      │
│  ● ● ○ ○ ○ dots     │
│  ↕ swipe hint        │
└──────────────────────┘
```

## Interaction Details

- **Swipe**: `scroll-snap-type: y mandatory` on the container, each card is `height: 100vh`
- **Play/Pause**: Large centered button at bottom, 64px+ tap target. MVP: visual only, no audio
- **Lyrics**: Centered, 24px+ font, generous line-height for readability
- **Progress dots**: Bottom of screen, shows current position among all songs
- **Colors**: Soft pastel palette, each song gets a different background color via its `color` field

## Song Data Format

```js
{
  id: 1,
  title: "小兔子乖乖",
  lang: "zh",
  color: "#FFE4E1",
  emoji: "🐰",
  lyrics: [
    "小兔子乖乖",
    "把门儿开开",
    "快点儿开开",
    "我要进来"
  ]
}
```

## PWA & Hot Update

- Service Worker uses Cache First strategy with a versioned cache name (e.g., `nursery-v1`)
- All static assets are precached on install
- On update: bump version → push to Cloudflare Pages → user's SW detects change → downloads new assets in background → shows update banner → user taps to reload
- manifest.json: `display: standalone`, `orientation: portrait`, soft theme colors
