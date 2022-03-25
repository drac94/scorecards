import { IResolvers } from 'apollo-server-express';

import createTechnology from './create-technology';
import technologies from './technologies';

const resolvers: IResolvers = {
  Mutation: {
    createTechnology,
  },
  Query: {
    technologies,
  },
};

export default resolvers;
