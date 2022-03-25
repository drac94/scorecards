import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    interviews(interviewer: ID!): [Interview] @isAuthenticated
  }

  extend type Mutation {
    createInterview(
      interviewer: ID!
      candidate: CandidateInput!
      date: String!
      technology: ID!
    ): Interview @isAuthenticated
    fillScorecard(interview: ID!, scorecard: ScorecardInput!): Interview @isAuthenticated
  }

  input CandidateInput {
    firstName: String
    lastName: String
  }

  input SCFeedbackInput {
    feedback: String
    name: String
    rating: Int
  }

  input ScorecardInput {
    feedback: String
    skills: [SCFeedbackInput]
  }

  type Candidate {
    id: ID
    firstName: String
    lastName: String
  }

  type Interview {
    id: ID
    candidate: Candidate
    date: DateTime
    interviewer: User
    technology: Technology
  }
`;

export default typeDefs;
