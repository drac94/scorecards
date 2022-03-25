import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    interviews(interviewer: ID!): [Interview] @isAuthenticated
  }

  extend type Mutation {
    createInterview(interviewer: ID!, candidate: ID!, date: Date!, technology: ID!): Interview @isAuthenticated
    fillScorecard(interview: ID!, scorecard: Scorecard!): Interview @isAuthenticated
  }

  type Interview {
    id: ID
    candidate: Candidate
    interviewer: User
    date: Date
  }

  type Candidate {
    id: ID
    firstName: String
    lastName: String
  }

  type Scorecard {
    feedback: String;
    skills: [{ feedback: String; name: String; rating: Int }];
  }
`;

export default typeDefs;
