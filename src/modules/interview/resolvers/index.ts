import { IResolvers } from 'apollo-server-express';

import createInterview from './create-interview';
import fillScorecard from './fill-scorecard';
import interviews from './interviews';

const resolvers: IResolvers = {
  Mutation: {
    createInterview,
    fillScorecard,
  },
  Query: {
    interviews,
  },
};

export default resolvers;
