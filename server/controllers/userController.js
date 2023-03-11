const User = require("../models/User");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const { createToken } = require("../helpers/jwt");

module.exports.postUser = async (input) => {
  try {
    const user = await User.create({
      _id: shortid.generate(),
      username: input.username,
      country: input.country,
      password: input.password,
    });
    const token = createToken(user);
    return token;
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

module.exports.userAuthentication = async (input) => {
  const { username, password } = input;
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
};
