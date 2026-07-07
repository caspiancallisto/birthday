(function () {
  'use strict';
  const MEMORY_DATA = [
    {
      id: 'first-impression',
      title: 'my first love',
      top: '18%', left: '14%',
      text: `I spent so long not knowing what love meant,
      Or if I'd ever really feel it too.
      Then life, in all its strange coincidence,
      Decided I should find it all in you.
      
      No soul before had ever felt like home,
      No voice could quiet every fear I knew.
      If hearts are constellations left to roam,
      Then every star has always led to you.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524078518286422046/20260707_211339.jpg?ex=6a4e703a&is=6a4d1eba&hm=4a47f57126ccbcbf848930bb6f59afc606ac648a18eec9b6889fcb05cde40ca1'
    },
    {
      id: 'day-we-met',
      title: 'the day we met',
      top: '30%', left: '76%',
      text: `We met like stars that never knew
      Their light would intertwine.
      Two distant worlds, two separate skies,
      Until your hand found mine.
      
      They say these clusters crossed by chance,
      Two galaxies of light made one.
      Perhaps that's how the universe
      Decided we'd begun.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524073510467538984/Screenshot_2026-07-07-20-47-53-06_59ca41e6dac314271693cecb12ac99dc.jpg?ex=6a4e6b90&is=6a4d1a10&hm=66f92e702573b95d7253cbfdc145fe0909ba0ad6cd2e1463f679330354d97c0b'
    },
    {
      id: 'your-laugh',
      title: 'our nights..',
      top: '46%', left: '20%',
      text: `We never needed grand adventures,
      Or somewhere new for us to roam.
      Somehow, a playlist, you, and midnight
      Made every night feel just like home.
      
      I used to think the night was lonely,
      A sky too vast to understand.
      Then every midnight found its meaning,
      The moment it could hold your hand.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524074547148623872/IMG_1736.png?ex=6a4e6c87&is=6a4d1b07&hm=03e09329ecb9f03685e460af6afad37e10fb05b2d5ff8cfa3f1893305deb3036'
    },
    {
      id: 'photos',
      title: 'your meanie',
      top: '58%', left: '82%',
      text: `Through "baby you hate me," said with little smiles,
      Through every "what if..." sent at half past two.
      Through playful fights that lasted just a while,
      Before an "i love you" came shining through.
      Through every tiny sulk and fake complaint,
      Through every punch that Minecraft knew.
      Our love was never written just in words,
      It smiled between the things we never knew.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524106611239420004/IMG_20260707_192950.jpg?ex=6a4e8a64&is=6a4d38e4&hm=18f721a435ba823ed16292bece6b3faea9c3a91c366f723fb8758730a8f74649&'
    },
    {
      id: 'playlist',
      title: 'our songs <3',
      top: '68%', left: '10%',
      text: `Every song has learnt your name,
      Though none of them were written so.
      Somehow they found a way to keep
      The feelings only we could know.
      
      Now love's no longer just a word,
      Or something written high above.
      Whenever someone speaks of "love,"
      Somehow, they always speak of us..`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524076321087553656/fb61bf8fb018f6677f5ca71d7c9736f2.jpg?ex=6a4e6e2e&is=6a4d1cae&hm=a0acc0a8608062fae3d87227aaa79f7b048544f78e8dc2cfbb6b27492e46d40b',
      link: 'https://open.spotify.com/playlist/1m1lc1bG6ppzLa6e9A9emC?si=yL3kIcaeT1GVNV8YJRtX6A&utm_source=copy-link&pt=44d80fbdcdd324ff99f9e8fae018e371',
    },
    {
      id: 'funny-moments',
      title: 'tiny moments',
      top: '20%', left: '46%',
      text: `In random "i love you"s without a plan,
      In doodled hearts and thoughts sent carelessly.
      Somehow the ordinary learned to shine,
      Because each little moment held you and me.
      We'd tell each other, "sleep," then stay instead,
      With tired eyes and hearts that still felt new.
      I found forever in those tiny hours,
      Where every ordinary thing was you.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524107220407681194/IMG-20260626-WA0047.jpg?ex=6a4e8af5&is=6a4d3975&hm=e2c2915521b36def1e1b5b9a5ef30ddfb39cbea954be5679008f46351c742b61&'
    },
    {
      id: 'future',
      title: 'someday..',
      top: '72%', left: '55%',
      text: `I dream of days that softly fade to night,
      With weathered hands still reaching out for you.
      Through every season, every wrong and right,
      My heart would still begin and end with you.
      Let birthdays come, let countless years depart,
      Let time rewrite the skies to different blue.
      If life is measured by the love we keep,
      Then mine was always meant to be with you.`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524111180522717284/IMG_20260707_232329.jpg?ex=6a4e8ea6&is=6a4d3d26&hm=e1d23c7c2576a8bb00a7f860811740db0092f761827282af87dff7ee4d04e8b1&'
    },
    {
      id: 'secret',
      title: 'big secret',
      top: '40%', left: '92%',
      text: `i have all your nakey picture.
         and also that i really do love you >:c`,
      image: 'https://cdn.discordapp.com/attachments/1184777724791894029/1524106611608649788/IMG_20260707_193055.jpg?ex=6a4e8a64&is=6a4d38e4&hm=8f9698d661ea6a952a65e4ec788a1f7f7d93248e86a888dba8513da182972808&'
    }
  ];

  const TOTAL_STARS = MEMORY_DATA.length;
  let exploredCount = 0;
  const exploredSet = new Set();
  const intro = document.getElementById('intro');
  const lookUpBtn = document.getElementById('lookUpBtn');
  const skyHint = document.getElementById('skyHint');
  const memoryStarsContainer = document.getElementById('memoryStars');
  const moon = document.getElementById('moon');
  const moonMessage = document.getElementById('moonMessage');
  const rainContainer = document.getElementById('rain');
  const shootingStarEl = document.getElementById('shootingStar');

  const popupOverlay = document.getElementById('popupOverlay');
  const popupTitle = document.getElementById('popupTitle');
  const popupText = document.getElementById('popupText');
  const popupImage = document.getElementById('popupImage');
  const popupClose = document.getElementById('popupClose');

  const letterOverlay = document.getElementById('letterOverlay');
  const letterClose = document.getElementById('letterClose');

  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');

  let activeStarId = null;
  let musicStarted = false;

  function buildRain() {
    const dropCount = window.innerWidth < 640 ? 45 : 80;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';

      const startLeft = Math.random() * 110 - 5; // allow overflow for diag fall
      const height = 40 + Math.random() * 70;
      const duration = 0.6 + Math.random() * 0.9;
      const delay = Math.random() * 2;
      const opacity = 0.15 + Math.random() * 0.35;

      drop.style.left = startLeft + 'vw';
      drop.style.height = height + 'px';
      drop.style.animationDuration = duration + 's';
      drop.style.animationDelay = delay + 's';
      drop.style.opacity = opacity;

      fragment.appendChild(drop);
    }

    rainContainer.appendChild(fragment);
  }


  function buildMemoryStars() {
    const fragment = document.createDocumentFragment();

    MEMORY_DATA.forEach((star) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'memory-star';
      btn.style.top = star.top;
      btn.style.left = star.left;
      btn.dataset.id = star.id;
      btn.setAttribute('aria-label', 'Open memory: ' + star.title);

      btn.innerHTML =
        '<span class="halo"></span>' +
        '<span class="core"></span>' +
        '<span class="memory-star-label">' + star.title + '</span>';

      btn.addEventListener('click', () => openMemory(star));

      fragment.appendChild(btn);
    });

    memoryStarsContainer.appendChild(fragment);
  }


  function handleLookUp() {
    intro.classList.add('hidden');

    setTimeout(() => {
      memoryStarsContainer.classList.add('visible');
      skyHint.classList.add('show');
    }, 500);

    setTimeout(() => {
      skyHint.classList.add('fade-out');
    }, 5000);

    startMusic();
  }

  function openMemory(star) {
    activeStarId = star.id;

    popupTitle.textContent = star.title;
    popupText.textContent = star.text;
    popupImage.innerHTML = '';
    popupImage.style.backgroundImage = "url('" + star.image + "')";

    popupOverlay.classList.add('open');
  }

  function closeMemory() {
    popupOverlay.classList.remove('open');

    if (activeStarId && !exploredSet.has(activeStarId)) {
      exploredSet.add(activeStarId);
      exploredCount++;

      const starEl = memoryStarsContainer.querySelector('[data-id="' + activeStarId + '"]');
      if (starEl) starEl.classList.add('explored');

      if (exploredCount >= TOTAL_STARS) {
        unlockMoon();
      }
    }

    activeStarId = null;
  }

  function unlockMoon() {
    moon.classList.add('unlocked');
    moon.disabled = false;
    moon.setAttribute('aria-label', 'Open your birthday letter');

    setTimeout(() => {
      moonMessage.classList.add('show');
    }, 700);
  }

  function openLetter() {
    if (!moon.classList.contains('unlocked')) return;
    letterOverlay.classList.add('open');
  }

  function closeLetter() {
    letterOverlay.classList.remove('open');
  }

  function scheduleShootingStar() {
    const delay = 15000 + Math.random() * 15000;
    setTimeout(() => {
      const top = 5 + Math.random() * 25;
      shootingStarEl.style.top = top + '%';
      shootingStarEl.classList.remove('fire');
      void shootingStarEl.offsetWidth; // restart animation
      shootingStarEl.classList.add('fire');
      scheduleShootingStar();
    }, delay);
  }

  function startMusic() {
    if (musicStarted) return;
    musicStarted = true;

    bgMusic.volume = 0.5;
    const playPromise = bgMusic.play();

    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {
      });
    }

    musicToggle.setAttribute('aria-pressed', 'false');
  }

  function toggleMusic() {
    if (!musicStarted) {
      startMusic();
      return;
    }

    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.setAttribute('aria-pressed', 'false');
      musicToggle.setAttribute('aria-label', 'Mute music');
    } else {
      bgMusic.pause();
      musicToggle.setAttribute('aria-pressed', 'true');
      musicToggle.setAttribute('aria-label', 'Play music');
    }
  }
 
  lookUpBtn.addEventListener('click', handleLookUp);

  popupClose.addEventListener('click', closeMemory);
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) closeMemory();
  });

  moon.addEventListener('click', openLetter);

  letterClose.addEventListener('click', closeLetter);
  letterOverlay.addEventListener('click', (e) => {
    if (e.target === letterOverlay) closeLetter();
  });

  musicToggle.addEventListener('click', toggleMusic);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (popupOverlay.classList.contains('open')) closeMemory();
    if (letterOverlay.classList.contains('open')) closeLetter();
  });
  buildRain();
  buildMemoryStars();
  scheduleShootingStar();
})();
