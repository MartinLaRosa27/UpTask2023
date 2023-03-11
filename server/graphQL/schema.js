const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input userInput {
    username: String!
    password: String!
    country: String
  }

  type Query {
    userAuthentication(input: userInput): String
  }

  type Mutation {
    postUser(input: userInput): String
  }
`;
