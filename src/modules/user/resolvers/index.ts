import { IResolvers } from 'apollo-server-express';

import interviewers from './interviewers';
import recruiters from './recruiters';

const resolvers: IResolvers = {
  Query: {
    interviewers,
    recruiters,
  },
};

export default resolvers;
