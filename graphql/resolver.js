const userStore = require("../store/user");
const bcrypt = require("bcrypt");

module.exports = {
  hello: () => {
    return {
      text: "Hello",
      views: 140
    }
  },
  createUser: async (args, req) => {
    const { email, name, password } = args.userInput;

    const existingUser = await userStore.findByEmail(email);
    if (existingUser) {
      const err = new Error("User Already Exists");
      throw err;
    }

    const hash = bcrypt.hash(password, 12);
    const user = await userStore.create({
      email,
      name,
      password: hash,
    });

    return { ...user._doc, _id: user._id.toString() };
  },
};
