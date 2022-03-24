import { IResolvers } from 'apollo-server-express';

import technologies from './technology';

const resolvers: IResolvers = {
  Query: {
    technologies,
  },
};

export default resolvers;
