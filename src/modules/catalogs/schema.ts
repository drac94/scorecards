import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    cities(countryId: ID!): [City]
    clients: [Client]
    countries: [Country]
    levels: [Level]
    technologies: [Technology]
  }

  type City {
    id: String
    name: String
    country: Country
  }

  type Client {
    id: String
    name: String
  }

  type Country {
    id: String
    name: String
  }

  type Level {
    id: String
    name: String
  }

  type Technology {
    id: String
    name: String
  }
`;

export default typeDefs;
