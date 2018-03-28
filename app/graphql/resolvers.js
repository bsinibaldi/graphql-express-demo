import books from './data';

export default {
  Query: {
    books: () => books,
    series: (_, { series }) => books.filter(book => book.series.toLowerCase() === series.toLowerCase())
  }
};
