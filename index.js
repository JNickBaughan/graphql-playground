// external dependencies
const { ApolloServer } = require("apollo-server");

// graphql
const typeDefs = require("./graphql/types");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
