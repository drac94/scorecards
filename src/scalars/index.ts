import DateTime from './date-time';

export default {
  resolvers: {
    ...DateTime.resolvers,
  },
  typeDefs: [DateTime.typeDef],
};
