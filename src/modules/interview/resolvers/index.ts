import { IResolvers } from 'apollo-server-express';

import createInterview from './create-interview';
import fillScorecard from './fill-scorecard';
import interview from './interview';
import interviews from './interviews';

const resolvers: IResolvers = {
  Mutation: {
    createInterview,
    fillScorecard,
  },
  Query: {
    interview,
    interviews,
  },
};

export default resolvers;
