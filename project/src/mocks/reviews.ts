export type Review = {
  id: number,
  text: string,
  author: string,
  date: string,
  dateText: string,
  rating: string
}

export const reviews: Review[] = [
  {
    id: 1,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the\n' +
      '                      glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed\n' +
      '                      films in years.',
    author: 'Kate Muir',
    date: '2016-12-24',
    dateText: 'December 24, 2016',
    rating: '8,9'
  },
  {
    id: 2,
    text: 'Anderson\'s films are too precious for some, but for those of us willing\n' +
      '                      to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except\n' +
      '                      that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: '2015-11-18',
    dateText: 'November 18, 2015',
    rating: '8,0'
  },

  {
    id: 3,
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity,\n' +
      '                      it\'s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    date: '2015-11-18',
    dateText: 'November 18, 2015',
    rating: '8,0'
  },

  {
    id: 4,
    text: 'The mannered, madcap proceedings are often delightful, occasionally\n' +
      '                      silly, and here and there, gruesome and/or heartbreaking.',
    author: 'Matthew Lickona',
    date: '2016-12-20',
    dateText: 'December 20, 2016',
    rating: '7,2'
  },
  {
    id: 5,
    text: 'It is certainly a magical and childlike way of storytelling, even if the\n' +
      '                      content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: '2016-12-20',
    dateText: 'December 20, 2016',
    rating: '7,6'
  }
];
