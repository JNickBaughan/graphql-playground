// external dependencies
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Author {
    name: String
    birthYear: String
    books: [Book]
  }
  type Book {
    title: String
    author: [Author]
  }

  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
`;

module.exports = typeDefs;
