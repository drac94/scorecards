import { IResolvers } from 'apollo-server-express';

import getCountries from './country';

const resolvers: IResolvers = {
  Query: {
    getCountries,
  },
};

export default resolvers;
