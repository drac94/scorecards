import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    technologies: [Technology]
  }

  type Technology {
    id: String
    name: String
  }
`;

export default typeDefs;
