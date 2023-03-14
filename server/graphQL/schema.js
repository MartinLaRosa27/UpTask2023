const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input userInput {
    username: String!
    password: String
    country: String
  }

  type userType {
    _id: String
    username: String
    country: String
    img: String
  }

  type categoryType {
    _id: String
    name: String
  }

  type Query {
    userAuthentication(input: userInput): String
    auth(token: String): userType
    getAllCategories: [categoryType]
  }

  type Mutation {
    postUser(input: userInput): String
    patchUser(input: userInput): String
  }
`;
