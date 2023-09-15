var express = require("express")
var { createHandler } = require('graphql-http/lib/use/express');
var { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")
/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/', createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Running a GraphQL API server at http://localhost:4000/graphql")


// Construct a schema, using GraphQL schema language

// The root provides a resolver function for each API endpoint



