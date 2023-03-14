const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Category = DBConfiguration.define("category", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING(144),
    allowNull: false,
    validate: {
      len: [1, 144],
      notContains: " ",
      notEmpty: true,
    },
  },
});

module.exports = Category;
