import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";


import { ProductResolver } from "./resolves/ProductResolver";

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}