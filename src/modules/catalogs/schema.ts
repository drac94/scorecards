import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    getCountries: [Country]
  }

  type Country {
    id: String
    name: String
  }
`;

export default typeDefs;
