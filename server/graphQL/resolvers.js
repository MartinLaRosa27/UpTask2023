const {
  postUser,
  userAuthentication,
} = require("../controllers/userController");

module.exports.resolvers = {
  Query: {
    // User:
    userAuthentication: (root, { input }, context) => {
      return userAuthentication(input);
    },
  },

  Mutation: {
    // User:
    postUser: (root, { input }, context) => {
      return postUser(input);
    },
  },
};
