const user = require("./user");
const post = require("./post");
const root = require("./root");

const schema = [root, post, user];

module.exports = schema;
