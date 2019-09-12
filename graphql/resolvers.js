// helpers
const { getBooks, getAuthors } = require("../helpers/resolver-helpers");

const resolvers = {
  Query: {
    getBooks: () => getBooks(),
    getAuthors: () => getAuthors()
  }
};

module.exports = resolvers;
