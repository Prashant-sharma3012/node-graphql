const userResolver = require("./user");
const postResolver = require("./post");
const { merge } = require("lodash");

const resolver = merge(userResolver, postResolver);

module.exports = resolver;