const { gql } = require("apollo-server-express");

const post = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String
  }

  input PostInputData {
    title: String!
    content: String!
    imageUrl: String!
    userEmail: String!
  }

  extend type Mutation {
    createPost(post: PostInputData): Post!
  }

  extend type Query {
    getPostById(id: ID!): Post!
  }
`;

module.exports = post;
