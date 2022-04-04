import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(email: String!, password: String!): AuthData

    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      roles: [String]!
    ): User
  }

  type AuthData {
    user: User
    token: String!
  }
`;

export default typeDefs;
