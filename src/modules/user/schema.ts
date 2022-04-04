import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    interviewers: [User] @isAuthenticated
    recruiters: [User] @isAuthenticated
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    roles: [String]!
  }
`;

export default typeDefs;
