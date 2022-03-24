import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    skillMatrix(technologyId: ID!): SkillMatrix
  }

  type SkillMatrix {
    id: String
    technology: String
    skills: [String]
  }
`;

export default typeDefs;
