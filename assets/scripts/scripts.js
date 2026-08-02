const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');
const body = document.querySelector('body');
const FEATURED_PLAYERS = [
  {
    name: 'Carlos Alcaraz',
    highlights: 'Single Ranking: 2 - Country: Spain',
    description: 'Nine titles in singles. 19 years old. 113 Wins / 33 Loss.',
    img: './assets/images/player-1.png',
  },
  {
    name: 'Holger Rune',
    highlights: 'Single Ranking: 7 - Country: Denmark',
    description: 'Four titles in singles. 19 years old. 64 Wins / 45 Loss.',
    img: './assets/images/player-2.png',
  },
  {
    name: 'Nick Kyrgios',
    highlights: 'Single Ranking: 26 - Country: Australia',
    description: 'Four titles in singles. 28 years old. 205 Wins / 113 Loss.',
    img: './assets/images/player-3.png',
  },
  {
    name: 'Ons Jabeur',
    highlights: 'Single Ranking: 4 - Country: Tunisia',
    description: 'Four titles in singles. 28 years old. 404 Wins / 220 Loss.',
    img: './assets/images/player-4.png',
  },
  {
    name: 'Coco Gauff',
    highlights: 'Single Ranking: 6 - Country: USA',
    description: 'Three titles in singles. 19 years old. 140 Wins / 72 Loss.',
    img: './assets/images/player-5.png',
  },
  {
    name: 'Beatriz Haddad Maia',
    highlights: 'Single Ranking: 14 - Country: Brazil',
    description: 'Two titles in singles. 26 years old. 406 Wins / 202 Loss.',
    img: './assets/images/player-6.png',
  },
];

const openMenu = () => {
  header?.classList.add('mobile-show');
  header?.classList.remove('mobile-hidden');
  body?.classList.add('lock-scroll');
};

const closeMenu = () => {
  header?.classList.remove('mobile-show');
  header?.classList.add('mobile-hidden');
  body?.classList.remove('lock-scroll');
};

const toggleMenu = () => {
  if (header?.classList.contains('mobile-show')) {
    closeMenu();
  } else {
    openMenu();
  }
};

if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMenu);
}

// Auto-close menu when clicking any navigation link
const navLinks = document.querySelectorAll('header nav a, header > ul a');
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close menu with ESC key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header?.classList.contains('mobile-show')) {
    closeMenu();
  }
});

const featuredPlayersContainer = document.querySelector('#featured-players-list');

if (featuredPlayersContainer) {
  FEATURED_PLAYERS.forEach((player) => {
    const cardLi = document.createElement('li');
    cardLi.className = 'player-card';
    cardLi.innerHTML = `
      <picture>
        <img src="${player.img}" alt="${player.name}">
      </picture>
      <div class="lato">
        <h3>${player.name}</h3>
        <h5>${player.highlights}</h5>
        <hr>
        <h6>${player.description}</h6>
      </div>
    `;
    featuredPlayersContainer.appendChild(cardLi);
  });
}