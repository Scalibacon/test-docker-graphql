// imports
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import Schema from './Schema';
import Resolvers from './Resolvers';
import { DocumentNode } from 'graphql';

const PORT = process.env.PORT || 3333;

async function startServer(schema: DocumentNode, resolvers: { Query: Object, Mutation: Object }){
  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  httpServer.listen({ port: process.env.PORT || 3333 }, () => console.log(`Server is running on PORT ${PORT}`));
}

startServer(Schema, Resolvers);