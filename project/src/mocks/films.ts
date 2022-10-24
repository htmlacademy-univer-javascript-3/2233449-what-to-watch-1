export type Film = {
  id: number,
  name: string,
  imagePath: string,
  genre: string,
  date: string,
  rating: string,
  ratingString: string,
  ratingCount: number,
  director: string,
  description: string,
  starring: string[],
  runTime: string
}

export const films: Film[] = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    imagePath: '/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'Drama',
    date: '2014',
    rating: '8,9',
    ratingString: 'Very good',
    ratingCount: 240,
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge\n' +
      '          Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.\n' +
      '        ',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: '1h 39m'
  },

  {
    id: 2,
    name: 'Bohemian Rhapsody',
    imagePath: '/img/bohemian-rhapsody.jpg',
    genre: 'Drama',
    date: '2020',
    rating: '8,7',
    ratingString: 'Very good',
    ratingCount: 240,
    director: 'Hans Andersen',
    description: 'In the old forest..',
    starring: ['Bill Murray', 'Jude Law'],
    runTime: '1h 50m'
  },

  {
    id: 3,
    name: 'Macbeth',
    imagePath: '/img/macbeth.jpg',
    genre: 'Horror',
    date: '2013',
    rating: '9,9',
    ratingString: 'Very good',
    ratingCount: 210,
    director: 'Someone',
    description: 'In the 1930s, the Grand Budapest shop two friends met',
    starring: ['Willem Dafoe', 'Mike W'],
    runTime: '1h 39m'
  },
  {
    id: 4,
    name: 'Aviator',
    imagePath: '/img/aviator.jpg',
    genre: 'Drama',
    date: '2014',
    rating: '7,9',
    ratingString: 'good',
    ratingCount: 200,
    director: 'Salli',
    description: 'In the 1930s, Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    starring: ['Jude Law', 'Willem Dafoe'],
    runTime: '1h 39m'
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    imagePath: '/img/we-need-to-talk-about-kevin.jpg',
    genre: 'Comedy',
    date: '2013',
    rating: '8,9',
    ratingString: 'Very good',
    ratingCount: 240,
    director: 'Wes Anderson',
    description: 'In the trees',
    starring: ['Tom S'],
    runTime: '1h 19m'
  },

  {
    id: 6,
    name: 'What We Do in the Shadows',
    imagePath: '/img/what-we-do-in-the-shadows.jpg',
    genre: 'Drama',
    date: '2014',
    rating: '8,9',
    ratingString: 'Very good',
    ratingCount: 140,
    director: 'You',
    description: ' Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.\n' +
      '        ',
    starring: ['Bill Dafoe'],
    runTime: '1h 00m'
  },

  {
    id: 7,
    name: 'Revenant',
    imagePath: '/img/revenant.jpg',
    genre: 'Drama',
    date: '2010',
    rating: '8,9',
    ratingString: 'Very good',
    ratingCount: 240,
    director: 'Wes Anderson',
    description: 'Ralph Fiennes' +
      '        ',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: '1h 49m'
  },

  {
    id: 8,
    name: 'Johnny English',
    imagePath: '/img/johnny-english.jpg',
    genre: 'Drama',
    date: '2014',
    rating: '8,9',
    ratingString: 'Not bad',
    ratingCount: 240,
    director: 'Andrey W',
    description: 'junior lobby boy, becomes Gustave&apos;s friend and protege.\n',
    starring: ['Bill M'],
    runTime: '1h 59m'
  }
];