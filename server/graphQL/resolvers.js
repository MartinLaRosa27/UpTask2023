const {
  postUser,
  userAuthentication,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");

module.exports.resolvers = {
  Query: {
    // Auth:
    auth: (root, { token }, context) => {
      return auth(token);
    },

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
