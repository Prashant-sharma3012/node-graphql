const User = require("../models/User");

const create = async (user) => {
  return User.create(user);
};

const findByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  create,
  findByEmail,
};
