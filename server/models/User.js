const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const User = DBConfiguration.define("user", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: [3, 50],
      notContains: " ",
      notEmpty: true,
    },
    unique: { args: true, msg: "username is not available" },
  },

  country: {
    type: Sequelize.STRING(150),
    allowNull: false,
    validate: {
      len: [1, 150],
      notEmpty: true,
    },
  },

  img: {
    type: Sequelize.STRING(255),
    allowNull: true,
    validate: {
      len: [1, 255],
      notContains: " ",
      notEmpty: true,
    },
    default: null,
  },

  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      len: [8, 60],
      notContains: " ",
      notEmpty: true,
    },
  },
});

module.exports = User;
