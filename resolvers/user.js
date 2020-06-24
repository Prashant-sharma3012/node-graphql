const userStore = require('../store/user');

const userResolvers = {
  Query: {
    getUser: async (parent, args, context, info) => {
      let email = args.email;
      const existingUser = await userStore.findByEmail(email);
      return { ...existingUser._doc, _id: existingUser._id.toString() };
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { email, name, password } = args.userInput;
  
      const existingUser = await userStore.findByEmail(email);
      if (existingUser) {
        const err = new Error("User Already Exists");
        throw err;
      }
  
      const hash = await bcrypt.hash(password, 12);
      const user = await userStore.create({
        email,
        name,
        password: hash,
      });
  
      return { ...user._doc, _id: user._id.toString() };
    },
  }
}

module.exports = userResolvers;