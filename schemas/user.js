const { gql } = require("apollo-server-express");

const user = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    status: String!
    posts: [Post!]!
  }

  input UserInputData {
    email: String!
    name: String!
    password: String
  }

  extend type Mutation {
    createUser(userInput: UserInputData): User!
  }

  extend type Query {
    getUser(email: String!): User!
  }
`;

module.exports = user;
