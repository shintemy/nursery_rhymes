# Nursery Rhymes PWA Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a PWA that displays nursery rhymes/tongue twisters with TikTok-style vertical swiping for parents to sing to babies.

**Architecture:** Single-page static PWA using CSS scroll-snap for full-screen vertical card switching. Song data hardcoded in JS. Service Worker handles caching and hot updates. Deploy to Cloudflare Pages.

**Tech Stack:** Pure HTML, CSS, JavaScript. No dependencies, no build tools.

---

### Task 1: Project Scaffolding - manifest.json & Icons

**Files:**
- Create: `manifest.json`
- Create: `icons/icon-192.png`
- Create: `icons/icon-512.png`

**Step 1: Create manifest.json**

```json
{
  "name": "宝宝儿歌",
  "short_name": "儿歌",
  "description": "婴儿歌曲和绕口令",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#FFF0F5",
  "background_color": "#FFF0F5",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Step 2: Generate placeholder icons**

Use a simple canvas-based script or create minimal PNG icons with an emoji as the icon content. For now, generate solid-color placeholder PNGs.

**Step 3: Commit**

```bash
git add manifest.json icons/
git commit -m "feat: add PWA manifest and placeholder icons"
```

---

### Task 2: Song Data

**Files:**
- Create: `songs.js`

**Step 1: Create songs.js with all song data**

Export a `songs` array. Each song has: `id`, `title`, `lang`, `color`, `emoji`, `lyrics` (array of strings).

Chinese songs (~14):
1. 小兔子乖乖 🐰 #FFE4E1
2. 两只老虎 🐯 #FFF3E0
3. 小星星 ⭐ #E8EAF6
4. 数鸭子 🦆 #E0F7FA
5. 拔萝卜 🥕 #FFF8E1
6. 世上只有妈妈好 💝 #FCE4EC
7. 小燕子 🐦 #E8F5E9
8. 找朋友 🤝 #F3E5F5
9. 四是四十是十 🔢 #FFEBEE (绕口令)
10. 吃葡萄不吐葡萄皮 🍇 #EDE7F6 (绕口令)
11. 八百标兵奔北坡 🏔️ #E0F2F1 (绕口令)
12. 红凤凰粉凤凰 🦚 #FBE9E7 (绕口令)
13. 虫虫飞 🦋 #F1F8E9
14. 一闪一闪亮晶晶 ✨ #E3F2FD

English songs (~6):
15. Twinkle Twinkle Little Star ⭐ #E8EAF6
16. Old MacDonald Had a Farm 🐄 #FFF3E0
17. Baa Baa Black Sheep 🐑 #EFEBE9
18. Row Row Row Your Boat ⛵ #E0F7FA
19. Itsy Bitsy Spider 🕷️ #F3E5F5
20. Head Shoulders Knees and Toes 🧒 #FCE4EC

Write out full lyrics for each song.

**Step 2: Verify syntax**

Run: `node -c songs.js`
Expected: No syntax errors

**Step 3: Commit**

```bash
git add songs.js
git commit -m "feat: add song data with 14 Chinese and 6 English songs"
```

---

### Task 3: HTML Structure

**Files:**
- Create: `index.html`

**Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no">
  <meta name="theme-color" content="#FFF0F5">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <title>宝宝儿歌</title>
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icons/icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Update banner (hidden by default) -->
  <div id="update-banner" class="update-banner hidden">
    <span>发现新内容</span>
    <button id="update-btn">点击更新</button>
  </div>

  <!-- Main scroll container -->
  <div id="container" class="container">
    <!-- Song cards rendered by JS -->
  </div>

  <!-- Progress dots -->
  <div id="dots" class="dots"></div>

  <script src="songs.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add HTML structure with scroll container and update banner"
```

---

### Task 4: CSS Styles

**Files:**
- Create: `style.css`

**Step 1: Create style.css**

Key CSS requirements:
- `* { margin: 0; padding: 0; box-sizing: border-box; }`
- `html, body { height: 100%; overflow: hidden; font-family: system-ui, sans-serif; }`
- `.container`: `height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; -webkit-overflow-scrolling: touch;`
- `.card`: `height: 100vh; scroll-snap-align: start; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; padding-bottom: 4rem;`
- `.card-emoji`: `font-size: 4rem; margin-bottom: 0.5rem;`
- `.card-title`: `font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: #333;`
- `.card-lyrics`: `font-size: 1.5rem; line-height: 2.2; text-align: center; color: #444;`
- `.dots`: `position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 10;`
- `.dot`: `width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.2); transition: all 0.3s;`
- `.dot.active`: `background: rgba(0,0,0,0.6); transform: scale(1.3);`
- `.update-banner`: `position: fixed; top: 0; left: 0; right: 0; padding: 12px; background: #4CAF50; color: white; text-align: center; z-index: 100; display: flex; justify-content: center; align-items: center; gap: 12px;`
- `.update-banner.hidden`: `display: none;`
- `.update-banner button`: `background: white; color: #4CAF50; border: none; padding: 6px 16px; border-radius: 4px; font-size: 1rem; cursor: pointer;`
- Safe area insets: `padding-top: env(safe-area-inset-top);` on container, `padding-bottom: env(safe-area-inset-bottom);` on dots

