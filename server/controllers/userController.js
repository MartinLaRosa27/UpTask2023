const User = require("../models/User");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const { QueryTypes } = require("sequelize");
const { createToken } = require("../helpers/jwt");

User.afterValidate(async (user) => {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
});

// ---------------------------------------------------------------------------
module.exports.postUser = async (input) => {
  const { username, country, password } = input;
  try {
    const newPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      _id: shortid.generate(),
      username,
      country,
      password: newPassword,
    });
    const token = createToken(user);
    return token;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to create user");
  }
};

// ---------------------------------------------------------------------------
module.exports.userAuthentication = async (input) => {
  const { username, password } = input;
  try {
    const userExists = await User.findOne({
      where: {
        username,
      },
    });
    if (!userExists) {
      throw new Error("The user is not registered");
    }
    if (!bcrypt.compareSync(password, userExists.password)) {
      throw new Error("Incorrect password");
    }
    const token = createToken(userExists);
    return token;
  } catch (e) {
    throw new Error(e);
  }
};

// ---------------------------------------------------------------------------
module.exports.patchUser = async (input, user) => {
  const { username, country } = input;
  if (user) {
    try {
      await User.sequelize.query(
        `UPDATE users SET username='${username}', country='${country}'
        WHERE _id='${user._id}';`,
        {
          type: QueryTypes.UPDATE,
        }
      );
      const modifyUser = await User.findOne({
        where: {
          _id: user._id,
        },
      });
      const token = createToken(modifyUser);
      return token;
    } catch (e) {
      console.log(e);
      throw new Error("user information could not be modified");
    }
  } else {
    throw new Error("session expired");
  }
};
