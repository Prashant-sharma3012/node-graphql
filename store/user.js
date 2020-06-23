const user = require("../models/User");

const create = async (user) => {
  return user.create(user);
};

const findByEmail = async (email) => {
  return user.findOne({ email });
};

module.exports = {
  create,
  findByEmail,
};