**Step 2: Verify with preview**

Open in browser, confirm scroll-snap works with placeholder content.

**Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add styles with scroll-snap, large fonts, and baby colors"
```

---

### Task 5: Main App Logic

**Files:**
- Create: `app.js`

**Step 1: Create app.js with core functionality**

The app.js must do:

1. **Render cards**: Loop over `songs` array, create a `.card` div for each song with emoji, title, and lyrics. Set `background-color` from song data. Append to `#container`.

2. **Render dots**: Create one `.dot` per song in `#dots`. First dot starts as `.active`.

3. **Track scroll position**: Listen to `scroll` event on `#container`. Use `IntersectionObserver` (threshold 0.5) on each card to determine which card is currently visible. Update active dot accordingly.

4. **Swipe hint**: On first visit, show a subtle "↕ 上下滑动" animation hint at bottom. Disappear after first scroll. Store in `localStorage` that hint was shown.

5. **Service Worker registration**: At end of file, register `sw.js`. Listen for `controllerchange` event to detect updates. When SW update is found, show `#update-banner`. When user clicks `#update-btn`, call `location.reload()`.

```js
// Core structure:
function renderCards() { ... }
function renderDots() { ... }
function setupScrollTracking() { ... }
function setupSwipeHint() { ... }
function registerSW() { ... }

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderDots();
  setupScrollTracking();
  setupSwipeHint();
  registerSW();
});
```

**Step 2: Verify in browser**

Open index.html via local server. Verify:
- All songs render as full-screen cards
- Scroll-snap works (snaps to each card)
- Dots update on scroll
- Each card has correct background color

**Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add app logic with card rendering, scroll tracking, and SW registration"
```

---

### Task 6: Service Worker

**Files:**
- Create: `sw.js`

**Step 1: Create sw.js**

```js
const CACHE_NAME = 'nursery-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/songs.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install: precache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache first, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});

// Listen for skip waiting message from app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
```

**Step 2: Verify SW registers**

Open in browser, check DevTools > Application > Service Workers. Verify SW is registered and assets are cached.

**Step 3: Commit**

```bash
git add sw.js
git commit -m "feat: add service worker with cache-first strategy and version management"
```

---

### Task 7: Update Banner Wiring

**Files:**
- Modify: `app.js` (the `registerSW` function)

**Step 1: Complete the update flow in registerSW**

```js
function registerSW() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js').then(reg => {
    // Check for updates
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New content available, show banner
          document.getElementById('update-banner').classList.remove('hidden');
        }
      });
    });
  });

  // When user clicks update button
  document.getElementById('update-btn').addEventListener('click', () => {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg && reg.waiting) {
        reg.waiting.postMessage('skipWaiting');
      }
    });
  });

  // Reload when new SW takes over
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    location.reload();
  });
}
```

**Step 2: Verify update flow**

1. Load page (SW installs)
2. Change CACHE_NAME in sw.js to 'nursery-v2'
3. Reload page
4. Verify green banner appears
5. Click "点击更新" → page reloads with new SW

**Step 3: Commit**

```bash
git add app.js
git commit -m "feat: wire up hot update banner with service worker lifecycle"
```

---

### Task 8: Final Polish & Verification

**Files:**
- Possibly tweak: `style.css`, `app.js`

**Step 1: Mobile responsiveness check**

Preview at 375x812 (iPhone) and 390x844 (iPhone 14). Verify:
- Cards fill screen
- Text is large and readable
- Dots are visible and not overlapping content
- No horizontal overflow

**Step 2: Scroll behavior check**

- Swipe up → snaps to next card
- Swipe down → snaps to previous card
- Fast swipe → skips at most one card (scroll-snap handles this)
- Dots update correctly

**Step 3: PWA install check**

Serve over HTTPS (or localhost). Verify:
- Manifest loads in DevTools > Application
- "Add to Home Screen" prompt is available
- App opens in standalone mode

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: final polish and verification"
```

---

## Execution Notes

- Serve locally with `python3 -m http.server 8080` or any static server during development
- For Cloudflare Pages deployment: connect git repo → set build output to `/` (root) → no build command needed
- To update content later: edit songs.js, bump CACHE_NAME in sw.js, push
