import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    technologies: [Technology] @isAuthenticated
  }

  extend type Mutation {
    createTechnology(name: String!): Technology @isAuthenticated
  }

  type Technology {
    id: ID
    name: String
  }
`;

export default typeDefs;
