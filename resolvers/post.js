const postStore = require("../store/post");
const userStore = require("../store/user");

const postResolvers = {
  Query: {
    getPostById: async (parent, args, context, info) => {
      let id = args.id;
      const post = await postStore.getPostById(id);
      return { ...post._doc, _id: post._id.toString() };
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, content, imageUrl, userEmail } = args.post;

      const user = await userStore.findByEmail(userEmail);
      const post = await postStore.create({
        title,
        content,
        imageUrl,
        creator: user._id,
      });

      return { ...post._doc, _id: post._id.toString() };
    },
  },
};

module.exports = postResolvers;
