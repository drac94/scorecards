import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    interviews: [Interview] @isAuthenticated
    interview(id: ID!): Interview @isAuthenticated
  }

  extend type Mutation {
    createInterview(
      interviewer: ID!
      candidate: CandidateInput!
      date: String!
      recruiter: ID!
      technology: ID!
    ): Interview @isAuthenticated
    fillScorecard(interviewId: ID!, scorecard: ScorecardInput!): Interview @isAuthenticated
  }

  input CandidateInput {
    firstName: String!
    lastName: String!
  }

  input SCFeedbackInput {
    feedback: String
    name: String
    rating: Int
  }

  input ScorecardInput {
    feedback: String!
    skills: [SCFeedbackInput]
    status: Int!
  }

  type Candidate {
    id: ID
    firstName: String
    lastName: String
  }

  type SCFeedback {
    feedback: String
    name: String
    rating: Int
  }

  type Scorecard {
    feedback: String
    skills: [SCFeedback]
    status: Int
  }

  type Interview {
    id: ID
    candidate: Candidate
    date: DateTime
    interviewer: User
    recruiter: User
    technology: Technology
    scorecard: Scorecard
  }
`;

export default typeDefs;
