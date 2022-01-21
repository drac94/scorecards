import { gql } from 'apollo-server-express';
import { GraphQLScalarType, Kind } from 'graphql';

const typeDef = gql`
  scalar DateTime
`;

const DateTime = new GraphQLScalarType({
  description: 'A DateTime representation in ISO format',
  name: 'DateTime',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }

    return null;
  },
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
});

export default {
  resolvers: {
    DateTime,
  },
  typeDef,
};
