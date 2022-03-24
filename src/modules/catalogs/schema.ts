import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    skillMatrix(technologyId: ID!): SkillMatrix
    technologies: [Technology]
  }
  type SkillMatrix {
    id: String
    technology: String
    skills: [String]
  }

  type Technology {
    id: String
    name: String
  }
`;

export default typeDefs;
