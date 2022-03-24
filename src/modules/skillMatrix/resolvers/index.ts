import { IResolvers } from 'apollo-server-express';

import skillMatrix from './skillMatrix';

const resolvers: IResolvers = {
  Query: {
    skillMatrix,
  },
};

export default resolvers;
