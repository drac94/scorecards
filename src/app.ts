import { ApolloServer } from 'apollo-server-express';
import express, { Request } from 'express';

import schema from './modules';
import getUser from './utils/context';

const server = new ApolloServer({
  context: async ({ req }: { req: Request }) => ({
    user: await getUser(req),
  }),
  schema,
});

const app = express();

server.applyMiddleware({
  app,
  path: '/',
});

export default app;
