const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');
const playerCardSkeleton = document.querySelector('#player-card-skeleton');
const featuredPlayers = document.querySelector('#featured-players ul');
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

const toggleMenu = () => {
  if (header.classList.length === 0) {
    header.classList.add('mobile-show');
    body.classList.add('lock-scroll');
  } else if (header.classList.contains('mobile-hidden')) {
    header.classList.add('mobile-show');
    body.classList.add('lock-scroll');
    header.classList.remove('mobile-hidden');
  } else {
    header.classList.remove('mobile-show');
    body.classList.remove('lock-scroll');
    header.classList.add('mobile-hidden');
  }
};

if (playerCardSkeleton) {
  for (let i = 0; i < FEATURED_PLAYERS.length; i += 1) {
    const card = playerCardSkeleton.cloneNode(true);
    card.querySelector('img').src = FEATURED_PLAYERS[i].img;
    card.querySelector('img').alt = FEATURED_PLAYERS[i].name;
    card.querySelector('h3').textContent = FEATURED_PLAYERS[i].name;
    card.querySelector('h5').textContent = FEATURED_PLAYERS[i].highlights;
    card.querySelector('h6').textContent = FEATURED_PLAYERS[i].description;
    featuredPlayers.append(card);
  }
  playerCardSkeleton.remove();
}

menuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;