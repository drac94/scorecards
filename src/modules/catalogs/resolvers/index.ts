import { IResolvers } from 'apollo-server-express';

import cities from './city';
import clients from './client';
import countries from './country';
import levels from './level';
import technologies from './technology';

const resolvers: IResolvers = {
  Query: {
    cities,
    clients,
    countries,
    levels,
    technologies,
  },
};

export default resolvers;
