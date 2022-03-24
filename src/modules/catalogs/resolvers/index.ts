import { IResolvers } from 'apollo-server-express';

import skillMatrix from './skillMatrix';
import technologies from './technology';

const resolvers: IResolvers = {
  Query: {
    skillMatrix,
    technologies,
  },
};

export default resolvers;
