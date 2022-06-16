import 'reflect-metadata';
import express from 'express';
import {
  applyResolversEnhanceMap,
  User,
  resolvers as allResolvers,
} from '../prisma/generated/type-graphql';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { publicRouter } from './shared/router';
import assert from 'assert';
import dotenv from 'dotenv';
import { env } from 'process';
import { resolvers, resolversEnhanceMap } from './shared/resolvers';
import { Auth0User, authChecker, context } from './shared/auth';
import { PrismaClient } from '@prisma/client';
import { EventLogMiddleware } from './shared/logger';

// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function () {
  return this.toString() as unknown as number;
};

dotenv.config();

assert(env.DATABASE_URL, 'DATABASE_URL is required');

export const isDebug = process.env.DEBUG !== undefined;
export const bypassResolverCheck = process.env.ALL_RESOLVERS !== undefined;

const initializeApp = async (): Promise<void> => {
  const app = express();
  app.use(publicRouter);

  applyResolversEnhanceMap(resolversEnhanceMap);

  const schema = await buildSchema({
    resolvers: bypassResolverCheck ? [...allResolvers, ...resolvers] : resolvers,
    validate: false,
    authChecker,
    globalMiddlewares: [EventLogMiddleware],
  });

  const server = new ApolloServer({
    introspection: isDebug,
    debug: isDebug,
    schema: schema,
    context: context,
  });
  await server.start();

  server.applyMiddleware({ app, cors: true, path: '/' });
  app.listen(process.env.PORT ?? 4000, () => {
    console.log(`🚀 Server ready at: ${server.graphqlPath}`);
  });
};

initializeApp()
  .then(() => {
    console.log('Starting Medone...');
  })
  .catch((error) => console.log(error));

export interface GraphqlContext {
  prisma: PrismaClient;
  auth0User: Auth0User | null;
  user: User | null;
}
