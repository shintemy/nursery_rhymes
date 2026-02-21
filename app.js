/* app.js – core logic for nursery rhymes PWA */

function renderCards() {
  var container = document.getElementById('container');
  songs.forEach(function (song) {
    var card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = song.color;

    var emoji = document.createElement('div');
    emoji.className = 'card-emoji';
    emoji.textContent = song.emoji;

    var title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = song.title;

    var lyrics = document.createElement('div');
    lyrics.className = 'card-lyrics';
    lyrics.innerHTML = song.lyrics.join('<br>');

    card.appendChild(emoji);
    card.appendChild(title);
    card.appendChild(lyrics);
    container.appendChild(card);
  });
}

function renderDots() {
  var dotsEl = document.getElementById('dots');
  songs.forEach(function (song, i) {
    var dot = document.createElement('span');
    dot.className = 'dot';
    if (i === 0) {
      dot.classList.add('active');
    }
    dotsEl.appendChild(dot);
  });
}

function setupScrollTracking() {
  var container = document.getElementById('container');
  var dots = document.querySelectorAll('.dot');
  var cards = document.querySelectorAll('.card');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var index = Array.prototype.indexOf.call(cards, entry.target);
        dots.forEach(function (dot) {
          dot.classList.remove('active');
        });
        if (dots[index]) {
          dots[index].classList.add('active');
        }
      }
    });
  }, { threshold: 0.5, root: container });

  cards.forEach(function (card) {
    observer.observe(card);
  });
}

function setupSwipeHint() {
  if (localStorage.getItem('hintShown')) {
    return;
  }

  var hint = document.createElement('div');
  hint.className = 'swipe-hint';
  hint.textContent = '\u2195 上下滑动';
  document.body.appendChild(hint);

  var container = document.getElementById('container');
  container.addEventListener('scroll', function onScroll() {
    container.removeEventListener('scroll', onScroll);
    if (hint.parentNode) {
      hint.parentNode.removeChild(hint);
    }
    localStorage.setItem('hintShown', 'true');
  });
}

function registerSW() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    reg.addEventListener('updatefound', function () {
      var newWorker = reg.installing;
      newWorker.addEventListener('statechange', function () {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          document.getElementById('update-banner').classList.remove('hidden');
        }
      });
    });
  });

  document.getElementById('update-btn').addEventListener('click', function () {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      if (reg && reg.waiting) {
        reg.waiting.postMessage('skipWaiting');
      }
    });
  });

  navigator.serviceWorker.addEventListener('controllerchange', function () {
    location.reload();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderCards();
  renderDots();
  setupScrollTracking();
  setupSwipeHint();
  registerSW();
});
