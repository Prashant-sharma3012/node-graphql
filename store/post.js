const Post = require("../models/post");

const create = async (post) => {
  return Post.create(post);
};

const getPostById = async (id) => {
  return User.findOne({ _id: id }).populate('User').exec()
};

module.exports = {
  create,
  getPostById,
};
