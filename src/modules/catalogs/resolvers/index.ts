import { IResolvers } from 'apollo-server-express';

import countries from './country';

const resolvers: IResolvers = {
  Query: {
    countries,
  },
};

export default resolvers;
