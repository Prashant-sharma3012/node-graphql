const express = require('express');
const bodyParser = require('body-parser');
// when using express graphql
// const graphqlHttp = require('express-graphql');
// const graphqlSchema = require('./graphql/schema');
// const graphqlResolver = require('./graphql/resolver');

//apollo express connector
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// when using express graphql
// app.use('/graphql', graphqlHttp({
//   schema: graphqlSchema,
//   rootValue: graphqlResolver,
//   graphiql: true
// }))

module.exports = app;
