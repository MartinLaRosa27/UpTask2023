const {
  postUser,
  userAuthentication,
  patchUser,
} = require("../controllers/userController");
const { getAllCategories } = require("../controllers/categoryController");
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

    // Category:
    getAllCategories: (root, {}, context) => {
      return getAllCategories();
    },
  },

  Mutation: {
    // User:
    postUser: (root, { input }, context) => {
      return postUser(input);
    },

    patchUser: (root, { input }, context) => {
      return patchUser(input, context.user);
    },
  },
};
