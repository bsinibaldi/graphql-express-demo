import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

// Schema Explanation:
// All types defined first, followed by inputs, then queries and mutations
const typeDefs = `
type Book {
  title: String,
  author: String
  series: String
}
type Query {
  books: [Book]
  series(series: String): [Book]
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
