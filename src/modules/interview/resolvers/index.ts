import { IResolvers } from 'apollo-server-express';

import createInterview from './create-interview';
import fillScorecards from './fill-scorecard';
import interviews from './interviews';

const resolvers: IResolvers = {
  Mutation: {
    createInterview,
    fillScorecards,
  },
  Query: {
    interviews,
  },
};

export default resolvers;
