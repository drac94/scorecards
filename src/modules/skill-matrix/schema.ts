import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    skillMatrix(technology: ID!): SkillMatrix @isAuthenticated
  }

  extend type Mutation {
    createSkillMatrix(technology: ID!, skills: [String!]!): SkillMatrix @isAuthenticated
  }

  type SkillMatrix {
    id: ID
    technology: ID
    skills: [String]
  }
`;

export default typeDefs;
