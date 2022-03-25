import { IResolvers } from 'apollo-server-express';

import createSkillMatrix from './create-skill-matrix';
import skillMatrix from './skill-matrix';

const resolvers: IResolvers = {
  Mutation: {
    createSkillMatrix,
  },
  Query: {
    skillMatrix,
  },
};

export default resolvers;
