import sirv from "sirv";
// import polka from 'polka';
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
const { ApolloServer, gql } = require("apollo-server-express");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express();

// polka() // You can also use Express
//   .use(
//     compression({ threshold: 0 }),
//     sirv("static", { dev }),
//     sapper.middleware()
//   )
//   .listen(PORT, (err) => {
//     if (err) console.log("error", err);
//   });

// app.get("/", (req, res) => {
//   console.log("HERE");
// });

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "graphql" });

app.use(sapper.middleware({ ignore: "/graphql" }));
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
